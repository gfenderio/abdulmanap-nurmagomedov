import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, PlusCircle, CheckCircle, Clock } from "lucide-react"
import { getAllBills } from "@/data/bill"
import { Button } from "@/components/ui/button"

export default async function BillingPage() {
  const bills = await getAllBills() || []

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Keuangan & SPP</h2>
          <p className="text-neutral-500 mt-1">Manajemen tagihan dan pembayaran sekolah.</p>
        </div>
        <Button className="bg-brand text-brand-foreground hover:bg-brand-hover">
          <PlusCircle className="w-4 h-4 mr-2" />
          Buat Tagihan Baru
        </Button>
      </div>

      <Card>
        <CardHeader className="border-b border-neutral-200">
          <CardTitle className="text-base flex items-center gap-2">
            <Wallet className="w-4 h-4 text-brand-hover" />
            Daftar Tagihan
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-neutral-50/50 text-neutral-500 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Siswa</th>
                  <th className="px-6 py-4 font-medium">Deskripsi Tagihan</th>
                  <th className="px-6 py-4 font-medium">Nominal</th>
                  <th className="px-6 py-4 font-medium">Tenggat</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {bills.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-neutral-500">
                      Belum ada data tagihan.
                    </td>
                  </tr>
                ) : (
                  bills.map((bill) => (
                    <tr key={bill.id} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-neutral-900">{bill.student.user.name}</td>
                      <td className="px-6 py-4 text-neutral-600">{bill.description}</td>
                      <td className="px-6 py-4 font-mono font-medium text-neutral-900">
                        Rp {bill.amount.toLocaleString('id-ID')}
                      </td>
                      <td className="px-6 py-4 text-neutral-500">
                        {new Date(bill.dueDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        {bill.status === "PAID" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                            <CheckCircle className="w-3 h-3" />
                            Lunas
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                            <Clock className="w-3 h-3" />
                            Belum Lunas
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" className="text-brand hover:text-brand-hover">
                          Kelola
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
