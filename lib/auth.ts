import { auth } from '@clerk/nextjs'
import { User } from '@prisma/client'
import { db } from './db'

export const getUserByClerkId = async (): Promise<User | undefined> => {
  const { userId } = auth()

  if (userId) {
    try {
      const user = await db.user.findUniqueOrThrow({
        where: {
          clerkId: userId as string
        }
      })

      return user
    } catch (error) {
      console.error(error)
      if (error === 'P2025') {
        // Network error, retry the function call
        return await getUserByClerkId()
      } else if (error === 'P2016') {
        // Record not found, wait and retry the function call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return await getUserByClerkId()
      } else {
        throw new Error('User not found')
      }
    }
  }
}
