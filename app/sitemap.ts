import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/pilates-grantham",
    "/services",
    "/owner",
    "/gallery",
    "/reviews",
    "/book",
    "/contact",
    "/new-patient",
    "/privacy-policy",
    "/features",
    "/holidays",
    "/blog",
    "/blog/reformer-vs-mat-pilates",
    "/blog/pilates-for-lower-back-pain-grantham",
    "/blog/first-pilates-class",
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/pilates-grantham" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/pilates-grantham" ? 0.9 : 0.7,
  }))
}
