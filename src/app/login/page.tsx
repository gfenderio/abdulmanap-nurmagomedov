import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { signIn } from "../../../auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export default async function LoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams;
  return (
    <div className="flex min-h-[100dvh] flex-col md:flex-row bg-white">
      {/* Left Side - Brand / Hero (Aligned with Landing Page) */}
      <div className="relative hidden md:flex w-full flex-col justify-between overflow-hidden bg-brand p-8 md:w-1/2 lg:w-[55%] xl:w-[60%] lg:p-12">
        {/* Background Image from Landing Page */}
        <div className="absolute inset-0 bg-brand" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-hover to-brand" />
        <img 
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
          alt="Kegiatan Belajar" 
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay grayscale"
        />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm p-1.5">
              <img src="/logo.png" alt="Logo MI Sirojul Falah" className="h-full w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">SIAS</span>
              <span className="text-xs font-bold text-accent tracking-wide uppercase mt-0.5">MI Sirojul Falah</span>
            </div>
          </div>
          <Link href="/" className="md:hidden flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-colors backdrop-blur-sm border border-white/20">
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
        </div>

        <div className="relative z-10 mt-24 mb-auto max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Portal Akademik & PPDB
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
            Sistem Informasi <span className="text-accent">Akademik</span> Terpadu
          </h1>
          <p className="mt-6 text-lg text-white/80 text-balance leading-relaxed">
            Akses portal akademik, jadwal, nilai, dan informasi pendaftaran siswa secara cepat dan terpusat.
          </p>
        </div>

        <div className="relative z-10 mt-12 hidden md:flex items-center gap-4 text-xs font-medium text-brand-light/50 tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} MI Sirojul Falah. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Login Form (Clean, Solid Borders) */}
      <div className="relative flex w-full flex-1 items-center justify-center bg-white p-6 sm:p-8 md:w-1/2 lg:w-[45%] xl:w-[40%] border-l border-neutral-200">
        
        {/* Desktop Back Button */}
        <Link 
          href="/" 
          className="absolute top-8 right-8 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors shadow-sm"
          title="Kembali ke Beranda"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <div className="w-full max-w-[360px] md:max-w-[400px]">
          <div className="mb-8">
            <div className="md:hidden flex items-center justify-center mb-6">
              <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 text-center md:text-left">Selamat Datang</h2>
            <p className="text-neutral-500 mt-1.5 text-sm text-center md:text-left">Masuk ke akun portal akademik Anda.</p>
          </div>

          {/* Form Error Feedback Banner */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
              <span>
                {error === "CredentialsSignin" 
                  ? "Email / NISN / NIP atau password salah. Silakan coba lagi."
                  : "Terjadi kesalahan saat masuk. Silakan periksa kembali akun Anda."}
              </span>
            </div>
          )}

          <form 
            action={async (formData) => {
              "use server"
              try {
                const data = Object.fromEntries(formData)
                await signIn("credentials", { ...data, redirectTo: "/dashboard" })
              } catch (error) {
                if (error instanceof AuthError) {
                  return redirect("/login?error=" + error.type)
                }
                throw error
              }
            }} 
            className="space-y-5"
          >
            <div className="space-y-1.5">
              <label htmlFor="identifier" className="text-sm font-medium text-neutral-900">Email / NISN / NIP</label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="admin@sekolah.id atau 0012345678"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand shadow-sm"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-neutral-900">Password</label>
                <Link href="#" className="text-xs font-medium text-neutral-500 hover:text-brand transition-colors">Lupa sandi?</Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand shadow-sm"
                required
              />
            </div>

            <Button type="submit" className="w-full mt-4 bg-brand hover:bg-brand-hover text-white shadow-md transition-all h-11 rounded-xl font-bold text-sm">
              Masuk ke Portal
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-neutral-500">
            Punya kendala akses? <Link href="#" className="font-medium text-neutral-900 hover:underline">Hubungi Admin</Link>
          </div>

          <p className="mt-12 text-center text-xs text-neutral-400 md:hidden">
            &copy; {new Date().getFullYear()} MI Sirojul Falah. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
