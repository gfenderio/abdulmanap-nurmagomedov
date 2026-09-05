"use server";

import { requireRole } from "@/lib/authz";

import { blockDemoWrite } from "@/lib/demo";

import { db } from "@/lib/db";
import { StudentSchema } from "@/schemas";
import * as z from "zod";
import { revalidatePath } from "next/cache";

export const createStudent = async (values: z.infer<typeof StudentSchema>) => {
  const actor = await requireRole("ADMIN")
  if ("error" in actor) return { error: actor.error }
  const demoBlocked = await blockDemoWrite()
  // Returned as a fresh literal so the action keeps its normalised
  // union return type and callers can still read `.error` directly.
  if (demoBlocked) return { error: demoBlocked.error }
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
  const actor = await requireRole("ADMIN")
  if ("error" in actor) return { error: actor.error }
  const demoBlocked = await blockDemoWrite()
  // Returned as a fresh literal so the action keeps its normalised
  // union return type and callers can still read `.error` directly.
  if (demoBlocked) return { error: demoBlocked.error }
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
