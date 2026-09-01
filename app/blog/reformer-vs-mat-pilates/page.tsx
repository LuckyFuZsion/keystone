import type { Metadata } from "next"
import ReformerVsMatContent from "@/components/blog-posts/reformer-vs-mat-content"
import { getBlogPostMetadata } from "@/lib/blog-posts"

export const metadata: Metadata = getBlogPostMetadata("reformer-vs-mat-pilates")

export default function ReformerVsMatPilatesPage() {
  return <ReformerVsMatContent />
}
