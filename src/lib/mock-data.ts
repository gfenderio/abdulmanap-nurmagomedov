export const MOCK_STUDENTS = [
  { id: "1", nisn: "0012345678", name: "Ahmad Fauzi", grade: "6A", gender: "Laki-laki", status: "Aktif" },
  { id: "2", nisn: "0012345679", name: "Siti Aminah", grade: "6A", gender: "Perempuan", status: "Aktif" },
  { id: "3", nisn: "0012345680", name: "Budi Santoso", grade: "6B", gender: "Laki-laki", status: "Aktif" },
  { id: "4", nisn: "0012345681", name: "Dian Pelangi", grade: "5A", gender: "Perempuan", status: "Aktif" },
  { id: "5", nisn: "0012345682", name: "Eko Prasetyo", grade: "5B", gender: "Laki-laki", status: "Non-Aktif" },
];

export const MOCK_CLASSES = [
  { id: "1", name: "1A", room: "Ruang 01", wali: "Ibu Ani", capacity: "28/30", status: "Aktif" },
  { id: "2", name: "1B", room: "Ruang 02", wali: "Bapak Budi", capacity: "30/30", status: "Penuh" },
  { id: "3", name: "2A", room: "Ruang 03", wali: "Ibu Cici", capacity: "25/30", status: "Aktif" },
  { id: "4", name: "2B", room: "Ruang 04", wali: "Ibu Dian", capacity: "29/30", status: "Aktif" },
  { id: "5", name: "3A", room: "Ruang 05", wali: "Bapak Eko", capacity: "30/30", status: "Penuh" },
];

export const MOCK_ACADEMIC_SCHEDULE = [
  { id: 1, day: "Senin", time: "07:30 - 09:00", subject: "Matematika", teacher: "Bpk. Budi", room: "Ruang 6A", class: "6A" },
  { id: 2, day: "Senin", time: "09:00 - 10:30", subject: "Bahasa Indonesia", teacher: "Ibu Siti", room: "Ruang 6A", class: "6A" },
  { id: 3, day: "Selasa", time: "07:30 - 09:00", subject: "IPA", teacher: "Ibu Dina", room: "Laboratorium", class: "6A" },
  { id: 4, day: "Selasa", time: "09:00 - 10:30", subject: "Pendidikan Agama Islam", teacher: "Ust. Ahmad", room: "Ruang 6A", class: "6A" },
];

export const MOCK_BILLS = [
  { id: 1, student: "Ahmad Fauzi (6A)", type: "SPP Juli 2024", amount: "Rp 150.000", status: "Lunas", date: "05 Jul 2024" },
  { id: 2, student: "Siti Aminah (6A)", type: "SPP Juli 2024", amount: "Rp 150.000", status: "Menunggu", date: "-" },
  { id: 3, student: "Budi Santoso (6B)", type: "Uang Gedung", amount: "Rp 500.000", status: "Lunas", date: "10 Jul 2024" },
  { id: 4, student: "Dian Pelangi (5A)", type: "Seragam", amount: "Rp 350.000", status: "Tertunggak", date: "-" },
];

export const MOCK_FINANCIAL_REPORT = [
  { no: 1, date: "01 Jul 2024", description: "Pembayaran SPP Kelas 1-3", type: "Pemasukan", amount: "Rp 12.500.000" },
  { no: 2, date: "02 Jul 2024", description: "Pembayaran SPP Kelas 4-6", type: "Pemasukan", amount: "Rp 15.000.000" },
  { no: 3, date: "05 Jul 2024", description: "Pembelian Alat Tulis Kantor", type: "Pengeluaran", amount: "Rp 1.250.000" },
  { no: 4, date: "10 Jul 2024", description: "Honor GTY Bulan Juni", type: "Pengeluaran", amount: "Rp 25.000.000" },
  { no: 5, date: "15 Jul 2024", description: "Sumbangan Wali Murid", type: "Pemasukan", amount: "Rp 5.000.000" },
];

export const MOCK_GRADES = [
  { id: 1, student: "Ahmad Fauzi", nisn: "0012345678", class: "6A", subject: "Matematika", type: "Ulangan Harian 1", score: 85, status: "Tuntas" },
  { id: 2, student: "Ahmad Fauzi", nisn: "0012345678", class: "6A", subject: "Bahasa Indonesia", type: "Ulangan Harian 1", score: 92, status: "Tuntas" },
  { id: 3, student: "Siti Aminah", nisn: "0012345679", class: "6A", subject: "Matematika", type: "Ulangan Harian 1", score: 70, status: "Remedial" },
  { id: 4, student: "Budi Santoso", nisn: "0012345680", class: "6B", subject: "IPA", type: "Tugas Praktik", score: 88, status: "Tuntas" },
];

export const MOCK_CALENDAR = [
  { id: 1, date: "17 Agustus 2024", title: "HUT Kemerdekaan RI", type: "Libur Nasional", desc: "Upacara dan perlombaan." },
  { id: 2, date: "25-30 September 2024", title: "Penilaian Tengah Semester (PTS)", type: "Ujian", desc: "Ujian tertulis untuk seluruh siswa kelas 1-6." },
  { id: 3, date: "15 Oktober 2024", title: "Rapat Wali Murid", type: "Kegiatan", desc: "Pembagian hasil evaluasi belajar PTS." },
];
