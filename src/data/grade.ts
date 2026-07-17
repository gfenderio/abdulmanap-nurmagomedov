import { db } from "@/lib/db";

export const getGradesByStudent = async (studentId: string) => {
  try {
    const grades = await db.grade.findMany({
      where: { studentId },
      include: {
        teacher: {
          include: { user: true }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return grades;
  } catch (error) {
    return null;
  }
};

export const getStudentProgressReports = async (studentId: string) => {
  try {
    const reports = await db.progressReport.findMany({
      where: { studentId },
      orderBy: {
        createdAt: "desc",
      },
    });
    return reports;
  } catch (error) {
    return null;
  }
};
