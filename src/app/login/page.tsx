import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { signIn } from "../../../auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export default function LoginPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col md:flex-row bg-white">
      {/* Left Side - Brand / Hero (Solid, Minimal, Deep Navy) */}
      <div className="relative flex w-full flex-col justify-between bg-brand p-8 text-brand-light md:w-1/2 lg:w-[55%] xl:w-[60%] lg:p-12">
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-sm backdrop-blur-sm p-1.5">
            <img src="/logo.png" alt="Logo MI Sirojul Falah" className="h-full w-auto object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white leading-none">SIAS</span>
            <span className="text-xs font-medium text-brand-light/90 tracking-wide uppercase mt-0.5">MI Sirojul Falah</span>
          </div>
        </div>

        <div className="relative z-10 mt-24 mb-auto max-w-lg">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
            Sistem Informasi Akademik Terpadu
          </h1>
          <p className="mt-6 text-lg text-brand-light/80 text-balance leading-relaxed">
            Akses portal akademik, jadwal, nilai, dan informasi tagihan siswa secara cepat dan terpusat.
          </p>
        </div>

        <div className="relative z-10 mt-12 flex items-center gap-4 text-xs font-medium text-brand-light/50 tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} MI Sirojul Falah. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Login Form (Clean, Solid Borders) */}
      <div className="flex w-full items-center justify-center bg-white p-8 md:w-1/2 lg:w-[45%] xl:w-[40%] border-l border-neutral-200">
        <div className="w-full max-w-[360px]">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Selamat Datang</h2>
            <p className="text-neutral-500 mt-1.5 text-sm">Masuk ke akun portal akademik Anda.</p>
          </div>

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
              <label htmlFor="email" className="text-sm font-medium text-neutral-900">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="admin@mi-sirojulfalah.sch.id"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors placeholder:text-neutral-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand shadow-sm"
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
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors placeholder:text-neutral-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand shadow-sm"
                required
              />
            </div>

            <Button type="submit" className="w-full mt-2 bg-brand hover:bg-brand-hover text-white shadow-sm transition-all h-10 rounded-md font-medium">
              Masuk ke Portal
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-neutral-500">
            Punya kendala akses? <Link href="#" className="font-medium text-neutral-900 hover:underline">Hubungi Admin</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
