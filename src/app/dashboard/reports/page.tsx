import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import ReportsClient from "./reports-client";

export default async function ReportsPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/login");
  }

  return <ReportsClient role={session.user.role} />;
}
