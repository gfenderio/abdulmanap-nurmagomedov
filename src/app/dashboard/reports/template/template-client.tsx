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
    <div className="flex flex-col min-h-screen bg-surface-container-low py-8 print:py-0">
      <style>{`
        @media print {
          @page { 
            size: A4 portrait; 
            margin: 0; 
          }
          body {
            background: white;
          }
        }
      `}</style>
      {/* Top Action Bar - Hidden during print */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <button onClick={handleDownload} className="flex justify-center items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-brand-hover transition-colors shadow-lg">
          <Download className="w-5 h-5" />
          Unduh PDF
        </button>
        <button onClick={handlePrint} className="flex justify-center items-center gap-2 px-4 py-2 bg-surface border border-outline-variant rounded-xl text-on-surface-variant font-bold hover:bg-surface-container-lowest transition-colors shadow-lg">
          <Printer className="w-5 h-5" />
          Print
        </button>
      </div>

      {/* Printable Area - Exact A4 Container */}
      <div className="flex-1 w-[210mm] min-h-[297mm] mx-auto bg-white p-[20mm] print:p-[20mm] print:m-0 shadow-2xl print:shadow-none relative">
        
        {/* Kop Surat Resmi */}
        <div className="relative border-b-[3px] border-black pb-4 mb-1">
          <div className="absolute border-b border-black w-full -bottom-1"></div>
          <div className="flex items-center justify-center relative">
            <img src="/logo.png" alt="Logo MI" className="w-24 h-24 object-contain absolute left-0" />
            <div className="flex flex-col items-center text-center px-28">
              <h1 className="text-[18px] font-bold text-black uppercase tracking-wide leading-tight">Yayasan Pendidikan Islam Sirojul Falah</h1>
              <h2 className="text-[24px] font-black text-black uppercase tracking-widest leading-tight">Madrasah Ibtidaiyah Sirojul Falah</h2>
              <p className="text-[12px] text-black font-medium mt-1">NPSN: 20278912 | Akreditasi: A</p>
              <p className="text-[12px] text-black">Jl. Pahlawan No. 45, RT 01/RW 03, Empang, Bogor Selatan, Kota Bogor, Jawa Barat</p>
              <p className="text-[12px] text-black">Telp: (0251) 834567 | Email: info@misirojulfalah.sch.id</p>
            </div>
          </div>
        </div>

        {role !== "ADMIN" ? (
          <>
            {/* Student Report Title */}
            <div className="text-center mb-8 mt-6">
              <h3 className="text-[16px] font-bold text-black uppercase underline underline-offset-4 mb-1">Laporan Hasil Belajar Siswa (Rapor)</h3>
              <p className="text-[14px] text-black">Semester Ganjil | Tahun Ajaran 2024/2025</p>
            </div>

            {/* Student Meta Data */}
            <div className="grid grid-cols-12 gap-x-4 gap-y-1 mb-8 text-[14px] text-black">
              <div className="col-span-3">Nama Siswa</div>
              <div className="col-span-9 font-bold">: Ahmad Fauzi</div>
              
              <div className="col-span-3">NISN / NIS</div>
              <div className="col-span-9 font-bold">: 0012345678 / 2021001</div>
              
              <div className="col-span-3">Kelas</div>
              <div className="col-span-9 font-bold">: 6A - Al-Farabi</div>
              
              <div className="col-span-3">Wali Kelas</div>
              <div className="col-span-9 font-bold">: Bpk. Budi Santoso, S.Pd</div>
            </div>

            {/* Student Report Table */}
            <div className="mb-12">
              <table className="w-full text-left border-collapse border border-black text-[14px]">
                <thead>
                  <tr>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center w-12">No</th>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center">Mata Pelajaran</th>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center w-28">KKM</th>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center w-28">Nilai Akhir</th>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center w-24">Predikat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3 text-black border border-black text-center">1</td>
                    <td className="py-2 px-3 text-black border border-black">Matematika</td>
                    <td className="py-2 px-3 text-black border border-black text-center">75</td>
                    <td className="py-2 px-3 text-black border border-black text-center font-bold">95</td>
                    <td className="py-2 px-3 text-black border border-black text-center font-bold">A</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-black border border-black text-center">2</td>
                    <td className="py-2 px-3 text-black border border-black">Bahasa Indonesia</td>
                    <td className="py-2 px-3 text-black border border-black text-center">75</td>
                    <td className="py-2 px-3 text-black border border-black text-center font-bold">88</td>
                    <td className="py-2 px-3 text-black border border-black text-center font-bold">B</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-black border border-black text-center">3</td>
                    <td className="py-2 px-3 text-black border border-black">Ilmu Pengetahuan Alam (IPA)</td>
                    <td className="py-2 px-3 text-black border border-black text-center">75</td>
                    <td className="py-2 px-3 text-black border border-black text-center font-bold">90</td>
                    <td className="py-2 px-3 text-black border border-black text-center font-bold">A</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-black border border-black text-center">4</td>
                    <td className="py-2 px-3 text-black border border-black">Pendidikan Agama Islam</td>
                    <td className="py-2 px-3 text-black border border-black text-center">75</td>
                    <td className="py-2 px-3 text-black border border-black text-center font-bold">94</td>
                    <td className="py-2 px-3 text-black border border-black text-center font-bold">A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Signatures Area for Student Report */}
            <div className="flex justify-between items-start mt-16 pt-8 text-[14px]">
              <div className="text-center w-48">
                <p className="text-black mb-20">Mengetahui,<br/>Orang Tua / Wali Siswa</p>
                <div className="border-b border-black w-full mt-4"></div>
              </div>
              <div className="text-center w-48">
                <p className="text-black mb-20">Bogor, 18 Juli 2024<br/>Wali Kelas</p>
                <p className="font-bold text-black border-b border-black inline-block w-full pb-1">Bpk. Budi Santoso, S.Pd</p>
                <p className="text-black mt-1">NIP. 19800510 200801 1 015</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Report Title */}
            <div className="text-center mb-8 mt-6">
              <h3 className="text-[16px] font-bold text-black uppercase underline underline-offset-4 mb-1">Laporan Keuangan Bulanan</h3>
              <p className="text-[14px] text-black">Periode: Juli 2024</p>
            </div>

            {/* Report Meta Data */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-[14px] text-black">
              <div>
                <p className="text-black font-bold">Dicetak Oleh</p>
                <p className="text-black">: Administrator Sistem</p>
              </div>
              <div>
                <p className="text-black font-bold">Tanggal Cetak</p>
                <p className="text-black">: 18 Juli 2024, 10:00 WIB</p>
              </div>
            </div>

            {/* Report Data Table */}
            <div className="mb-12">
              <table className="w-full text-left border-collapse border border-black text-[14px]">
                <thead>
                  <tr>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center w-12">No</th>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center">Tanggal</th>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center">Uraian Transaksi</th>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center">Jenis</th>
                    <th className="py-2 px-3 font-bold text-black border border-black text-center">Nominal</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_FINANCIAL_REPORT.map((row) => (
                    <tr key={row.no}>
                      <td className="py-2 px-3 text-black border border-black text-center">{row.no}</td>
                      <td className="py-2 px-3 text-black border border-black whitespace-nowrap">{row.date}</td>
                      <td className="py-2 px-3 text-black border border-black">{row.description}</td>
                      <td className="py-2 px-3 text-black border border-black text-center">
                        {row.type}
                      </td>
                      <td className="py-2 px-3 text-black border border-black text-right font-mono font-bold tracking-tight">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4} className="py-3 px-3 text-right font-bold text-black border border-black">
                      Total Saldo Akhir
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-black border border-black font-mono tracking-tight">
                      Rp 32.750.000
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Signatures Area */}
            <div className="flex justify-between items-start mt-16 pt-8 text-[14px]">
              <div className="text-center w-56">
                <p className="text-black mb-20">Mengetahui,<br/>Kepala Madrasah</p>
                <p className="font-bold text-black border-b border-black inline-block w-full pb-1">H. Abdul Manap, M.Pd.</p>
                <p className="text-black mt-1">NIP. 19650412 199003 1 005</p>
              </div>
              <div className="text-center w-56">
                <p className="text-black mb-20">Bogor, 18 Juli 2024<br/>Bendahara BOS</p>
                <p className="font-bold text-black border-b border-black inline-block w-full pb-1">Siti Nurhaliza, S.E.</p>
                <p className="text-black mt-1">NIP. 19820510 200801 2 015</p>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  )
}
