"use client"

import React, { useState } from "react"
import { Search } from "lucide-react"
import { MOCK_CLASSES } from "@/lib/mock-data"

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  
  // Dummy class data loaded from lib/mock-data
  const classes = MOCK_CLASSES

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Data Kelas berhasil ditambahkan! (Simulasi)")
    setIsAddModalOpen(false)
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      {/* Page Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-headline-lg font-headline font-bold text-on-surface mb-2">Manajemen Data Kelas</h2>
          <p className="text-on-surface-variant text-base max-w-2xl">Kelola data ruangan, wali kelas, dan kapasitas siswa secara terpusat.</p>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>meeting_room</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">Total Kelas</p>
            <p className="font-headline-md font-bold text-headline-md text-on-surface">24</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>person</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">Rata-rata Siswa/Kelas</p>
            <p className="font-headline-md font-bold text-headline-md text-on-surface">28 Siswa</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>warning</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">Kelas Mendekati Penuh</p>
            <p className="font-headline-md font-bold text-headline-md text-on-surface">5</p>
          </div>
        </div>
      </div>

      {/* Data Table Container */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        {/* Table Toolbar */}
        <div className="p-5 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest">
          {/* Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-xl text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                placeholder="Cari nama kelas atau ruangan..." 
                type="text" 
              />
            </div>
          </div>
          {/* Action Button */}
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-brand-hover px-4 py-2 rounded-xl font-bold transition-all shadow-md whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Tambah Kelas
          </button>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium whitespace-nowrap">Nama Kelas</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium">Ruangan</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium">Wali Kelas</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium text-center">Kapasitas</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium text-center">Status</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {classes.map((cls, i) => (
                <tr key={cls.id} className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="py-4 px-6">
                    <span className="font-bold text-on-surface">{cls.name}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-on-surface-variant">{cls.room}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-on-surface-variant">{cls.wali}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-on-surface-variant font-medium">{cls.capacity}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-label-sm font-bold ${
                      cls.status === "Aktif" ? "bg-primary-container text-on-primary-container" : "bg-error-container text-on-error-container"
                    }`}>
                      {cls.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => alert(`Mengedit data kelas ${cls.name}`)} className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/30 rounded-lg transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button onClick={() => alert(`Membuka data detail kelas ${cls.name}`)} className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary-container/30 rounded-lg transition-colors" title="Detail">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-outline-variant flex items-center justify-between text-body-sm text-on-surface-variant bg-surface-container-lowest">
          <span>Menampilkan 1 - 5 dari 24 kelas</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled>Sebelumnya</button>
            <button className="px-3 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors">Selanjutnya</button>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-scrim/40 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)}></div>
          <div className="relative bg-surface-container-lowest rounded-3xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="text-title-lg font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">add_circle</span>
                Tambah Kelas Baru
              </h3>
              <button onClick={() => setIsAddModalOpen(false)} className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-full transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            
            <form onSubmit={handleAddSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-label-sm font-bold text-on-surface">Tingkat Kelas <span className="text-error">*</span></label>
                  <select className="w-full px-3 py-2 bg-surface border border-outline-variant rounded-xl text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none" required>
                    <option value="">Pilih...</option>
                    <option value="1">Kelas 1</option>
                    <option value="2">Kelas 2</option>
                    <option value="3">Kelas 3</option>
                    <option value="4">Kelas 4</option>
                    <option value="5">Kelas 5</option>
                    <option value="6">Kelas 6</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-label-sm font-bold text-on-surface">Nama Kelas <span className="text-error">*</span></label>
                  <input type="text" placeholder="Contoh: 1A" className="w-full px-3 py-2 bg-surface border border-outline-variant rounded-xl text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none" required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-label-sm font-bold text-on-surface">Ruangan <span className="text-error">*</span></label>
                <select className="w-full px-3 py-2 bg-surface border border-outline-variant rounded-xl text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none" required>
                  <option value="">Pilih Ruangan...</option>
                  <option value="R01">Ruang 01 (Lantai 1)</option>
                  <option value="R02">Ruang 02 (Lantai 1)</option>
                  <option value="R03">Ruang 03 (Lantai 2)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-label-sm font-bold text-on-surface">Wali Kelas</label>
                <select className="w-full px-3 py-2 bg-surface border border-outline-variant rounded-xl text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                  <option value="">Tidak ada</option>
                  <option value="guru1">Ibu Ani - NIP 198001</option>
                  <option value="guru2">Bapak Budi - NIP 198002</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="text-label-sm font-bold text-on-surface">Kapasitas Maksimal <span className="text-error">*</span></label>
                <input type="number" defaultValue={30} min={10} max={40} className="w-full px-3 py-2 bg-surface border border-outline-variant rounded-xl text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none" required />
              </div>
              
              <div className="pt-4 border-t border-outline-variant flex flex-col-reverse sm:flex-row justify-end gap-3 mt-8">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="w-full sm:w-auto px-5 py-2.5 text-on-surface-variant font-bold hover:bg-surface-container-low rounded-xl transition-colors">Batal</button>
                <button type="submit" className="w-full sm:w-auto px-5 py-2.5 bg-primary text-on-primary font-bold hover:bg-brand-hover rounded-xl transition-colors shadow-sm">Simpan Data</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
