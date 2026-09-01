import { CustomerReviewsSection } from "@/components/customer-reviews-section"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerReviewsSection
        pageTitle="Customer Reviews"
        pageDescription="Real Google reviews from clients at Keystone Sports Therapy & Pilates, Grantham"
      />
    </div>
  )
}
