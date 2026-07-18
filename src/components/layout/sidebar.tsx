"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { handleSignOut } from "@/actions/auth"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "dashboard", roles: ["ADMIN", "TEACHER", "PARENT"] },
  { name: "Siswa", href: "/dashboard/students", icon: "database", roles: ["ADMIN", "TEACHER"] },
  { name: "Akademik", href: "/dashboard/academic", icon: "school", roles: ["ADMIN", "TEACHER"] },
  { name: "Keuangan", href: "/dashboard/billing", icon: "account_balance_wallet", roles: ["ADMIN", "PARENT"] },
  { name: "Laporan", href: "/dashboard/reports", icon: "bar_chart", roles: ["ADMIN", "TEACHER", "PARENT"] },
  { name: "Pengaturan", href: "/dashboard/settings", icon: "settings", roles: ["ADMIN"] },
]

export function Sidebar({ onNavigate, userRole = "ADMIN" }: { onNavigate?: () => void, userRole?: string }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-[280px] flex-col bg-surface border-r border-outline-variant transition-colors">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo MI Sirojul Falah" className="h-8 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-on-surface leading-tight tracking-tight">Sirojul Falah</span>
            <span className="text-[11px] font-medium text-on-surface-variant leading-tight">Madrasah Ibtidaiyah</span>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
        {navigation
          .filter((item) => item.roles.includes(userRole))
          .map((item) => {
            // FIX: Dashboard exact match only, sub-routes use startsWith
            const isActive = item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-4 py-2.5 text-[14px] font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                )}
              >
                <span
                  className={cn(
                    "material-symbols-outlined text-[20px] shrink-0 transition-colors",
                    isActive ? "text-on-primary" : "text-on-surface-variant group-hover:text-on-surface"
                  )}
                  style={isActive ? { fontVariationSettings: '"FILL" 1' } : {}}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                {item.name}
              </Link>
            )
          })}
      </nav>
      
      {/* Bottom section */}
      <div className="px-4 pb-4 space-y-1 border-t border-outline-variant pt-4">
        <Link
          href="/dashboard/help"
          onClick={onNavigate}
          className={cn(
            "group flex items-center gap-3 rounded-xl px-4 py-2.5 text-[14px] font-medium transition-all duration-200",
            pathname === "/dashboard/help" || pathname.startsWith("/dashboard/help/")
              ? "bg-primary text-on-primary shadow-sm"
              : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
          )}
        >
          <span className={cn(
            "material-symbols-outlined text-[20px] shrink-0",
            pathname === "/dashboard/help" || pathname.startsWith("/dashboard/help/")
              ? "text-on-primary"
              : "text-on-surface-variant group-hover:text-on-surface"
          )}>help</span>
          Bantuan
        </Link>
        <form action={handleSignOut}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-[14px] font-medium transition-all duration-200 text-error hover:bg-error-container"
          >
            <span className="material-symbols-outlined text-[20px] shrink-0" aria-hidden="true">logout</span>
            Logout
          </button>
        </form>
      </div>
    </div>
  )
}
