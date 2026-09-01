# Cursor Prompt: SEO Implementation for Keystone Sports Therapy (kstherapyclinic.com)

Paste the section(s) below into Cursor. Split into phases so you can review each diff before moving on — don't run the whole thing in one shot.

---

## Context to give Cursor first

```
This is a Next.js site for Keystone Sports Therapy, a Pilates/sports therapy clinic
in Grantham, UK. Primary target keyword: "Pilates Grantham". Main competitor is a
new, well-funded reformer studio chain also targeting Grantham. Business address:
71 Castlegate, Grantham, NG31 6SQ. Phone: 07432 555508. Email: hello@kstherapyclinic.com.
Instructor: Nasreen Alexandra Davison, APPI-qualified. Key pages: / (home),
/pilates-grantham, /owner, /services, /gallery, /reviews, /book, /new-patient, /contact.

Goal: improve organic and local search visibility for "Pilates Grantham" and related
long-tail terms, without breaking existing layout, booking widget, or analytics.
```

---

## Phase 1 — Audit (run this first, read-only)

```
Audit this codebase for on-page and technical SEO issues. Specifically check and
report back on (do not make changes yet):

1. robots.txt — does it exist, is it blocking anything it shouldn't?
2. sitemap.xml — does it exist, is it auto-generated, does it include
   /pilates-grantham and all key pages?
3. Every page's <title> and meta description — list them all, flag any that are
   missing, duplicated, or don't include a location/service keyword.
4. Canonical tags — confirm every page has a correct, self-referencing canonical.
5. Heading structure on each page — confirm exactly one <h1> per page and a logical
   h2/h3 hierarchy. Flag any pages with zero or multiple h1s.
6. Image alt text — list every <img> or next/image component missing meaningful
   alt text, or using generic/duplicate alt text across the site.
7. Structured data (JSON-LD) — check whether LocalBusiness, Service, FAQPage, or
   Review/AggregateRating schema exists anywhere. If none exists, confirm that.
8. Internal linking — map which pages link to /pilates-grantham and /book, and flag
   any orphaned pages with no internal links pointing to them.
9. Page weight / image optimization — flag any images not using next/image or not
   served in a modern format (webp/avif), and any unusually large image files.
10. Confirm HTTPS is enforced and there's no www/non-www duplicate content issue.

Output this as a markdown checklist with file paths, not just prose.
```

---

## Phase 2 — Structured data (JSON-LD)

**Status: largely complete.** Do not recreate schema that already exists in the root layout.

```
Confirm structured data is present and correct. Do NOT duplicate LocalBusiness,
Organization, or Review blocks that already exist site-wide.

Already implemented (do not recreate):
- LocalBusinessJsonLd + OrganizationJsonLd in app/layout.tsx
- AggregateRating on LocalBusiness (3 real Google reviews from lib/reviews.ts)
- ReviewsJsonLd on homepage and /reviews (references LocalBusiness by @id)
- FaqJsonLd + PilatesServicesJsonLd + WebPageJsonLd on /pilates-grantham
- ArticleJsonLd + FaqJsonLd (+ HowTo on first-class post) on blog posts

Only add or fix if missing:
1. On /pilates-grantham, confirm FAQPage JSON-LD matches the visible FAQ content
   exactly (same questions/answers). Add FaqJsonLd only if it is absent.
2. Opening hours on LocalBusiness — TODO in components/json-ld.tsx once hours
   are confirmed.
3. Validate all JSON-LD at https://search.google.com/test/rich-results after deploy.

Do not add a second LocalBusiness, Organization, or duplicate AggregateRating
graph node — that can confuse which entity Google treats as canonical.
```

---

## Phase 3 — Meta / title tag refinements

```
Update title tags and meta descriptions as follows, keeping existing brand suffix
style consistent with the rest of the site:

- Homepage title: lead with "Pilates Grantham" before other terms, e.g.
  "Pilates Grantham | Reformer & Mat Pilates | Keystone Sports Therapy"
- /pilates-grantham title: "Pilates Grantham | Reformer & Mat Pilates Classes | Keystone"
- Confirm every other page (/services, /owner, /gallery, /reviews, /book,
  /new-patient, /contact) has a unique, descriptive title and meta description
  that isn't duplicated from another page — write new ones where they're
  missing or duplicated, incorporating "Grantham" naturally where relevant
  (don't force it where it reads unnaturally, e.g. /privacy-policy).

Do not change page content, only <title> and meta description values.
```

---

## Phase 4 — Alt text and internal linking

```
1. Go through every image on the site and write descriptive, keyword-relevant alt
   text where it's currently missing or generic (e.g. duplicate "Reformer Pilates"
   used on multiple unrelated images). Vary the phrasing naturally — don't keyword
   stuff every single alt tag with "Pilates Grantham".

2. Add contextual internal links from /services and the homepage service cards
   through to /pilates-grantham where a Pilates-related service is mentioned, and
   from /owner back to /pilates-grantham where Nasreen's Pilates qualifications
   are discussed. Use natural anchor text, not "click here".
```

---

## Phase 5 — Sitemap & robots.txt

```
1. If no robots.txt exists, create one that allows all crawling and references the
   sitemap. If one exists, confirm it isn't blocking any pages that should be
   indexed.
2. If sitemap.xml isn't auto-generated (e.g. via next-sitemap), set that up so it
   regenerates on build and includes all public pages with reasonable priority/
   changefreq values, with /pilates-grantham and / weighted highest.
3. Confirm the sitemap is referenced in robots.txt and remind me to (re)submit it
   in Google Search Console after deploy.
```

---

## Phase 6 — New content scaffolding (optional, do last)

```
Create a new blog/insights section under /blog (or match the existing routing
convention in this codebase) with placeholder MDX/page files for these three
posts, each with a proper title tag, meta description, H1, and an internal link
back to /pilates-grantham and /book. Leave the body content as a short outline
in comments for me to write/approve — do not generate full marketing copy:

1. "Reformer vs Mat Pilates: What's the Difference?"
2. "Pilates for Lower Back Pain in Grantham"
3. "What to Expect at Your First Pilates Class"
```

---

## Reminders for you (not for Cursor — these aren't code tasks)

These matter as much as the technical work above but happen outside the codebase:
- Claim/verify Google Business Profile, keep it active with posts and photos.
- Actively request Google reviews from clients (not just on-site testimonials).
- Fix NAP consistency across Facebook, Instagram, Bark, Yell, Grantham Together,
  PilatesClassesNear, and any other directory listing.
- Pitch a local press feature (Grantham Journal, Grantham Together) — genuinely
  newsworthy given Nasreen's 10 years locally and APPI clinical background as a
  differentiator from purely fitness-focused competitors.
