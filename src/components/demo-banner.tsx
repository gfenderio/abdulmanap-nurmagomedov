import { auth } from "../../auth"
import { isDemoEmail } from "@/lib/demo"

/**
 * Shown at the top of the dashboard while a demo account is signed in.
 *
 * The read-only rule is enforced server-side in blockDemoWrite(); this only
 * tells the visitor why a save will not stick, so a refused write reads as
 * intended behaviour rather than a broken screen.
 */
export async function DemoBanner() {
  const session = await auth()
  if (!isDemoEmail(session?.user?.email)) return null

  return (
    <div className="flex items-start gap-3 border-b border-amber-200 bg-amber-50 px-4 py-2.5 text-amber-900 sm:px-6">
      <span
        aria-hidden
        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500"
      />
      <p className="text-xs leading-relaxed sm:text-sm">
        <span className="font-semibold">Mode demo — hanya bisa dibaca.</span>{" "}
        Semua data di sini fiktif, dan perubahan tidak disimpan agar tampilannya
        tetap sama untuk pengunjung berikutnya.
      </p>
    </div>
  )
}
