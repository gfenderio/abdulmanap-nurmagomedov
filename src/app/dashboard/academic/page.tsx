import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import AcademicClient from "./academic-client";

export default async function AcademicPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/login");
  }

  return <AcademicClient role={session.user.role} />;
}
