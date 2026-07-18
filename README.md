# SIAS (Codename: Abdulmanap Nurmagomedov)

[![Build Status](https://img.shields.io/github/actions/workflow/status/gfenderio/abdulmanap-nurmagomedov/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/gfenderio/abdulmanap-nurmagomedov/actions)
[![Last Commit](https://img.shields.io/github/last-commit/gfenderio/abdulmanap-nurmagomedov?style=for-the-badge&logo=git)](https://github.com/gfenderio/abdulmanap-nurmagomedov/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/gfenderio/abdulmanap-nurmagomedov?style=for-the-badge)](https://github.com/gfenderio/abdulmanap-nurmagomedov)

<br/>

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

![Abdulmanap & Khabib](./public/khabib.jpg)

> *"Father plan. Always listen to Father." - Khabib Nurmagomedov*

---

## 🧠 Filosofi "Father Plan" dalam Coding

Di pegunungan Dagestan yang dingin, Abdulmanap Nurmagomedov tidak pernah mengajari Khabib cara membangun aplikasi *fullstack* Next.js. Beliau mengajarinya bergulat dengan beruang sejak usia 9 tahun. Kenapa? Karena kalau mentalmu sudah siap *takedown* beruang liar, nge-*debug* *error* Prisma ORM atau *hydration mismatch* di hari Minggu malam hanyalah sebuah pemanasan ringan.

Repositori ini dinamakan **Abdulmanap Nurmagomedov** karena arsitektur kodenya dibangun murni dengan mentalitas petarung Dagestan:

1. **Zero Yapping:** Kalau kodemu *error*, jangan banyak sambat di StackOverflow. Perbaiki *types*-nya! Menggunakan tipe `any` atau `unknown` di sini sama memalukannya dengan *tap out* di ronde pertama.
2. **Kuncian Ketat (Grappling):** Form validasi dijaga ketat oleh Zod dan TypeScript Strict Mode. Ada payload data aneh yang mau masuk ke *database*? *Smesh it!*
3. **Stamina Tanpa Batas:** Dibangun di atas fondasi Next.js 16 App Router (RSC). Sangat cepat, *stateless* di tempat yang tepat, dan tidak pernah kehabisan napas karena *re-render* klien yang boros.

---

## 🦅 Rincian Pertarungan (Pembaruan & Perbaikan Bug)

Kami tidak hanya bertarung di matras, kami juga menghancurkan (*smesh*) bug-bug memalukan yang merusak disiplin antarmuka SIAS:

1. **Sidebar Navigation Triangle Choke (Fix Bug Highlight)**:
   * Sebelumnya, menu Dashboard selalu menyala (*highlighted*) meskipun kita sedang membuka menu lain. Sangat tidak disiplin! Sekarang navigasi sudah dikunci ketat; menu hanya menyala saat benar-benar aktif di rutenya.
2. **Dark Mode Smesh (Fix Bug Kontras)**:
   * Kontras layar gelap yang sebelumnya buram kini dibuat tajam bak tatapan Khabib sebelum bel berbunyi. Tidak ada lagi elemen kontras abu-abu yang membuat mata penantang kelelahan.
3. **Pemberantasan AI-Slop (Refaktor Tipografi & Layout Premium)**:
   * Menghapus tulisan berhuruf kapital massal (`uppercase tracking-wider`) di tabel master. Struktur visual diganti dengan tipografi rapi, bersih, dan mematikan khas Stitch. Kartu SPP dengan warna merah mencolok yang mengganggu konsentrasi juga telah dijinakkan.
4. **Fungsionalitas Kuncian Penuh (Interactive Dummy Modals)**:
   * Semua tombol statis yang pengecut kini dipaksa menyerah dan merespons. Tombol *Tambah Siswa*, *Filter Lanjutan*, *Ekspor PDF/Excel*, *Ganti Password (dengan Toggle Show/Hide)*, dan *Kirim Tiket Bantuan* kini mengeluarkan respons/dialog nyata ketika Anda menekannya.
5. **Debounced Search & Notification Popover**:
   * Search Bar di navbar atas dibekali pelindung *debounce* agar tidak memberatkan server saat diserang pencarian cepat. Notifikasi popover gaya Facebook sudah aktif untuk mengirim update penting bagi seluruh aktor sistem.
6. **Divisi Baru: Ruang Kelas (Data Kelas Setup)**:
   * Grappling area baru bagi Admin untuk mengunci data nama kelas, ruangan, kapasitas maksimal, dan wali kelas secara presisi melalui form modal yang solid.
7. **Visual Smesh: Dashboard Recharts Integration**:
   * Menghancurkan visual dashboard yang longgar dengan padding kokoh (`p-4 md:p-8`) dan memasang dua kuncian grafik `Recharts`: *Area Chart* untuk tren pemasukan SPP bulanan, dan *Donut Chart* untuk persentase kehadiran siswa harian.
8. **Format Siap Tempur: Print-Ready Report Template**:
   * Laporan Keuangan Bulanan siap cetak (*A4 Print-Ready*) yang bersih, rapi, dan menyingkirkan elemen tombol navigasi ketika dicetak (*print media stylesheet*). Siap disodorkan ke Kepala Madrasah tanpa banyak omong.
9. **Kuncian RBAC Lintas Divisi (Role-Based Access Control Isolation)**:
   * Data sekolah dikunci ketat. Guru tidak bisa lagi mengintip tagihan SPP global atau memanipulasi profil siswa secara acak (akses dibatasi hanya jadwal mengajar dan menu penilaian). Wali murid diisolasi total agar hanya bisa melihat satu anak (Profil Anak khusus, Rapor khusus, dan Tagihan SPP ananda sendiri). *Zero data leak plan!*
10. **Modul Penilaian & Kalender Akademik (Grades & Academic Calendar)**:
    * Meluncurkan matras penilaian baru agar Guru bisa memasukkan nilai tugas/ujian, sementara Wali Murid bisa memantau rapor perkembangan anak secara real-time. Dilengkapi pula dengan Kalender Akademik untuk memetakan tanggal penting dan hari libur agar disiplin madrasah tetap terjaga.

---

## 🛠️ "Send Me Location" (Cara Setup)

Bagi siapapun penantang yang ingin menjalankan proyek ini di *localhost*, pastikan mental kalian siap bertarung lima ronde:

```bash
git clone https://github.com/gfenderio/abdulmanap-nurmagomedov.git
cd abdulmanap-nurmagomedov
npm install
npm run dev
```

### Seeding Database Uji Coba:
Untuk mengisi database SQLite lokal dengan akun-akun pengujian terbaru (termasuk peran Wali Murid):
```bash
powershell -ExecutionPolicy Bypass -Command "npx tsx prisma/seed.ts"
```

---

## 🔑 Akun Uji Coba (Testing Accounts)
Detail kredensial untuk pengujian tingkat peran dapat diakses pada file terpisah:
👉 **[Username & Password Test.md](./Username%20%26%20Password%20Test.md)**

* **Admin**: `admin@mi-sirojulfalah.sch.id` (password: `password123`)
* **Guru**: `guru@mi-sirojulfalah.sch.id` (password: `password123`)
* **Wali Murid**: `wali@mi-sirojulfalah.sch.id` (password: `password123`)

---

## 🦅 Spesifikasi Teknis (SIAS)

* **UI/UX:** *Anti-slop frontend framework* (Tailwind + Shadcn + Taste Skill). Visualnya tajam bak pukulan *uppercut*.
* **Database:** SQLite/PostgreSQL via Prisma. Mampu mencengkram erat relasi data nilai, siswa, dan guru layaknya *triangle choke* sempurna.
* **RBAC (Role-Based Access Control):** Admin, Guru, Wali Murid, dan Siswa memiliki wewenang yang diatur tanpa celah.

*Alhamdulillah, we built this app. I know you guys don't like boilerplate, but tomorrow we're gonna smesh the deployment.* 🦅
