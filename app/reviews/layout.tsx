import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read customer reviews for Keystone Sports Therapy in Grantham. Pilates, sports massage, and personal training testimonials.",
  alternates: { canonical: "/reviews" },
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
