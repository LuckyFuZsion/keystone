import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book Pilates classes, sports massage, or personal training online at Keystone Sports Therapy, Grantham.",
  alternates: { canonical: "/book" },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children
}
