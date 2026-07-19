"use client"

import { useState } from "react"
import Link from "next/link"
import { ClientAlertButton } from "@/components/ui/ClientAlertButton"
import { RevenueAreaChart, AttendanceDonutChart } from "@/components/dashboard/admin-charts"
import { MOCK_ACTIVITIES } from "@/lib/mock-data"

export function AdminDashboardView() {
  // null = overview (default charts), or 'students', 'attendance', 'staff', 'spp'
  const [activeTab, setActiveTab] = useState<string | null>(null)

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-headline-lg font-headline font-bold text-on-surface tracking-tight mb-2">Ikhtisar Madrasah</h2>
          <p className="text-on-surface-variant text-base max-w-2xl">Pantau performa akademik, kehadiran, dan sirkulasi keuangan hari ini.</p>
        </div>
        {activeTab && (
          <button 
            onClick={() => setActiveTab(null)}
            className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant rounded-lg text-label-sm font-bold text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Kembali ke Ikhtisar
          </button>
        )}
      </div>

      {/* 1. Stat Cards (Clickable) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <button 
          onClick={() => setActiveTab('students')}
          className={`text-left rounded-2xl p-5 shadow-sm border flex flex-col justify-between transition-colors ${
            activeTab === 'students' 
            ? 'bg-brand/10 border-brand' 
            : 'bg-surface-container-lowest border-outline-variant hover:border-brand/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Total Siswa</span>
            <span className="material-symbols-outlined text-brand text-[20px]">group</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-on-surface">842</div>
            <p className="text-label-sm text-brand font-medium mt-1">↑ 2.4% vs bulan lalu</p>
          </div>
        </button>

        <button 
          onClick={() => setActiveTab('attendance')}
          className={`text-left rounded-2xl p-5 shadow-sm border flex flex-col justify-between transition-colors ${
            activeTab === 'attendance' 
            ? 'bg-emerald-600/10 border-emerald-600' 
            : 'bg-surface-container-lowest border-outline-variant hover:border-emerald-600/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Kehadiran Hari Ini</span>
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">how_to_reg</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-on-surface">92.6%</div>
            <p className="text-label-sm text-emerald-600 font-medium mt-1">780 siswa hadir</p>
          </div>
        </button>

        <button 
          onClick={() => setActiveTab('staff')}
          className={`text-left rounded-2xl p-5 shadow-sm border flex flex-col justify-between transition-colors ${
            activeTab === 'staff' 
            ? 'bg-tertiary/10 border-tertiary' 
            : 'bg-surface-container-lowest border-outline-variant hover:border-tertiary/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Guru & Staf</span>
            <span className="material-symbols-outlined text-tertiary text-[20px]">badge</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-on-surface">45</div>
            <p className="text-label-sm text-on-surface-variant font-medium mt-1">100% formasi terisi</p>
          </div>
        </button>

        <button 
          onClick={() => setActiveTab('spp')}
          className={`text-left rounded-2xl p-5 shadow-sm border flex flex-col justify-between transition-colors ${
            activeTab === 'spp' 
            ? 'bg-brand/10 border-brand' 
            : 'bg-surface-container-lowest border-outline-variant hover:border-brand/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Target SPP</span>
            <span className="material-symbols-outlined text-brand text-[20px]">account_balance_wallet</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-on-surface">85%</div>
            <p className="text-label-sm text-brand font-medium mt-1">Rp 42.5J / 50J</p>
          </div>
        </button>
      </div>

      {/* Dynamic Content Area */}
      {!activeTab ? (
        <>
          {/* 2. Charts Area */}
          <div className="grid gap-6 md:grid-cols-3 mb-6 animate-in fade-in duration-300">
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-title-md font-bold text-on-surface">Tren Pemasukan SPP</h3>
                <Link href="/dashboard/reports" className="text-label-sm font-bold text-brand hover:underline">Detail Laporan</Link>
              </div>
              <p className="text-label-sm text-on-surface-variant">Realisasi pembayaran selama semester berjalan.</p>
              <RevenueAreaChart />
            </div>
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 flex flex-col">
              <h3 className="text-title-md font-bold text-on-surface mb-2">Distribusi Kehadiran</h3>
              <p className="text-label-sm text-on-surface-variant">Statistik harian absensi siswa.</p>
              <AttendanceDonutChart />
            </div>
          </div>

          {/* 3. Bottom Row: Quick Access & Recent Activity */}
          <div className="grid gap-6 md:grid-cols-3 animate-in fade-in duration-300">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6">
              <h3 className="text-title-md font-bold text-on-surface mb-4">Akses Cepat</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/dashboard/students" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors text-on-surface-variant group border border-outline-variant">
                  <span className="material-symbols-outlined text-[24px] text-brand group-hover:scale-110 transition-transform">person_add</span>
                  <span className="text-label-sm font-bold">Data Siswa</span>
                </Link>
                <Link href="/dashboard/classes" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors text-on-surface-variant group border border-outline-variant">
                  <span className="material-symbols-outlined text-[24px] text-tertiary group-hover:scale-110 transition-transform">meeting_room</span>
                  <span className="text-label-sm font-bold">Ruang Kelas</span>
                </Link>
                <Link href="/dashboard/academic" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors text-on-surface-variant group border border-outline-variant">
                  <span className="material-symbols-outlined text-[24px] text-secondary group-hover:scale-110 transition-transform">history_edu</span>
                  <span className="text-label-sm font-bold">Akademik</span>
                </Link>
                <Link href="/dashboard/settings" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors text-on-surface-variant group border border-outline-variant">
                  <span className="material-symbols-outlined text-[24px] text-error group-hover:scale-110 transition-transform">settings</span>
                  <span className="text-label-sm font-bold">Sistem</span>
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col">
              <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest rounded-t-2xl">
                <h3 className="text-title-md font-bold text-on-surface">Aktivitas Terbaru</h3>
                <ClientAlertButton alertMessage="Menampilkan seluruh log aktivitas (dummy)" className="text-label-sm text-brand hover:underline font-bold">Lihat Semua</ClientAlertButton>
              </div>
              <div className="p-0 flex-1 overflow-y-auto">
                <div className="divide-y divide-outline-variant">
                  {MOCK_ACTIVITIES.map((item) => (
                    <div key={item.id} className="flex items-start gap-4 p-4 hover:bg-surface-container-low transition-colors">
                      <div className={`p-2 rounded-full shrink-0 ${item.bg} ${item.color}`}>
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-body-md text-on-surface leading-snug">
                          <span className="font-bold">{item.user}</span> {item.action} <span className="font-bold">{item.target}</span>
                        </p>
                        <p className="text-label-sm text-on-surface-variant mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-title-lg font-bold text-on-surface">
              {activeTab === 'students' && 'Data Ringkasan Siswa'}
              {activeTab === 'attendance' && 'Log Kehadiran Harian'}
              {activeTab === 'staff' && 'Daftar Formasi Guru & Staf'}
              {activeTab === 'spp' && 'Rincian Pembayaran SPP'}
            </h3>
            <Link href={`/dashboard/${activeTab === 'students' ? 'students' : activeTab === 'staff' ? 'classes' : activeTab === 'spp' ? 'billing' : 'reports'}`} className="px-4 py-2 bg-brand text-white rounded-lg text-label-sm font-bold hover:bg-brand-hover transition-colors shadow-sm">
              Kelola Lengkap
            </Link>
          </div>
          
          <div className="border border-outline-variant rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-outline-variant">
                  <th className="p-4 font-bold text-label-sm text-on-surface-variant">ID</th>
                  <th className="p-4 font-bold text-label-sm text-on-surface-variant">Nama / Keterangan</th>
                  <th className="p-4 font-bold text-label-sm text-on-surface-variant">Status</th>
                  <th className="p-4 font-bold text-label-sm text-on-surface-variant text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[1,2,3,4,5].map((item) => (
                  <tr key={item} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 text-body-sm font-medium text-on-surface-variant">#00{item}</td>
                    <td className="p-4 text-body-sm font-bold text-on-surface">
                      Data Dummy {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} {item}
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-brand/10 text-brand text-[10px] font-bold rounded-full uppercase">Aktif</span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-brand hover:underline text-label-sm font-bold">Detail</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
