import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
// Use the relative path to force a fresh module load
import { prisma } from "./lib/db" 

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  // We use the adapter here. If it still says undefined, 
  // it means the 'account' model isn't in your schema.prisma
  adapter: PrismaAdapter(prisma as any),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})