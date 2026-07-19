"use client"

import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { handleSignOut } from "@/actions/auth"
import { LiveClock } from "./live-clock"

// Dummy data for notifications
const DUMMY_NOTIFICATIONS = [
  { id: 1, title: "Catatan Baru: Ananda Ahmad Fauzi - Perilaku (Dari Bpk. Budi Santoso)", time: "Baru saja", read: false, href: "/dashboard#catatan" },
  { id: 2, title: "SPP Bulan Juli telah diterbitkan", time: "10 menit yang lalu", read: false, href: "/dashboard/billing" },
  { id: 3, title: "Jadwal Ujian Akhir Semester Ganjil", time: "2 jam yang lalu", read: false, href: "/dashboard/academic" },
  { id: 4, title: "Laporan Nilai Tengah Semester", time: "1 hari yang lalu", read: true, href: "/dashboard/reports" },
]

// Dummy data for search results
const DUMMY_SEARCH_RESULTS = [
  { type: "Siswa", name: "Ahmad Fauzi", desc: "Kelas 6A" },
  { type: "Guru", name: "Bapak Budi", desc: "Wali Kelas 6A" },
  { type: "Menu", name: "Laporan Keuangan", desc: "Buka menu Laporan" },
]

export function TopNavbar({ 
  onMenuClick, 
  userName = "Ahmad Fulan", 
  userRole = "ADMIN",
  userImage = null,
  userEmail = null
}: { 
  onMenuClick?: () => void,
  userName?: string | null,
  userRole?: string,
  userImage?: string | null,
  userEmail?: string | null
}) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // States
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState(DUMMY_NOTIFICATIONS)
  
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  
  const searchRef = useRef<HTMLDivElement>(null)
  const notifRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    // Click outside handler for dropdowns
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false)
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside, { passive: true })
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  // Debounced search simulation
  useEffect(() => {
    if (!searchQuery.trim()) {
      setIsSearching(false)
      return
    }
    
    setIsSearching(true)
    const timer = setTimeout(() => {
      setIsSearching(false)
    }, 400) // 400ms debounce simulation
    
    return () => clearTimeout(timer)
  }, [searchQuery])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full shrink-0 items-center justify-between border-b border-outline-variant bg-surface/80 backdrop-blur-md px-4 sm:px-8 transition-colors">
      {/* Mobile Menu */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="md:hidden p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors"
        >
          <span className="sr-only">Buka menu sidebar</span>
          <span className="material-symbols-outlined" aria-hidden="true">menu</span>
        </button>
      </div>

      {/* Center Search Bar */}
      <div className="hidden md:flex relative flex-1 max-w-md lg:max-w-lg mx-4" ref={searchRef}>
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
          search
        </span>
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setShowSearchDropdown(true)
          }}
          onFocus={() => {
            if (searchQuery) setShowSearchDropdown(true)
          }}
          placeholder="Cari menu, nama siswa, atau fitur..."
          className="w-full pl-12 pr-4 py-2 bg-surface-container-low border border-outline-variant/50 rounded-full text-[14px] focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-on-surface-variant outline-none transition-all"
        />
        
        {/* Search Dropdown Popover */}
        {showSearchDropdown && searchQuery.trim() && (
          <div className="absolute top-full mt-2 w-full bg-surface-bright rounded-2xl border border-outline-variant shadow-md overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {isSearching ? (
              <div className="p-4 text-center text-on-surface-variant text-label-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined animate-spin text-[16px]">sync</span>
                Mencari "{searchQuery}"...
              </div>
            ) : (
              <div>
                <div className="px-4 py-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider bg-surface-container-lowest">
                  Hasil Pencarian
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {DUMMY_SEARCH_RESULTS.map((result, i) => (
                    <div key={i} className="flex flex-col px-4 py-3 hover:bg-surface-container-low cursor-pointer border-b border-outline-variant/30 last:border-0 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-medium">
                          {result.type}
                        </span>
                        <span className="text-body-md font-bold text-on-surface">{result.name}</span>
                      </div>
                      <span className="text-label-sm text-on-surface-variant mt-1">{result.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1.5">
        
        {/* Real-time Clock (Desktop only) */}
        <LiveClock />
        {/* Notification Bell with Popover */}
        <div className="relative" ref={notifRef}>
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); setShowNotifications(prev => !prev); setShowProfileMenu(false); setShowSearchDropdown(false); }}
            className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high rounded-full relative"
          >
            <span className="sr-only">Lihat notifikasi</span>
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 size-2 rounded-full bg-error ring-2 ring-surface"></span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-[calc(100vw-32px)] sm:w-96 max-w-[360px] sm:max-w-none bg-surface-bright rounded-2xl border border-outline-variant shadow-md overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 origin-top-right">
              <div className="flex items-center justify-between p-4 border-b border-outline-variant bg-surface-container-lowest">
                <h3 className="font-bold text-on-surface text-body-md">Notifikasi</h3>
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllRead}
                    className="text-[12px] font-medium text-primary hover:underline"
                  >
                    Tandai semua dibaca
                  </button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length > 0 ? (
                  <div className="divide-y divide-outline-variant/30">
                    {notifications.map(notif => (
                      <Link 
                        key={notif.id} 
                        href={notif.href}
                        onClick={() => setShowNotifications(false)}
                        className={`p-4 block hover:bg-surface-container-low cursor-pointer transition-colors ${!notif.read ? 'bg-primary-container/10' : ''}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-full shrink-0 ${!notif.read ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                            <span className="material-symbols-outlined text-[18px]">
                              notifications_active
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className={`text-body-md leading-snug ${!notif.read ? 'font-bold text-on-surface' : 'font-medium text-on-surface-variant'}`}>
                              {notif.title}
                            </p>
                            <p className="text-label-sm text-on-surface-variant mt-1">{notif.time}</p>
                          </div>
                          {!notif.read && (
                            <div className="size-2.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-on-surface-variant text-label-sm">
                    Tidak ada notifikasi baru.
                  </div>
                )}
              </div>
              <div className="p-3 bg-surface-container-lowest border-t border-outline-variant text-center">
                <button className="text-[13px] font-bold text-primary hover:underline">
                  Lihat Semua Notifikasi
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="w-px h-6 bg-outline-variant mx-2 hidden sm:block"></div>
        
        {/* User profile with Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); setShowProfileMenu(prev => !prev); setShowNotifications(false); setShowSearchDropdown(false); }}
            className="flex items-center gap-3 pl-1 hover:opacity-80 transition-opacity outline-none text-left cursor-pointer"
          >
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-[13px] font-bold text-on-surface leading-none">
                {userName}
              </span>
              <span className="text-[11px] text-on-surface-variant mt-1">
                {userRole === "TEACHER" ? "Guru" : userRole === "PARENT" ? "Wali Murid" : userRole === "STUDENT" ? "Siswa" : "Administrator"}
              </span>
            </div>
            <img 
              src={userImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName || "Ahmad Fulan")}&background=53A6C4&color=fff&bold=true`}
              alt="Profile"
              className="size-10 rounded-full border-2 border-outline-variant object-cover"
            />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 top-full mt-2 w-[calc(100vw-32px)] sm:w-72 max-w-[300px] sm:max-w-none bg-surface-bright rounded-2xl border border-outline-variant shadow-md overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 origin-top-right">
              {/* Profile Card Header */}
              <div className="p-4 bg-surface-container-lowest border-b border-outline-variant flex flex-col items-center text-center">
                <img 
                  src={userImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName || "Ahmad Fulan")}&background=53A6C4&color=fff&bold=true`}
                  alt="Profile Dropdown"
                  className="size-16 rounded-full border border-outline-variant object-cover mb-2.5 shadow-sm"
                />
                <h4 className="font-bold text-on-surface text-body-md line-clamp-1">{userName}</h4>
                <p className="text-label-sm text-on-surface-variant line-clamp-1 mt-0.5">{userEmail || "email@misirojulfalah.sch.id"}</p>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold mt-2.5">
                  <span className="material-symbols-outlined text-[14px]">
                    {userRole === "TEACHER" ? "school" : userRole === "PARENT" ? "family_restroom" : userRole === "STUDENT" ? "person" : "admin_panel_settings"}
                  </span>
                  {userRole === "TEACHER" ? "Guru" : userRole === "PARENT" ? "Wali Murid" : userRole === "STUDENT" ? "Siswa" : "Administrator"}
                </span>
              </div>

              {/* Menu Links */}
              <div className="p-2 space-y-0.5">
                <Link 
                  href="/dashboard/profile"
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[14px] font-medium text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant">person_outline</span>
                  Profil Saya
                </Link>
                {userRole === "ADMIN" && (
                  <Link 
                    href="/dashboard/settings"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[14px] font-medium text-on-surface hover:bg-surface-container-low transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">settings</span>
                    Pengaturan Sistem
                  </Link>
                )}
              </div>

              {/* Logout Button */}
              <div className="p-2 border-t border-outline-variant bg-surface-container-lowest">
                <form action={handleSignOut}>
                  <button 
                    type="submit"
                    className="flex w-full items-center gap-3 px-4 py-2.5 rounded-xl text-[14px] font-medium text-error hover:bg-error-container/20 transition-colors text-left"
                  >
                    <span className="material-symbols-outlined text-[20px] shrink-0">logout</span>
                    Logout / Keluar
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
