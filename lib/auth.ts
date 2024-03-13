import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { env } from '@/env.mjs'
import { db } from '@/lib/db'

// const postmarkClient = new Client(env.POSTMARK_API_TOKEN)

export const authOptions: NextAuthOptions = {
  // huh any! I know.
  // This is a temporary fix for prisma client.
  // @see https://github.com/prisma/prisma/issues/16117
  adapter: PrismaAdapter(db as any),
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID!,
      clientSecret: env.GOOGLE_CLIENT_SECRET!
    })
  ],
  // events: {
  //   createUser: async ({ user }) => {
  //     try {
  //       const stripe = new Stripe(env.STRIPE_API_KEY!, {
  //         apiVersion: '2022-11-15'
  //       })

  //       if (user.email && user.name) {
  //         const customer = await stripe.customers.create({
  //           email: user.email,
  //           name: user.name
  //         })
  //         // also update our prisma user with the stripe customer id
  //         await db.user.update({
  //           where: { id: user.id },
  //           data: { stripeCustomerId: customer.id }
  //         })
  //       }
  //     } catch (error) {
  //       console.error('Failed to create Stripe customer or update user:', error)
  //     }
  //   }
  // },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email
        }
      })

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image
      }
    }
  }
}
