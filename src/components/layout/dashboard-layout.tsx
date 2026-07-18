import { auth } from "../../../auth"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { DashboardClientWrapper } from "./dashboard-client-wrapper"

export async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  
  if (!session?.user?.id) {
    redirect("/login")
  }

  const dbUser = await db.user.findUnique({
    where: { id: session.user.id }
  })

  return (
    <DashboardClientWrapper 
      userName={dbUser?.name ?? session.user.name} 
      userRole={dbUser?.role ?? session.user.role}
      userImage={dbUser?.image ?? null}
      userEmail={dbUser?.email ?? session.user.email ?? null}
    >
      {children}
    </DashboardClientWrapper>
  )
}
