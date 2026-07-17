# SIAS MI Sirojul Falah (Codename: Abdulmanap Nurmagomedov)

![Abdulmanap & Khabib](https://www.sportsnet.ca/wp-content/uploads/2020/07/Abdulmanap-Nurmagomedov-Khabib-Nurmagomedov-1040x572.jpg)

> *"Father plan. Always listen to Father." - Khabib Nurmagomedov*

## Filosofi "Father Plan" dalam Coding

Di pegunungan Dagestan yang dingin, Abdulmanap Nurmagomedov tidak pernah mengajari Khabib cara membangun aplikasi *fullstack* Next.js. Beliau mengajarinya bergulat dengan beruang sejak usia 9 tahun. Kenapa? Karena kalau mentalmu sudah siap *takedown* beruang liar, nge-*debug* *error* Prisma ORM atau *hydration mismatch* di hari Minggu malam hanyalah sebuah pemanasan ringan.

Repositori ini dinamakan **Abdulmanap Nurmagomedov** karena arsitektur kodenya dibangun murni dengan mentalitas petarung Dagestan:

1. **Zero Yapping:** Kalau kodemu *error*, jangan banyak sambat di StackOverflow. Perbaiki *types*-nya! Menggunakan tipe `any` atau `unknown` di sini sama memalukannya dengan *tap out* di ronde pertama.
2. **Kuncian Ketat (Grappling):** Form validasi dijaga ketat oleh Zod dan TypeScript Strict Mode. Ada payload data aneh yang mau masuk ke *database*? *Smesh it!*
3. **Stamina Tanpa Batas:** Dibangun di atas fondasi Next.js 14 App Router (RSC). Sangat cepat, *stateless* di tempat yang tepat, dan tidak pernah kehabisan napas karena *re-render* klien yang boros.

## "Send Me Location" (Cara Setup)

Bagi siapapun penantang yang ingin menjalankan proyek ini di *localhost*, pastikan mental kalian siap bertarung lima ronde:

```bash
git clone https://github.com/YUGI/abdulmanap-nurmagomedov.git
cd abdulmanap-nurmagomedov
npm install
npm run dev
# "I'm gonna smesh your bugs."
```

## Spesifikasi Teknis (SIAS MI Sirojul Falah)

Meski namanya garang dan siap tempur, ini adalah proyek **Sistem Informasi Akademik Sekolah (SIAS)** untuk MI Sirojul Falah yang mulia dan damai. Berisi fitur-fitur krusial:
- **UI/UX:** *Anti-slop frontend framework* (Tailwind + Shadcn + Taste Skill). Visualnya tajam bak pukulan *uppercut*.
- **Database:** PostgreSQL via Prisma. Mampu mencengkram erat relasi antar data nilai, siswa, dan guru layaknya sebuah *triangle choke* sempurna.
- **RBAC (Role-Based Access Control):** Admin, Guru, Wali Murid, dan Siswa memiliki wewenang yang diatur tanpa celah.

*Alhamdulillah, we built this app. I know you guys don't like boilerplate, but tomorrow we're gonna smesh the deployment.* 🦅
