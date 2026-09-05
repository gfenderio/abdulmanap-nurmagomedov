import { auth } from "../../auth"

/**
 * Authorisation guards for server actions.
 *
 * A Next.js server action is a POST endpoint. Anyone who knows its id can
 * invoke it directly — the browser UI is not a gate. So every action that
 * writes has to establish, for itself, who is calling and whether they are
 * allowed. Trusting an id passed in from the client is the same as trusting
 * the caller.
 */

export type Role = "ADMIN" | "TEACHER" | "PARENT" | "STUDENT"

export type Session = {
  userId: string
  role: Role
  email: string | null
}

type Denied = { error: string }

function denied(message: string): Denied {
  return { error: message }
}

/**
 * Resolves the signed-in user, or an error to return to the caller.
 * Callers narrow with `"error" in result`.
 */
export async function requireSession(): Promise<Session | Denied> {
  const session = await auth()
  const userId = session?.user?.id
  const role = session?.user?.role as Role | undefined

  if (!userId || !role) {
    return denied("Anda harus masuk terlebih dahulu.")
  }

  return { userId, role, email: session?.user?.email ?? null }
}

/** As requireSession, but also rejects roles outside `allowed`. */
export async function requireRole(
  ...allowed: Role[]
): Promise<Session | Denied> {
  const result = await requireSession()
  if ("error" in result) return result

  if (!allowed.includes(result.role)) {
    return denied("Anda tidak punya akses untuk tindakan ini.")
  }

  return result
}
