import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "./generated/prisma"
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
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
}
