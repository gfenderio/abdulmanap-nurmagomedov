import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LoginForm } from "./login-form"

export default async function LoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string; demo?: string }>
}) {
  const { error, demo } = await searchParams;
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
              <img src="/logo.svg" alt="Logo MI Al-Mubarokah" className="h-full w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">SIAS</span>
              <span className="text-xs font-bold text-accent tracking-wide uppercase mt-0.5">MI Al-Mubarokah</span>
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
          <p>&copy; {new Date().getFullYear()} MI Al-Mubarokah. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Login Form (Clean, Solid Borders) */}
      <div className="relative flex w-full flex-1 items-center justify-center bg-white p-6 sm:p-8 md:w-1/2 lg:w-[45%] xl:w-[40%] border-l border-neutral-200">
        
        {/* Back Button (Mobile & Desktop) */}
        <Link 
          href="/" 
          className="absolute top-6 left-6 md:top-8 md:right-8 md:left-auto flex items-center justify-center gap-1.5 px-3 py-1.5 md:p-0 md:w-10 md:h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs md:text-sm transition-colors shadow-sm"
          title="Kembali ke Beranda"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span className="md:hidden">Beranda</span>
        </Link>

        <div className="w-full max-w-[360px] md:max-w-[400px]">
          <div className="mb-8">
            <div className="md:hidden flex items-center justify-center mb-6">
              <img src="/logo.svg" alt="Logo" className="w-16 h-16 object-contain" />
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

          <LoginForm autoDemo={demo} />

          <div className="mt-8 text-center text-sm text-neutral-500">
            Punya kendala akses? <Link href="#" className="font-medium text-neutral-900 hover:underline">Hubungi Admin</Link>
          </div>

          <p className="mt-12 text-center text-xs text-neutral-400 md:hidden">
            &copy; {new Date().getFullYear()} MI Al-Mubarokah. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
