"use client"

import React, { useState } from 'react';
import { MOCK_GRADES } from '@/lib/mock-data';

export default function AcademicClient({ role }: { role?: string }) {
  const [activeTab, setActiveTab] = useState<'jadwal' | 'penilaian'>('jadwal');

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-display-lg font-headline text-on-surface tracking-tight">Akademik & Nilai</h2>
          <p className="text-body-lg text-on-surface-variant mt-1">Lihat jadwal pelajaran dan riwayat nilai akademik.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-outline-variant mb-6 overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => setActiveTab('jadwal')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'jadwal' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          Jadwal Pelajaran
        </button>
        <button 
          onClick={() => setActiveTab('penilaian')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'penilaian' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          Data Nilai
        </button>
      </div>

      {activeTab === 'jadwal' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface-container-lowest gap-4">
            <div>
              <h3 className="text-title-lg font-semibold text-on-surface">Jadwal Pelajaran Hari Ini</h3>
              <p className="text-label-md text-on-surface-variant">Senin, 24 Juli 2023</p>
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
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'penilaian' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col animate-in fade-in duration-300">
          <div className="p-5 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface-container-lowest gap-4">
            <div>
              <h3 className="text-title-lg font-semibold text-on-surface">Data Nilai</h3>
              <p className="text-label-md text-on-surface-variant">Daftar nilai tugas dan ujian</p>
            </div>
          </div>
          <div className="p-6">
            <table className="w-full text-left text-body-md text-on-surface">
              <thead className="bg-surface border-b border-outline-variant">
                <tr>
                  <th className="px-6 py-4">Mata Pelajaran</th>
                  <th className="px-6 py-4">Tugas/Ujian</th>
                  <th className="px-6 py-4 text-center">Nilai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {MOCK_GRADES.filter(g => g.student === "Ahmad Fauzi").map((grade) => (
                  <tr key={grade.id}>
                    <td className="px-6 py-4 font-bold">{grade.subject}</td>
                    <td className="px-6 py-4">{grade.type}</td>
                    <td className="px-6 py-4 text-center font-bold text-primary text-title-lg">{grade.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
