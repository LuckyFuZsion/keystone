import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ReviewsJsonLd } from "@/components/json-ld"
import { googleReviews, reviewAggregate } from "@/lib/reviews"

type CustomerReviewsSectionProps = {
  limit?: number
  pageTitle?: string
  pageDescription?: string
}

export function CustomerReviewsSection({
  limit,
  pageTitle,
  pageDescription,
}: CustomerReviewsSectionProps) {
  const reviews = limit ? googleReviews.slice(0, limit) : googleReviews
  const aggregate = {
    ratingValue: reviewAggregate.ratingValue,
    reviewCount: reviews.length,
    bestRating: reviewAggregate.bestRating,
  }
  const HeadingTag = pageTitle ? "h1" : "h2"

  return (
    <>
      <ReviewsJsonLd reviews={reviews} aggregate={aggregate} />

      <section className="py-16 bg-gray-50" aria-labelledby="customer-reviews-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <HeadingTag
                id="customer-reviews-heading"
                className={
                  pageTitle
                    ? "text-4xl font-bold text-gray-900 mb-4"
                    : "text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide"
                }
              >
                {pageTitle ?? "What do clients say about Keystone Sports Therapy?"}
              </HeadingTag>
              {pageDescription && (
                <p className="text-xl text-gray-600 mb-6">{pageDescription}</p>
              )}
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-900 font-medium ml-1">
                  {reviewAggregate.ratingValue.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.author} className="border-0 shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      &ldquo;{review.body}&rdquo;
                    </p>
                    <p className="font-medium text-gray-900 text-sm">{review.author}</p>
                    <p className="text-xs text-gray-500 mt-1">Google review</p>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
