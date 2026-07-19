import React from 'react'
import { MOCK_TEACHER_ATTENDANCE } from '@/lib/mock-data'

export function TeacherCalendarWidget() {
  const currentDate = new Date();
  
  const currentMonthYear = new Intl.DateTimeFormat('id-ID', {
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta'
  }).format(currentDate).toUpperCase();

  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 border border-outline-variant relative overflow-hidden">
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div>
          <h3 className="text-title-md font-black text-on-surface uppercase tracking-wider">Kehadiran Mengajar</h3>
          <p className="text-label-sm text-on-surface-variant mt-1 font-bold">{currentMonthYear}</p>
        </div>
        <div className="flex items-center gap-4 text-label-sm font-bold text-on-surface-variant">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-success shadow-[0_2px_4px_rgba(16,185,129,0.3)]"></span> Hadir</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-error shadow-[0_2px_4px_rgba(225,29,72,0.3)]"></span> Absen</span>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1.5 relative z-10">
        {['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'].map(day => (
          <div key={day} className="text-center text-[10px] font-black text-on-surface-variant py-1 tracking-widest">{day}</div>
        ))}
        
        {MOCK_TEACHER_ATTENDANCE.map((day, idx) => {
          let boxClass = "aspect-square rounded-md flex flex-col items-center justify-center transition-all cursor-pointer "
          let icon = ""
          
          if (day.status === 'present') {
            boxClass += "bg-success text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1),_0_2px_8px_rgba(16,185,129,0.3)] hover:bg-success/90 hover:-translate-y-0.5"
            icon = "✓"
          } else if (day.status === 'absent') {
            boxClass += "bg-error text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1),_0_2px_8px_rgba(220,38,38,0.3)] hover:bg-error/90 hover:-translate-y-0.5"
            icon = "✗"
          } else {
            boxClass += "bg-surface-container-high/50 text-on-surface-variant/50 border border-outline-variant/30 hover:bg-surface-container-highest"
            icon = ""
          }

          const dayNumber = parseInt(day.date.split('-')[2]);

          return (
            <div key={idx} className={boxClass} title={day.date}>
              <span className="text-[11px] font-bold leading-none opacity-90">{dayNumber}</span>
              {icon && <span className="text-lg font-black leading-none mt-0.5">{icon}</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
