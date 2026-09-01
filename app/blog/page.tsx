import type { Metadata } from "next"
import Link from "next/link"
import { blogPostList } from "@/lib/blog-posts"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pilates & Wellness Insights",
  description:
    "Expert Pilates tips and guides from Keystone Sports Therapy in Grantham. Reformer vs Mat Pilates, back pain, and what to expect at your first class.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights</h1>
          <p className="text-xl text-gray-600 mb-12">
            Pilates tips and guides from {siteConfig.shortName} in Grantham.
          </p>

          <ul className="space-y-6">
            {blogPostList.map((post) => (
              <li key={post.slug}>
                <Link
                  href={post.canonicalPath}
                  className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.headline}</h2>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
