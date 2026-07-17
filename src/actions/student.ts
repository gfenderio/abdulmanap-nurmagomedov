"use server";

import { db } from "@/lib/db";
import { StudentSchema } from "@/schemas";
import * as z from "zod";
import { revalidatePath } from "next/cache";

export const createStudent = async (values: z.infer<typeof StudentSchema>) => {
  const validatedFields = StudentSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Data tidak valid!" };
  }

  const { name, email, nisn, grade } = validatedFields.data;

  try {
    // Cek apakah email sudah ada
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email sudah digunakan!" };
    }

    // Insert data dengan transaksi
    await db.user.create({
      data: {
        name,
        email,
        role: "STUDENT",
        studentProfile: {
          create: {
            nisn,
            grade,
          },
        },
      },
    });

    revalidatePath("/dashboard/students");
    return { success: "Data siswa berhasil ditambahkan!" };
  } catch (error) {
    return { error: "Gagal menyimpan data ke database!" };
  }
};

export const deleteStudent = async (id: string) => {
  try {
    await db.user.delete({
      where: { id },
    });
    revalidatePath("/dashboard/students");
    return { success: "Siswa berhasil dihapus!" };
  } catch (error) {
    return { error: "Gagal menghapus siswa!" };
  }
};
