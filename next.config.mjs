/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google' }
    ]
  },
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  swcMinify: false
}

export default nextConfig
