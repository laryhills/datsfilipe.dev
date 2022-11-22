/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google' }
    ]
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
    domains: ['github.com']
  },
}

export default nextConfig
