# Handover Notes: Fitur Instagram Feed

## Status Terakhir
- **Fitur Instagram Feed** di halaman utama (`src/app/page.tsx`) saat ini tertahan di status _loading_ (spinner muter-muter terus).
- Awalnya kita pakai widget **Elfsight**, tapi gagal me-render gambar (kemungkinan akun IG _disconnect_ di sisi server Elfsight).
- Kita lalu beralih menggunakan API dari **Behold.so** (Widget ID: `5g8dhtE2gIgC4iTrHerE`).

## Arsitektur Kode Saat Ini
1. **Frontend (`src/app/page.tsx`)**:
   - Menggunakan Grid UI *native* React + Tailwind untuk menampilkan foto (bukan script eksternal atau iframe) agar desainnya rapi dan sesuai tema.
   - State `igPosts` diisi menggunakan `fetch('/api/instagram')` via `useEffect`.
2. **Backend Proxy (`src/app/api/instagram/route.ts`)**:
   - Karena `fetch` langsung dari *client-side* ke server Behold kena blokir CORS/Adblocker (muncul error `Failed to fetch`), saya buatkan API Proxy di Next.js.
   - File ini bertugas melakukan fetch server-side ke `https://feeds.behold.so/5g8dhtE2gIgC4iTrHerE` dan menyajikannya ke *frontend*.

## Masalah & Tugas Lanjutan
1. **Kenapa loading terus?** 
   Tolong cek *console/terminal* Next.js saat menjalankan `npm run dev`. Ada kemungkinan request `fetch` dari Node.js/Next.js ke server Behold tersangkut (timeout) atau butuh header `User-Agent`.
2. **Opsi Alternatif**:
   Jika menggunakan API Proxy tetap gagal, Anda bisa:
   - Menghapus route `/api/instagram`.
   - Menaruh kembali `<script type="module" src="https://w.behold.so/widget.js"></script>` di `src/app/layout.tsx`.
   - Mengganti grid foto di `page.tsx` dengan elemen bawaan Behold: `<div data-behold-id="5g8dhtE2gIgC4iTrHerE"></div>`.
   *(Script ini sebelumnya sudah dicoba, tapi perlu di-test lebih jauh mengenai kompatibilitasnya dengan React Strict Mode/Hydration).*
