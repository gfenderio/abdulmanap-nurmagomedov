"use client"

import React from 'react'
import Link from 'next/link'
import { GradeChart } from './grade-chart'
import { MOCK_STUDENT_SCHEDULE, MOCK_STUDENT_NOTES } from '@/lib/mock-data'

export function ParentDashboardView({ parentName, studentName, grade }: { parentName: string, studentName: string, grade: string }) {
  // Ambil inisial untuk avatar dari nama siswa atau orang tua
  const initials = studentName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-headline-lg font-headline font-bold text-on-surface tracking-tight mb-2">Portal Wali Murid ({parentName})</h2>
          <p className="text-on-surface-variant text-base max-w-2xl">Pantau perkembangan akademik, catatan perilaku, dan penyelesaian administrasi Ananda <strong className="text-on-surface">{studentName}</strong>.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-title-md shadow-md">
            {initials}
          </div>
          <div className="flex flex-col">
            <span className="text-body-md font-bold text-on-surface">{studentName}</span>
            <span className="text-label-sm text-on-surface-variant">Kelas {grade} - Al-Farabi</span>
          </div>
        </div>
      </div>

      {/* Stat Cards (Premium Compact Layout) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-brand/50 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Rata-rata Nilai</span>
            <span className="material-symbols-outlined text-brand text-[20px]">school</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-on-surface">85.4</div>
            <p className="text-label-sm text-brand font-medium mt-1">↑ +2.1 dari semester lalu</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-tertiary/50 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Status Tagihan SPP</span>
            <span className="material-symbols-outlined text-tertiary text-[20px]">receipt_long</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-tertiary">LUNAS</div>
            <p className="text-label-sm text-on-surface-variant font-medium mt-1">Tagihan Juli 2024</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-secondary/50 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Kehadiran (Bulan Ini)</span>
            <span className="material-symbols-outlined text-secondary text-[20px]">fact_check</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-on-surface">98%</div>
            <p className="text-label-sm text-secondary font-medium mt-1">Sangat Baik (0 Alpa)</p>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mb-6">
        <div className="col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center rounded-t-2xl">
            <h3 className="text-title-md font-bold text-on-surface">Tren Nilai (Grafik)</h3>
            <Link href="/dashboard/academic" className="text-label-sm font-bold text-brand hover:underline">Lihat Rapor</Link>
          </div>
          <div className="p-6 flex-1 min-h-[300px]">
            <GradeChart />
          </div>
        </div>
        
        <div className="col-span-3 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col min-h-[300px]">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center rounded-t-2xl">
            <h3 className="text-title-md font-bold text-on-surface">Jadwal Ananda Hari Ini</h3>
            <span className="px-3 py-1 bg-surface text-on-surface-variant text-label-sm font-medium rounded-full border border-outline-variant">Hari Ini</span>
          </div>
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {MOCK_STUDENT_SCHEDULE.map((item) => (
              <div key={item.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${item.active ? 'border-brand/50 bg-brand/5' : 'border-outline-variant bg-surface'}`}>
                <div className={`text-label-md font-bold w-24 shrink-0 ${item.active ? 'text-brand' : 'text-on-surface-variant'}`}>{item.time}</div>
                <div className="flex-1">
                  <div className={`font-bold text-body-md ${item.active ? 'text-brand' : 'text-on-surface'}`}>{item.subject}</div>
                  <div className={`text-label-sm mt-1 ${item.active ? 'text-brand/80' : 'text-on-surface-variant'}`}>{item.teacher}</div>
                </div>
                {item.status !== "-" && (
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    item.status === 'Selesai' ? 'bg-surface-container-high text-on-surface-variant' :
                    item.status === 'Berlangsung' ? 'bg-brand text-white' :
                    'bg-surface-container text-on-surface-variant'
                  }`}>
                    {item.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catatan Khusus Guru (Section Baru) */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <h3 className="text-title-md font-bold text-on-surface">Catatan & Laporan Guru</h3>
              <p className="text-label-sm text-on-surface-variant">Update terkini mengenai perilaku atau pencapaian Ananda</p>
            </div>
          </div>
          <Link href="/dashboard/progress-notes" className="px-4 py-2 bg-surface border border-outline-variant text-on-surface font-bold text-label-sm rounded-xl hover:bg-surface-container-low transition-colors">
            Lihat Semua Riwayat
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {MOCK_STUDENT_NOTES.filter(n => n.student.includes(studentName.split(' ')[0])).slice(0, 2).map((note) => (
            <div key={note.id} className={`p-5 border-l-4 rounded-r-xl bg-surface ${note.type === 'Perilaku' ? 'border-error' : 'border-success'}`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-body-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">person</span>
                  {note.teacher}
                </h4>
                <span className="text-label-sm text-on-surface-variant">{note.date}</span>
              </div>
              <p className="text-body-md text-on-surface-variant italic mb-3">"{note.note}"</p>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${note.type === 'Perilaku' ? 'bg-error-container text-error' : 'bg-success/20 text-success'}`}>
                  Kategori: {note.type}
                </span>
              </div>
            </div>
          ))}
          {MOCK_STUDENT_NOTES.filter(n => n.student.includes(studentName.split(' ')[0])).length === 0 && (
            <div className="col-span-full p-8 text-center text-on-surface-variant bg-surface rounded-xl border border-outline-variant border-dashed">
              Tidak ada catatan khusus dari guru bulan ini.
            </div>
          )}
        </div>
      </div>
      
    </div>
  )
}
