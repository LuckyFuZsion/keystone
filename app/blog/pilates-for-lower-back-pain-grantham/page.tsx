import type { Metadata } from "next"
import LowerBackPainContent from "@/components/blog-posts/lower-back-pain-content"
import { getBlogPostMetadata } from "@/lib/blog-posts"

export const metadata: Metadata = getBlogPostMetadata("pilates-for-lower-back-pain-grantham")

export default function PilatesLowerBackPainPage() {
  return <LowerBackPainContent />
}
