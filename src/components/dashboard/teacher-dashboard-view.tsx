"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { MOCK_TEACHER_SCHEDULE, MOCK_ANNOUNCEMENTS } from '@/lib/mock-data'
import { TeacherCalendarWidget } from '@/components/dashboard/teacher-calendar-widget'

export function TeacherDashboardView({ userName }: { userName: string }) {
  const [noteForm, setNoteForm] = useState({ student: 'Ahmad Fauzi (6A)', type: 'Perilaku', note: '' })
  const [isNoteSubmitted, setIsNoteSubmitted] = useState(false)

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsNoteSubmitted(true)
    setNoteForm({ ...noteForm, note: '' })
    setTimeout(() => setIsNoteSubmitted(false), 3000)
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="mb-8">
        <h2 className="text-headline-lg font-headline font-bold text-on-surface tracking-tight mb-2">Selamat Datang, Guru {userName}</h2>
        <p className="text-on-surface-variant text-base max-w-2xl">Pantau jadwal mengajar, presensi, dan buat catatan murid khusus hari ini.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-12 mb-6">
        
        {/* Kolom Kiri: Jadwal & Kalender Presensi */}
        <div className="md:col-span-7 flex flex-col gap-6">
          
          {/* Jadwal Mengajar */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col min-h-[300px]">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center rounded-t-2xl">
              <h3 className="text-title-md font-bold text-on-surface">Jadwal Mengajar (Hari Ini)</h3>
              <Link href="/dashboard/academic" className="px-3 py-1 bg-brand text-white text-label-sm font-bold rounded-full border border-brand hover:bg-brand-hover transition-colors">Lihat Semua</Link>
            </div>
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {MOCK_TEACHER_SCHEDULE.map((item) => (
                <div key={item.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-colors cursor-pointer hover:shadow-md ${item.active ? 'border-brand/50 bg-brand/5' : 'border-outline-variant bg-surface hover:border-brand/30'}`}>
                  <div className={`text-label-md font-bold w-24 shrink-0 ${item.active ? 'text-brand' : 'text-on-surface-variant'}`}>{item.time}</div>
                  <div className="flex-1">
                    <div className={`font-bold text-body-md ${item.active ? 'text-brand' : 'text-on-surface'}`}>{item.subject}</div>
                    <div className={`text-label-sm mt-1 ${item.active ? 'text-brand/80' : 'text-on-surface-variant'}`}>{item.room}</div>
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

          {/* Kalender Presensi FC26 Style */}
          <TeacherCalendarWidget />
          
        </div>

        {/* Kolom Kanan: Catatan Murid & Pengumuman */}
        <div className="md:col-span-5 flex flex-col gap-6">
          
          {/* Form Catatan Murid */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <div>
                  <h3 className="text-title-md font-bold text-on-surface">Catatan Khusus Murid</h3>
                  <p className="text-label-sm text-on-surface-variant">Langsung tersambung ke Wali Murid</p>
                </div>
              </div>
              
              {isNoteSubmitted ? (
                <div className="bg-success/20 text-success border border-success/30 p-4 rounded-xl font-bold text-sm text-center mb-4">
                  Catatan berhasil dikirim ke Wali Murid!
                </div>
              ) : null}

              <form onSubmit={handleNoteSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-on-surface-variant">Pilih Siswa</label>
                  <select 
                    value={noteForm.student}
                    onChange={(e) => setNoteForm({...noteForm, student: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-brand text-body-md"
                  >
                    <option>Ahmad Fauzi (6A)</option>
                    <option>Siti Aminah (6A)</option>
                    <option>Budi Santoso (6B)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-on-surface-variant">Jenis Catatan</label>
                  <select 
                    value={noteForm.type}
                    onChange={(e) => setNoteForm({...noteForm, type: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-brand text-body-md"
                  >
                    <option>Perilaku / Disiplin</option>
                    <option>Apresiasi / Prestasi</option>
                    <option>Akademik</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-on-surface-variant">Pesan untuk Wali Murid</label>
                  <textarea 
                    rows={4}
                    value={noteForm.note}
                    onChange={(e) => setNoteForm({...noteForm, note: e.target.value})}
                    placeholder="Contoh: Ananda sering tertidur di kelas..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-brand text-body-md resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-brand text-white font-bold rounded-xl shadow-md hover:bg-brand-hover transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">send</span> Kirim Catatan
                </button>
              </form>
          </div>

          {/* Pengumuman */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined">campaign</span>
              </div>
              <h3 className="text-title-md font-bold text-on-surface">Pengumuman Sekolah</h3>
            </div>
            <div className="space-y-4">
              {MOCK_ANNOUNCEMENTS.map((item) => (
                <Link href="#" key={item.id} className={`block p-4 border-l-4 border-${item.type} bg-surface rounded-r-xl hover:bg-surface-container-low transition-colors`}>
                  <h4 className="font-bold text-body-md text-on-surface">{item.title}</h4>
                  <p className="text-label-sm text-on-surface-variant mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
