import { DashboardConfig } from 'types'

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Store',
      href: '/docs'
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true
    }
  ],
  sidebarNav: [
    {
      title: 'Account',
      href: '/dashboard',
      icon: 'laptop'
    },
    {
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'billing'
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings'
    }
  ]
}
