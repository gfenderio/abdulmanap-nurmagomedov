"use client"

import React, { useState } from 'react';
import { X, Plus, Edit2 } from 'lucide-react';
import { MOCK_GRADES, MOCK_STUDENTS } from '@/lib/mock-data';

type AcademicTab = 'jadwal' | 'kalender' | 'penilaian' | 'tugas' | 'jurnal' | 'bahan_ajar' | 'kedisiplinan';

export default function AcademicClient({ role }: { role?: string }) {
  const [activeTab, setActiveTab] = useState<AcademicTab>('jadwal');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isOcrModalOpen, setIsOcrModalOpen] = useState(false);
  const [ocrStep, setOcrStep] = useState<1 | 2>(1);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [gradesList, setGradesList] = useState(MOCK_GRADES);

  // Form states for adding grade
  const [selectedStudent, setSelectedStudent] = useState(MOCK_STUDENTS[0].name);
  const [selectedSubject, setSelectedSubject] = useState("Matematika");
  const [selectedType, setSelectedType] = useState("Ulangan Harian 1");
  const [inputScore, setInputScore] = useState("80");

  const handlePrint = () => {
    alert("Memulai cetak laporan jadwal pelajaran (dummy)");
    // window.print(); // Could also simulate browser print
  };

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
                  <div className="border border-outline-variant rounded-xl overflow-x-auto">
                    <table className="w-full text-left text-body-md min-w-[500px]">
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
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-2 md:mt-0">
          <button onClick={handlePrint} className="w-full sm:w-auto justify-center px-4 py-2 border border-outline rounded-xl text-on-surface font-bold hover:bg-surface-container flex items-center gap-2 transition-colors whitespace-nowrap">
            <span className="material-symbols-outlined text-[20px]">print</span> Cetak Laporan
          </button>
          {role === "ADMIN" && (
            <button onClick={() => setIsAddModalOpen(true)} className="w-full sm:w-auto justify-center px-4 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-brand-hover shadow-md flex items-center gap-2 transition-colors whitespace-nowrap">
              <span className="material-symbols-outlined text-[20px]">add</span> Tambah Jadwal
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-outline-variant mb-6 overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => setActiveTab('jadwal')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'jadwal' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          {role === "TEACHER" ? "Jadwal Mengajar" : "Jadwal Pelajaran"}
        </button>
        <button 
          onClick={() => setActiveTab('kalender')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'kalender' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          Kalender Akademik
        </button>
        <button 
          onClick={() => setActiveTab('penilaian')}
          className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'penilaian' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          {role === "PARENT" ? "Nilai Akademik Ananda" : "Manajemen Nilai"}
        </button>
        {(role === "TEACHER" || role === "ADMIN") && (
          <>
            <button 
              onClick={() => setActiveTab('tugas')}
              className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'tugas' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Penugasan Siswa
            </button>
            <button 
              onClick={() => setActiveTab('jurnal')}
              className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'jurnal' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Jurnal Kelas
            </button>
            <button 
              onClick={() => setActiveTab('bahan_ajar')}
              className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'bahan_ajar' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Bahan Ajar
            </button>
            <button 
              onClick={() => setActiveTab('kedisiplinan')}
              className={`px-4 py-4 font-medium transition-colors text-body-md whitespace-nowrap border-b-2 ${activeTab === 'kedisiplinan' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Catatan Kedisiplinan
            </button>
          </>
        )}
      </div>

      {activeTab === 'jadwal' && (
        <>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {/* Summary Widget 1 */}
        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
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
      </>
      )}

      {activeTab === 'kalender' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6 animate-in fade-in duration-300">
          <h3 className="text-title-lg font-semibold text-on-surface mb-4">Agenda Terdekat (Agustus 2024)</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-center p-4 rounded-xl border border-outline-variant bg-surface">
              <div className="w-16 h-16 rounded-xl bg-primary-container text-primary flex flex-col items-center justify-center shrink-0">
                <span className="text-label-sm font-bold uppercase">Agu</span>
                <span className="text-title-lg font-bold">17</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-body-lg">HUT Republik Indonesia</h4>
                <p className="text-body-md text-on-surface-variant">Libur Nasional & Upacara Kemerdekaan</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded-xl border border-outline-variant bg-surface">
              <div className="w-16 h-16 rounded-xl bg-surface-container-high text-on-surface flex flex-col items-center justify-center shrink-0">
                <span className="text-label-sm font-bold uppercase">Sep</span>
                <span className="text-title-lg font-bold">09</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-body-lg">Ujian Tengah Semester (UTS)</h4>
                <p className="text-body-md text-on-surface-variant">Pelaksanaan UTS Ganjil TA 2024/2025</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'penilaian' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col animate-in fade-in duration-300">
          <div className="p-5 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface-container-lowest gap-4">
            <div>
              <h3 className="text-title-lg font-semibold text-on-surface">Data Nilai</h3>
              <p className="text-label-md text-on-surface-variant">{role === "PARENT" ? "Daftar nilai tugas dan ujian Ananda" : "Input dan kelola nilai siswa"}</p>
            </div>
            {role !== "PARENT" && (
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 sm:mt-0">
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
                <button 
                  onClick={() => alert("Laporan evaluasi berhasil dikirim ke akun Wali Murid!")}
                  className="flex items-center justify-center gap-2 bg-secondary text-on-secondary hover:bg-secondary/90 px-4 py-2 rounded-xl font-bold transition-all shadow-md whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  Kirim Evaluasi
                </button>
              </div>
            )}
          </div>
          <div className="p-6">
            {role !== "PARENT" ? (
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
            ) : (
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left text-body-md text-on-surface min-w-[400px]">
                  <thead className="bg-surface border-b border-outline-variant">
                  <tr>
                    <th className="px-6 py-4">Mata Pelajaran</th>
                    <th className="px-6 py-4">Tugas/Ujian</th>
                    <th className="px-6 py-4 text-center">Nilai</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {gradesList.filter(g => g.student === "Ahmad Fauzi").map((grade) => (
                    <tr key={grade.id}>
                      <td className="px-6 py-4 font-bold">{grade.subject}</td>
                      <td className="px-6 py-4">{grade.type}</td>
                      <td className="px-6 py-4 text-center font-bold text-primary text-title-lg">{grade.score}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'tugas' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-title-lg font-semibold text-on-surface">Manajemen Penugasan Siswa</h3>
            <button className="flex items-center justify-center w-full sm:w-auto gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-bold hover:bg-brand-hover">
              <Plus className="w-5 h-5" /> Buat Tugas
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-outline-variant rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-surface hover:bg-surface-container-low transition-colors">
              <div>
                <h4 className="font-bold text-body-lg text-primary">Tugas Matematika Bab 3</h4>
                <p className="text-label-sm text-on-surface-variant mt-1">Kelas 6A | Tenggat: 30 Jul 2024</p>
              </div>
              <span className="px-3 py-1 bg-secondary-container text-secondary font-bold text-label-sm rounded-full self-start sm:self-auto">25/30 Terkumpul</span>
            </div>
            <div className="p-4 border border-outline-variant rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-surface hover:bg-surface-container-low transition-colors">
              <div>
                <h4 className="font-bold text-body-lg text-primary">Makalah Sejarah Kemerdekaan</h4>
                <p className="text-label-sm text-on-surface-variant mt-1">Kelas 6A | Tenggat: 02 Agu 2024</p>
              </div>
              <span className="px-3 py-1 bg-surface-variant text-on-surface-variant font-bold text-label-sm rounded-full self-start sm:self-auto">0/30 Terkumpul</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'jurnal' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-title-lg font-semibold text-on-surface">Jurnal Mengajar Harian</h3>
            <button className="flex items-center justify-center w-full sm:w-auto gap-2 border border-primary text-primary px-4 py-2 rounded-xl font-bold hover:bg-primary-container">
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

      {activeTab === 'bahan_ajar' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-title-lg font-semibold text-on-surface">Distribusi Bahan Ajar</h3>
            <button className="flex items-center justify-center w-full sm:w-auto gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-bold hover:bg-brand-hover">
              <span className="material-symbols-outlined text-[20px]">upload_file</span> Unggah Modul
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-outline-variant rounded-xl flex items-start gap-4">
              <div className="p-3 bg-error-container text-error rounded-lg shrink-0">
                <span className="material-symbols-outlined">picture_as_pdf</span>
              </div>
              <div>
                <h4 className="font-bold text-body-md text-on-surface">Modul Tema 1 - Indahnya Kebersamaan.pdf</h4>
                <p className="text-label-sm text-on-surface-variant mt-1">Diunggah 20 Jul 2024 • 2.4 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'kedisiplinan' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-title-lg font-semibold text-on-surface">Buku Catatan Kedisiplinan Siswa</h3>
            <button className="flex items-center justify-center w-full sm:w-auto gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-bold hover:bg-brand-hover">
              <Plus className="w-5 h-5" /> Catat Pelanggaran/Apresiasi
            </button>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-body-md text-on-surface min-w-[600px]">
              <thead className="bg-surface border-b border-outline-variant">
              <tr>
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3">Nama Siswa</th>
                <th className="px-4 py-3">Jenis</th>
                <th className="px-4 py-3">Keterangan</th>
                <th className="px-4 py-3 text-center">Poin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              <tr>
                <td className="px-4 py-3">22 Jul 2024</td>
                <td className="px-4 py-3 font-bold">Ahmad Fauzi</td>
                <td className="px-4 py-3"><span className="text-error font-bold text-label-sm px-2 py-1 bg-error-container rounded-md">Pelanggaran</span></td>
                <td className="px-4 py-3">Datang terlambat 15 menit.</td>
                <td className="px-4 py-3 text-center font-bold text-error">-5</td>
              </tr>
              <tr>
                <td className="px-4 py-3">20 Jul 2024</td>
                <td className="px-4 py-3 font-bold">Siti Aminah</td>
                <td className="px-4 py-3"><span className="text-primary font-bold text-label-sm px-2 py-1 bg-primary-container rounded-md">Apresiasi</span></td>
                <td className="px-4 py-3">Menemukan dompet dan mengembalikan ke guru.</td>
                <td className="px-4 py-3 text-center font-bold text-primary">+10</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
