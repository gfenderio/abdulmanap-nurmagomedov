"use client"

import React, { useState } from 'react';

type BillingTab = 'riwayat' | 'spp' | 'pengeluaran' | 'tagihan' | 'koperasi';

export default function BillingClient({ role }: { role?: string }) {
  const [activeTab, setActiveTab] = useState<BillingTab>(role === "PARENT" ? 'tagihan' : 'riwayat');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy action handler
  const handleUnduh = () => {
    alert("Memulai unduhan laporan keuangan bulanan (dummy).");
  };

  const handleCatat = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (role === "PARENT") {
    return (
      <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-surface animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-headline-lg font-headline font-bold text-on-surface mb-1">Tagihan Administrasi</h1>
            <p className="text-body-md text-on-surface-variant">Rincian biaya pendidikan Ananda <strong className="text-on-surface">Ahmad Fauzi</strong>.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex flex-row items-center justify-between mb-4">
              <h3 className="text-body-md font-medium text-on-surface-variant">Tagihan Belum Dibayar</h3>
              <div className="p-3 bg-tertiary-container/30 text-tertiary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              </div>
            </div>
            <div>
              <div className="text-display-sm font-bold text-tertiary">Rp 0</div>
              <p className="text-label-sm text-on-surface-variant font-medium mt-2">Semua tagihan lunas hingga Juli 2024</p>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex flex-row items-center justify-between mb-4">
              <h3 className="text-body-md font-medium text-on-surface-variant">Metode Pembayaran Virtual Account</h3>
              <div className="p-3 bg-primary-container/30 text-primary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">account_balance</span>
              </div>
            </div>
            <div>
              <div className="text-display-sm font-bold text-on-surface tracking-widest text-lg">9881 2345 6789</div>
              <p className="text-label-sm text-primary font-medium mt-2">Bank BSI a/n MI Sirojul Falah</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col min-h-[300px]">
          {/* Tabs for PARENT */}
          <div className="flex border-b border-outline-variant px-6 overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('tagihan')}
              className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'tagihan' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Daftar Tagihan
            </button>
            <button 
              onClick={() => setActiveTab('riwayat')}
              className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'riwayat' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Riwayat Pembayaran
            </button>
            <button 
              onClick={() => setActiveTab('koperasi')}
              className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'koperasi' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Toko Koperasi (Buku & Seragam)
            </button>
          </div>

          {activeTab === 'tagihan' && (
            <div className="p-6 flex-1 animate-in fade-in duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-title-lg font-headline font-bold text-on-surface">Tagihan Aktif</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 border border-outline-variant rounded-xl flex justify-between items-center bg-surface hover:bg-surface-container-low transition-colors">
                  <div>
                    <h4 className="font-bold text-body-lg text-primary">SPP Bulan Agustus 2024</h4>
                    <p className="text-label-sm text-on-surface-variant mt-1">Tenggat: 10 Agustus 2024</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-title-lg text-on-surface">Rp 250.000</span>
                    <button onClick={() => alert("Membuka gerbang pembayaran online... (Midtrans Simulator)")} className="px-4 py-2 bg-primary text-on-primary font-bold rounded-xl hover:bg-brand-hover shadow-sm">
                      Bayar Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'riwayat' && (
            <div className="p-6 flex-1 animate-in fade-in duration-300">
              <h3 className="text-title-lg font-headline font-bold text-on-surface mb-6">Riwayat Pembayaran</h3>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-outline-variant text-body-md text-on-surface-variant font-medium bg-surface-container-lowest">
                      <th className="py-4 px-6">Bulan</th>
                      <th className="py-4 px-6">Keterangan</th>
                      <th className="py-4 px-6 text-right">Nominal</th>
                      <th className="py-4 px-6 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-body-md text-on-surface">
                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors">
                      <td className="py-4 px-6 font-medium">Juli 2024</td>
                      <td className="py-4 px-6">SPP Bulan Juli</td>
                      <td className="py-4 px-6 text-right font-medium">Rp 250.000</td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-light text-primary font-bold text-[12px]">Lunas</span>
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors">
                      <td className="py-4 px-6 font-medium">Juni 2024</td>
                      <td className="py-4 px-6">SPP Bulan Juni</td>
                      <td className="py-4 px-6 text-right font-medium">Rp 250.000</td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-light text-primary font-bold text-[12px]">Lunas</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'koperasi' && (
            <div className="p-6 flex-1 animate-in fade-in duration-300">
              <h3 className="text-title-lg font-headline font-bold text-on-surface mb-6">Katalog Buku & Seragam</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-outline-variant rounded-xl flex flex-col gap-3 bg-surface">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-body-lg text-on-surface">Paket Buku Tematik Kelas 6</h4>
                      <p className="text-label-sm text-on-surface-variant mt-1">Semester Ganjil 2024/2025</p>
                    </div>
                    <span className="font-bold text-title-md text-primary">Rp 450.000</span>
                  </div>
                  <button onClick={() => alert("Ditambahkan ke keranjang pembelian.")} className="mt-auto px-4 py-2 border border-primary text-primary font-bold rounded-xl hover:bg-primary-container">
                    Pesan Sekarang
                  </button>
                </div>
                <div className="p-4 border border-outline-variant rounded-xl flex flex-col gap-3 bg-surface">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-body-lg text-on-surface">Seragam Olahraga</h4>
                      <p className="text-label-sm text-on-surface-variant mt-1">Ukuran: L (Laki-laki)</p>
                    </div>
                    <span className="font-bold text-title-md text-primary">Rp 150.000</span>
                  </div>
                  <button onClick={() => alert("Ditambahkan ke keranjang pembelian.")} className="mt-auto px-4 py-2 border border-primary text-primary font-bold rounded-xl hover:bg-primary-container">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-surface animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      {/* Modal Catat Transaksi */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Catat Transaksi Baru</h3>
              <button onClick={closeModal} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Kategori Transaksi</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                  <option value="pemasukan_spp">Pemasukan SPP</option>
                  <option value="operasional">Pengeluaran Operasional</option>
                  <option value="pemeliharaan">Pemeliharaan Fasilitas</option>
                  <option value="lainnya">Lain-lain</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Tanggal</label>
                <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Jumlah (Rp)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-body-md">Rp</span>
                  <input type="number" placeholder="0" className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Keterangan</label>
                <textarea rows={3} placeholder="Detail transaksi..." className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface resize-none"></textarea>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={closeModal} className="px-4 py-2 rounded-xl text-body-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Batal
              </button>
              <button onClick={() => { alert("Transaksi berhasil disimpan (dummy)"); closeModal(); }} className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-md font-bold hover:bg-brand-hover transition-colors shadow-sm">
                Simpan Transaksi
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-headline-lg font-headline font-bold text-on-surface mb-1">Manajemen Keuangan</h1>
          <p className="text-body-md text-on-surface-variant">Ringkasan SPP, Pengeluaran, dan Tunggakan MI Sirojul Falah.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleUnduh}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors font-body text-body-md font-medium"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            Unduh Laporan
          </button>
          <button 
            onClick={handleCatat}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary hover:bg-brand-hover transition-colors font-body text-body-md font-medium shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Catat Transaksi
          </button>
        </div>
      </div>

      {/* Summary Cards Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Total Pendapatan */}
        <div className="bg-surface-bright rounded-2xl border border-outline-variant p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-body-md font-medium text-on-surface-variant">Total Pendapatan (Bulan Ini)</h3>
            <div className="p-3 bg-primary-container/30 text-primary rounded-xl group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            </div>
          </div>
          <div>
            <div className="text-display-sm font-bold text-on-surface">Rp 45.500.000</div>
            <p className="text-label-sm text-primary font-medium mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              +12.5% dari bulan lalu
            </p>
          </div>
        </div>

        {/* Card 2: Saldo Kas */}
        <div className="bg-surface-bright rounded-2xl border border-outline-variant p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-body-md font-medium text-on-surface-variant">Saldo Kas Sekolah</h3>
            <div className="p-3 bg-tertiary-container/30 text-tertiary rounded-xl group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">savings</span>
            </div>
          </div>
          <div>
            <div className="text-display-sm font-bold text-on-surface">Rp 128.750.000</div>
            <p className="text-label-sm text-on-surface-variant font-medium mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">info</span>
              Update terakhir: Hari ini, 08:00
            </p>
          </div>
        </div>

        {/* Card 3: Total Tunggakan */}
        <div className="bg-surface-bright rounded-2xl border border-outline-variant p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-body-md font-medium text-on-surface-variant">Total Tunggakan SPP</h3>
            <div className="p-3 bg-error-container/30 text-error rounded-xl group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">warning</span>
            </div>
          </div>
          <div>
            <div className="text-display-sm font-bold text-on-surface">Rp 5.200.000</div>
            <p className="text-label-sm text-error font-medium mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">group_off</span>
              15 Siswa belum melunasi bulan ini
            </p>
          </div>
        </div>
      </div>

      {/* Content Area: Tabs & Tables */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col min-h-[400px]">
        {/* Tabs */}
        <div className="flex border-b border-outline-variant px-6 overflow-x-auto hide-scrollbar">
          <button 
            onClick={() => setActiveTab('riwayat')}
            className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'riwayat' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
          >
            Transaksi Terakhir
          </button>
          <button 
            onClick={() => setActiveTab('spp')}
            className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'spp' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
          >
            Manajemen SPP
          </button>
          <button 
            onClick={() => setActiveTab('pengeluaran')}
            className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'pengeluaran' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
          >
            Pengeluaran Operasional
          </button>
        </div>

        {/* Tab Content: Transaksi Terakhir */}
        {activeTab === 'riwayat' && (
          <div className="p-6 flex-1 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h3 className="text-title-lg font-headline font-semibold text-on-surface">Riwayat Transaksi</h3>
              <div className="flex gap-2 w-full sm:w-auto">
                <input className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl border border-outline-variant text-body-md text-on-surface bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all" type="date" />
                <button className="p-1.5 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-outline-variant text-body-md text-on-surface-variant font-medium bg-surface-container-lowest">
                    <th className="py-4 px-4">ID Transaksi</th>
                    <th className="py-4 px-4">Tanggal</th>
                    <th className="py-4 px-4">Keterangan</th>
                    <th className="py-4 px-4">Kategori</th>
                    <th className="py-4 px-4 text-right">Jumlah</th>
                    <th className="py-4 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="text-body-md text-on-surface">
                  <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-4 px-4 font-bold">TRX-0921</td>
                    <td className="py-4 px-4">15 Okt 2023</td>
                    <td className="py-4 px-4">Pembayaran SPP Kelas 5A - Budi Santoso</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-primary-container/30 text-primary border border-primary/20">
                        Pemasukan SPP
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-green-600">+ Rp 250.000</td>
                    <td className="py-4 px-4 text-center">
                      <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-4 px-4 font-bold">TRX-0920</td>
                    <td className="py-4 px-4">14 Okt 2023</td>
                    <td className="py-4 px-4">Pembelian ATK Kantor</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-surface-container-high text-on-surface-variant border border-outline-variant">
                        Operasional
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-error">- Rp 1.200.000</td>
                    <td className="py-4 px-4 text-center">
                      <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-4 px-4 font-bold">TRX-0919</td>
                    <td className="py-4 px-4">14 Okt 2023</td>
                    <td className="py-4 px-4">Pembayaran SPP Kelas 3B - Siti Aminah</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-primary-container/30 text-primary border border-primary/20">
                        Pemasukan SPP
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-green-600">+ Rp 250.000</td>
                    <td className="py-4 px-4 text-center">
                      <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-4 px-4 font-bold">TRX-0918</td>
                    <td className="py-4 px-4">12 Okt 2023</td>
                    <td className="py-4 px-4">Perbaikan Fasilitas Kelas 1</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-secondary-container/30 text-secondary border border-secondary/20">
                        Pemeliharaan
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-error">- Rp 3.500.000</td>
                    <td className="py-4 px-4 text-center">
                      <span className="material-symbols-outlined text-secondary text-[20px]">pending</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Manajemen SPP */}
        {activeTab === 'spp' && (
          <div className="p-6 flex-1 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h3 className="text-title-lg font-headline font-semibold text-on-surface">Daftar Tagihan SPP</h3>
              <div className="flex gap-2">
                <select className="px-3 py-1.5 rounded-xl border border-outline-variant text-body-md text-on-surface bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all">
                  <option value="all">Semua Kelas</option>
                  <option value="1">Kelas 1</option>
                  <option value="2">Kelas 2</option>
                </select>
                <button 
                  onClick={() => alert("Mengirim pesan pengingat ke seluruh wali murid (dummy).")}
                  className="px-4 py-1.5 rounded-xl bg-tertiary-container/30 text-tertiary font-medium text-body-md hover:bg-tertiary hover:text-on-tertiary transition-colors"
                >
                  Kirim Pengingat
                </button>
              </div>
            </div>
            
            <div className="border border-outline-variant rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-surface-container-low border-b border-outline-variant">
                  <tr>
                    <th className="p-4 text-body-md font-medium text-on-surface-variant">Siswa</th>
                    <th className="p-4 text-body-md font-medium text-on-surface-variant">Kelas</th>
                    <th className="p-4 text-body-md font-medium text-on-surface-variant">Bulan</th>
                    <th className="p-4 text-body-md font-medium text-on-surface-variant text-right">Nominal</th>
                    <th className="p-4 text-body-md font-medium text-on-surface-variant text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/50">
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-4 text-body-md text-on-surface font-bold">Andi Saputra</td>
                    <td className="p-4 text-body-md text-on-surface">Kelas 1A</td>
                    <td className="p-4 text-body-md text-on-surface">Oktober 2023</td>
                    <td className="p-4 text-body-md font-bold text-on-surface text-right">Rp 250.000</td>
                    <td className="p-4 text-center">
                      <span className="px-2 py-1 bg-error-container/30 text-error rounded-md text-[12px] font-bold">Belum Lunas</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-4 text-body-md text-on-surface font-bold">Rina Gunawan</td>
                    <td className="p-4 text-body-md text-on-surface">Kelas 2B</td>
                    <td className="p-4 text-body-md text-on-surface">Oktober 2023</td>
                    <td className="p-4 text-body-md font-bold text-on-surface text-right">Rp 250.000</td>
                    <td className="p-4 text-center">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary rounded-md text-[12px] font-bold">Lunas</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Pengeluaran */}
        {activeTab === 'pengeluaran' && (
          <div className="p-6 flex-1 animate-in fade-in duration-300 flex flex-col justify-center items-center text-center">
            <div className="p-4 bg-secondary-container/20 text-secondary-container-on rounded-full mb-4">
              <span className="material-symbols-outlined text-[48px]">account_balance</span>
            </div>
            <h3 className="text-title-lg font-bold text-on-surface mb-2">Manajemen Pengeluaran</h3>
            <p className="text-body-md text-on-surface-variant max-w-md mb-6">
              Di sini Anda dapat melihat dan mencatat laporan biaya listrik, ATK, gaji staf honorer, dan kebutuhan operasional sekolah lainnya.
            </p>
            <button 
              onClick={handleCatat}
              className="px-6 py-2.5 rounded-xl bg-surface-container-high text-on-surface font-bold hover:bg-outline-variant transition-colors"
            >
              Catat Pengeluaran Baru
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
