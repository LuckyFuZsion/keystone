import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.services,
  description:
    "Sports massage, personal training, Reformer Pilates, Mat Pilates, nutrition advice, and B12 injections in Grantham. Transparent pricing and expert care.",
  alternates: { canonical: "/services" },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
