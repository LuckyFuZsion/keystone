import { siteConfig } from "@/lib/site"
import { absoluteImageUrl } from "@/lib/images"
import { reviewAggregate } from "@/lib/reviews"

export const LOCAL_BUSINESS_ID = `${siteConfig.url}/#business`

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
  const { shortName, url, email, phoneTel, address, geo, social, seo } = siteConfig

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "@id": LOCAL_BUSINESS_ID,
        name: shortName,
        url,
        email,
        telephone: phoneTel,
        image: absoluteImageUrl(seo.ogImage, url),
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          postalCode: address.postcode,
          addressCountry: address.country,
        },
        // TODO: Add exact opening hours once confirmed (e.g. Mo-Fr 09:00-18:00)
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        sameAs: [social.facebook, social.instagram],
        priceRange: "££",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: reviewAggregate.ratingValue,
          reviewCount: reviewAggregate.reviewCount,
          bestRating: reviewAggregate.bestRating,
        },
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

type ServiceOffer = {
  name: string
  price: string
  description?: string
}

export function PilatesServicesJsonLd({
  services,
}: {
  services: { name: string; description: string; offers: ServiceOffer[] }[]
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": services.map((service) => ({
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": LOCAL_BUSINESS_ID },
          areaServed: "Grantham",
          offers: service.offers.map((offer) => ({
            "@type": "Offer",
            name: offer.name,
            price: offer.price,
            priceCurrency: "GBP",
            ...(offer.description ? { description: offer.description } : {}),
          })),
        })),
      }}
    />
  )
}

type ReviewData = {
  author: string
  body: string
  rating: number
  datePublished?: string
}

type AggregateData = {
  ratingValue: number
  reviewCount: number
  bestRating: number
}

export function ReviewsJsonLd({
  reviews,
  aggregate,
}: {
  reviews: ReviewData[]
  aggregate?: AggregateData
}) {
  const reviewNodes = reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.body,
    ...(review.datePublished ? { datePublished: review.datePublished } : {}),
    itemReviewed: { "@id": LOCAL_BUSINESS_ID },
  }))

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": aggregate
          ? [
              {
                "@type": "AggregateRating",
                ratingValue: aggregate.ratingValue,
                reviewCount: aggregate.reviewCount,
                bestRating: aggregate.bestRating,
                itemReviewed: { "@id": LOCAL_BUSINESS_ID },
              },
              ...reviewNodes,
            ]
          : reviewNodes,
      }}
    />
  )
}

export function FaqJsonLd({
  faqs,
  url,
}: {
  faqs: { question: string; answer: string }[]
  url?: string
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        ...(url ? { url, mainEntityOfPage: url } : {}),
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

export function OrganizationJsonLd() {
  const { shortName, url, email, phoneTel, social, seo } = siteConfig

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: shortName,
        url,
        email,
        telephone: phoneTel,
        logo: absoluteImageUrl(seo.ogImage, url),
        sameAs: [social.facebook, social.instagram],
      }}
    />
  )
}

export function AuthorPersonJsonLd() {
  const { author, url } = siteConfig

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${url}${author.profilePath}#author`,
        name: author.name,
        jobTitle: author.jobTitle,
        url: `${url}${author.profilePath}`,
        worksFor: { "@id": LOCAL_BUSINESS_ID },
      }}
    />
  )
}

type WebPageJsonLdProps = {
  url: string
  name: string
  description: string
  datePublished: string
  dateModified: string
  speakableSelectors?: string[]
}

export function WebPageJsonLd({
  url,
  name,
  description,
  datePublished,
  dateModified,
  speakableSelectors,
}: WebPageJsonLdProps) {
  const { author } = siteConfig

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name,
        description,
        datePublished,
        dateModified,
        author: {
          "@type": "Person",
          name: author.name,
          url: `${siteConfig.url}${author.profilePath}`,
        },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        isPartOf: { "@id": LOCAL_BUSINESS_ID },
        ...(speakableSelectors?.length
          ? {
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: speakableSelectors,
              },
            }
          : {}),
      }}
    />
  )
}

type ArticleJsonLdProps = {
  headline: string
  description: string
  datePublished: string
  url: string
  authorName?: string
  authorJobTitle?: string
}

export function ArticleJsonLd({
  headline,
  description,
  datePublished,
  url,
  authorName = "Nasreen Alexandra Davison",
  authorJobTitle = "APPI-qualified Pilates Instructor",
}: ArticleJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        author: {
          "@type": "Person",
          name: authorName,
          jobTitle: authorJobTitle,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.shortName,
          url: siteConfig.url,
        },
        datePublished,
        mainEntityOfPage: url,
      }}
    />
  )
}

type HowToStep = { name: string; text: string }

export function HowToJsonLd({ name, steps }: { name: string; steps: HowToStep[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        step: steps.map((step) => ({
          "@type": "HowToStep",
          name: step.name,
          text: step.text,
        })),
      }}
    />
  )
}
