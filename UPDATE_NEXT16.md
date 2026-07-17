# Dokumentasi Upgrade Next.js 16.2.10

Dokumentasi ini mencatat proses, kendala, dan solusi saat melakukan upgrade Next.js pada proyek **SIAS MI Sirojul Falah (Abdulmanap Nurmagomedov)**.

## 1. Tujuan
Upgrade Next.js dari versi `14.2.35` ke `16.2.10` untuk mendapatkan performa dan fitur terbaru.

## 2. Langkah Instalasi
Paket Next.js diperbarui menggunakan NPM:
```bash
npm install next@16.2.10
```

## 3. Kendala (Build Error dengan Turbopack)
Saat menjalankan `npm run build`, Next.js 16 secara default menggunakan compiler **Turbopack** untuk kompilasi production build. Proses build gagal dengan pesan kesalahan:

```
Error: Turbopack build failed with 3 errors:
./src/app/globals.css
Parsing CSS source code failed
Unexpected token Function("--spacing")
```

### Penyebab
Paket `@import "tw-animate-css"` dan `shadcn` v4.13.1 menggunakan standar TailwindCSS v4 yang menyertakan fungsi CSS `--spacing` seperti `var(--spacing(4))`. Compiler CSS Turbopack pada Next.js 16 belum mendukung atau mengalami konflik parsing terhadap sintaks ini ketika dikombinasikan dengan TailwindCSS v3.4.1 yang terpasang di proyek.

## 4. Solusi
Menonaktifkan Turbopack dan memaksa Next.js menggunakan compiler **Webpack** dengan menambahkan flag `--webpack` pada konfigurasi skrip npm di `package.json`:

```json
"scripts": {
  "dev": "next dev --webpack",
  "build": "next build --webpack",
  "start": "next start",
  "lint": "next lint"
}
```

## 5. Hasil Verifikasi
Setelah menggunakan Webpack, perintah build berhasil dijalankan tanpa error:
```bash
npm run build
```
- **Kompilasi**: `Compiled successfully in 7.1s`
- **TypeScript**: Pengecekan tipe aman, konfigurasi target `tsconfig.json` otomatis disesuaikan ke `ES2017` oleh Next.js untuk mendukung top-level `await`.
