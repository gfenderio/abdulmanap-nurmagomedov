import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
import TemplateClient from "./template-client";

export default async function ReportTemplatePage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/login");
  }

  return <TemplateClient role={session.user.role} />;
}
