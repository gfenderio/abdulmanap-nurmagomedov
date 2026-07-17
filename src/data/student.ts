import { db } from "@/lib/db";

export const getStudents = async () => {
  try {
    const students = await db.user.findMany({
      where: { role: "STUDENT" },
      include: {
        studentProfile: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    return students;
  } catch (error) {
    return null;
  }
};

export const getStudentById = async (id: string) => {
  try {
    const student = await db.user.findUnique({
      where: { id, role: "STUDENT" },
      include: {
        studentProfile: {
          include: {
            grades: true,
            reports: true,
            bills: true,
          }
        },
      },
    });
    return student;
  } catch (error) {
    return null;
  }
};
