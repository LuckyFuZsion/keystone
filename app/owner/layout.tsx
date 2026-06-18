import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.owner,
  description:
    "Meet Nasreen Alexandra Davison — APPI-qualified Pilates instructor, Level 4 sports massage therapist, and personal trainer in Grantham.",
  alternates: { canonical: "/owner" },
}

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  return children
}
