// FIX: I changed .mjs to .js
// More info: https://github.com/shadcn-ui/taxonomy/issues/100#issuecomment-1605867844

// import('./env.mjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'files.stripe.com'
      }
    ]
  },

  experimental: {
    appDir: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
