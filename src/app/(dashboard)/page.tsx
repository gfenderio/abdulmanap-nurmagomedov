import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, Wallet, Activity } from "lucide-react"
import { GradeChart } from "@/components/dashboard/grade-chart"

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Dashboard</h2>
        <p className="text-neutral-500 mt-1">Ringkasan performa dan aktivitas akademik hari ini.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Rata-rata Nilai / IPK */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Rata-rata Nilai</CardTitle>
            <div className="p-2 bg-brand/10 rounded-full">
              <GraduationCap className="h-4 w-4 text-brand-hover" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900">85.4</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">+2.1 dari semester lalu</p>
          </CardContent>
        </Card>

        {/* Status Tagihan */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Status Tagihan</CardTitle>
            <div className="p-2 bg-accent/20 rounded-full">
              <Wallet className="h-4 w-4 text-accent-hover" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900">Lunas</div>
            <p className="text-xs text-neutral-500 mt-1">Smt Ganjil 2024/2025</p>
          </CardContent>
        </Card>

        {/* Semester Aktif & Kelas */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Semester & Kelas</CardTitle>
            <div className="p-2 bg-brand/10 rounded-full">
              <Activity className="h-4 w-4 text-brand-hover" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900">Ganjil / 4A</div>
            <p className="text-xs text-neutral-500 mt-1">T.A. 2024/2025</p>
          </CardContent>
        </Card>

        {/* Persentase Kehadiran */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Kehadiran</CardTitle>
            <div className="p-2 bg-brand/10 rounded-full">
              <Users className="h-4 w-4 text-brand-hover" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900">98%</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">Sangat Baik</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 min-h-[300px] hover:shadow-md transition-shadow flex flex-col">
          <CardHeader>
            <CardTitle className="text-base">Tren Nilai Rata-rata</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-2 px-2">
            <GradeChart />
          </CardContent>
        </Card>
        
        <Card className="col-span-3 min-h-[300px] hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-base">Jadwal Hari Ini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "07:30 - 09:00", subject: "Matematika", teacher: "Bpk. Budi", active: false },
                { time: "09:00 - 10:30", subject: "Pend. Agama Islam", teacher: "Ust. Ahmad", active: true },
                { time: "10:30 - 11:00", subject: "Istirahat", teacher: "-", active: false },
                { time: "11:00 - 12:30", subject: "Bahasa Indonesia", teacher: "Ibu Siti", active: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 p-3 rounded-xl border ${item.active ? 'border-brand/30 bg-brand-light' : 'border-neutral-100 bg-white'}`}>
                  <div className={`text-sm font-semibold w-24 shrink-0 ${item.active ? 'text-brand-hover' : 'text-neutral-500'}`}>{item.time}</div>
                  <div>
                    <div className={`font-semibold ${item.active ? 'text-brand-hover' : 'text-neutral-900'}`}>{item.subject}</div>
                    <div className={`text-xs ${item.active ? 'text-brand' : 'text-neutral-500'}`}>{item.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
