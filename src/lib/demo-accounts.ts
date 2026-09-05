/**
 * Demo account constants.
 *
 * Deliberately free of imports. The seed script and the auth guard both need
 * these, but the seed runs outside Next.js — pulling them from a module that
 * imports NextAuth drags the whole auth config (and its required AUTH_SECRET)
 * into a plain database script.
 */

export const DEMO_EMAILS = [
  "demo.admin@sias.example",
  "demo.guru@sias.example",
  "demo.wali@sias.example",
] as const

export type DemoRole = "ADMIN" | "TEACHER" | "PARENT"

export const DEMO_ACCOUNTS: Record<DemoRole, { email: string; label: string }> = {
  ADMIN: { email: "demo.admin@sias.example", label: "Admin" },
  TEACHER: { email: "demo.guru@sias.example", label: "Guru" },
  PARENT: { email: "demo.wali@sias.example", label: "Wali Murid" },
}

/** Every demo account shares this password; it guards nothing. */
export const DEMO_PASSWORD = "demo"

const DEMO_EMAIL_SET: ReadonlySet<string> = new Set(DEMO_EMAILS)

export function isDemoEmail(email?: string | null): boolean {
  return !!email && DEMO_EMAIL_SET.has(email.toLowerCase())
}
