import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.gallery,
  description:
    "View our Grantham clinic — modern sports therapy and Pilates studio on Castlegate.",
  alternates: { canonical: "/gallery" },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
