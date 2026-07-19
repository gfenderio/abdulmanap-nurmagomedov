import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import GradesClient from "./grades-client"

export default async function GradesPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/login")
  }

  return <GradesClient role={session.user.role} />
}
