import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(){
        const user = {
          id: '1',
          name: 'Elon Musk',
          email: 'elon@tesla.com',
          image: 'https://i.imgur.com/RqVVBOR.jpg'
        }
        return user
      }
    }),
  ],
  session: {
    strategy: "jwt"
    // strategy: "database",
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/auth/signin",
  },
})

//https://next-auth.js.org/configuration/providers/credentials
//https://next-auth.js.org/configuration/options
//https://www.youtube.com/watch?v=dXM-ahRNNhc

// async authorize(){
//   const email = {email: "Elon Musk"}
//   // return user
//   const res = await fetch("/api/auth/demoAccount", {
//     method: 'POST',
//     body: JSON.stringify(email),
//     headers: { "Content-Type": "application/json" }
//   })
//   const user = await res.json()

//   // If no error and we have user data, return it
//   if (res.ok && user) {
//     return user
//   }
//   // Return null if user data could not be retrieved
//   return null
// }
// }),