"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, BookOpen, FileText, CreditCard, Calendar, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Siswa", href: "/students", icon: Users },
  { name: "Akademik", href: "/academic", icon: BookOpen },
  { name: "Jadwal", href: "/schedule", icon: Calendar },
  { name: "Keuangan", href: "/billing", icon: CreditCard },
  { name: "Laporan", href: "/reports", icon: FileText },
  { name: "Pengaturan", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-neutral-200">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-neutral-200">
        <div className="flex items-center gap-3 font-bold text-brand-hover text-lg tracking-tight">
          <img src="/logo.png" alt="Logo MI Sirojul Falah" className="h-10 w-auto" />
          <div className="flex flex-col leading-tight">
            <span>SIAS</span>
            <span className="text-xs font-semibold text-neutral-500">MI Sirojul Falah</span>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-active text-brand-hover"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              )}
            >
              <item.icon
                className={cn(
                  "size-5 shrink-0 transition-colors",
                  isActive ? "text-brand" : "text-neutral-400 group-hover:text-neutral-500"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
