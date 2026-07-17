import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Settings, Shield, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Pengaturan Sistem</h2>
          <p className="text-neutral-500 mt-1">Konfigurasi akun dan preferensi aplikasi.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-neutral-100">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-5 h-5 text-brand-hover" />
              Profil Sekolah
            </CardTitle>
            <CardDescription>Informasi dasar instansi pendidikan.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-700">Nama Sekolah</label>
              <input type="text" disabled value="MI Sirojul Falah" className="mt-1 w-full p-2 bg-neutral-50 border border-neutral-200 rounded-md text-neutral-600" />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">Alamat Lengkap</label>
              <input type="text" disabled value="Jl. Pendidikan No.123, Jakarta" className="mt-1 w-full p-2 bg-neutral-50 border border-neutral-200 rounded-md text-neutral-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-neutral-100">
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-hover" />
              Keamanan Akun
            </CardTitle>
            <CardDescription>Ubah password dan autentikasi dua faktor.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <Button variant="outline" className="w-full justify-start text-neutral-700">Ganti Password</Button>
            <Button variant="outline" className="w-full justify-start text-neutral-700">Kelola Akses Role (RBAC)</Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow md:col-span-2">
          <CardHeader className="border-b border-neutral-100">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5 text-brand-hover" />
              Notifikasi Sistem
            </CardTitle>
            <CardDescription>Atur pemberitahuan via email atau sistem.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div>
                <p className="font-semibold text-neutral-900">Email Harian Tagihan</p>
                <p className="text-sm text-neutral-500">Kirim rekap SPP yang belum dibayar setiap pagi.</p>
              </div>
              <div className="w-10 h-6 bg-brand rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
