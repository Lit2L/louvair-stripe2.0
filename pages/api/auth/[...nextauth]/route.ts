import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import { db } from '@/lib/db'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import Stripe from 'stripe'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  pages: {
    signIn: '/api/auth/[...nextauth].ts'
  },
  events: {
    createUser: async ({ user }) => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: '2022-11-15'
      })
      //Let's create a stripe customer

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
      //Also update our prisma user with the stripecustomerid
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
