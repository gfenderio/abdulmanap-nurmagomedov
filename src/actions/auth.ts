"use server";

import * as z from "zod";
import { signIn, signOut } from "@/../../auth";
import { AuthError } from "next-auth";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Data tidak valid!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Kredensial salah!" };
        default:
          return { error: "Terjadi kesalahan sistem!" };
      }
    }
    throw error;
  }
};

export const logout = async () => {
  await signOut({ redirectTo: "/login" });
};
