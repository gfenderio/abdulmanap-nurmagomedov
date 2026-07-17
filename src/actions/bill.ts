"use server";

import { db } from "@/lib/db";
import { BillSchema } from "@/schemas";
import * as z from "zod";
import { revalidatePath } from "next/cache";

export const createBill = async (values: z.infer<typeof BillSchema>) => {
  const validatedFields = BillSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Data tagihan tidak valid!" };
  }

  const { studentId, amount, dueDate, description } = validatedFields.data;

  try {
    await db.bill.create({
      data: {
        studentId,
        amount,
        dueDate,
        description,
        status: "UNPAID",
      },
    });

    revalidatePath(`/dashboard/bills`);
    return { success: "Tagihan SPP berhasil dibuat!" };
  } catch (error) {
    return { error: "Gagal membuat tagihan!" };
  }
};

export const payBill = async (id: string) => {
  try {
    await db.bill.update({
      where: { id },
      data: { status: "PAID" },
    });
    revalidatePath(`/dashboard/bills`);
    return { success: "Tagihan berhasil dibayar!" };
  } catch (error) {
    return { error: "Gagal memproses pembayaran!" };
  }
};
