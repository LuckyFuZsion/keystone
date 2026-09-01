export type GoogleReview = {
  author: string
  body: string
  rating: number
  datePublished?: string
}

/** Real Google reviews displayed on site — quoted verbatim */
export const googleReviews: GoogleReview[] = [
  {
    author: "Guoda Z",
    body: "I've been going to Naz's sport therapy clinic for 6 months now, doing weekly reformer pilates classes plus private training sessions, and honestly it's been life-changing.",
    rating: 5,
    datePublished: "2025-05",
  },
  {
    author: "Nina Coffey",
    body: "Alex is an excellent Pilates instructor, I really enjoy the reformer Pilates, it is fantastic for deep muscle work, she is really knowledgeable and passionate. As her classes are small she gives brilliant instruction and I thoroughly enjoy the sessions highly recommended!",
    rating: 5,
    datePublished: "2023-09",
  },
  {
    author: "Tracy Hine",
    body: "Alex is a great PT with vast knowledge of so many areas of strength training, mobility and Pilates. The instruction is always well demonstrated which is a massive help. I can't recommend enough.",
    rating: 5,
    datePublished: "2024-09",
  },
]

/** Aggregate matches displayed reviews only (schema must align with visible content) */
export const reviewAggregate = {
  ratingValue: 5.0,
  reviewCount: googleReviews.length,
  bestRating: 5,
} as const
