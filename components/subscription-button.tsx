'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { ZapIcon } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/ui/button'

interface SubscriptionButtonProps {
  isPro: boolean
}

export const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = async () => {
    try {
      setIsLoading(true)

      const response = await axios.get('/api/stripe')

      window.location.href = response.data.url
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setIsLoading(true)
    }
  }

  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <ZapIcon className='w-4 h-4 ml-2 fill-white' />}
    </Button>
  )
}
