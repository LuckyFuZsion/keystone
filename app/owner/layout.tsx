import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Nasreen Davison",
  description:
    "Meet Nasreen Alexandra Davison — APPI-qualified Pilates instructor, Level 4 sports massage therapist, and personal trainer in Grantham.",
  alternates: { canonical: "/owner" },
}

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  return children
}
