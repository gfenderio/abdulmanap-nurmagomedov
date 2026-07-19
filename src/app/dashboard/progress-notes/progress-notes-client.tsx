"use client"

import React from 'react';
import { MOCK_STUDENT_NOTES } from '@/lib/mock-data';

export default function ProgressNotesClient({ role }: { role?: string }) {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-display-lg font-headline text-on-surface tracking-tight">Catatan Perkembangan</h2>
          <p className="text-body-lg text-on-surface-variant mt-1">Riwayat catatan kedisiplinan dan apresiasi dari Wali Kelas.</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6 animate-in fade-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-title-lg font-semibold text-on-surface">Riwayat Catatan (Ahmad Fauzi - 6A)</h3>
          <button className="flex items-center gap-2 border border-outline text-on-surface px-4 py-2 rounded-xl font-bold hover:bg-surface-container">
            <span className="material-symbols-outlined text-[20px]">filter_list</span> Filter
          </button>
        </div>
        
        <div className="space-y-4">
          {MOCK_STUDENT_NOTES.map((note) => (
            <div key={note.id} className="p-4 border border-outline-variant rounded-xl bg-surface hover:bg-surface-container-low transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  {note.type === 'Perilaku' ? (
                    <span className="px-2 py-1 bg-error-container text-error text-[10px] font-bold rounded-md uppercase tracking-wider">Perilaku</span>
                  ) : note.type === 'Apresiasi' ? (
                    <span className="px-2 py-1 bg-brand-light/50 text-brand text-[10px] font-bold rounded-md uppercase tracking-wider">Apresiasi</span>
                  ) : (
                    <span className="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-md uppercase tracking-wider">{note.type}</span>
                  )}
                  <span className="text-label-sm font-bold text-on-surface-variant">{note.date}</span>
                </div>
                <span className="text-label-sm text-on-surface-variant font-medium">Dari: {note.teacher}</span>
              </div>
              <p className="text-body-md text-on-surface font-medium leading-relaxed">{note.note}</p>
            </div>
          ))}
          {MOCK_STUDENT_NOTES.length === 0 && (
            <div className="text-center p-8 text-on-surface-variant">
              Belum ada catatan dari guru.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
