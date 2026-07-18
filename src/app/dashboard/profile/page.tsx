"use client"

import React, { useState } from 'react';

export default function ProfilePage() {
  const [isEditMode, setIsEditMode] = useState(false);
  
  // Password visibility states
  const [showPwd1, setShowPwd1] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [showPwd3, setShowPwd3] = useState(false);

  const handleUploadPhoto = () => {
    alert("Membuka dialog pemilihan file foto profil (dummy)");
  };

  const handleSaveProfile = () => {
    alert("Perubahan profil berhasil disimpan (dummy)");
    setIsEditMode(false);
  };

  const handleSavePassword = () => {
    alert("Password berhasil diperbarui (dummy)");
  };

  return (
    <div className="flex-1 pt-6 px-4 md:px-8 pb-12 overflow-y-auto w-full max-w-7xl mx-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="mb-8">
        <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight mb-2">Profil Pengguna</h2>
        <p className="text-on-surface-variant text-body-lg">Kelola informasi pribadi dan pengaturan keamanan akun Anda.</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Profile Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col items-center p-8 text-center relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full p-1 border-2 border-primary-container bg-surface shadow-md">
                <img className="w-full h-full rounded-full object-cover" data-alt="Close up professional portrait" src="/avatar.jpg" alt="Profile" />
              </div>
              <button onClick={handleUploadPhoto} className="absolute bottom-0 right-0 p-2.5 bg-primary text-on-primary rounded-full hover:bg-brand-hover shadow-lg transition-transform hover:scale-105 active:scale-95">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </button>
            </div>
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">Ahmad Fulan</h3>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold mb-4">
              <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
              Administrator
            </span>
            <p className="text-on-surface-variant text-sm px-4 mb-6">Bertanggung jawab atas pengelolaan sistem akademik, data master, dan konfigurasi umum SIAS MI Sirojul Falah.</p>
            
            <div className="w-full pt-6 border-t border-outline-variant/50 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                <span className="material-symbols-outlined text-[20px] text-primary">mail</span>
                ahmad.fulan@misirojulfalah.sch.id
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                <span className="material-symbols-outlined text-[20px] text-primary">phone_iphone</span>
                +62 812 3456 7890
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                <span className="material-symbols-outlined text-[20px] text-primary">calendar_today</span>
                Bergabung Sejak: 15 Juli 2021
              </div>
            </div>
          </div>
        </div>

        {/* Forms Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Edit Profile Info */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 border-b border-outline-variant/50 pb-4">
              <div>
                <h3 className="text-xl font-headline font-semibold text-on-surface">Informasi Dasar</h3>
                <p className="text-sm text-on-surface-variant mt-1">Perbarui detail profil pribadi Anda.</p>
              </div>
              {!isEditMode ? (
                <button onClick={() => setIsEditMode(true)} className="px-4 py-2 bg-brand-light text-primary font-bold rounded-xl hover:bg-primary-fixed transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                  Edit
                </button>
              ) : (
                <div className="flex gap-2">
                  <button onClick={() => setIsEditMode(false)} className="px-4 py-2 bg-surface text-on-surface border border-outline-variant font-bold rounded-xl hover:bg-surface-container-low transition-colors">
                    Batal
                  </button>
                  <button onClick={handleSaveProfile} className="px-4 py-2 bg-primary text-on-primary font-bold rounded-xl hover:bg-brand-hover transition-colors">
                    Simpan
                  </button>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Nama Lengkap</label>
                <input className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" disabled={!isEditMode} type="text" defaultValue="Ahmad Fulan" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">NIP / ID Pegawai</label>
                <input className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" disabled={!isEditMode} type="text" defaultValue="198507152010011012" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Email</label>
                <input className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" disabled={!isEditMode} type="email" defaultValue="ahmad.fulan@misirojulfalah.sch.id" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Nomor Telepon</label>
                <input className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" disabled={!isEditMode} type="text" defaultValue="+62 812 3456 7890" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-on-surface">Alamat Domisili</label>
                <textarea className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline resize-none" disabled={!isEditMode} rows={3} defaultValue="Jl. Raya Cicadas No. 123, Gunung Putri, Bogor, Jawa Barat" />
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-4 mb-6 border-b border-outline-variant/50 pb-4">
              <div className="p-3 bg-error-container text-on-error-container rounded-xl">
                <span className="material-symbols-outlined">lock_reset</span>
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold text-on-surface">Ganti Password</h3>
                <p className="text-sm text-on-surface-variant mt-1">Pastikan akun Anda tetap aman dengan menggunakan password yang kuat.</p>
              </div>
            </div>
            
            <form className="space-y-5 max-w-lg">
              <div className="space-y-2 relative">
                <label className="text-sm font-bold text-on-surface">Password Saat Ini</label>
                <div className="relative">
                  <input className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" placeholder="Masukkan password saat ini" type={showPwd1 ? "text" : "password"} />
                  <button onClick={() => setShowPwd1(!showPwd1)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">{showPwd1 ? "visibility" : "visibility_off"}</span>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Password Baru</label>
                <div className="relative">
                  <input className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" placeholder="Minimal 8 karakter" type={showPwd2 ? "text" : "password"} />
                  <button onClick={() => setShowPwd2(!showPwd2)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">{showPwd2 ? "visibility" : "visibility_off"}</span>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Konfirmasi Password Baru</label>
                <div className="relative">
                  <input className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" placeholder="Ketik ulang password baru" type={showPwd3 ? "text" : "password"} />
                  <button onClick={() => setShowPwd3(!showPwd3)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">{showPwd3 ? "visibility" : "visibility_off"}</span>
                  </button>
                </div>
              </div>
              
              <div className="pt-4 flex gap-3">
                <button onClick={handleSavePassword} className="px-6 py-2.5 bg-primary text-on-primary font-bold rounded-xl hover:bg-brand-hover shadow-sm transition-colors" type="button">
                  Simpan Perubahan
                </button>
                <button className="px-6 py-2.5 bg-surface text-on-surface border border-outline-variant font-bold rounded-xl hover:bg-surface-container-low transition-colors" type="reset">
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
