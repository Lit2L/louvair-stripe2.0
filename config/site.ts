// import { env } from '@/env.mjs'
import { SiteConfig } from 'types'

const site_url = process.env.NEXT_PUBLIC_APP_URL

export const siteConfig: SiteConfig = {
  name: 'Louvair',
  description: 'Full Admin control over ecommerce platform.',
  url: site_url || 'http://localhost:3000',
  ogImage: `${site_url}/og.jpg`,
  links: {
    facebook: 'https://twitter.com/',
    instagram: 'https://github.com/'
  }
  // mailSupport: 'support@saas-starter.com'
}
