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

## 🚀 Pembaruan Sistem (Update & Perbaikan Terbaru)

Sistem ini telah diperbaiki secara menyeluruh mengikuti standar premium **Stitch Design System** dengan fokus kegunaan penuh (*functional prototype*):

1. **Perbaikan Inkonsistensi UI/UX**:
   * **Navigasi Sidebar**: Memperbaiki bug highlight aktif. Menu Dashboard kini hanya ter-highlight ketika benar-benar berada di halaman utama dashboard, tidak lagi bentrok dengan menu aktif lainnya.
   * **Dark Mode**: Perbaikan kontras dan konsistensi warna latar belakang container agar tidak merusak keterbacaan di tema gelap.
   * **Menghilangkan AI Slop**: Desain huruf besar semua (*uppercase tracking-wider*) pada tabel master dan kartu keuangan diganti dengan tipografi premium khas Stitch. Kartu SPP dengan warna merah mencolok telah direfaktor ke bentuk indikator elegan.

2. **Fungsionalisasi Elemen Interaktif (Client State)**:
   * **Data Siswa**: Modal tambah siswa, modal filter lanjutan, modal detail ringkasan, dan modal edit data dummy sudah aktif.
   * **Akademik**: Tombol cetak laporan interaktif dan modal tambah jadwal baru sudah berfungsi.
   * **Pusat Laporan**: Opsi ekspor data kini memunculkan pop-up pemilihan format PDF atau Excel.
   * **Profil**: Toggle *show/hide* password dan mode edit data profil dinamis kini berfungsi penuh.
   * **Bantuan**: Fitur input search bantuan dan form tiket keluhan IT Support aktif dengan pesan respon terintegrasi.
   * **Pencarian & Notifikasi**: Fitur pencarian ter-debounce pada navbar untuk menjaga kestabilan performa, serta menu drop-down notifikasi gaya Facebook.

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
Untuk mengisi database lokal dengan akun-akun pengujian terbaru (termasuk peran Wali Murid):
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
