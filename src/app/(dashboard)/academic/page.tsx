import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, Clock, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AcademicPage() {
  const subjects = [
    { id: 1, code: "MAT101", name: "Matematika Dasar", teacher: "Bpk. Budi Santoso", students: 32 },
    { id: 2, code: "IPA102", name: "Ilmu Pengetahuan Alam", teacher: "Ibu Siti Aminah", students: 34 },
    { id: 3, code: "IPS103", name: "Ilmu Pengetahuan Sosial", teacher: "Bpk. Andi Saputra", students: 30 },
    { id: 4, code: "BHS104", name: "Bahasa Indonesia", teacher: "Ibu Ratna", students: 35 },
    { id: 5, code: "ENG105", name: "Bahasa Inggris", teacher: "Mr. John Doe", students: 32 },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Akademik</h2>
          <p className="text-neutral-500 mt-1">Manajemen mata pelajaran, kurikulum, dan penilaian.</p>
        </div>
        <Button className="bg-brand text-brand-foreground hover:bg-brand-hover">
          <BookOpen className="w-4 h-4 mr-2" />
          Tambah Mata Pelajaran
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Total Mata Pelajaran</CardTitle>
            <div className="p-2 bg-brand/10 rounded-full">
              <BookOpen className="h-4 w-4 text-brand-hover" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900">24</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">Sesuai Kurikulum Merdeka</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Periode Akademik</CardTitle>
            <div className="p-2 bg-brand/10 rounded-full">
              <Calendar className="h-4 w-4 text-brand-hover" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900">Ganjil</div>
            <p className="text-xs text-neutral-500 font-medium mt-1">T.A. 2026/2027</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Ujian Terdekat</CardTitle>
            <div className="p-2 bg-accent/20 rounded-full">
              <Clock className="h-4 w-4 text-accent-hover" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900">UTS</div>
            <p className="text-xs text-amber-600 font-medium mt-1">Tinggal 14 Hari Lagi</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="border-b border-neutral-200">
          <CardTitle className="text-base flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-brand-hover" />
            Daftar Mata Pelajaran
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-neutral-50/50 text-neutral-500 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Kode</th>
                  <th className="px-6 py-4 font-medium">Mata Pelajaran</th>
                  <th className="px-6 py-4 font-medium">Guru Pengampu</th>
                  <th className="px-6 py-4 font-medium">Jml Siswa</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {subjects.map((sub) => (
                  <tr key={sub.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-medium text-brand-hover">{sub.code}</td>
                    <td className="px-6 py-4 font-semibold text-neutral-900">{sub.name}</td>
                    <td className="px-6 py-4 text-neutral-600">{sub.teacher}</td>
                    <td className="px-6 py-4 text-neutral-500">{sub.students} Siswa</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="text-brand hover:text-brand-hover">
                        Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
