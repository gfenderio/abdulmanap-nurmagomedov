import { auth } from "../../../auth"
import { redirect } from "next/navigation"
import { AdminDashboardView } from "@/components/dashboard/admin-dashboard-view"
import { TeacherDashboardView } from "@/components/dashboard/teacher-dashboard-view"
import { ParentDashboardView } from "@/components/dashboard/parent-dashboard-view"

export default async function Dashboard() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/login")
  }

  const role = session.user.role

  if (role === "ADMIN") {
    return <AdminDashboardView />
  }

  if (role === "TEACHER") {
    // Pass user name to teacher dashboard
    return <TeacherDashboardView userName={session.user.name || "Guru"} />
  }

  // PARENT (Wali Murid) atau default STUDENT
  // Gunakan nama akun yang login sebagai display, tapi hubungkan ke anak "Ahmad Fauzi" untuk testing.
  const parentName = session.user.name || "Wali Murid"
  const studentLinked = "Ahmad Fauzi"

  return <ParentDashboardView parentName={parentName} studentName={studentLinked} grade="6A" />
}
