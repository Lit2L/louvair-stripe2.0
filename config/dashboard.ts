import { DashboardConfig } from '@/types/index'

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Products',
      href: '/products'
    },
    {
      title: 'Pricing',
      href: '/pricing'
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
