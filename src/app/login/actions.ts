"use server"

import { AuthError } from "next-auth"
import { redirect } from "next/navigation"
import { signIn } from "../../../auth"

/** Credentials sign-in for the login form, typed by hand or by the demo. */
export async function login(formData: FormData) {
  try {
    await signIn("credentials", {
      identifier: formData.get("identifier"),
      password: formData.get("password"),
      redirectTo: "/dashboard",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/login?error=" + error.type)
    }
    // signIn's own redirect to /dashboard is thrown too; let it through.
    throw error
  }
}
