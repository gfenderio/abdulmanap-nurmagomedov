# SIAS · Sistem Informasi Akademik Sekolah

[![Build Status](https://github.com/gfenderio/abdulmanap-nurmagomedov/actions/workflows/ci.yml/badge.svg)](https://github.com/gfenderio/abdulmanap-nurmagomedov/actions)

An academic portal for a primary madrasah: teachers enter grades, parents follow
progress and fees, and the admin manages students, staff and billing. The school
in the demo, **MI Al-Mubarokah**, is fictional, and so are all of its people,
addresses and figures.

**Live demo:** https://abdulmanap-nurmagomedov.vercel.app/login. Pick a role under
*Coba tanpa akun*; the form fills itself in and signs you in.

## Stack

- Next.js 16 (App Router, server actions) and React
- TypeScript, Tailwind CSS
- Auth.js (NextAuth v5) with credentials sign-in
- Prisma with PostgreSQL
- Zod and React Hook Form for validation

## The public demo is read-only

Anyone can sign in to the demo, so nothing a visitor does may change what the
next visitor sees. Every server action that writes calls `blockDemoWrite()`
(`src/lib/demo.ts`) first and refuses demo accounts on the server. Hiding
buttons in the UI is presentation, not protection.

Demo accounts (password `demo`, which guards nothing):

| Role       | Email                     |
|------------|---------------------------|
| Admin      | `demo.admin@sias.example` |
| Guru       | `demo.guru@sias.example`  |
| Wali Murid | `demo.wali@sias.example`  |

`/login?demo=admin`, `?demo=guru` or `?demo=wali` plays the demo sign-in on
arrival, for linking straight into a role.

## Running it locally

```bash
git clone https://github.com/gfenderio/abdulmanap-nurmagomedov.git
cd abdulmanap-nurmagomedov
cp .env.example .env   # fill in DATABASE_URL and AUTH_SECRET
npm install
npx prisma db push
npx tsx prisma/seed-demo.ts   # fictional school data and the read-only demo accounts
npm run dev
```
