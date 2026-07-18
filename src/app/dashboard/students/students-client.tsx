"use client"

import React, { useState } from 'react';
import { Search, Filter, Plus, Eye, Edit, X } from 'lucide-react';

export default function StudentsClient({ role }: { role?: string }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Search dummy state
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleDetail = (studentName: string) => {
    setSelectedStudent({ name: studentName, nisn: '0081234567', kelas: '6A - Al-Farabi', status: 'Aktif' });
    setIsDetailModalOpen(true);
  };

  const handleEdit = (studentName: string) => {
    setSelectedStudent({ name: studentName, nisn: '0081234567', kelas: '6A - Al-Farabi', status: 'Aktif' });
    setIsEditModalOpen(true);
  };

  if (role === "PARENT") {
    return (
      <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
        <div className="mb-8 flex flex-col gap-2">
          <nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px]">person</span>
            <span>Profil Anak</span>
          </nav>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Biodata Siswa</h1>
        </div>
        
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col max-w-3xl">
          <div className="p-6 border-b border-outline-variant flex items-center gap-6 bg-surface">
            <div className="w-24 h-24 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-headline-lg shadow-inner">
              AF
            </div>
            <div>
              <h2 className="text-display-sm font-bold text-on-surface">Ahmad Fauzi</h2>
              <p className="text-body-lg text-on-surface-variant mt-1">NISN: 0012345678</p>
              <span className="inline-flex items-center px-3 py-1 mt-3 rounded-full bg-brand-light text-primary font-bold text-label-md">Siswa Aktif</span>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Kelas Saat Ini</p>
              <p className="text-body-lg font-medium text-on-surface">6A - Al-Farabi</p>
            </div>
            <div>
              <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Wali Kelas</p>
              <p className="text-body-lg font-medium text-on-surface">Bpk. Budi Santoso</p>
            </div>
            <div>
              <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Tempat, Tanggal Lahir</p>
              <p className="text-body-lg font-medium text-on-surface">Jakarta, 12 Agustus 2012</p>
            </div>
            <div>
              <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Alamat</p>
              <p className="text-body-lg font-medium text-on-surface">Jl. Merdeka No. 45, Jakarta Selatan</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      
      {/* ADD STUDENT MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Tambah Data Siswa</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">NISN</label>
                <input type="text" placeholder="Masukkan NISN" className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Nama Lengkap</label>
                <input type="text" placeholder="Masukkan Nama Lengkap" className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Kelas</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                  <option>Pilih Kelas</option>
                  <option>1A</option>
                  <option>2B</option>
                  <option>6A - Al-Farabi</option>
                </select>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 rounded-xl text-body-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Batal
              </button>
              <button onClick={() => { alert("Siswa berhasil ditambahkan (dummy)"); setIsAddModalOpen(false); }} className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-md font-bold hover:bg-brand-hover transition-colors shadow-sm">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FILTER MODAL */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Filter Data</h3>
              <button onClick={() => setIsFilterModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Status</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                  <option>Semua Status</option>
                  <option>Aktif</option>
                  <option>Non-Aktif</option>
                  <option>Pindah</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Jenis Kelamin</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 text-body-md text-on-surface cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" defaultChecked /> Laki-laki
                  </label>
                  <label className="flex items-center gap-2 text-body-md text-on-surface cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" defaultChecked /> Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setIsFilterModalOpen(false)} className="px-4 py-2 rounded-xl text-body-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Batal
              </button>
              <button onClick={() => setIsFilterModalOpen(false)} className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-md font-bold hover:bg-brand-hover transition-colors shadow-sm">
                Terapkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DETAIL MODAL */}
      {isDetailModalOpen && selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Detail Siswa</h3>
              <button onClick={() => setIsDetailModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-xl shrink-0">
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-headline font-bold text-title-lg text-on-surface">{selectedStudent.name}</h4>
                  <p className="text-body-md text-on-surface-variant">NISN: {selectedStudent.nisn}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-label-sm font-medium text-on-surface-variant mb-1 uppercase tracking-wider">Kelas</p>
                  <p className="text-body-md text-on-surface font-medium">{selectedStudent.kelas}</p>
                </div>
                <div>
                  <p className="text-label-sm font-medium text-on-surface-variant mb-1 uppercase tracking-wider">Status</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-light text-primary font-bold text-[12px]">{selectedStudent.status}</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end">
              <button onClick={() => setIsDetailModalOpen(false)} className="px-4 py-2 rounded-xl bg-surface-container-high text-on-surface font-bold hover:bg-outline-variant transition-colors">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {isEditModalOpen && selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Edit Data Siswa</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">NISN</label>
                <input type="text" defaultValue={selectedStudent.nisn} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Nama Lengkap</label>
                <input type="text" defaultValue={selectedStudent.name} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Kelas</label>
                <select defaultValue={selectedStudent.kelas} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                  <option>1A</option>
                  <option>2B</option>
                  <option value="6A - Al-Farabi">6A - Al-Farabi</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Status</label>
                <select defaultValue={selectedStudent.status} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                  <option value="Aktif">Aktif</option>
                  <option value="Non-Aktif">Non-Aktif</option>
                  <option value="Pindah">Pindah</option>
                </select>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 rounded-xl text-body-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Batal
              </button>
              <button onClick={() => { alert("Perubahan berhasil disimpan (dummy)"); setIsEditModalOpen(false); }} className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-md font-bold hover:bg-brand-hover transition-colors shadow-sm">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-2">
        <nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
          <span className="material-symbols-outlined text-[16px]">database</span>
          <span>Data Master</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-primary font-medium">Siswa</span>
        </nav>
        <div className="flex justify-between items-end">
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Data Siswa</h1>
        </div>
      </div>

      {/* Statistics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Stat Card 1 */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">groups</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">Total Siswa</p>
            <p className="font-headline-md font-bold text-headline-md text-on-surface">842</p>
          </div>
        </div>
        {/* Stat Card 2 */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-brand-light text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">Siswa Aktif</p>
            <p className="font-headline-md font-bold text-headline-md text-on-surface">820</p>
          </div>
        </div>
        {/* Stat Card 3 */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>cancel</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">Siswa Non-Aktif</p>
            <p className="font-headline-md font-bold text-headline-md text-on-surface">22</p>
          </div>
        </div>
      </div>

      {/* Data Table Container */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        {/* Table Toolbar */}
        <div className="p-5 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest">
          {/* Search & Filter */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline-variant rounded-xl text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                placeholder="Cari NISN atau Nama..." 
                type="text" 
              />
            </div>
            <button 
              onClick={() => setIsFilterModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors text-on-surface-variant font-body-md text-body-md font-medium shrink-0"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
          {/* Action Button (Hidden for Teacher) */}
          {role !== "TEACHER" && (
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-brand-hover px-4 py-2 rounded-xl font-bold transition-all shadow-md whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              Tambah Siswa
            </button>
          )}
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium whitespace-nowrap">NISN</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium">Nama Lengkap</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium">Kelas</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium">Jenis Kelamin</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium text-center">Status</th>
                <th className="py-4 px-6 font-title-lg text-body-md text-on-surface-variant font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container font-body-md text-body-md text-on-surface">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="py-4 px-6 font-bold text-primary">0081234567</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container/30 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      A
                    </div>
                    <span className="font-medium">Ahmad Fauzi Rahman</span>
                  </div>
                </td>
                <td className="py-4 px-6">6A - Al-Farabi</td>
                <td className="py-4 px-6">Laki-laki</td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-light text-primary font-bold text-[12px]">Aktif</span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => handleDetail('Ahmad Fauzi Rahman')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-xl transition-colors" title="Detail">
                      <Eye className="w-5 h-5" />
                    </button>
                    {role !== "TEACHER" && (
                      <button onClick={() => handleEdit('Ahmad Fauzi Rahman')} className="p-1.5 text-on-surface-variant hover:text-accent-hover hover:bg-surface-container-low rounded-xl transition-colors" title="Edit">
                        <Edit className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-lowest transition-colors bg-surface/50">
                <td className="py-4 px-6 font-bold text-primary">0082345678</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary-fixed/50 text-tertiary flex items-center justify-center font-bold text-sm shrink-0">
                      S
                    </div>
                    <span className="font-medium">Siti Aminah Zahra</span>
                  </div>
                </td>
                <td className="py-4 px-6">6B - Ibnu Sina</td>
                <td className="py-4 px-6">Perempuan</td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-light text-primary font-bold text-[12px]">Aktif</span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => handleDetail('Siti Aminah Zahra')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-xl transition-colors" title="Detail">
                      <Eye className="w-5 h-5" />
                    </button>
                    {role !== "TEACHER" && (
                      <button onClick={() => handleEdit('Siti Aminah Zahra')} className="p-1.5 text-on-surface-variant hover:text-accent-hover hover:bg-surface-container-low rounded-xl transition-colors" title="Edit">
                        <Edit className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="py-4 px-6 font-bold text-primary">0093456789</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container/30 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      B
                    </div>
                    <span className="font-medium">Budi Santoso Wibowo</span>
                  </div>
                </td>
                <td className="py-4 px-6">5A - Al-Khawarizmi</td>
                <td className="py-4 px-6">Laki-laki</td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface-variant text-on-surface-variant font-bold text-[12px]">Pindah</span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => handleDetail('Budi Santoso Wibowo')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-xl transition-colors" title="Detail">
                      <Eye className="w-5 h-5" />
                    </button>
                    {role !== "TEACHER" && (
                      <button onClick={() => handleEdit('Budi Santoso Wibowo')} className="p-1.5 text-on-surface-variant hover:text-accent-hover hover:bg-surface-container-low rounded-xl transition-colors" title="Edit">
                        <Edit className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
