import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./src/lib/db"
import bcrypt from "bcryptjs"

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email / NISN / NIP", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) return null

        const user = await db.user.findFirst({
          where: {
            OR: [
              { email: credentials.identifier as string },
              { studentProfile: { nisn: credentials.identifier as string } },
              { teacherProfile: { nip: credentials.identifier as string } }
            ]
          }
        })

        if (!user || !user.password) return null

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isPasswordValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
        token.image = user.image
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
        session.user.id = token.id as string
        session.user.image = token.image as string | null
      }
      return session
    }
  },
  pages: {
    signIn: "/login",
  },
})
