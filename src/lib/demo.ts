import { auth } from "../../auth"

/**
 * Public demo mode.
 *
 * The portal is published so people can walk through a real academic system
 * rather than a landing page. That means anyone can sign in, so nothing they
 * do may change what the next visitor sees.
 *
 * Read-only is enforced here, on the server, at the top of every mutation.
 * Hiding buttons in the UI is presentation, not protection — a server action
 * can be invoked directly, so the check has to live where the write happens.
 *
 * Demo accounts are identified by email rather than a database column so the
 * guard works without a migration, and so a real deployment with none of these
 * addresses is unaffected.
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

/**
 * Call at the top of every server action that writes. Returns an error object
 * to hand straight back to the caller when the signed-in user is a demo
 * account, or null when the write may proceed.
 */
export async function blockDemoWrite(): Promise<{ error: string } | null> {
  const session = await auth()
  if (isDemoEmail(session?.user?.email)) {
    return {
      error:
        "Mode demo bersifat baca saja. Perubahan tidak disimpan agar tampilan tetap sama untuk pengunjung berikutnya.",
    }
  }
  return null
}
