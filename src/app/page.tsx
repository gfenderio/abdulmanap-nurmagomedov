import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col md:flex-row">
      {/* Left Side - Brand / Hero */}
      <div className="relative flex w-full flex-col justify-between bg-brand p-8 text-white md:w-1/2 lg:w-[55%] xl:w-[60%] lg:p-12">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-brand-hover/20 mix-blend-multiply" />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">SIAS</h1>
            <p className="text-xs font-medium text-brand-light">MI Sirojul Falah</p>
          </div>
        </div>

        <div className="relative z-10 mt-24 mb-auto max-w-lg">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            Sistem Informasi Akademik Terpadu
          </h2>
          <p className="mt-6 text-lg text-brand-light text-balance leading-relaxed">
            Akses portal akademik, jadwal, nilai, dan informasi tagihan siswa MI Sirojul Falah secara cepat, aman, dan mudah.
          </p>
        </div>

        <div className="relative z-10 mt-12 flex items-center gap-4 text-sm font-medium text-brand-light">
          <p>&copy; {new Date().getFullYear()} MI Sirojul Falah. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full items-center justify-center bg-white p-8 md:w-1/2 lg:w-[45%] xl:w-[40%]">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Selamat Datang</h3>
            <p className="text-neutral-500 mt-2 text-sm">Masuk ke akun portal akademik Anda.</p>
          </div>

          <form action="/dashboard" className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="nisn" className="text-sm font-medium text-neutral-900">NISN / NIP</label>
              <input
                id="nisn"
                type="text"
                placeholder="Masukkan NISN atau NIP"
                className="w-full rounded-lg border border-neutral-200 bg-transparent px-3 py-2.5 text-sm transition-colors placeholder:text-neutral-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-neutral-900">Password</label>
                <Link href="#" className="text-xs font-medium text-brand hover:text-brand-hover">Lupa password?</Link>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-neutral-200 bg-transparent px-3 py-2.5 text-sm transition-colors placeholder:text-neutral-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                required
              />
            </div>

            <Button type="submit" className="w-full mt-2 group bg-brand hover:bg-brand-hover text-white">
              Masuk ke Portal
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-neutral-500">
            Punya kendala akses? <Link href="#" className="font-medium text-brand hover:text-brand-hover">Hubungi Admin</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
