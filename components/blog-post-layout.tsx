import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArticleJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/json-ld"
import { getBlogPostUrl, type BlogPost } from "@/lib/blog-posts"

type BlogPostLayoutProps = {
  post: BlogPost
  intro?: React.ReactNode
  children: React.ReactNode
  cta: React.ReactNode
}

export function BlogH2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl font-light text-gray-900 mt-10 mb-4 tracking-wide scroll-mt-24"
    >
      {children}
    </h2>
  )
}

export function BlogP({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-gray-600 leading-relaxed mb-4 ${className ?? ""}`}>{children}</p>
}

export function BlogUl({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">{children}</ul>
}

export function BlogOl({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">{children}</ol>
}

export function BlogLi({ children }: { children: React.ReactNode }) {
  return <li className="leading-relaxed">{children}</li>
}

export function BlogLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-teal-700 hover:underline">
      {children}
    </Link>
  )
}

export default function BlogPostLayout({ post, intro, children, cta }: BlogPostLayoutProps) {
  const url = getBlogPostUrl(post.slug)

  return (
    <>
      <ArticleJsonLd
        headline={post.headline}
        description={post.description}
        datePublished={post.datePublished}
        url={url}
      />
      <FaqJsonLd faqs={post.faqs} />
      {post.howTo ? <HowToJsonLd name={post.howTo.name} steps={post.howTo.steps} /> : null}

      <article className="min-h-screen bg-white">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link href="/blog" className="text-teal-700 hover:underline text-sm mb-6 inline-block">
              ← Back to Insights
            </Link>

            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">
              {post.headline}
            </h1>

            <p className="text-sm text-gray-500 mb-8">
              By {post.author} ·{" "}
              {new Date(post.datePublished).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <div className="bg-teal-50 border border-teal-100 rounded-lg p-5 mb-8">
              <p className="text-sm font-medium text-gray-900 mb-1">Quick answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">{post.quickAnswer}</p>
            </div>

            {intro ? <div className="mb-8">{intro}</div> : null}

            <nav aria-label="Table of contents" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
              <p className="text-sm font-semibold text-gray-900 mb-3">Table of Contents</p>
              <ul className="space-y-2">
                {post.toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-teal-700 hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="blog-content">{children}</div>

            <section id="frequently-asked-questions" className="mt-12 pt-8 border-t border-gray-200 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-6">{cta}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pilates-grantham">
                  <Button className="bg-purple-600 hover:bg-purple-700">Pilates in Grantham</Button>
                </Link>
                <Link href="/book">
                  <Button variant="outline">Book a Class</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
