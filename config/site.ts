//
import { SiteConfig } from 'types'

const site_url = 'https://louvair.com'

export const siteConfig: SiteConfig = {
  name: 'Louvair',
  description: 'Full Admin control over ecommerce platform.',
  url: site_url || 'https://louvair.com',
  ogImage: `${site_url}/og.jpg`,
  links: {
    facebook: 'https://twitter.com/',
    instagram: 'https://github.com/'
  }
  // mailSupport: 'support@saas-starter.com'
}
