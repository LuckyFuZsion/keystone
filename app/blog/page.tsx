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

function getBlogGridClass(postCount: number) {
  if (postCount >= 5) {
    return "max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  }

  return "max-w-4xl grid-cols-1 sm:grid-cols-2"
}

export default function BlogPage() {
  const gridClass = getBlogGridClass(blogPostList.length)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights</h1>
            <p className="text-xl text-gray-600">
              Pilates tips and guides from {siteConfig.shortName} in Grantham.
            </p>
          </div>

          <ul className={`mx-auto grid gap-6 ${gridClass}`}>
            {blogPostList.map((post) => (
              <li key={post.slug}>
                <Link
                  href={post.canonicalPath}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {post.thumbnail ? (
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={post.thumbnail.src}
                        alt={post.thumbnail.alt}
                        width={post.thumbnail.width}
                        height={post.thumbnail.height}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {post.headline}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
