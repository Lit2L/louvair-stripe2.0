'use client'

import { AddCartType } from '@/types/AddCartType'
import { useCartStore } from '@/zustand/store'
import { useState } from 'react'
import { Button } from './ui/button'

export default function AddCartBtn({ id, name, image, unit_amount, quantity }: AddCartType) {
  const [added, setAdded] = useState(false)
  const cartStore = useCartStore()

  const handleAddToCart = () => {
    cartStore.addProduct({ id, name, image, unit_amount, quantity })
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 1000)
  }

  return (
    <Button
      onClick={handleAddToCart}
      className='px-6 py-2  border bg-neutral-700 border-gray-300/20 text-amber-400 mx-auto text-center  mt-24'
      disabled={added}
    >
      {!added ? <span>Add to cart </span> : <span>Adding to cart</span>}
    </Button>
  )
}
