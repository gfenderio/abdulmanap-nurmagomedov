"use client"

import React, { useState } from 'react';

type TabType = 'profil' | 'users' | 'academic_year' | 'preferences';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('profil');

  return (
    <div className="flex-1 overflow-y-auto pt-6 pb-12 px-4 md:px-8 xl:px-12 w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-headline-lg font-headline font-bold text-on-surface mb-2 tracking-tight">Pengaturan Sistem</h2>
        <p className="text-body-lg text-on-surface-variant">Kelola konfigurasi madrasah, manajemen pengguna, dan preferensi aplikasi.</p>
      </div>

      {/* In-Page Navigation Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-outline-variant mb-8 space-x-8">
        <button 
          onClick={() => setActiveTab('profil')}
          className={`pb-4 border-b-2 font-medium text-body-md px-1 whitespace-nowrap transition-colors ${activeTab === 'profil' ? 'border-primary text-primary font-semibold' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
        >
          Profil Madrasah
        </button>
        <button 
          onClick={() => setActiveTab('users')}
          className={`pb-4 border-b-2 font-medium text-body-md px-1 whitespace-nowrap transition-colors ${activeTab === 'users' ? 'border-primary text-primary font-semibold' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
        >
          Manajemen User
        </button>
        <button 
          onClick={() => setActiveTab('academic_year')}
          className={`pb-4 border-b-2 font-medium text-body-md px-1 whitespace-nowrap transition-colors ${activeTab === 'academic_year' ? 'border-primary text-primary font-semibold' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
        >
          Tahun Ajaran
        </button>
        <button 
          onClick={() => setActiveTab('preferences')}
          className={`pb-4 border-b-2 font-medium text-body-md px-1 whitespace-nowrap transition-colors ${activeTab === 'preferences' ? 'border-primary text-primary font-semibold' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
        >
          Preferensi Sistem
        </button>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Area (Bento-style Cards) */}
        <div className="lg:col-span-2 space-y-8">
          
          {activeTab === 'profil' && (
            <>
              {/* Identitas Madrasah Card */}
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="px-6 py-5 border-b border-outline-variant bg-surface-bright/50 flex justify-between items-center">
                  <h3 className="text-title-lg font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">domain</span>
                    Identitas Madrasah
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">Nama Madrasah</label>
                      <p className="text-body-lg font-medium text-on-surface">MI Sirojul Falah</p>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">NSM</label>
                      <p className="text-body-lg font-medium text-on-surface">111232010045</p>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">NPSN</label>
                      <p className="text-body-lg font-medium text-on-surface">60728344</p>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">Status Akreditasi</label>
                      <p className="text-body-lg font-medium text-on-surface">A (Sangat Baik)</p>
                    </div>
                    <div className="md:col-span-2 space-y-1 pt-2 border-t border-outline-variant/30">
                      <label className="block text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">Alamat Lengkap</label>
                      <p className="text-body-lg font-medium text-on-surface">Jl. Cicadas Gn. Putri Bogor, Jawa Barat</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontak & Sosial Media Card */}
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
                <div className="px-6 py-5 border-b border-outline-variant bg-surface-bright/50">
                  <h3 className="text-title-lg font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">contact_phone</span>
                    Kontak & Informasi
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">Email Resmi</label>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-outline text-[18px]">mail</span>
                        <p className="text-body-lg font-medium text-on-surface">info@misirojulfalah.sch.id</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">Nomor Telepon</label>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-outline text-[18px]">call</span>
                        <p className="text-body-lg font-medium text-on-surface">(021) 867xxxx</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">Website</label>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-outline text-[18px]">language</span>
                        <p className="text-body-lg font-medium text-on-surface">https://misirojulfalah.sch.id</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'users' && (
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="px-6 py-5 border-b border-outline-variant bg-surface-bright/50 flex justify-between items-center">
                <h3 className="text-title-lg font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">manage_accounts</span>
                  Manajemen User
                </h3>
                <button className="px-4 py-2 bg-primary-container text-primary rounded-lg font-medium text-sm hover:bg-primary hover:text-on-primary transition-colors">
                  + Tambah User
                </button>
              </div>
              <div className="p-6">
                <p className="text-on-surface-variant text-body-md mb-4">Pengaturan user dan role akses untuk Guru, Admin, dan Staf.</p>
                <div className="border border-outline-variant rounded-xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low border-b border-outline-variant">
                      <tr>
                        <th className="p-4 text-label-md text-on-surface-variant">Nama</th>
                        <th className="p-4 text-label-md text-on-surface-variant">Role</th>
                        <th className="p-4 text-label-md text-on-surface-variant">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/50">
                      <tr>
                        <td className="p-4 text-body-md text-on-surface font-medium">Bapak Budi</td>
                        <td className="p-4"><span className="px-2 py-1 bg-secondary-container/50 text-secondary-container-on rounded-md text-[12px] font-bold">TEACHER</span></td>
                        <td className="p-4"><span className="text-primary text-[12px] font-bold">Aktif</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-body-md text-on-surface font-medium">Ahmad Fulan</td>
                        <td className="p-4"><span className="px-2 py-1 bg-primary-container/50 text-primary-container-on rounded-md text-[12px] font-bold">ADMIN</span></td>
                        <td className="p-4"><span className="text-primary text-[12px] font-bold">Aktif</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'academic_year' && (
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="px-6 py-5 border-b border-outline-variant bg-surface-bright/50">
                <h3 className="text-title-lg font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">event</span>
                  Tahun Ajaran Aktif
                </h3>
              </div>
              <div className="p-6">
                <div className="p-4 border border-primary/30 bg-primary/5 rounded-xl flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-body-lg text-primary">2024/2025 - Semester Ganjil</h4>
                    <p className="text-label-sm text-on-surface-variant mt-1">Berjalan sejak Juli 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-primary text-on-primary rounded-full text-[12px] font-bold">Aktif</span>
                </div>
                <button className="w-full py-3 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant font-medium hover:border-primary hover:text-primary transition-colors">
                  Buat Tahun Ajaran Baru (Tutup Buku)
                </button>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="px-6 py-5 border-b border-outline-variant bg-surface-bright/50">
                <h3 className="text-title-lg font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">tune</span>
                  Preferensi Sistem
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-body-md text-on-surface">Notifikasi Email Otomatis</h4>
                    <p className="text-label-sm text-on-surface-variant">Kirim email tagihan dan laporan nilai secara otomatis.</p>
                  </div>
                  <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full"></div>
                  </div>
                </div>
                <hr className="border-outline-variant/50" />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-body-md text-on-surface">Maintenance Mode</h4>
                    <p className="text-label-sm text-on-surface-variant">Blokir akses untuk wali murid selama proses maintenance.</p>
                  </div>
                  <div className="w-12 h-6 bg-surface-container-high rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-outline rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Side Panel (Logo & Map) */}
        <div className="space-y-8">
          {/* Logo Setting Card */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 text-center">
            <h3 className="text-title-lg font-semibold text-on-surface mb-6 text-left">Logo Institusi</h3>
            <div className="relative w-40 h-40 mx-auto mb-6 bg-surface-container-low rounded-2xl border-2 border-dashed border-outline-variant flex items-center justify-center group cursor-pointer hover:border-primary transition-colors overflow-hidden p-4">
              <img alt="Logo MI Sirojul Falah" className="w-full h-full object-contain group-hover:opacity-50 transition-opacity" src="/logo.png" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-primary text-3xl mb-1">upload</span>
                <span className="text-xs font-medium text-primary">Ubah Logo</span>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant mb-4 px-4">
              Format disarankan: PNG transparan. Ukuran maksimal 2MB. Resolusi minimal 500x500px.
            </p>
          </div>
          
          {/* Info Widget */}
          <div className="bg-brand-light rounded-2xl border border-primary-container/30 p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                <span className="material-symbols-outlined">info</span>
              </div>
              <div>
                <h4 className="font-semibold text-on-surface mb-1 text-sm">Pembaruan Sistem</h4>
                <p className="text-sm text-on-surface-variant mb-3">Sistem berada pada versi terbaru (v2.4.1). Data tersinkronisasi otomatis dengan server pusat.</p>
                <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                  Lihat Catatan Rilis <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
