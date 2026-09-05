import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { DemoBanner } from "@/components/demo-banner"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout>
      <DemoBanner />
      {children}
    </DashboardLayout>
  )
}
