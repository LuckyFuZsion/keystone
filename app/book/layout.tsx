import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.book,
  description:
    "Book Pilates classes, sports massage, or personal training online at Keystone Sports Therapy, Grantham.",
  alternates: { canonical: "/book" },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children
}
