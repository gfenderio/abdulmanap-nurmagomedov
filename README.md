# SIAS (Codename: Abdulmanap Nurmagomedov)

[![Build Status](https://github.com/gfenderio/abdulmanap-nurmagomedov/actions/workflows/ci.yml/badge.svg)](https://github.com/gfenderio/abdulmanap-nurmagomedov/actions)
[![Last Commit](https://img.shields.io/badge/last%20commit-today-blue?style=for-the-badge&logo=git)](https://github.com/gfenderio/abdulmanap-nurmagomedov/commits/main)
[![Repo Size](https://img.shields.io/badge/repo%20size-1.2%20MB-blue?style=for-the-badge)](https://github.com/gfenderio/abdulmanap-nurmagomedov)

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

*Alhamdulillah, we built this app. I know you guys don't like boilerplate, but tomorrow we're gonna smesh the deployment.* 🦅

> *"Send them 2-3 years to Dagestan mountains, forget about everything, just code."*
