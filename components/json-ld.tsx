import { siteConfig } from "@/lib/site"

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const { name, url, email, phone, phoneTel, address, geo, social } = siteConfig

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        name,
        url,
        email,
        telephone: phoneTel,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7324757115_9404d9ed-960c-438d-ada9-e734da33c769-BcpXNSMgOJCsC3SRdl3br0GIKD64pA.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          postalCode: address.postcode,
          addressCountry: address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        sameAs: [social.facebook, social.instagram],
        priceRange: "££",
        areaServed: [
          "Grantham",
          "Barrowby",
          "Great Gonerby",
          "Manthorpe",
          "Harlaxton",
          "Stamford",
          "South Kesteven",
        ],
      }}
    />
  )
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  )
}
