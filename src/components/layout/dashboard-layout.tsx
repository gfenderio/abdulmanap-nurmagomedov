import { auth } from "../../../auth"
import { redirect } from "next/navigation"
import { DashboardClientWrapper } from "./dashboard-client-wrapper"

export async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/login")
  }

  return (
    <DashboardClientWrapper 
      userName={session.user.name} 
      userRole={session.user.role}
    >
      {children}
    </DashboardClientWrapper>
  )
}
