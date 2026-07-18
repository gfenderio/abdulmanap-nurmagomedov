# 🦅 HANDOVER & CONTEXT PROTOCOL: PROJECT ABDULMANAP NURMAGOMEDOV
*Dokumen Estafet untuk Agentic AI Team & Developer Selanjutnya*

> *"Father plan. Always listen to Father."*

Dokumen ini mencakup seluruh konteks, aturan main (*custom rules*), arsitektur teknis, dan riwayat pertarungan (perubahan) sistem informasi sekolah (SIAS) MI Sirojul Falah agar agen AI berikutnya dapat langsung melakukan *smesh* tugas tanpa kehilangan arah.

---

## 🧠 1. Profil & Aturan Main Utama (Custom Rules)

Dalam pengembangan proyek ini, tim pengembang diwajibkan mematuhi aturan kepribadian berikut (Wajib diikuti oleh Agen AI selanjutnya):
* **Nama Profil:** Ponytail (The Caveman Senior Dev)
* **Gaya Komunikasi:** Broken Indonesian/English, ultra-concise, tanpa basa-basi (*No yapping*, hilangkan "halo", "ini kodenya", dll.). Tunjukkan langsung baris kode yang diubah.
* **Filosofi Teknis:**
  * **YAGNI (You Aren't Gonna Need It):** Jangan membuat *enterprise boilerplate* berlebihan. Sederhana lebih baik.
  * **Max Leverage:** Gunakan optimalisasi bawaan Supabase/PostgreSQL jika nanti di-deploy.
  * **Zero Yapping di Commit:** Lakukan verifikasi build lokal (`npm run build`) sebelum melakukan push demi kedisiplinan kode.

---

## 🛠️ 2. Arsitektur Teknis & Struktur Folder

Proyek ini dibangun menggunakan **Next.js 16 (App Router)**, **TypeScript**, dan **TailwindCSS**.

### Sistem Keamanan & RBAC (Role-Based Access Control)
Sistem memisahkan 3 Aktor Utama: `ADMIN`, `TEACHER` (Guru), dan `PARENT` (Wali Murid) menggunakan NextAuth (v5).
* **Server-Side Authorization Pattern:** 
  Setiap halaman utama di `src/app/dashboard/[modul]/page.tsx` bertindak sebagai *Server Component* untuk melakukan verifikasi sesi (`auth()`) dan mendistribusikan properti `role` ke komponen klien.
  * Contoh: Halaman `/dashboard/students/page.tsx` memanggil `auth()` lalu me-render `<StudentsClient role={session.user.role} />`.
* **Client-Side RBAC Filtering:**
  Komponen klien (`*-client.tsx`) menerima properti `role` dan melakukan isolasi UI:
  * **Wali Murid (`PARENT`)**: Diarahkan ke data spesifik milik anaknya sendiri (Profil Tunggal, Tagihan SPP tunggal, dan Rapor Hasil Belajar pribadi).
  * **Guru (`TEACHER`)**: Memiliki akses *Read-Only* pada data murid, diblokir dari halaman keuangan (`billing`), dan diberikan akses ke menu Penjadwalan Mengajar serta manajemen penginputan nilai (*Grades*).
  * **Admin (`ADMIN`)**: Akses penuh global ke seluruh menu (tambah/hapus kelas, mutasi keuangan global, rekapitulasi buku induk).

### Struktur Berkas Penting:
* `auth.ts` (Root): Konfigurasi utama NextAuth v5.
* `src/lib/mock-data.ts`: Pusat data simulasi untuk seluruh sistem (Murid, Kelas, Keuangan, Kalender, Nilai).
* `src/app/dashboard/page.tsx`: Dashboard utama dengan visualisasi bersyarat berdasarkan *role* (Grafik Recharts untuk Admin, Jadwal mengajar untuk Guru, performa belajar untuk Wali Murid).
* `src/app/dashboard/academic/academic-client.tsx`: Manajemen Akademik berisi 3 tab: Jadwal Mengajar, Kalender Akademik (baru), dan Manajemen Nilai (interaktif).
* `src/app/dashboard/reports/template/template-client.tsx`: Halaman cetak A4. Menampilkan Rapor Murid jika pengguna adalah Wali Murid/Guru, dan Laporan Keuangan Bulanan sekolah jika pengguna adalah Admin.

---

## 🦅 3. Riwayat Pertarungan Terakhir (Changelog)

1. **Sidebar Navigation & Dark Mode Bug Fix**: Navigasi sidebar diperbaiki agar penyorotan (*highlight*) rute presisi. Kontras elemen gelap dipertajam.
2. **Dashboard UI Overhaul (Recharts)**: Pemasukan bulanan ditampilkan menggunakan Area Chart, persentase kehadiran siswa menggunakan Donut Chart.
3. **Pusat Laporan A4 Print-ready**: Membuat modul cetak laporan keuangan yang menyembunyikan navigasi browser saat dicetak.
4. **Isolasi Penuh RBAC**: Mengubah rute halaman master (Siswa, Tagihan, Akademik, Laporan) menjadi Server-Client wrapper agar data global tidak bocor ke Guru dan Wali Murid.
5. **Fitur Kalender Akademik & Input Nilai Aktif**: Menambahkan tab Kalender dan membuat modal form "Tambah Nilai" bagi Guru yang terhubung ke state lokal.
6. **Optimasi GitHub Actions (`ci.yml`)**: Mengaktifkan `paths-ignore` agar proses *build* di GitHub tidak berjalan jika perubahan hanya terjadi pada dokumentasi (`README.md`, `HANDOVER.md`, `.github/**`).
7. **Fitur Kelola Profil Pengguna Aktif (Interactive Profile Dropdown)**: Mengubah avatar statis di navbar menjadi dropdown fungsional gaya Facebook (menampilkan nama, email, role, tombol kelola profil, dan logout). Halaman profil dihubungkan ke SQLite (Prisma), mendukung unggah foto (base64) dan perubahan password secara real-time yang menyinkronkan navbar secara otomatis menggunakan `router.refresh()`.

---

## 🏃 4. Cara Menjalankan & Menguji Proyek

```bash
# 1. Kloning Repositori
git clone https://github.com/gfenderio/abdulmanap-nurmagomedov.git
cd abdulmanap-nurmagomedov

# 2. Instalasi Dependensi
npm install

# 3. Jalankan Server Dev
npm run dev

# 4. Verifikasi Build & TypeScript
npm run build
```

### Kredensial Uji Coba:
Gunakan akun di bawah ini untuk menguji perubahan UI antar-peran:
* **Admin:** `admin@mi-sirojulfalah.sch.id` (password: `password123`)
* **Guru:** `guru@mi-sirojulfalah.sch.id` (password: `password123`)
* **Wali Murid:** `wali@mi-sirojulfalah.sch.id` (password: `password123`)

---

## 🎯 5. Agenda Pertarungan Berikutnya (Roadmap untuk AI Selanjutnya)

* **Integrasi Database Riil**: Hubungkan Prisma ORM ke PostgreSQL/Supabase dan gantikan data simulasi (`mock-data.ts`) dengan kueri database.
* **RLS (Row Level Security)**: Jika menggunakan Supabase, aktifkan kebijakan RLS pada tabel `Billing` dan `Grades` sesuai dengan user metadata.
* **Sistem Notifikasi Real-time**: Gunakan Supabase Realtime / WebSockets untuk mengirimkan notifikasi instan dari Admin/Guru langsung ke akun Wali Murid saat ada nilai baru yang diinput.

*Alhamdulillah, system is solid. Now take it to the next round.* 🦅
