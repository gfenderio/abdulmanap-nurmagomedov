"use server"

import { auth } from "../../auth"
import { db } from "../lib/db"
import bcrypt from "bcryptjs"
import { revalidatePath } from "next/cache"

export async function updateProfile(data: {
  name: string
  email: string
  image?: string | null
  phone?: string | null
  nip?: string | null
  subject?: string | null
  nisn?: string | null
  grade?: string | null
}) {
  const session = await auth()
  if (!session?.user?.id) {
    return { error: "Tidak diizinkan. Silakan login kembali." }
  }

  const userId = session.user.id

  try {
    // Check if email is already taken by another user
    if (data.email) {
      const existingUser = await db.user.findFirst({
        where: {
          email: data.email,
          NOT: { id: userId }
        }
      })
      if (existingUser) {
        return { error: "Email sudah digunakan oleh pengguna lain." }
      }
    }

    // Update main user model
    const user = await db.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        email: data.email,
        image: data.image
      }
    })

    // Update role specific profiles
    if (user.role === "PARENT" && data.phone !== undefined) {
      await db.parentProfile.upsert({
        where: { userId },
        update: { phone: data.phone },
        create: { userId, phone: data.phone ?? "" }
      })
    } else if (user.role === "TEACHER") {
      await db.teacherProfile.upsert({
        where: { userId },
        update: {
          nip: data.nip,
          subject: data.subject
        },
        create: {
          userId,
          nip: data.nip ?? "",
          subject: data.subject ?? ""
        }
      })
    } else if (user.role === "STUDENT") {
      await db.studentProfile.upsert({
        where: { userId },
        update: {
          nisn: data.nisn,
          grade: data.grade
        },
        create: {
          userId,
          nisn: data.nisn ?? "",
          grade: data.grade ?? ""
        }
      })
    }

    revalidatePath("/dashboard")
    revalidatePath("/dashboard/profile")
    return { success: true }
  } catch (error: any) {
    console.error("Gagal memperbarui profil:", error)
    return { error: "Terjadi kesalahan saat memperbarui profil." }
  }
}

export async function changePassword(data: {
  currentPassword?: string
  newPassword?: string
}) {
  const session = await auth()
  if (!session?.user?.id) {
    return { error: "Tidak diizinkan. Silakan login kembali." }
  }

  const userId = session.user.id

  if (!data.currentPassword || !data.newPassword) {
    return { error: "Password saat ini dan password baru wajib diisi." }
  }

  try {
    const user = await db.user.findUnique({
      where: { id: userId }
    })

    if (!user || !user.password) {
      return { error: "Pengguna tidak ditemukan." }
    }

    const isPasswordValid = await bcrypt.compare(data.currentPassword, user.password)
    if (!isPasswordValid) {
      return { error: "Password saat ini salah." }
    }

    const hashedNewPassword = await bcrypt.hash(data.newPassword, 10)

    await db.user.update({
      where: { id: userId },
      data: { password: hashedNewPassword }
    })

    return { success: true }
  } catch (error: any) {
    console.error("Gagal mengganti password:", error)
    return { error: "Terjadi kesalahan saat memperbarui password." }
  }
}
