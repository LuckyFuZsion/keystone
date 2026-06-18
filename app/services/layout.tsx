import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Sports massage, personal training, Reformer Pilates, Mat Pilates, nutrition advice, and B12 injections in Grantham. Transparent pricing and expert care.",
  alternates: { canonical: "/services" },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
