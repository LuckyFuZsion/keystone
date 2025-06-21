/** @type {import('next').NextConfig} */

// Debug environment variables at config level
console.log('=== NEXT CONFIG DEBUG ===')
console.log('GMAIL_USER:', process.env.GMAIL_USER)
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '***SET***' : 'NOT SET')
console.log('EMAIL_FROM:', process.env.EMAIL_FROM)
console.log('EMAIL_TO:', process.env.EMAIL_TO)
console.log('=== END DEBUG ===')

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Suppress hydration warnings in development
  reactStrictMode: false,
}

export default nextConfig
