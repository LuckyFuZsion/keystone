import HomePageContent from "@/components/home-page-content"
import { CustomerReviewsSection } from "@/components/customer-reviews-section"
import { HomeFaqSection } from "@/components/home-faq-section"
import { FaqJsonLd, WebPageJsonLd } from "@/components/json-ld"
import { homeFaqs } from "@/lib/home-faqs"
import { siteConfig } from "@/lib/site"

const { homePublished, homeModified } = siteConfig.contentDates

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd
        url={siteConfig.url}
        name="Pilates Classes in Grantham"
        description={siteConfig.seo.description}
        datePublished={homePublished}
        dateModified={homeModified}
        speakableSelectors={[".speakable-summary", ".speakable-faq-first"]}
      />
      <FaqJsonLd faqs={[...homeFaqs]} url={siteConfig.url} />

      <HomePageContent />
      <HomeFaqSection />
      <CustomerReviewsSection />
    </>
  )
}
