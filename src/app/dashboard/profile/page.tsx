import { auth } from "@/../auth"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { ProfileForm } from "./profile-form"

export default async function ProfilePage() {
  const session = await auth()
  if (!session?.user?.id) {
    redirect("/login")
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      studentProfile: true,
      teacherProfile: true,
      parentProfile: true,
    }
  })

  if (!user) {
    redirect("/login")
  }

  return <ProfileForm user={user} />
}
