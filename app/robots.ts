import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" as const })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
