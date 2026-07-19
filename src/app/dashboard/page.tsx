import { auth } from "../../../auth"
import { GradeChart } from "@/components/dashboard/grade-chart"
import { redirect } from "next/navigation"
import Link from "next/link"
import { ClientAlertButton } from "@/components/ui/ClientAlertButton"
import { RevenueAreaChart, AttendanceDonutChart } from "@/components/dashboard/admin-charts"
import { MOCK_ACTIVITIES, MOCK_TEACHER_SCHEDULE, MOCK_STUDENT_SCHEDULE, MOCK_ANNOUNCEMENTS } from "@/lib/mock-data"

export default async function Dashboard() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/login")
  }

  const role = session.user.role

  if (role === "ADMIN") {
    return (
      <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
        <div className="mb-8">
          <h2 className="text-headline-lg font-headline font-bold text-on-surface tracking-tight mb-2">Ikhtisar Madrasah</h2>
          <p className="text-on-surface-variant text-base max-w-2xl">Pantau performa akademik, kehadiran, dan sirkulasi keuangan hari ini.</p>
        </div>

        {/* 1. Stat Cards (Premium Compact Layout) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-brand/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Total Siswa</span>
              <span className="material-symbols-outlined text-brand text-[20px]">group</span>
            </div>
            <div>
              <div className="text-headline-md font-black text-on-surface">842</div>
              <p className="text-label-sm text-brand font-medium mt-1">↑ 2.4% vs bulan lalu</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-secondary/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Kehadiran Hari Ini</span>
              <span className="material-symbols-outlined text-secondary text-[20px]">how_to_reg</span>
            </div>
            <div>
              <div className="text-headline-md font-black text-on-surface">92.6%</div>
              <p className="text-label-sm text-secondary font-medium mt-1">780 siswa hadir</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-tertiary/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Guru & Staf</span>
              <span className="material-symbols-outlined text-tertiary text-[20px]">badge</span>
            </div>
            <div>
              <div className="text-headline-md font-black text-on-surface">45</div>
              <p className="text-label-sm text-on-surface-variant font-medium mt-1">100% formasi terisi</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-brand/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Target SPP</span>
              <span className="material-symbols-outlined text-brand text-[20px]">account_balance_wallet</span>
            </div>
            <div>
              <div className="text-headline-md font-black text-on-surface">85%</div>
              <p className="text-label-sm text-brand font-medium mt-1">Rp 42.5J / 50J</p>
            </div>
          </div>
        </div>

        {/* 2. Charts Area */}
        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-title-md font-bold text-on-surface">Tren Pemasukan SPP</h3>
              <Link href="/dashboard/reports" className="text-label-sm font-bold text-brand hover:underline">Detail Laporan</Link>
            </div>
            <p className="text-label-sm text-on-surface-variant">Realisasi pembayaran selama semester berjalan.</p>
            <RevenueAreaChart />
          </div>
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 flex flex-col">
            <h3 className="text-title-md font-bold text-on-surface mb-2">Distribusi Kehadiran</h3>
            <p className="text-label-sm text-on-surface-variant">Statistik harian absensi siswa.</p>
            <AttendanceDonutChart />
          </div>
        </div>

        {/* 3. Bottom Row: Quick Access & Recent Activity */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6">
            <h3 className="text-title-md font-bold text-on-surface mb-4">Akses Cepat</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/dashboard/students" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors text-on-surface-variant group border border-outline-variant">
                <span className="material-symbols-outlined text-[24px] text-brand group-hover:scale-110 transition-transform">person_add</span>
                <span className="text-label-sm font-bold">Data Siswa</span>
              </Link>
              <Link href="/dashboard/classes" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors text-on-surface-variant group border border-outline-variant">
                <span className="material-symbols-outlined text-[24px] text-tertiary group-hover:scale-110 transition-transform">meeting_room</span>
                <span className="text-label-sm font-bold">Ruang Kelas</span>
              </Link>
              <Link href="/dashboard/academic" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors text-on-surface-variant group border border-outline-variant">
                <span className="material-symbols-outlined text-[24px] text-secondary group-hover:scale-110 transition-transform">history_edu</span>
                <span className="text-label-sm font-bold">Akademik</span>
              </Link>
              <Link href="/dashboard/settings" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors text-on-surface-variant group border border-outline-variant">
                <span className="material-symbols-outlined text-[24px] text-error group-hover:scale-110 transition-transform">settings</span>
                <span className="text-label-sm font-bold">Sistem</span>
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest rounded-t-2xl">
              <h3 className="text-title-md font-bold text-on-surface">Aktivitas Terbaru</h3>
              <ClientAlertButton alertMessage="Menampilkan seluruh log aktivitas (dummy)" className="text-label-sm text-brand hover:underline font-bold">Lihat Semua</ClientAlertButton>
            </div>
            <div className="p-0 flex-1 overflow-y-auto">
              <div className="divide-y divide-outline-variant">
                {MOCK_ACTIVITIES.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 p-4 hover:bg-surface-container-low transition-colors">
                    <div className={`p-2 rounded-full shrink-0 ${item.bg} ${item.color}`}>
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-body-md text-on-surface leading-snug">
                        <span className="font-bold">{item.user}</span> {item.action} <span className="font-bold">{item.target}</span>
                      </p>
                      <p className="text-label-sm text-on-surface-variant mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (role === "TEACHER") {
    return (
      <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
        <div className="mb-8">
          <h2 className="text-headline-lg font-headline font-bold text-on-surface tracking-tight mb-2">Selamat Datang, Guru {session.user.name}</h2>
          <p className="text-on-surface-variant text-base max-w-2xl">Jadwal mengajar dan aktivitas kelas Anda hari ini.</p>
        </div>
        
        {/* Stat Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-brand/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Jadwal Mengajar</span>
              <span className="material-symbols-outlined text-brand text-[20px]">calendar_month</span>
            </div>
            <div>
              <div className="text-headline-md font-black text-on-surface">3 Kelas</div>
              <p className="text-label-sm text-brand font-medium mt-1">Sisa 2 kelas hari ini</p>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-error/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Tugas Belum Dinilai</span>
              <span className="material-symbols-outlined text-error text-[20px]">assignment_late</span>
            </div>
            <div>
              <div className="text-headline-md font-black text-on-surface">12</div>
              <p className="text-label-sm text-error font-medium mt-1">Kelas 4A - Matematika</p>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-secondary/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Siswa Absen</span>
              <span className="material-symbols-outlined text-secondary text-[20px]">person_off</span>
            </div>
            <div>
              <div className="text-headline-md font-black text-on-surface">2</div>
              <p className="text-label-sm text-secondary font-medium mt-1">Kelas 6A (Wali Kelas)</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Jadwal Detail Tabel */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col min-h-[300px]">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center rounded-t-2xl">
              <h3 className="text-title-md font-bold text-on-surface">Jadwal Mengajar Anda</h3>
              <span className="px-3 py-1 bg-surface text-on-surface-variant text-label-sm font-medium rounded-full border border-outline-variant">Hari Ini</span>
            </div>
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {MOCK_TEACHER_SCHEDULE.map((item) => (
                <div key={item.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${item.active ? 'border-brand/50 bg-brand/5' : 'border-outline-variant bg-surface'}`}>
                  <div className={`text-label-md font-bold w-24 shrink-0 ${item.active ? 'text-brand' : 'text-on-surface-variant'}`}>{item.time}</div>
                  <div className="flex-1">
                    <div className={`font-bold text-body-md ${item.active ? 'text-brand' : 'text-on-surface'}`}>{item.subject}</div>
                    <div className={`text-label-sm mt-1 ${item.active ? 'text-white-container' : 'text-on-surface-variant'}`}>{item.room}</div>
                  </div>
                  {item.status !== "-" && (
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      item.status === 'Selesai' ? 'bg-surface-container-high text-on-surface-variant' :
                      item.status === 'Berlangsung' ? 'bg-brand text-white' :
                      'bg-surface-container text-on-surface-variant'
                    }`}>
                      {item.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pengumuman & Akses Cepat */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
                <h3 className="text-title-md font-bold text-on-surface">Pengumuman Sekolah</h3>
              </div>
              <div className="space-y-4">
                {MOCK_ANNOUNCEMENTS.map((item) => (
                  <div key={item.id} className={`p-4 border-l-4 border-${item.type} bg-surface rounded-r-xl`}>
                    <h4 className="font-bold text-body-md text-on-surface">{item.title}</h4>
                    <p className="text-label-sm text-on-surface-variant mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 flex-1">
              <h3 className="text-title-md font-bold text-on-surface mb-4">Pintasan Wali Kelas</h3>
              <div className="p-4 border border-outline-variant bg-surface rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-body-md text-on-surface">Kelas 6A - Al-Farabi</h4>
                  <p className="text-label-sm text-on-surface-variant mt-1">Cek rekap nilai & absensi</p>
                </div>
                <Link href="/dashboard/students" className="px-4 py-2 bg-brand text-white hover:bg-brand-hover rounded-xl text-label-sm font-bold transition-colors shadow-sm">
                  Lihat Rapor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // PARENT (Wali Murid) atau default STUDENT
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-headline-lg font-headline font-bold text-on-surface tracking-tight mb-2">Portal Wali Murid</h2>
          <p className="text-on-surface-variant text-base max-w-2xl">Pantau perkembangan akademik dan penyelesaian administrasi Ananda <strong className="text-on-surface">Ahmad Fauzi</strong>.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-title-md shadow-md">
            AF
          </div>
          <div className="flex flex-col">
            <span className="text-body-md font-bold text-on-surface">Ahmad Fauzi</span>
            <span className="text-label-sm text-on-surface-variant">Kelas 6A - Al-Farabi</span>
          </div>
        </div>
      </div>

      {/* Stat Cards (Premium Compact Layout) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-brand/50 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Rata-rata Nilai</span>
            <span className="material-symbols-outlined text-brand text-[20px]">school</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-on-surface">85.4</div>
            <p className="text-label-sm text-brand font-medium mt-1">↑ +2.1 dari semester lalu</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-tertiary/50 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Status Tagihan SPP</span>
            <span className="material-symbols-outlined text-tertiary text-[20px]">receipt_long</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-tertiary">LUNAS</div>
            <p className="text-label-sm text-on-surface-variant font-medium mt-1">Tagihan Juli 2024</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant flex flex-col justify-between hover:border-secondary/50 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Kehadiran (Bulan Ini)</span>
            <span className="material-symbols-outlined text-secondary text-[20px]">fact_check</span>
          </div>
          <div>
            <div className="text-headline-md font-black text-on-surface">98%</div>
            <p className="text-label-sm text-secondary font-medium mt-1">Sangat Baik (0 Alpa)</p>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center rounded-t-2xl">
            <h3 className="text-title-md font-bold text-on-surface">Tren Nilai (Grafik)</h3>
            <Link href="/dashboard/academic" className="text-label-sm font-bold text-brand hover:underline">Lihat Rapor</Link>
          </div>
          <div className="p-6 flex-1 min-h-[300px]">
            <GradeChart />
          </div>
        </div>
        
        <div className="col-span-3 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm flex flex-col min-h-[300px]">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center rounded-t-2xl">
            <h3 className="text-title-md font-bold text-on-surface">Jadwal Ananda Hari Ini</h3>
            <span className="px-3 py-1 bg-surface text-on-surface-variant text-label-sm font-medium rounded-full border border-outline-variant">Hari Ini</span>
          </div>
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {MOCK_STUDENT_SCHEDULE.map((item) => (
              <div key={item.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${item.active ? 'border-brand/50 bg-brand/5' : 'border-outline-variant bg-surface'}`}>
                <div className={`text-label-md font-bold w-24 shrink-0 ${item.active ? 'text-brand' : 'text-on-surface-variant'}`}>{item.time}</div>
                <div className="flex-1">
                  <div className={`font-bold text-body-md ${item.active ? 'text-brand' : 'text-on-surface'}`}>{item.subject}</div>
                  <div className={`text-label-sm mt-1 ${item.active ? 'text-white-container' : 'text-on-surface-variant'}`}>{item.teacher}</div>
                </div>
                {item.status !== "-" && (
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    item.status === 'Selesai' ? 'bg-surface-container-high text-on-surface-variant' :
                    item.status === 'Berlangsung' ? 'bg-brand text-white' :
                    'bg-surface-container text-on-surface-variant'
                  }`}>
                    {item.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
