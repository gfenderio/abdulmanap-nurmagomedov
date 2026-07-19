"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { TopNavbar } from "./top-navbar"
import { cn } from "@/lib/utils"

export function DashboardClientWrapper({ 
  children,
  userName = "Ahmad Fulan",
  userRole = "ADMIN",
  userImage = null,
  userEmail = null
}: { 
  children: React.ReactNode,
  userName?: string | null,
  userRole?: string,
  userImage?: string | null,
  userEmail?: string | null
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] w-full bg-surface overflow-hidden font-sans">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-on-surface/40 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] shrink-0 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar onNavigate={() => setSidebarOpen(false)} userRole={userRole} />
      </div>

      <div className="flex flex-1 flex-col min-w-0 overflow-hidden bg-surface-container-low">
        <TopNavbar 
          onMenuClick={() => setSidebarOpen(true)} 
          userName={userName}
          userRole={userRole}
          userImage={userImage}
          userEmail={userEmail}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1400px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
