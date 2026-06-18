import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.seo.pageTitles.newPatient,
  description:
    "Complete the new patient form for Keystone Sports Therapy in Grantham. Share your medical history before your first appointment.",
  alternates: { canonical: "/new-patient" },
}

export default function NewPatientLayout({ children }: { children: React.ReactNode }) {
  return children
}
