"use client"

import React from 'react'
import { MOCK_FINANCIAL_REPORT } from '@/lib/mock-data'
import { Printer, Download, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TemplateClient({ role }: { role?: string }) {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    alert("Proses konversi ke PDF berjalan... (simulasi)")
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface-container-lowest">
      {/* Top Action Bar - Hidden during print */}
      <div className="print:hidden sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
        <Link href="/dashboard/reports" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-body-md">
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Pusat Laporan
        </Link>
        <div className="flex items-center gap-3">
          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant rounded-xl text-on-surface-variant font-bold hover:bg-surface-container-low transition-colors shadow-sm">
            <Printer className="w-5 h-5" />
            Print Dokumen
          </button>
          <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-brand-hover transition-colors shadow-sm">
            <Download className="w-5 h-5" />
            Unduh PDF
          </button>
        </div>
      </div>

      {/* Printable Area - Centered A4-like container */}
      <div className="flex-1 w-full max-w-[900px] mx-auto p-8 md:p-16 bg-surface-container-lowest print:p-0 print:max-w-none print:shadow-none shadow-xl my-8 print:my-0 rounded-2xl print:rounded-none">
        
        {/* Report Header */}
        <div className="flex items-center gap-6 border-b-2 border-on-surface pb-6 mb-8">
          <img src="/logo.png" alt="Logo MI" className="w-20 h-20 object-contain" />
          <div className="flex flex-col">
            <h1 className="text-headline-sm font-headline font-black text-on-surface tracking-tight uppercase">Madrasah Ibtidaiyah Sirojul Falah</h1>
            <p className="text-body-md text-on-surface-variant font-medium">NPSN: 20278912 | Akreditasi: A</p>
            <p className="text-body-sm text-on-surface-variant">Jl. Pahlawan No. 45, Bogor, Jawa Barat. Telp: (0251) 834567</p>
          </div>
        </div>

        {role !== "ADMIN" ? (
          <>
            {/* Student Report Title */}
            <div className="text-center mb-10">
              <h2 className="text-title-lg font-headline font-bold text-on-surface uppercase tracking-wider mb-2">Laporan Hasil Belajar Siswa (Rapor)</h2>
              <p className="text-body-md text-on-surface-variant">Semester Ganjil | Tahun Ajaran 2024/2025</p>
            </div>

            {/* Student Meta Data */}
            <div className="grid grid-cols-2 gap-4 mb-8 bg-surface-container-low p-6 rounded-xl border border-outline-variant print:border-none print:bg-transparent print:p-0">
              <div className="space-y-1">
                <p className="text-label-sm text-outline font-bold">Nama Lengkap</p>
                <p className="text-body-md font-bold text-on-surface">Ahmad Fauzi</p>
              </div>
              <div className="space-y-1">
                <p className="text-label-sm text-outline font-bold">Kelas</p>
                <p className="text-body-md font-bold text-on-surface">6A - Al-Farabi</p>
              </div>
              <div className="space-y-1">
                <p className="text-label-sm text-outline font-bold">NISN</p>
                <p className="text-body-md font-bold text-on-surface">0012345678</p>
              </div>
              <div className="space-y-1">
                <p className="text-label-sm text-outline font-bold">Wali Kelas</p>
                <p className="text-body-md font-bold text-on-surface">Bpk. Budi Santoso, S.Pd</p>
              </div>
            </div>

            {/* Student Report Table */}
            <div className="mb-12 overflow-hidden border border-outline-variant rounded-xl print:border-none print:rounded-none">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low print:bg-transparent">
                  <tr>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant w-16 text-center">No</th>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant">Mata Pelajaran</th>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant text-center">Kriteria Kelulusan</th>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant text-center">Nilai Akhir</th>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant text-center">Predikat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant print:divide-on-surface-variant/30">
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="py-3 px-4 text-body-md text-on-surface text-center">1</td>
                    <td className="py-3 px-4 text-body-md text-on-surface font-medium">Matematika</td>
                    <td className="py-3 px-4 text-body-md text-on-surface text-center">75</td>
                    <td className="py-3 px-4 text-body-md text-primary text-center font-bold">95</td>
                    <td className="py-3 px-4 text-body-md text-on-surface text-center font-bold">A</td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="py-3 px-4 text-body-md text-on-surface text-center">2</td>
                    <td className="py-3 px-4 text-body-md text-on-surface font-medium">Bahasa Indonesia</td>
                    <td className="py-3 px-4 text-body-md text-on-surface text-center">75</td>
                    <td className="py-3 px-4 text-body-md text-primary text-center font-bold">88</td>
                    <td className="py-3 px-4 text-body-md text-on-surface text-center font-bold">B</td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="py-3 px-4 text-body-md text-on-surface text-center">3</td>
                    <td className="py-3 px-4 text-body-md text-on-surface font-medium">Ilmu Pengetahuan Alam (IPA)</td>
                    <td className="py-3 px-4 text-body-md text-on-surface text-center">75</td>
                    <td className="py-3 px-4 text-body-md text-primary text-center font-bold">90</td>
                    <td className="py-3 px-4 text-body-md text-on-surface text-center font-bold">A</td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="py-3 px-4 text-body-md text-on-surface text-center">4</td>
                    <td className="py-3 px-4 text-body-md text-on-surface font-medium">Pendidikan Agama Islam</td>
                    <td className="py-3 px-4 text-body-md text-on-surface text-center">75</td>
                    <td className="py-3 px-4 text-body-md text-primary text-center font-bold">94</td>
                    <td className="py-3 px-4 text-body-md text-on-surface text-center font-bold">A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Signatures Area for Student Report */}
            <div className="flex justify-between items-start mt-20 pt-8">
              <div className="text-center">
                <p className="text-body-md text-on-surface mb-20">Orang Tua / Wali Siswa</p>
                <p className="font-bold text-title-md text-on-surface border-b border-on-surface inline-block pb-1">........................................</p>
              </div>
              <div className="text-center">
                <p className="text-body-md text-on-surface mb-20">Bogor, 18 Juli 2024<br/>Wali Kelas</p>
                <p className="font-bold text-title-md text-on-surface border-b border-on-surface inline-block pb-1">Bpk. Budi Santoso, S.Pd</p>
                <p className="text-body-sm text-on-surface-variant mt-1">NIP. 19800510 200801 1 015</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Report Title */}
            <div className="text-center mb-10">
              <h2 className="text-title-lg font-headline font-bold text-on-surface uppercase tracking-wider mb-2">Laporan Keuangan Bulanan</h2>
              <p className="text-body-md text-on-surface-variant">Periode: Juli 2024</p>
            </div>

            {/* Report Meta Data */}
            <div className="grid grid-cols-2 gap-4 mb-8 bg-surface-container-low p-6 rounded-xl border border-outline-variant print:border-none print:bg-transparent print:p-0">
              <div>
                <p className="text-label-sm text-outline font-bold">Dicetak Oleh</p>
                <p className="text-body-md font-bold text-on-surface">Administrator Sistem</p>
              </div>
              <div>
                <p className="text-label-sm text-outline font-bold">Tanggal Cetak</p>
                <p className="text-body-md font-bold text-on-surface">18 Juli 2024, 10:00 WIB</p>
              </div>
            </div>

            {/* Report Data Table */}
            <div className="mb-12 overflow-hidden border border-outline-variant rounded-xl print:border-none print:rounded-none">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low print:bg-transparent">
                  <tr>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant w-16 text-center">No</th>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant">Tanggal</th>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant">Uraian Transaksi</th>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant">Jenis</th>
                    <th className="py-3 px-4 font-bold text-body-md text-on-surface-variant border-b border-outline-variant text-right">Nominal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant print:divide-on-surface-variant/30">
                  {MOCK_FINANCIAL_REPORT.map((row) => (
                    <tr key={row.no} className="hover:bg-surface-container-lowest transition-colors print:hover:bg-transparent">
                      <td className="py-3 px-4 text-body-md text-on-surface text-center">{row.no}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface whitespace-nowrap">{row.date}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface font-medium">{row.description}</td>
                      <td className="py-3 px-4 text-body-md">
                        <span className={`px-2 py-1 rounded font-bold text-label-sm ${row.type === 'Pemasukan' ? 'text-primary' : 'text-error'} print:text-on-surface print:font-medium print:p-0`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-body-md text-on-surface text-right font-mono font-bold tracking-tight">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-surface-container-low print:bg-transparent">
                  <tr>
                    <td colSpan={4} className="py-4 px-4 text-right font-bold text-body-md text-on-surface border-t border-outline-variant">
                      Total Saldo Akhir
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-body-md text-primary border-t border-outline-variant font-mono tracking-tight print:text-on-surface">
                      Rp 32.750.000
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Signatures Area */}
            <div className="flex justify-between items-start mt-20 pt-8">
              <div className="text-center">
                <p className="text-body-md text-on-surface mb-20">Mengetahui,<br/>Kepala Madrasah</p>
                <p className="font-bold text-title-md text-on-surface border-b border-on-surface inline-block pb-1">H. Abdul Manap, M.Pd.</p>
                <p className="text-body-sm text-on-surface-variant mt-1">NIP. 19650412 199003 1 005</p>
              </div>
              <div className="text-center">
                <p className="text-body-md text-on-surface mb-20">Bogor, 18 Juli 2024<br/>Bendahara BOS</p>
                <p className="font-bold text-title-md text-on-surface border-b border-on-surface inline-block pb-1">Siti Nurhaliza, S.E.</p>
                <p className="text-body-sm text-on-surface-variant mt-1">NIP. 19820510 200801 2 015</p>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  )
}
