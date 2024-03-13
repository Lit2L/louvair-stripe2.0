import Stripe from 'stripe'
import { env } from '@/env.mjs'
export default async function getProducts() {
  const stripe = new Stripe(env.STRIPE_API_KEY as string, {
    apiVersion: '2022-11-15'
  })
  const products = await stripe.products.list()

  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id })
      const features = product.metadata.features || '' // Extract features from metadata
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
        metadata: { features }
      }
    })
  )
  return productWithPrices
}
