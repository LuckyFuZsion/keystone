import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Keystone Sports Therapy Clinic & Reformer Pilates",
  description:
    "Professional sports therapy, personal training, and exercise referral services with over 10 years of experience.",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7324757115_9404d9ed-960c-438d-ada9-e734da33c769-BcpXNSMgOJCsC3SRdl3br0GIKD64pA.png",
        type: "image/png",
      }
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7324757115_9404d9ed-960c-438d-ada9-e734da33c769-BcpXNSMgOJCsC3SRdl3br0GIKD64pA.png",
        type: "image/png",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Header />
        <main className="pt-32">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
