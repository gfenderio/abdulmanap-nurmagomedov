"use client"

import React, { useState } from 'react';
import { Search, Filter, Eye, Edit, UserPlus } from 'lucide-react';
import { MOCK_STUDENTS } from '@/lib/mock-data';

export default function StudentsClient({ role }: { role?: string }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const filteredStudents = MOCK_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.nisn.includes(searchTerm)
  );

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-display-lg font-headline text-on-surface tracking-tight">Data Siswa</h2>
          <p className="text-body-lg text-on-surface-variant mt-1">Kelola informasi dan data induk siswa (Sirojul Falah).</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Cari nama atau NISN..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface"
            />
          </div>
          <button className="flex items-center justify-center p-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          {role === 'ADMIN' && (
            <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-bold hover:bg-brand-hover shadow-sm transition-colors">
              <UserPlus className="w-5 h-5" />
              Tambah Siswa
            </button>
          )}
        </div>
      </div>

      {/* VIEW MODAL */}
      {isViewModalOpen && selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Detail Siswa</h3>
              <button onClick={() => setIsViewModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-title-lg font-bold">
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-title-md text-on-surface">{selectedStudent.name}</h4>
                  <p className="text-body-md text-on-surface-variant">{selectedStudent.nisn}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
                  <p className="text-label-sm text-on-surface-variant">Kelas</p>
                  <p className="font-bold text-body-md text-on-surface">{selectedStudent.grade}</p>
                </div>
                <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
                  <p className="text-label-sm text-on-surface-variant">Status</p>
                  <p className="font-bold text-body-md text-on-surface">{selectedStudent.status}</p>
                </div>
                <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant col-span-2">
                  <p className="text-label-sm text-on-surface-variant">Jenis Kelamin</p>
                  <p className="font-bold text-body-md text-on-surface">{selectedStudent.gender}</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end">
              <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-2 rounded-xl bg-primary text-on-primary font-bold hover:bg-brand-hover shadow-sm">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {isEditModalOpen && selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Edit Data Siswa</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Nama Lengkap</label>
                <input type="text" defaultValue={selectedStudent.name} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary text-body-md" />
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">NISN</label>
                <input type="text" defaultValue={selectedStudent.nisn} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary text-body-md" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-label-md font-bold text-on-surface-variant">Kelas</label>
                  <select defaultValue={selectedStudent.grade} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary text-body-md">
                    <option value="6A">6A</option>
                    <option value="6B">6B</option>
                    <option value="5A">5A</option>
                    <option value="5B">5B</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-label-md font-bold text-on-surface-variant">Status</label>
                  <select defaultValue={selectedStudent.status} className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary text-body-md">
                    <option value="Aktif">Aktif</option>
                    <option value="Non-Aktif">Non-Aktif</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 rounded-xl text-body-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Batal
              </button>
              <button onClick={() => { alert('Perubahan disimpan!'); setIsEditModalOpen(false); }} className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-md font-bold hover:bg-brand-hover shadow-sm">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col animate-in fade-in duration-300">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-body-md text-on-surface min-w-[800px]">
            <thead className="bg-surface border-b border-outline-variant">
              <tr>
                <th className="px-6 py-4 font-bold text-on-surface-variant">NISN</th>
                <th className="px-6 py-4 font-bold text-on-surface-variant">Nama Siswa</th>
                <th className="px-6 py-4 font-bold text-on-surface-variant text-center">Kelas</th>
                <th className="px-6 py-4 font-bold text-on-surface-variant">Jenis Kelamin</th>
                <th className="px-6 py-4 font-bold text-on-surface-variant text-center">Status</th>
                <th className="px-6 py-4 font-bold text-on-surface-variant text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-brand-light/20 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-medium">{student.nisn}</td>
                  <td className="px-6 py-4 font-bold">{student.name}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-surface-container-high rounded-lg font-bold text-[13px]">
                      {student.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4">{student.gender}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-bold text-[12px] ${student.status === 'Aktif' ? 'bg-brand-light text-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => { setSelectedStudent(student); setIsViewModalOpen(true); }}
                        className="p-2 rounded-lg text-primary hover:bg-brand-light/50 transition-colors" title="Lihat Profil"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => { setSelectedStudent(student); setIsEditModalOpen(true); }}
                        className="p-2 rounded-lg text-tertiary hover:bg-tertiary-container/50 transition-colors" title="Edit Data"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-on-surface-variant">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[48px] opacity-50">person_off</span>
                      <p>Data siswa tidak ditemukan.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
