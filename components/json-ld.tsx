import { siteConfig } from "@/lib/site"
import { absoluteImageUrl, images } from "@/lib/images"

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
  const { name, url, email, phoneTel, address, geo, social } = siteConfig

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        name,
        url,
        email,
        telephone: phoneTel,
        image: absoluteImageUrl(images.logo, url),
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
