//
import { SiteConfig } from 'types'

const site_url = 'https://louvair.com'

export const siteConfig: SiteConfig = {
  name: "L'ouvair",
  description: 'Full Admin control over ecommerce platform.',
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/'
  }
  // mailSupport: 'support@saas-starter.com'
}
