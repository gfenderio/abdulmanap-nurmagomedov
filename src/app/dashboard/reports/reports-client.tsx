"use client"

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ReportsClient({ role }: { role?: string }) {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [selectedReportType, setSelectedReportType] = useState("");

  const router = useRouter();

  const handleDownloadClick = (type: string) => {
    setSelectedReportType(type);
    setIsExportModalOpen(true);
  };

  const handleViewClick = (type: string) => {
    router.push('/dashboard/reports/template');
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      
      {/* EXPORT MODAL */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Opsi Ekspor Laporan</h3>
              <button onClick={() => setIsExportModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-body-md text-on-surface-variant">Pilih format unduhan untuk laporan <strong>{selectedReportType}</strong>:</p>
              
              <button onClick={() => { alert(`Mengunduh ${selectedReportType} dalam format PDF... (dummy)`); setIsExportModalOpen(false); }} className="w-full flex items-center gap-3 p-4 rounded-xl border border-outline-variant hover:border-error hover:bg-error-container/10 transition-colors text-left group">
                <div className="w-10 h-10 rounded-lg bg-error-container/30 text-error flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface group-hover:text-error transition-colors">Format PDF</h4>
                  <p className="text-label-sm text-on-surface-variant">Dokumen siap cetak</p>
                </div>
              </button>

              <button onClick={() => { alert(`Mengunduh ${selectedReportType} dalam format Excel... (dummy)`); setIsExportModalOpen(false); }} className="w-full flex items-center gap-3 p-4 rounded-xl border border-outline-variant hover:border-green-600 hover:bg-green-50 transition-colors text-left group">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">table_view</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface group-hover:text-green-700 transition-colors">Format Excel (XLSX)</h4>
                  <p className="text-label-sm text-on-surface-variant">Data mentah untuk diolah</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-headline-lg font-bold text-headline-lg text-on-surface tracking-tight">Pusat Laporan</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Akses semua laporan akademik, keuangan, dan data induk siswa.</p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Report Card 1 */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-[28px]">analytics</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-title-lg font-bold text-title-lg text-on-surface">{role === "PARENT" ? "Rapor Akademik Ananda" : "Rekapitulasi Nilai"}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{role === "PARENT" ? "Laporan nilai semester dan perkembangan akademik Ananda." : "Laporan komprehensif nilai siswa per semester, mata pelajaran, dan kelas."}</p>
            </div>
            <div className="mt-auto pt-4 flex gap-3">
              <button onClick={() => handleDownloadClick('Rekapitulasi Nilai')} className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-brand-hover transition-colors shadow-sm">
                Unduh
              </button>
              <button onClick={() => handleViewClick('Rekapitulasi Nilai')} className="px-4 py-2 border border-outline text-on-surface font-bold rounded-xl hover:bg-surface-container-low transition-colors">
                Lihat
              </button>
            </div>
          </div>

          {role === "ADMIN" && (
            <>
              {/* Report Card 2 */}
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant mb-2">
                  <span className="material-symbols-outlined text-[28px]">receipt_long</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-title-lg font-bold text-title-lg text-on-surface">Laporan Pembayaran SPP</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Status pembayaran bulanan, tunggakan, dan rekapitulasi penerimaan kas.</p>
                </div>
                <div className="mt-auto pt-4 flex gap-3">
                  <button onClick={() => handleDownloadClick('Laporan Pembayaran SPP')} className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-brand-hover transition-colors shadow-sm">
                    Unduh
                  </button>
                  <button onClick={() => handleViewClick('Laporan Pembayaran SPP')} className="px-4 py-2 border border-outline text-on-surface font-bold rounded-xl hover:bg-surface-container-low transition-colors">
                    Lihat
                  </button>
                </div>
              </div>

              {/* Report Card 3 */}
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-2">
                  <span className="material-symbols-outlined text-[28px]">import_contacts</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-title-lg font-bold text-title-lg text-on-surface">Buku Induk Siswa</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Data lengkap profil siswa, riwayat akademik, dan mutasi terpusat.</p>
                </div>
                <div className="mt-auto pt-4 flex gap-3">
                  <button onClick={() => handleDownloadClick('Buku Induk Siswa')} className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-brand-hover transition-colors shadow-sm">
                    Unduh
                  </button>
                  <button onClick={() => handleViewClick('Buku Induk Siswa')} className="px-4 py-2 border border-outline text-on-surface font-bold rounded-xl hover:bg-surface-container-low transition-colors">
                    Lihat
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
