import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import ProgressNotesClient from "./progress-notes-client"

export default async function ProgressNotesPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/login")
  }

  return <ProgressNotesClient role={session.user.role} />
}
