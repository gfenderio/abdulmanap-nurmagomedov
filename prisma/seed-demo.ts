/*
 * Seeds the public demo with fabricated data.
 *
 * The portal is published so people can walk through a working academic
 * system. That must never mean publishing a real school's records: every
 * student, parent, grade, bill, and note below is invented. Names are drawn
 * from common Indonesian given names and paired at random.
 *
 * A populated portal is also the point — an empty one reads as a class
 * assignment, while 120 students with grades, schedules, and outstanding
 * bills reads as software that runs a school.
 *
 * Run: npx tsx prisma/seed-demo.ts
 */

import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import bcrypt from "bcryptjs"
import "dotenv/config"
import { DEMO_ACCOUNTS, DEMO_PASSWORD } from "../src/lib/demo"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

// Deterministic PRNG so re-seeding produces the same demo every time.
let seed = 20260905
function rnd() {
  seed = (seed * 1103515245 + 12345) & 0x7fffffff
  return seed / 0x7fffffff
}
const pick = <T,>(a: readonly T[]): T => a[Math.floor(rnd() * a.length)]
const between = (lo: number, hi: number) => lo + Math.floor(rnd() * (hi - lo + 1))

const FIRST_M = ["Andi", "Bagus", "Fajar", "Joko", "Rizky", "Tegar", "Hadi", "Oki",
  "Rendra", "Yusuf", "Ilham", "Dimas", "Bayu", "Arif", "Galih"]
const FIRST_F = ["Citra", "Dewi", "Gita", "Indah", "Kirana", "Mega", "Putri", "Sari",
  "Wulan", "Ayu", "Nabila", "Rani", "Salma", "Tiara", "Zahra"]
const LAST = ["Pratama", "Wijaya", "Santoso", "Hakim", "Nugroho", "Anggraini",
  "Saputra", "Maulana", "Kusuma", "Halim", "Firmansyah", "Lestari"]

const SUBJECTS = ["Matematika", "Bahasa Indonesia", "IPA", "IPS", "Bahasa Inggris",
  "Pendidikan Agama Islam", "PJOK", "Seni Budaya"]
const CLASSES = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "5A", "5B", "6A", "6B"]
const SEMESTERS = ["Ganjil 2025/2026", "Genap 2025/2026"]

const BILL_KINDS = [
  { description: "SPP Bulan Juli 2026", amount: 150000 },
  { description: "SPP Bulan Agustus 2026", amount: 150000 },
  { description: "SPP Bulan September 2026", amount: 150000 },
  { description: "Seragam & Atribut", amount: 375000 },
  { description: "Buku Paket Semester Ganjil", amount: 285000 },
  { description: "Kegiatan Studi Wisata", amount: 225000 },
]

const NOTES = [
  "Aktif bertanya di kelas dan membantu teman yang tertinggal.",
  "Perlu pendampingan pada perkalian bersusun.",
  "Hafalan surat pendek berkembang baik bulan ini.",
  "Sering terlambat mengumpulkan tugas rumah.",
  "Menunjukkan kemajuan pesat dalam membaca nyaring.",
  "Perlu didorong agar lebih percaya diri saat presentasi.",
]

function fullName(): string {
  const first = rnd() < 0.5 ? pick(FIRST_M) : pick(FIRST_F)
  return `${first} ${pick(LAST)}`
}

function daysFromNow(d: number) {
  return new Date(Date.now() + d * 86400000)
}

async function main() {
  console.log("Seeding demo data (all fabricated)...")

  const password = await bcrypt.hash(DEMO_PASSWORD, 10)

  // --- Demo accounts, one per role, all read-only at runtime --------------
  const admin = await prisma.user.upsert({
    where: { email: DEMO_ACCOUNTS.ADMIN.email },
    update: { name: "Admin Demo", password, role: "ADMIN" },
    create: { email: DEMO_ACCOUNTS.ADMIN.email, name: "Admin Demo", password, role: "ADMIN" },
  })

  const teacherUser = await prisma.user.upsert({
    where: { email: DEMO_ACCOUNTS.TEACHER.email },
    update: { name: "Rahmawati Dewi, S.Pd.", password, role: "TEACHER" },
    create: {
      email: DEMO_ACCOUNTS.TEACHER.email,
      name: "Rahmawati Dewi, S.Pd.",
      password,
      role: "TEACHER",
      teacherProfile: { create: { nip: "198604122010012003", subject: "Matematika" } },
    },
    include: { teacherProfile: true },
  })

  const parentUser = await prisma.user.upsert({
    where: { email: DEMO_ACCOUNTS.PARENT.email },
    update: { name: "Bapak Suryana", password, role: "PARENT" },
    create: {
      email: DEMO_ACCOUNTS.PARENT.email,
      name: "Bapak Suryana",
      password,
      role: "PARENT",
      parentProfile: { create: { phone: "0812-0000-0000" } },
    },
    include: { parentProfile: true },
  })

  console.log(`  accounts: ${admin.email}, ${teacherUser.email}, ${parentUser.email}`)

  // Teacher profiles that grades can be attributed to.
  const teacherProfiles = [teacherUser.teacherProfile!]
  for (let i = 0; i < 5; i++) {
    const email = `demo.guru${i + 2}@sias.example`
    const u = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name: `${fullName()}, S.Pd.`,
        password,
        role: "TEACHER",
        teacherProfile: {
          create: { nip: String(198000000000000000 + between(1, 999999)), subject: SUBJECTS[i + 1] },
        },
      },
      include: { teacherProfile: true },
    })
    if (u.teacherProfile) teacherProfiles.push(u.teacherProfile)
  }
  console.log(`  teachers: ${teacherProfiles.length}`)

  const parentProfile = parentUser.parentProfile!

  // --- Students -----------------------------------------------------------
  const STUDENT_COUNT = 120
  let grades = 0
  let bills = 0
  let reports = 0

  for (let i = 0; i < STUDENT_COUNT; i++) {
    const nisn = String(3000000000 + i * 7)
    const email = `demo.siswa${i + 1}@sias.example`

    // The demo parent is linked to the first three students so signing in as
    // a parent shows a household with more than one child.
    const linkParent = i < 3

    const student = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name: fullName(),
        password,
        role: "STUDENT",
        studentProfile: {
          create: {
            nisn,
            grade: pick(CLASSES),
            ...(linkParent ? { parentId: parentProfile.id } : {}),
          },
        },
      },
      include: { studentProfile: true },
    })

    const sp = student.studentProfile
    if (!sp) continue

    // Grades across a handful of subjects and both semesters.
    for (const subject of SUBJECTS.slice(0, between(4, 8))) {
      for (const semester of SEMESTERS) {
        await prisma.grade.create({
          data: {
            studentId: sp.id,
            teacherId: pick(teacherProfiles).id,
            subject,
            score: between(62, 98),
            semester,
          },
        })
        grades++
      }
    }

    // Two or three bills, most settled, a few still outstanding.
    for (const kind of BILL_KINDS.slice(0, between(2, 4))) {
      await prisma.bill.create({
        data: {
          studentId: sp.id,
          amount: kind.amount,
          description: kind.description,
          status: rnd() < 0.72 ? "PAID" : "UNPAID",
          dueDate: daysFromNow(between(-45, 30)),
        },
      })
      bills++
    }

    // A progress note or two. Some already have a reply from the parent.
    for (const semester of SEMESTERS.slice(0, between(1, 2))) {
      await prisma.progressReport.create({
        data: {
          studentId: sp.id,
          narrative: pick(NOTES),
          semester,
          parentReply: rnd() < 0.35 ? "Terima kasih, akan kami dampingi di rumah." : null,
        },
      })
      reports++
    }

    if ((i + 1) % 20 === 0) console.log(`  students: ${i + 1}/${STUDENT_COUNT}`)
  }

  // --- Timetable ----------------------------------------------------------
  // dayOfWeek is an Int: 1 = Monday through 5 = Friday.
  let schedules = 0
  for (const kelas of CLASSES) {
    for (let dayOfWeek = 1; dayOfWeek <= 5; dayOfWeek++) {
      for (let slot = 0; slot < 4; slot++) {
        await prisma.classSchedule.create({
          data: {
            className: kelas,
            dayOfWeek,
            subject: SUBJECTS[(slot + dayOfWeek) % SUBJECTS.length],
            startTime: `${String(7 + slot * 2).padStart(2, "0")}:00`,
            endTime: `${String(8 + slot * 2).padStart(2, "0")}:30`,
            teacherId: pick(teacherProfiles).id,
          },
        })
        schedules++
      }
    }
  }

  console.log(
    `Done. ${STUDENT_COUNT} students, ${grades} grades, ${bills} bills, ` +
      `${reports} notes, ${schedules} schedule rows — all fabricated.`
  )
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
