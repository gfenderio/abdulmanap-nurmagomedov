import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import BehaviorClient from "./behavior-client"

export default async function BehaviorPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/login")
  }

  return <BehaviorClient role={session.user.role} />
}
