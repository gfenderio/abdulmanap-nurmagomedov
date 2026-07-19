"use client"

import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { MOCK_GRADES, MOCK_STUDENTS } from '@/lib/mock-data';

export default function GradesClient({ role }: { role?: string }) {
  const [activeTab, setActiveTab] = useState<'penilaian' | 'tugas'>('penilaian');
  const [isOcrModalOpen, setIsOcrModalOpen] = useState(false);
  const [ocrStep, setOcrStep] = useState<1 | 2>(1);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [gradesList, setGradesList] = useState(MOCK_GRADES);

  // Form states for adding grade
  const [selectedStudent, setSelectedStudent] = useState(MOCK_STUDENTS[0].name);
  const [selectedSubject, setSelectedSubject] = useState("Matematika");
  const [selectedType, setSelectedType] = useState("Ulangan Harian 1");
  const [inputScore, setInputScore] = useState("80");

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      
      {/* AI OCR SCAN MODAL */}
      {isOcrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest shrink-0">
              <h3 className="font-headline font-bold text-title-lg text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Scan Kertas Nilai (Anti-Slop AI)
              </h3>
              <button onClick={() => {setIsOcrModalOpen(false); setOcrStep(1);}} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              {ocrStep === 1 ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-primary-container/10 border border-primary/20 rounded-xl">
                    <span className="material-symbols-outlined text-primary text-[24px]">info</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Gunakan Template Standar</h4>
                      <p className="text-body-md text-on-surface-variant mb-3">Untuk hasil akurasi 99%, AI kami membutuhkan format kotak (grid) yang jelas. Silakan cetak template kosong ini jika Anda belum memilikinya.</p>
                      <button onClick={() => alert("Mengunduh Template_Nilai_6A.pdf (dummy)")} className="px-4 py-2 bg-surface border border-outline text-on-surface font-bold rounded-lg hover:bg-surface-container-low transition-colors text-sm">
                        Cetak Template Kosong (PDF)
                      </button>
                    </div>
                  </div>
                  <div className="p-8 border-2 border-dashed border-outline-variant rounded-2xl bg-surface flex flex-col items-center justify-center text-center gap-3 cursor-pointer hover:bg-surface-container-lowest hover:border-primary transition-all">
                    <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-[32px]">photo_camera</span>
                    </div>
                    <div>
                      <p className="text-body-lg font-bold text-on-surface">Ambil Foto / Unggah Kertas Nilai</p>
                      <p className="text-label-sm text-on-surface-variant mt-1">Format JPG, PNG (Max 5MB)</p>
                    </div>
                    <button onClick={() => setOcrStep(2)} className="mt-4 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-bold shadow-sm hover:bg-brand-hover">
                      Simulasikan Upload & Scan
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold bg-primary-container/20 px-4 py-2 rounded-lg">
                    <span className="material-symbols-outlined animate-spin">sync</span>
                    Tabel Review: Periksa baris merah sebelum menyimpan
                  </div>
                  <div className="border border-outline-variant rounded-xl overflow-hidden">
                    <table className="w-full text-left text-body-md">
                      <thead className="bg-surface-container-low border-b border-outline-variant">
                        <tr>
                          <th className="px-4 py-3 font-bold text-on-surface-variant">No</th>
                          <th className="px-4 py-3 font-bold text-on-surface-variant">Nama Siswa (Terbaca)</th>
                          <th className="px-4 py-3 font-bold text-on-surface-variant">Nilai Tugas</th>
                          <th className="px-4 py-3 font-bold text-on-surface-variant">Nilai Ujian</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant">
                        <tr>
                          <td className="px-4 py-3">1</td>
                          <td className="px-4 py-3">Ahmad Fauzi</td>
                          <td className="px-4 py-3"><input type="number" defaultValue="85" className="w-16 px-2 py-1 border rounded bg-surface" /></td>
                          <td className="px-4 py-3"><input type="number" defaultValue="90" className="w-16 px-2 py-1 border rounded bg-surface" /></td>
                        </tr>
                        <tr className="bg-error-container/20">
                          <td className="px-4 py-3">2</td>
                          <td className="px-4 py-3">Siti Amlnah <span className="text-[10px] text-error font-bold ml-1">(Ragu)</span></td>
                          <td className="px-4 py-3"><input type="number" defaultValue="80" className="w-16 px-2 py-1 border border-error rounded bg-error-container/10 focus:ring-1 focus:ring-error" /></td>
                          <td className="px-4 py-3"><input type="text" defaultValue="1O0" className="w-16 px-2 py-1 border border-error rounded bg-error-container/10 text-error font-bold focus:ring-1 focus:ring-error" title="Angka mengandung huruf O" /></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">3</td>
                          <td className="px-4 py-3">Budi Santoso</td>
                          <td className="px-4 py-3"><input type="number" defaultValue="75" className="w-16 px-2 py-1 border rounded bg-surface" /></td>
                          <td className="px-4 py-3"><input type="number" defaultValue="85" className="w-16 px-2 py-1 border rounded bg-surface" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-label-sm text-on-surface-variant italic">*Sistem menahan penyimpanan otomatis karena mendeteksi anomali pada baris 2 (salah eja nama & huruf O pada nilai). Harap perbaiki input secara manual.</p>
                </div>
              )}
            </div>
            
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3 shrink-0">
              <button onClick={() => {setIsOcrModalOpen(false); setOcrStep(1);}} className="px-4 py-2 rounded-xl text-body-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Batal
              </button>
              {ocrStep === 2 && (
                <button onClick={() => { alert("Data divalidasi dan berhasil disimpan!"); setIsOcrModalOpen(false); setOcrStep(1); }} className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-md font-bold hover:bg-brand-hover transition-colors shadow-sm">
                  Konfirmasi & Simpan
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ADD GRADE MODAL */}
      {isGradeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline font-bold text-title-lg text-on-surface">Input Nilai Siswa</h3>
              <button onClick={() => setIsGradeModalOpen(false)} className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Pilih Siswa</label>
                <select 
                  value={selectedStudent} 
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface"
                >
                  {MOCK_STUDENTS.map(student => (
                    <option key={student.id} value={student.name}>{student.name} ({student.grade})</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Mata Pelajaran</label>
                <select 
                  value={selectedSubject} 
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface"
                >
                  <option value="Matematika">Matematika</option>
                  <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                  <option value="IPA">IPA</option>
                  <option value="Pendidikan Agama Islam">Pendidikan Agama Islam</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Jenis Penilaian</label>
                <select 
                  value={selectedType} 
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface"
                >
                  <option value="Ulangan Harian 1">Ulangan Harian 1</option>
                  <option value="Tugas 1">Tugas 1</option>
                  <option value="UTS">UTS</option>
                  <option value="UAS">UAS</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-label-md font-bold text-on-surface-variant">Nilai (0 - 100)</label>
                <input 
                  type="number" 
                  value={inputScore} 
                  onChange={(e) => setInputScore(e.target.value)}
                  min="0" max="100" 
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-body-md text-on-surface" 
                />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setIsGradeModalOpen(false)} className="px-4 py-2 rounded-xl text-body-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Batal
              </button>
              <button 
                onClick={() => {
                  const scoreNum = Number(inputScore);
                  const newEntry = {
                    id: gradesList.length + 1,
                    student: selectedStudent,
                    nisn: "00123456" + (gradesList.length + 1),
                    class: "6A",
                    subject: selectedSubject,
                    type: selectedType,
                    score: scoreNum,
                    status: scoreNum >= 75 ? "Tuntas" : "Remedial"
                  };
                  setGradesList([...gradesList, newEntry]);
                  setIsGradeModalOpen(false);
                }} 
                className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-md font-bold hover:bg-brand-hover transition-colors shadow-sm"
              >
                Simpan Nilai
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-display-lg font-headline text-on-surface tracking-tight">Penilaian & Tugas</h2>
          <p className="text-body-lg text-on-surface-variant mt-1">Kelola nilai ujian, tugas siswa, dan rapor.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-outline-variant mb-6 overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => setActiveTab('penilaian')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'penilaian' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          Manajemen Nilai
        </button>
        <button 
          onClick={() => setActiveTab('tugas')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'tugas' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          Penugasan Siswa
        </button>
      </div>

      {activeTab === 'penilaian' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col animate-in fade-in duration-300">
          <div className="p-5 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface-container-lowest gap-4">
            <div>
              <h3 className="text-title-lg font-semibold text-on-surface">Data Nilai Kelas</h3>
              <p className="text-label-md text-on-surface-variant">Input dan kelola nilai siswa</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsOcrModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-brand-light/30 text-primary border border-primary/20 hover:bg-brand-light px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[20px]">document_scanner</span>
                Scan Nilai (AI OCR)
              </button>
              <button 
                onClick={() => setIsGradeModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-brand-hover px-4 py-2 rounded-xl font-bold transition-all shadow-md whitespace-nowrap"
              >
                <Plus className="w-5 h-5" />
                Input Manual
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left text-body-md text-on-surface min-w-[600px]">
                <thead className="bg-surface border-b border-outline-variant">
                  <tr>
                    <th className="px-6 py-4">Nama Siswa</th>
                    <th className="px-6 py-4">Mata Pelajaran</th>
                    <th className="px-6 py-4">Jenis Penilaian</th>
                    <th className="px-6 py-4 text-center">Nilai</th>
                    <th className="px-6 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {gradesList.map((grade) => (
                    <tr key={grade.id} className="hover:bg-brand-light/20 transition-colors">
                      <td className="px-6 py-4 font-medium">{grade.student}</td>
                      <td className="px-6 py-4">{grade.subject}</td>
                      <td className="px-6 py-4">{grade.type}</td>
                      <td className="px-6 py-4 text-center font-bold text-primary">{grade.score}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-bold text-[12px] ${grade.status === 'Tuntas' ? 'bg-brand-light text-primary' : 'bg-error-container/20 text-error'}`}>
                          {grade.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tugas' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-title-lg font-semibold text-on-surface">Manajemen Penugasan Siswa</h3>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-bold hover:bg-brand-hover">
              <Plus className="w-5 h-5" /> Buat Tugas
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-outline-variant rounded-xl flex justify-between items-center bg-surface hover:bg-surface-container-low transition-colors">
              <div>
                <h4 className="font-bold text-body-lg text-primary">Tugas Matematika Bab 3</h4>
                <p className="text-label-sm text-on-surface-variant mt-1">Kelas 6A | Tenggat: 30 Jul 2024</p>
              </div>
              <span className="px-3 py-1 bg-secondary-container text-secondary font-bold text-label-sm rounded-full">25/30 Terkumpul</span>
            </div>
            <div className="p-4 border border-outline-variant rounded-xl flex justify-between items-center bg-surface hover:bg-surface-container-low transition-colors">
              <div>
                <h4 className="font-bold text-body-lg text-primary">Makalah Sejarah Kemerdekaan</h4>
                <p className="text-label-sm text-on-surface-variant mt-1">Kelas 6A | Tenggat: 02 Agu 2024</p>
              </div>
              <span className="px-3 py-1 bg-surface-variant text-on-surface-variant font-bold text-label-sm rounded-full">0/30 Terkumpul</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
