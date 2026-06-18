import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.features,
  description:
    "Discover what makes Keystone Sports Therapy unique — APPI Pilates, clinical expertise, and personalised care in Grantham.",
  alternates: { canonical: "/features" },
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
