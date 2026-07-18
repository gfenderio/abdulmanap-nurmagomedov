"use client"

import React, { useState } from 'react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    alert(`Menampilkan hasil pencarian bantuan untuk: "${searchQuery}" (dummy)`);
  };

  const handleTicketSubmit = () => {
    alert("Tiket bantuan berhasil dikirim. Tim IT Support kami akan segera menghubungi Anda. (dummy)");
    // Normally we would reset the form here
  };

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-headline-lg font-headline font-bold text-on-surface mb-2">Pusat Bantuan</h2>
        <p className="text-on-surface-variant text-base max-w-2xl">Temukan jawaban atas pertanyaan Anda, pelajari panduan sistem, atau hubungi tim dukungan kami jika Anda membutuhkan bantuan lebih lanjut.</p>
      </div>

      {/* Search Banner */}
      <div className="bg-primary-container rounded-3xl p-8 mb-10 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-primary opacity-5 pattern-dots pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-2xl">
          <h3 className="text-title-lg font-bold text-on-primary-container mb-6">Bagaimana kami bisa membantu Anda?</h3>
          <div className="relative w-full flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-outline text-xl">search</span>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-12 pr-20 py-4 rounded-2xl border border-outline-variant/30 shadow-sm text-base focus:ring-2 focus:ring-primary focus:border-primary bg-surface-bright placeholder:text-outline transition-all outline-none" 
              placeholder="Ketik topik atau pertanyaan (contoh: 'Lupa Password' atau 'Input Nilai')..." 
              type="text" 
            />
            <button onClick={handleSearch} className="absolute right-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold hover:bg-brand-hover transition-colors shadow-sm">
              Cari
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: FAQ (Takes up 2 cols on lg) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant p-6 shadow-sm">
            <h3 className="text-title-lg font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">live_help</span>
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <details className="group bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden open:shadow-md transition-all duration-300">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 hover:bg-surface-container-low">
                  <span className="text-on-surface group-open:text-primary transition-colors">Bagaimana cara mereset password akun guru?</span>
                  <span className="transition group-open:rotate-180 material-symbols-outlined text-outline">expand_more</span>
                </summary>
                <div className="text-on-surface-variant p-4 pt-0 text-sm leading-relaxed border-t border-outline-variant/50 mt-2 bg-surface-container-lowest">
                  Untuk mereset password, masuk ke menu 'Pengaturan', lalu pilih tab 'Manajemen Pengguna'. Cari nama guru yang bersangkutan, klik ikon opsi (tiga titik), dan pilih 'Reset Password'. Password sementara akan dikirimkan ke email terdaftar atau dapat disalin langsung.
                </div>
              </details>
              
              {/* FAQ Item 2 */}
              <details className="group bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden open:shadow-md transition-all duration-300">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 hover:bg-surface-container-low">
                  <span className="text-on-surface group-open:text-primary transition-colors">Kapan laporan keuangan bulanan direkapitulasi secara otomatis?</span>
                  <span className="transition group-open:rotate-180 material-symbols-outlined text-outline">expand_more</span>
                </summary>
                <div className="text-on-surface-variant p-4 pt-0 text-sm leading-relaxed border-t border-outline-variant/50 mt-2 bg-surface-container-lowest">
                  Sistem akan melakukan rekapitulasi laporan keuangan secara otomatis setiap tanggal 1 pada pukul 00:00 WIB setiap bulannya. Laporan tersebut dapat diakses melalui menu 'Laporan' &gt; sub-menu 'Keuangan Bulanan'.
                </div>
              </details>
              
              {/* FAQ Item 3 */}
              <details className="group bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden open:shadow-md transition-all duration-300">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 hover:bg-surface-container-low">
                  <span className="text-on-surface group-open:text-primary transition-colors">Apa yang harus dilakukan jika data siswa tidak muncul di sistem?</span>
                  <span className="transition group-open:rotate-180 material-symbols-outlined text-outline">expand_more</span>
                </summary>
                <div className="text-on-surface-variant p-4 pt-0 text-sm leading-relaxed border-t border-outline-variant/50 mt-2 bg-surface-container-lowest">
                  Pastikan sinkronisasi data master telah berjalan. Jika masih belum muncul, periksa kembali format file upload pada menu 'Data Master' &gt; 'Siswa' jika Anda melakukan import massal, pastikan kolom NISN terisi dengan benar.
                </div>
              </details>
            </div>
          </div>
          
          {/* Quick Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a onClick={(e) => { e.preventDefault(); alert("Mengunduh Buku Panduan SIAS.pdf (dummy)"); }} className="bg-surface-bright cursor-pointer rounded-2xl border border-outline-variant p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/50 group flex items-start gap-4">
              <div className="bg-primary-container/30 p-3 rounded-xl text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Buku Panduan SIAS</h4>
                <p className="text-xs text-on-surface-variant mt-1">Unduh manual penggunaan sistem lengkap format PDF.</p>
              </div>
            </a>
            
            <a onClick={(e) => { e.preventDefault(); alert("Membuka playlist Video Tutorial di tab baru (dummy)"); }} className="bg-surface-bright cursor-pointer rounded-2xl border border-outline-variant p-6 shadow-sm hover:shadow-md transition-all hover:border-secondary-fixed/50 group flex items-start gap-4">
              <div className="bg-secondary-fixed/30 p-3 rounded-xl text-secondary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">video_library</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface group-hover:text-secondary transition-colors">Video Tutorial</h4>
                <p className="text-xs text-on-surface-variant mt-1">Tonton panduan interaktif penggunaan fitur-fitur baru.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact & Ticket Form */}
        <div className="flex flex-col gap-6">
          {/* Contact Info Glassmorphism */}
          <div className="bg-gradient-to-br from-surface-bright to-surface-container-low rounded-3xl border border-outline-variant p-6 shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <h3 className="text-title-lg font-bold text-on-surface mb-4 relative z-10 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">support_agent</span>
              Kontak Dukungan
            </h3>
            <p className="text-sm text-on-surface-variant mb-6 relative z-10">Tim operasional siap membantu Anda selama jam kerja operasional madrasah.</p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">call</span>
                <div>
                  <p className="text-xs text-outline">Telepon / WhatsApp</p>
                  <p className="font-bold text-on-surface">0812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">mail</span>
                <div>
                  <p className="text-xs text-outline">Email Bantuan IT</p>
                  <p className="font-bold text-on-surface">it.support@sirofalah.sch.id</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">schedule</span>
                <div>
                  <p className="text-xs text-outline">Jam Operasional</p>
                  <p className="font-bold text-on-surface">Senin - Jumat, 07:00 - 15:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ticket Form */}
          <div className="bg-surface-bright rounded-3xl border border-outline-variant p-6 shadow-sm flex-1">
            <h3 className="text-title-lg font-bold text-on-surface mb-4">Buat Tiket Bantuan</h3>
            <p className="text-xs text-on-surface-variant mb-6">Tidak menemukan jawaban di FAQ? Kirimkan keluhan teknis Anda melalui formulir di bawah ini.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleTicketSubmit(); }}>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-1" htmlFor="ticket-category">Kategori Masalah</label>
                <select className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest py-2.5 px-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none" id="ticket-category" required>
                  <option value="">Pilih kategori...</option>
                  <option value="Akses Akun / Login">Akses Akun / Login</option>
                  <option value="Input Nilai / Akademik">Input Nilai / Akademik</option>
                  <option value="Pembayaran / Keuangan">Pembayaran / Keuangan</option>
                  <option value="Bug / Error Sistem">Bug / Error Sistem</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-1" htmlFor="ticket-subject">Subjek</label>
                <input className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest py-2.5 px-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none placeholder:text-outline-variant" id="ticket-subject" placeholder="Ringkasan singkat masalah" type="text" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-1" htmlFor="ticket-desc">Deskripsi Detail</label>
                <textarea className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest py-2.5 px-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none placeholder:text-outline-variant resize-none" id="ticket-desc" placeholder="Jelaskan masalah secara rinci, termasuk langkah-langkah yang sudah dilakukan..." rows={4} required></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-brand-hover text-on-primary font-bold py-3 px-4 rounded-xl transition-colors shadow-sm flex justify-center items-center gap-2" type="submit">
                <span className="material-symbols-outlined text-[20px]" data-icon="send">send</span>
                Kirim Tiket
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
