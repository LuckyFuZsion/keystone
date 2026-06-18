import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.reviews,
  description:
    "Read customer reviews for Keystone Sports Therapy in Grantham. Pilates, sports massage, and personal training testimonials.",
  alternates: { canonical: "/reviews" },
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
