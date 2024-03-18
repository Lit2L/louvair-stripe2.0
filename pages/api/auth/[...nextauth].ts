import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { Adapter } from 'next-auth/adapters'
import { db } from '@/lib/db'
import Stripe from 'stripe'
import { env } from '@/env.mjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  events: {
    createUser: async ({ user }) => {
      console.log('createUser:', { user })

      const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
        apiVersion: '2023-10-16'
      })
      if (user.email && user.name) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: user.name
        })

        await db.user.update({
          where: { id: user.id },
          data: { stripeCustomerId: customer.id }
        })
      }
      await stripe.customers
        .create({
          email: user.email!,
          name: user.name!
        })
        .then(async (customer) => {
          return db.user.update({
            where: { id: user.id },
            data: {
              stripeCustomerId: customer.id
            }
          })
        })
    }
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user = user

      return session
    }
  }
}
export default NextAuth(authOptions)
