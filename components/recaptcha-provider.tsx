"use client"

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ReactNode } from 'react'

interface ReCaptchaProviderProps {
  children: ReactNode
}

export function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
  // In Next.js, NEXT_PUBLIC_ variables are available at build time
  // For client components, we need to access them directly
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!siteKey) {
    console.error('❌ reCAPTCHA: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set')
    console.error('Please ensure the environment variable is set in Vercel and redeploy')
    return <>{children}</>
  }

  console.log('✅ reCAPTCHA: Site key found, initializing...')

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      language="en"
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}

