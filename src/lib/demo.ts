import { auth } from "../../auth"
import { isDemoEmail } from "./demo-accounts"

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
 * The account constants live in ./demo-accounts, which imports nothing, so the
 * seed script can use them without pulling in NextAuth.
 */

export {
  DEMO_EMAILS,
  DEMO_ACCOUNTS,
  DEMO_PASSWORD,
  isDemoEmail,
  type DemoRole,
} from "./demo-accounts"

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
