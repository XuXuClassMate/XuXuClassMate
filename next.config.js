/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'out',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {},
}

module.exports = withPWA(nextConfig)
