import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaClient } from "./generated/prisma"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const db = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        const user = await db.user.findUnique({
            where: { email: credentials?.email },
        })

        if (!user) {
            throw new Error("No user found")
        }

        const isValid = await bcrypt.compare(credentials!.password, user.password)
        if (!isValid) throw new Error("Invalid password")

        return user

      },
    }),
  ],
  callbacks: {

    // JWT Strategy

    async jwt({ token, user }) {
      // `user` is available only on first login
      if (user) token.id = user.id
      return token
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id
      return session
    },

    // Database Strategy
    // async session({ session, user }) {
    //   if (user) session.user.id = user.id
    //   return session
    // },


  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
}
