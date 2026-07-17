import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-[#53A6C4]">SIKA</h2>
          <p className="text-xs text-gray-500 mt-1">Sistem Informasi Akademik</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-[#53A6C4] hover:text-white transition-colors">Overview</Link>
          <Link href="/dashboard/students" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-[#53A6C4] hover:text-white transition-colors">Data Mahasiswa</Link>
          <Link href="/dashboard/billing" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-[#53A6C4] hover:text-white transition-colors">Keuangan & SPP</Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link href="/login" className="block px-4 py-2 text-red-600 rounded-lg hover:bg-red-50 transition-colors">Logout</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shadow-sm">
          <h1 className="text-lg font-medium text-gray-800">Universitas Indraprasta PGRI (UNINDRA)</h1>
        </header>
        <div className="p-8 flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
