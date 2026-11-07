"use client"

import { useEffect, useRef, useState } from "react"
import { useFormStatus } from "react-dom"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DEMO_ACCOUNTS, DEMO_PASSWORD, type DemoRole } from "@/lib/demo-accounts"
import { login } from "./actions"

/** `/login?demo=guru` plays the demo sign-in on arrival (links from a portfolio). */
const ROLE_PARAM: Record<string, DemoRole> = {
  admin: "ADMIN",
  guru: "TEACHER",
  wali: "PARENT",
}

type Field = "identifier" | "password" | null

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

const inputClass =
  "w-full rounded-md border bg-white px-3 py-2 text-sm text-neutral-900 transition-all placeholder:text-neutral-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand shadow-sm read-only:cursor-default"

function SubmitButton({ demoRole }: { demoRole: DemoRole | null }) {
  const { pending } = useFormStatus()
  const label = pending
    ? "Memproses…"
    : demoRole
      ? `Masuk sebagai ${DEMO_ACCOUNTS[demoRole].label}…`
      : "Masuk ke Portal"
  return (
    <Button
      type="submit"
      disabled={pending || demoRole !== null}
      className="w-full mt-4 bg-brand hover:bg-brand-hover text-white shadow-md transition-all h-11 rounded-xl font-bold text-sm disabled:opacity-100"
    >
      {pending && (
        <span
          className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden="true"
        />
      )}
      {label}
    </Button>
  )
}

export function LoginForm({ autoDemo }: { autoDemo?: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  const started = useRef(false)
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [demoRole, setDemoRole] = useState<DemoRole | null>(null)
  const [activeField, setActiveField] = useState<Field>(null)

  /**
   * Types the demo account into the real form, then submits it, so a visitor
   * sees exactly how sign-in works instead of being teleported past it. With
   * reduced motion the fields are filled at once.
   */
  async function playDemo(role: DemoRole) {
    if (demoRole) return
    setDemoRole(role)
    const email = DEMO_ACCOUNTS[role].email
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce) {
      setIdentifier(email)
      setPassword(DEMO_PASSWORD)
    } else {
      setIdentifier("")
      setPassword("")
      setActiveField("identifier")
      await wait(250)
      for (let i = 1; i <= email.length; i++) {
        setIdentifier(email.slice(0, i))
        // A little unevenness reads as typing; a fixed beat reads as a script.
        await wait(26 + Math.random() * 34)
      }
      await wait(220)
      setActiveField("password")
      for (let i = 1; i <= DEMO_PASSWORD.length; i++) {
        setPassword(DEMO_PASSWORD.slice(0, i))
        await wait(90 + Math.random() * 50)
      }
      await wait(320)
      setActiveField(null)
    }
    formRef.current?.requestSubmit()
  }

  useEffect(() => {
    const role = autoDemo ? ROLE_PARAM[autoDemo.toLowerCase()] : undefined
    if (!role || started.current) return
    started.current = true
    const t = setTimeout(() => playDemo(role), 700)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoDemo])

  const ring = (field: Field) =>
    activeField === field ? "border-brand ring-2 ring-brand/30" : "border-neutral-300"
  const typing = demoRole !== null

  return (
    <>
      <form ref={formRef} action={login} className="space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="identifier" className="text-sm font-medium text-neutral-900">
            Email / NISN / NIP
          </label>
          <input
            id="identifier"
            name="identifier"
            type="text"
            autoComplete="username"
            placeholder="admin@sekolah.id atau 0012345678"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            readOnly={typing}
            className={`${inputClass} ${ring("identifier")}`}
            required
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-neutral-900">
              Password
            </label>
            <Link href="#" className="text-xs font-medium text-neutral-500 hover:text-brand transition-colors">
              Lupa sandi?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            readOnly={typing}
            className={`${inputClass} ${ring("password")}`}
            required
          />
        </div>

        <SubmitButton demoRole={demoRole} />
      </form>

      {/* Every demo account is read-only: writes are refused server-side in
          blockDemoWrite(), so a visitor can open every screen without
          changing what the next one sees. */}
      <div className="mt-8 pt-6 border-t border-neutral-200">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 text-center">
          Coba tanpa akun
        </p>
        <p className="mt-1.5 text-xs text-neutral-500 text-center">
          Pilih peran, lalu lihat formulirnya terisi dan masuk sendiri. Mode demo hanya bisa dibaca, dan datanya fiktif.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {(Object.keys(DEMO_ACCOUNTS) as DemoRole[]).map((role) => (
            <Button
              key={role}
              type="button"
              variant="outline"
              disabled={typing}
              onClick={() => playDemo(role)}
              aria-pressed={demoRole === role}
              className={`w-full h-10 rounded-xl text-xs font-semibold transition-colors ${
                demoRole === role
                  ? "border-brand text-brand bg-brand-light/40 disabled:opacity-100"
                  : "border-neutral-300 hover:border-brand hover:text-brand"
              }`}
            >
              {DEMO_ACCOUNTS[role].label}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}
