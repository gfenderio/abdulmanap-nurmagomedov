"use client"

import { useEffect, useState } from "react"

export function LiveClock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    // Initial set
    setTime(new Date())
    
    // Update every second
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  if (!time) {
    return <div className="h-6 w-32 animate-pulse bg-surface-container-high rounded-md"></div>
  }

  // Format date: Senin, 24 Juli 2026
  const dateStr = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(time)

  // Format time: 14:30:45 WIB
  const timeStr = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(time)

  return (
    <div className="flex flex-col items-end text-right hidden md:flex mr-4">
      <span className="text-[12px] font-bold text-on-surface-variant leading-none mb-1 uppercase tracking-wider">{dateStr}</span>
      <span className="text-[14px] font-black text-primary leading-none font-mono">{timeStr} WIB</span>
    </div>
  )
}
