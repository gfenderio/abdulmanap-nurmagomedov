import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import AttendanceClient from "./attendance-client"

export default async function AttendancePage() {
  const session = await auth()
  
  if (!session) {
    redirect("/login")
  }

  return <AttendanceClient role={session.user.role} />
}
