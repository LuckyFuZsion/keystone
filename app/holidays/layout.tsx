import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.holidays,
  description:
    "Keystone Sports Therapy holiday schedule and opening hours. Stay informed about clinic closures and availability in Grantham.",
  alternates: { canonical: "/holidays" },
}

export default function HolidaysLayout({ children }: { children: React.ReactNode }) {
  return children
}
