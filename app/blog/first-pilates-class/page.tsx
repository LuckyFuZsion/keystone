import type { Metadata } from "next"
import FirstPilatesClassContent from "@/components/blog-posts/first-pilates-class-content"
import { getBlogPostMetadata } from "@/lib/blog-posts"

export const metadata: Metadata = getBlogPostMetadata("first-pilates-class")

export default function FirstPilatesClassPage() {
  return <FirstPilatesClassContent />
}
