import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email wajib diisi",
  }),
  password: z.string().min(1, {
    message: "Password wajib diisi",
  }),
});

export const StudentSchema = z.object({
  name: z.string().min(3, {
    message: "Nama minimal 3 karakter",
  }),
  email: z.string().email({
    message: "Email tidak valid",
  }),
  nisn: z.string().min(5, {
    message: "NISN wajib diisi",
  }),
  grade: z.string().min(1, {
    message: "Kelas wajib diisi",
  }),
});

export const GradeSchema = z.object({
  studentId: z.string().min(1, "Siswa wajib dipilih"),
  subject: z.string().min(2, "Mata pelajaran wajib diisi"),
  score: z.coerce.number().min(0).max(100, "Nilai maksimal 100"),
  semester: z.string().min(1, "Semester wajib diisi"),
});

export const BillSchema = z.object({
  studentId: z.string().min(1, "Siswa wajib dipilih"),
  amount: z.coerce.number().min(1, "Jumlah tagihan tidak valid"),
  dueDate: z.coerce.date({
    message: "Tenggat waktu wajib diisi",
  }),
  description: z.string().min(3, "Deskripsi wajib diisi"),
});
