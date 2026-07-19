import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import StudentsClient from "./students-client"

export default async function StudentsPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/login")
  }

  return <StudentsClient role={session.user.role} />
}
