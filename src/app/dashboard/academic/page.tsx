"use client"

import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AcademicPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handlePrint = () => {
    alert("Memulai cetak laporan jadwal pelajaran (dummy)");
    // window.print(); // Could also simulate browser print
  };

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      
      {/* ADD SCHEDULE MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Tambah Jadwal Baru</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-label-md font-bold text-on-surface-variant">Hari</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                    <option>Senin</option>
                    <option>Selasa</option>
                    <option>Rabu</option>
                    <option>Kamis</option>
                    <option>Jumat</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-label-md font-bold text-on-surface-variant">Kelas</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                    <option>1A</option>
                    <option>1B</option>
                    <option>2A</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-label-md font-bold text-on-surface-variant">Jam Ke-</label>
                  <input type="number" defaultValue="1" className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-label-md font-bold text-on-surface-variant">Waktu</label>
                  <input type="text" placeholder="07:00 - 07:45" className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Mata Pelajaran</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                  <option>Matematika</option>
                  <option>Bahasa Indonesia</option>
                  <option>Pend. Agama Islam</option>
                  <option>IPA</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Guru Pengajar</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface">
                  <option>Bpk. Budi Santoso, S.Pd</option>
                  <option>Ibu Rina Gunawan, M.Pd</option>
                  <option>Ust. H. Ahmad, S.Ag</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Ruangan</label>
                <input type="text" placeholder="Misal: R. 1A" className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 rounded-xl text-body-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Batal
              </button>
              <button onClick={() => { alert("Jadwal baru berhasil ditambahkan (dummy)"); setIsAddModalOpen(false); }} className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-md font-bold hover:bg-brand-hover transition-colors shadow-sm">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-display-lg font-headline text-on-surface tracking-tight">Manajemen Akademik</h2>
          <p className="text-body-lg text-on-surface-variant mt-1">Kelola jadwal pelajaran, data kelas, dan penugasan guru pengajar.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handlePrint} className="px-4 py-2 border border-outline rounded-xl text-on-surface font-bold hover:bg-surface-container flex items-center gap-2 transition-colors whitespace-nowrap">
            <span className="material-symbols-outlined text-[20px]">print</span> Cetak Laporan
          </button>
          <button onClick={() => setIsAddModalOpen(true)} className="px-4 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-brand-hover shadow-md flex items-center gap-2 transition-colors whitespace-nowrap">
            <span className="material-symbols-outlined text-[20px]">add</span> Tambah Jadwal
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {/* Summary Widget 1 */}
        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-2xl p-6 border border-primary-container shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-brand-light rounded-xl text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>meeting_room</span>
            </div>
            <span className="px-2 py-1 bg-surface-container text-on-surface-variant text-label-md font-bold rounded-md">Semester Ganjil</span>
          </div>
          <div>
            <h3 className="text-on-surface-variant font-bold text-body-md mb-1">Total Kelas Aktif</h3>
            <p className="text-headline-lg font-bold text-on-surface">18 <span className="text-title-lg font-normal text-on-surface-variant">Kelas</span></p>
            <p className="text-label-md text-primary mt-2 flex items-center gap-1 font-bold">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +2 dari tahun lalu
            </p>
          </div>
        </div>

        {/* Summary Widget 2 */}
        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary-container rounded-xl text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>group</span>
            </div>
          </div>
          <div>
            <h3 className="text-on-surface-variant font-bold text-body-md mb-1">Total Guru Pengajar</h3>
            <p className="text-headline-lg font-bold text-on-surface">42 <span className="text-title-lg font-normal text-on-surface-variant">Guru</span></p>
            <p className="text-label-md text-on-surface-variant font-medium mt-2">Semua mata pelajaran terisi</p>
          </div>
        </div>

        {/* Summary Widget 3 */}
        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-tertiary-container/30 rounded-xl text-tertiary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_stories</span>
            </div>
          </div>
          <div>
            <h3 className="text-on-surface-variant font-bold text-body-md mb-1">Mata Pelajaran</h3>
            <p className="text-headline-lg font-bold text-on-surface">14 <span className="text-title-lg font-normal text-on-surface-variant">Mapel</span></p>
            <p className="text-label-md text-on-surface-variant font-medium mt-2">Kurikulum Merdeka & Kemenag</p>
          </div>
        </div>

        {/* Main Schedule Table (Wide) */}
        <div className="col-span-1 md:col-span-12 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface-container-lowest gap-4">
            <div>
              <h3 className="text-title-lg font-semibold text-on-surface">Jadwal Pelajaran Hari Ini</h3>
              <p className="text-label-md text-on-surface-variant">Senin, 24 Juli 2023</p>
            </div>
            <div className="flex w-full sm:w-auto">
              <select className="bg-surface border border-outline-variant text-on-surface text-body-md rounded-xl focus:ring-primary focus:border-primary block w-full p-2.5 transition-colors">
                <option>Kelas 1A</option>
                <option>Kelas 1B</option>
                <option>Kelas 2A</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-body-md text-on-surface min-w-[700px]">
              <thead className="bg-surface text-on-surface-variant text-body-md font-medium border-b border-outline-variant">
                <tr>
                  <th className="px-6 py-4" scope="col">Jam</th>
                  <th className="px-6 py-4" scope="col">Waktu</th>
                  <th className="px-6 py-4" scope="col">Mata Pelajaran</th>
                  <th className="px-6 py-4" scope="col">Guru Pengajar</th>
                  <th className="px-6 py-4" scope="col">Ruang</th>
                  <th className="px-6 py-4 text-right" scope="col">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                <tr className="hover:bg-brand-light/30 transition-colors">
                  <td className="px-6 py-4 font-bold">1</td>
                  <td className="px-6 py-4 text-on-surface-variant">07:00 - 07:45</td>
                  <td className="px-6 py-4 font-bold text-primary">Upacara Bendera</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">Lapangan</td>
                  <td className="px-6 py-4 text-right">
                    <span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant text-label-md font-bold">Selesai</span>
                  </td>
                </tr>
                <tr className="hover:bg-brand-light/30 transition-colors bg-brand-light/10 border-l-4 border-l-primary">
                  <td className="px-6 py-4 font-bold">2</td>
                  <td className="px-6 py-4 text-on-surface-variant">07:45 - 08:20</td>
                  <td className="px-6 py-4 font-bold text-on-surface">Matematika</td>
                  <td className="px-6 py-4">Bpk. Budi Santoso, S.Pd</td>
                  <td className="px-6 py-4">R. 1A</td>
                  <td className="px-6 py-4 text-right">
                    <span className="px-2.5 py-1 rounded-md bg-primary-container text-primary text-label-md font-bold animate-pulse">Berlangsung</span>
                  </td>
                </tr>
                <tr className="hover:bg-brand-light/30 transition-colors">
                  <td className="px-6 py-4 font-bold">3</td>
                  <td className="px-6 py-4 text-on-surface-variant">08:20 - 08:55</td>
                  <td className="px-6 py-4 font-bold text-on-surface">Matematika</td>
                  <td className="px-6 py-4">Bpk. Budi Santoso, S.Pd</td>
                  <td className="px-6 py-4">R. 1A</td>
                  <td className="px-6 py-4 text-right">
                    <span className="px-2.5 py-1 rounded-md bg-surface-variant text-on-surface-variant text-label-md font-bold">Menunggu</span>
                  </td>
                </tr>
                <tr className="bg-surface-container-lowest text-on-surface-variant italic">
                  <td className="px-6 py-3 text-center font-bold" colSpan={6}>Istirahat (08:55 - 09:15)</td>
                </tr>
                <tr className="hover:bg-brand-light/30 transition-colors">
                  <td className="px-6 py-4 font-bold">4</td>
                  <td className="px-6 py-4 text-on-surface-variant">09:15 - 09:50</td>
                  <td className="px-6 py-4 font-bold text-on-surface">Pend. Agama Islam</td>
                  <td className="px-6 py-4">Ust. H. Ahmad, S.Ag</td>
                  <td className="px-6 py-4">R. 1A</td>
                  <td className="px-6 py-4 text-right">
                    <span className="px-2.5 py-1 rounded-md bg-surface-variant text-on-surface-variant text-label-md font-bold">Menunggu</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
