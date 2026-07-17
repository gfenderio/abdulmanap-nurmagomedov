import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserPlus } from "lucide-react"
import { getStudents } from "@/data/student"
import { Button } from "@/components/ui/button"

export default async function StudentsPage() {
  const students = await getStudents() || []

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Direktori Siswa</h2>
          <p className="text-neutral-500 mt-1">Kelola data siswa dan riwayat akademik.</p>
        </div>
        <Button className="bg-brand text-brand-foreground hover:bg-brand-hover">
          <UserPlus className="w-4 h-4 mr-2" />
          Tambah Siswa
        </Button>
      </div>

      <Card>
        <CardHeader className="border-b border-neutral-200">
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="w-4 h-4 text-brand-hover" />
            Daftar Siswa Aktif
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-neutral-50/50 text-neutral-500 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 font-medium">NISN</th>
                  <th className="px-6 py-4 font-medium">Nama Lengkap</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Kelas</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {students.length === 0 ? (
                  <>
                    <tr className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-neutral-600">2026435001</td>
                      <td className="px-6 py-4 font-medium text-neutral-900">M. Khabib Nurmagomedov (Mock)</td>
                      <td className="px-6 py-4 text-neutral-500">khabib@sias.edu</td>
                      <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-light text-brand-hover">Tingkat 6</span></td>
                      <td className="px-6 py-4 text-right"><Button variant="ghost" size="sm" className="text-brand hover:text-brand-hover">Detail</Button></td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-neutral-600">2026435002</td>
                      <td className="px-6 py-4 font-medium text-neutral-900">Islam Makhachev (Mock)</td>
                      <td className="px-6 py-4 text-neutral-500">islam@sias.edu</td>
                      <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-light text-brand-hover">Tingkat 5</span></td>
                      <td className="px-6 py-4 text-right"><Button variant="ghost" size="sm" className="text-brand hover:text-brand-hover">Detail</Button></td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-neutral-600">2026435003</td>
                      <td className="px-6 py-4 font-medium text-neutral-900">Umar Nurmagomedov (Mock)</td>
                      <td className="px-6 py-4 text-neutral-500">umar@sias.edu</td>
                      <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-light text-brand-hover">Tingkat 4</span></td>
                      <td className="px-6 py-4 text-right"><Button variant="ghost" size="sm" className="text-brand hover:text-brand-hover">Detail</Button></td>
                    </tr>
                  </>
                ) : (
                  students.map((student) => (
                    <tr key={student.id} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-neutral-600">{student.studentProfile?.nisn || "-"}</td>
                      <td className="px-6 py-4 font-medium text-neutral-900">{student.name}</td>
                      <td className="px-6 py-4 text-neutral-500">{student.email}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-light text-brand-hover">
                          {student.studentProfile?.grade || "N/A"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" className="text-brand hover:text-brand-hover">
                          Detail
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
