import { db } from "@/lib/db";

export const getAllBills = async () => {
  try {
    const bills = await db.bill.findMany({
      include: {
        student: {
          include: { user: true }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return bills;
  } catch (error) {
    return null;
  }
};

export const getBillsByStudent = async (studentId: string) => {
  try {
    const bills = await db.bill.findMany({
      where: { studentId },
      orderBy: {
        createdAt: "desc",
      },
    });
    return bills;
  } catch (error) {
    return null;
  }
};
