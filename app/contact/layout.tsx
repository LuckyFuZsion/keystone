import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.contact,
  description:
    "Contact Keystone Sports Therapy in Grantham. Book Pilates classes, sports massage, or personal training. 71 Castlegate, Grantham NG31 6SQ.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
