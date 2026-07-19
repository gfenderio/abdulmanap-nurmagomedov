"use client"

import React, { useState } from 'react'
import { MOCK_TEACHER_SCHEDULE } from '@/lib/mock-data'
import { TeacherCalendarWidget } from '@/components/dashboard/teacher-calendar-widget'

export default function AttendanceClient({ role }: { role?: string }) {
  const [hasClockedIn, setHasClockedIn] = useState(false)
  const [clockInTime, setClockInTime] = useState<string | null>(null)

  const handleClockIn = () => {
    setHasClockedIn(true)
    const now = new Date()
    setClockInTime(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }))
  }

  const currentDate = new Date();
  
  const currentMonthYear = new Intl.DateTimeFormat('id-ID', {
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta'
  }).format(currentDate).toUpperCase();

  const fullDateString = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta'
  }).format(currentDate);

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-display-lg font-headline text-on-surface tracking-tight">Presensi & Jadwal</h2>
          <p className="text-body-lg text-on-surface-variant mt-1">Catat kehadiran harian dan pantau jadwal mengajar Anda.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Kolom Kiri: Tombol Presensi & Kalender FC26 */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
          
          {/* Box Clock-In */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm text-center flex flex-col items-center justify-center">
            <h3 className="text-title-lg font-bold text-on-surface mb-2">Absensi Hari Ini</h3>
            <p className="text-label-md text-on-surface-variant mb-6">{fullDateString}</p>
            
            {!hasClockedIn ? (
              <button 
                onClick={handleClockIn}
                className="w-48 h-48 rounded-full bg-brand text-white flex flex-col items-center justify-center shadow-lg hover:bg-brand-hover hover:scale-105 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-[48px] mb-2">fingerprint</span>
                <span className="font-bold text-title-md tracking-widest">CLOCK IN</span>
              </button>
            ) : (
              <div className="w-48 h-48 rounded-full bg-success/20 border-4 border-success text-success flex flex-col items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-[48px] mb-2">check_circle</span>
                <span className="font-bold text-title-md">BERHASIL</span>
                <span className="text-label-sm font-bold mt-1">Jam: {clockInTime}</span>
              </div>
            )}
            
            <p className="text-label-sm text-on-surface-variant mt-6">
              Pastikan Anda berada di area sekolah (Radius 100m)
            </p>
          </div>

          {/* Kalender Presensi FC26 Style */}
          <TeacherCalendarWidget />
        </div>

        {/* Kolom Kanan: Jadwal Mengajar */}
        <div className="col-span-1 md:col-span-7 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm flex flex-col">
          <div className="border-b border-outline-variant pb-4 mb-4 flex justify-between items-center">
            <h3 className="text-title-lg font-bold text-on-surface">Jadwal Mengajar (Hari Ini)</h3>
            <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-label-sm font-bold rounded-full">Total: 4 Kelas</span>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-4">
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

      </div>
    </div>
  )
}
