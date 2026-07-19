"use client"

import React, { useState } from 'react';
import { Edit2, Plus } from 'lucide-react';

export default function BehaviorClient({ role }: { role?: string }) {
  const [activeTab, setActiveTab] = useState<'jurnal' | 'kedisiplinan'>('jurnal');
  const [noteForm, setNoteForm] = useState({ student: 'Ahmad Fauzi (6A)', type: 'Perilaku', note: '' })
  const [isNoteSubmitted, setIsNoteSubmitted] = useState(false)

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsNoteSubmitted(true)
    setNoteForm({ ...noteForm, note: '' })
    setTimeout(() => setIsNoteSubmitted(false), 3000)
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-display-lg font-headline text-on-surface tracking-tight">Jurnal & Disiplin</h2>
          <p className="text-body-lg text-on-surface-variant mt-1">Kelola jurnal mengajar harian dan catatan kedisiplinan siswa.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-outline-variant mb-6 overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => setActiveTab('jurnal')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'jurnal' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          Jurnal Mengajar
        </button>
        <button 
          onClick={() => setActiveTab('kedisiplinan')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'kedisiplinan' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          Catatan Kedisiplinan
        </button>
      </div>

      {activeTab === 'jurnal' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-title-lg font-semibold text-on-surface">Jurnal Mengajar Harian</h3>
            <button className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-xl font-bold hover:bg-primary-container">
              <Edit2 className="w-4 h-4" /> Isi Jurnal Hari Ini
            </button>
          </div>
          <div className="p-4 bg-brand-light/10 border-l-4 border-l-primary rounded-r-xl">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-body-lg text-on-surface">Senin, 24 Juli 2023 - Matematika (6A)</h4>
              <span className="text-label-sm font-bold text-primary">Tercapai 90%</span>
            </div>
            <p className="text-body-md text-on-surface-variant">Materi Pokok: Operasi Hitung Pecahan Campuran. Kendala: Sebagian siswa masih kesulitan menyamakan penyebut.</p>
          </div>
        </div>
      )}

      {activeTab === 'kedisiplinan' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in duration-300">
          
          {/* Form Pencatatan */}
          <div className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <div>
                  <h3 className="text-title-md font-bold text-on-surface">Catatan Baru</h3>
                  <p className="text-label-sm text-on-surface-variant">Langsung ke Wali Murid</p>
                </div>
              </div>
              
              {isNoteSubmitted ? (
                <div className="bg-success/20 text-success border border-success/30 p-4 rounded-xl font-bold text-sm text-center mb-4">
                  Catatan berhasil dikirim ke Wali Murid!
                </div>
              ) : null}

              <form onSubmit={handleNoteSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-on-surface-variant">Pilih Siswa</label>
                  <select 
                    value={noteForm.student}
                    onChange={(e) => setNoteForm({...noteForm, student: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-brand text-body-md"
                  >
                    <option>Ahmad Fauzi (6A)</option>
                    <option>Siti Aminah (6A)</option>
                    <option>Budi Santoso (6B)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-on-surface-variant">Jenis Catatan</label>
                  <select 
                    value={noteForm.type}
                    onChange={(e) => setNoteForm({...noteForm, type: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-brand text-body-md"
                  >
                    <option>Perilaku / Disiplin</option>
                    <option>Apresiasi / Prestasi</option>
                    <option>Akademik</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-on-surface-variant">Pesan untuk Wali Murid</label>
                  <textarea 
                    rows={4}
                    value={noteForm.note}
                    onChange={(e) => setNoteForm({...noteForm, note: e.target.value})}
                    placeholder="Contoh: Ananda sering tertidur di kelas..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-brand text-body-md resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-brand text-white font-bold rounded-xl shadow-md hover:bg-brand-hover transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">send</span> Kirim Catatan
                </button>
              </form>
          </div>

          {/* Tabel Riwayat Kedisiplinan */}
          <div className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-title-lg font-semibold text-on-surface">Riwayat Kedisiplinan</h3>
              <button className="flex items-center gap-2 border border-outline text-on-surface px-4 py-2 rounded-xl font-bold hover:bg-surface-container">
                <span className="material-symbols-outlined text-[20px]">filter_list</span> Filter
              </button>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left text-body-md text-on-surface min-w-[500px]">
                <thead className="bg-surface border-b border-outline-variant">
                  <tr>
                    <th className="px-4 py-3">Tanggal</th>
                    <th className="px-4 py-3">Nama Siswa</th>
                    <th className="px-4 py-3">Jenis</th>
                    <th className="px-4 py-3">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr>
                    <td className="px-4 py-3">22 Jul 2024</td>
                    <td className="px-4 py-3 font-bold">Ahmad Fauzi</td>
                    <td className="px-4 py-3"><span className="text-error font-bold text-label-sm px-2 py-1 bg-error-container rounded-md">Pelanggaran</span></td>
                    <td className="px-4 py-3">Datang terlambat 15 menit.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">20 Jul 2024</td>
                    <td className="px-4 py-3 font-bold">Siti Aminah</td>
                    <td className="px-4 py-3"><span className="text-brand font-bold text-label-sm px-2 py-1 bg-brand-light/50 rounded-md">Apresiasi</span></td>
                    <td className="px-4 py-3">Membantu membersihkan papan tulis walau bukan jadwal piket.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
