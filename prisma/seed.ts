import { PrismaClient } from "@prisma/client"
import { PrismaLibSql } from '@prisma/adapter-libsql'
import bcrypt from "bcryptjs"
import "dotenv/config"

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL as string })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("Menjalankan seeder Father Plan...")

  const hashedPassword = await bcrypt.hash("password123", 10)

  // 1. Buat Admin
  const admin = await prisma.user.upsert({
    where: { email: "admin@mi-sirojulfalah.sch.id" },
    update: {},
    create: {
      email: "admin@mi-sirojulfalah.sch.id",
      name: "Bapak Admin",
      password: hashedPassword,
      role: "ADMIN",
    },
  })
  console.log("Admin dibuat:", admin.email)

  // 2. Buat Guru
  const teacher = await prisma.user.upsert({
    where: { email: "guru@mi-sirojulfalah.sch.id" },
    update: {},
    create: {
      email: "guru@mi-sirojulfalah.sch.id",
      name: "Ibu Guru",
      password: hashedPassword,
      role: "TEACHER",
      teacherProfile: {
        create: {
          nip: "198001012005012001",
          subject: "Matematika",
        },
      },
    },
  })
  console.log("Guru dibuat:", teacher.email)

  // 3. Buat Siswa
  const student = await prisma.user.upsert({
    where: { email: "siswa@mi-sirojulfalah.sch.id" },
    update: {},
    create: {
      email: "siswa@mi-sirojulfalah.sch.id",
      name: "Murid Teladan",
      password: hashedPassword,
      role: "STUDENT",
      studentProfile: {
        create: {
          nisn: "0012345678",
          grade: "6A",
        },
      },
    },
  })
  console.log("Siswa dibuat:", student.email)

  // 4. Buat Wali Murid (Parent)
  const parent = await prisma.user.upsert({
    where: { email: "wali@mi-sirojulfalah.sch.id" },
    update: {},
    create: {
      email: "wali@mi-sirojulfalah.sch.id",
      name: "Ibu Wali Murid",
      password: hashedPassword,
      role: "PARENT",
      parentProfile: {
        create: {
          phone: "081234567890",
        },
      },
    },
  })
  console.log("Wali Murid dibuat:", parent.email)

  console.log("Database berhasil di-seed! 🚀")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
