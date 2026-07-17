import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReportsPage() {
  const reports = [
    { id: "REP-01", name: "Laporan Kehadiran Siswa Q1 2026", date: "31 Mar 2026", size: "2.4 MB" },
    { id: "REP-02", name: "Rekapitulasi Nilai UTS Ganjil", date: "15 Apr 2026", size: "4.1 MB" },
    { id: "REP-03", name: "Laporan Keuangan & SPP Bulanan", date: "01 Mei 2026", size: "1.8 MB" },
    { id: "REP-04", name: "Statistik Kinerja Guru", date: "10 Jun 2026", size: "3.2 MB" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Laporan & Analitik</h2>
          <p className="text-neutral-500 mt-1">Unduh dan tinjau laporan sekolah secara komprehensif.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover:shadow-md transition-shadow bg-gradient-to-br from-brand to-brand-hover text-white">
          <CardHeader>
            <CardTitle className="text-lg text-white">Generate Laporan Baru</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 text-sm mb-4">Buat laporan kustom berdasarkan rentang waktu dan parameter spesifik.</p>
            <Button variant="secondary" className="w-full font-semibold text-brand-hover">
              <TrendingUp className="w-4 h-4 mr-2" />
              Mulai Generate
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="border-b border-neutral-200">
          <CardTitle className="text-base flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-hover" />
            Dokumen Tersedia
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-neutral-50/50 text-neutral-500 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 font-medium">ID Ref</th>
                  <th className="px-6 py-4 font-medium">Nama Dokumen</th>
                  <th className="px-6 py-4 font-medium">Tanggal Dibuat</th>
                  <th className="px-6 py-4 font-medium">Ukuran</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-medium text-neutral-500">{report.id}</td>
                    <td className="px-6 py-4 font-semibold text-neutral-900">{report.name}</td>
                    <td className="px-6 py-4 text-neutral-600">{report.date}</td>
                    <td className="px-6 py-4 text-neutral-500">{report.size}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" size="sm" className="text-neutral-700">
                        <Download className="w-4 h-4 mr-2" />
                        Unduh
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
