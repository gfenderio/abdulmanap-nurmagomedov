"use server";

import { db } from "@/lib/db";
import { GradeSchema } from "@/schemas";
import * as z from "zod";
import { revalidatePath } from "next/cache";

export const addGrade = async (values: z.infer<typeof GradeSchema>, teacherId: string) => {
  const validatedFields = GradeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Data nilai tidak valid!" };
  }

  const { studentId, subject, score, semester } = validatedFields.data;

  try {
    await db.grade.create({
      data: {
        studentId,
        teacherId,
        subject,
        score,
        semester,
      },
    });

    revalidatePath(`/dashboard/students/${studentId}`);
    return { success: "Nilai berhasil ditambahkan!" };
  } catch (error) {
    return { error: "Gagal menyimpan nilai ke database!" };
  }
};

export const deleteGrade = async (id: string, studentId: string) => {
  try {
    await db.grade.delete({
      where: { id },
    });
    revalidatePath(`/dashboard/students/${studentId}`);
    return { success: "Nilai berhasil dihapus!" };
  } catch (error) {
    return { error: "Gagal menghapus nilai!" };
  }
};
