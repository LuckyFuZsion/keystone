# SEO To-Do List — Keystone Sports Therapy

Target keyword: **Pilates Grantham**  
Site: https://www.kstherapyclinic.com  
Source prompt: `keystone-seo-cursor-prompt.md`

---

## Phase 1 — Audit (read-only)

- [x] **robots.txt** — `app/robots.ts` allows all crawling and references sitemap
- [x] **sitemap.xml** — `app/sitemap.ts` auto-generates on build; includes `/pilates-grantham` and all key pages
- [x] **Title & meta descriptions** — all pages have unique values via `lib/site.ts` and per-route layouts
- [x] **Canonical tags** — self-referencing canonicals on every page via layout metadata
- [x] **Heading structure** — one H1 per page (homepage uses `sr-only` H1 + visible H2)
- [x] **Image alt text** — improved across homepage, services, and gallery (see Phase 4)
- [x] **Structured data audit** — gaps identified and addressed in Phase 2
- [x] **Internal linking audit** — header links to `/pilates-grantham` and `/book`; contextual links added in Phase 4
- [x] **Image optimization** — all images use `next/image`; webp source files; AVIF enabled in `next.config.mjs`
- [x] **HTTPS / www** — HSTS header in `next.config.mjs`; `middleware.ts` redirects bare domain → `www`

### Audit notes (optional follow-ups)

- [ ] **`/features` and `/holidays`** — in sitemap but not in main nav; consider footer or nav links if you want stronger internal linking
- [ ] **Re-submit sitemap** in Google Search Console after each deploy with structural changes

---

## Phase 2 — Structured data (JSON-LD)

- [x] **LocalBusiness** — `components/json-ld.tsx` → `LocalBusinessJsonLd` in `app/layout.tsx`
  - Type: `HealthAndBeautyBusiness`
  - Name, address, phone, email, url, sameAs (Facebook/Instagram), priceRange, geo
  - Image: og-image (`/og-image.png`)
- [ ] **Opening hours** — TODO in `components/json-ld.tsx` (line ~40); add once confirmed
- [x] **Service schema** — `PilatesServicesJsonLd` on `app/pilates-grantham/page.tsx`
  - Reformer Pilates (£65 1:1, £310/5, £600/10, £20 group, £150/8-pass)
  - Mat Pilates
- [x] **FAQPage schema** — `FaqJsonLd` on `app/pilates-grantham/page.tsx` (6 FAQs from page content)
- [x] **Review schema** — `ReviewsJsonLd` on homepage + `/reviews` (real Google reviews)
- [x] **AggregateRating** — 5.0 from 3 displayed Google reviews in `lib/reviews.ts` + `LocalBusinessJsonLd` (count matches visible reviews)
- [ ] **Validate JSON-LD** — test at [Google Rich Results Test](https://search.google.com/test/rich-results) after deploy

---

## Phase 3 — Meta / title tags

- [x] **Homepage title** — `lib/site.ts`: `Pilates Grantham | Reformer & Mat Pilates | Keystone Sports Therapy`
- [x] **`/pilates-grantham` title** — absolute title: `Pilates Grantham | Reformer & Mat Pilates Classes | Keystone`
- [x] **Other pages** — unique titles/descriptions in layout files:
  - `app/services/layout.tsx`
  - `app/owner/layout.tsx`
  - `app/gallery/layout.tsx`
  - `app/reviews/layout.tsx`
  - `app/book/layout.tsx`
  - `app/contact/layout.tsx`
  - `app/new-patient/layout.tsx`
  - `app/privacy-policy/page.tsx`
  - `app/features/layout.tsx`
  - `app/holidays/layout.tsx`

---

## Phase 4 — Alt text & internal linking

- [x] **Homepage alt text** — descriptive alts on hero images and service carousel (`app/page.tsx`)
- [x] **Services page alt text** — updated image alts (`app/services/page.tsx`)
- [x] **Gallery alt text** — varied, descriptive alts (`app/gallery/page.tsx`)
- [x] **Homepage → `/pilates-grantham`** — Reformer Pilates service card links to Pilates page
- [x] **Homepage → `/pilates-grantham`** — text link in Reformer schedule section
- [x] **Services → `/pilates-grantham`** — link on Reformer Pilates card
- [x] **Owner → `/pilates-grantham`** — link on APPI Pilates qualifications (`app/owner/page.tsx`)
- [x] **Header nav** — `/pilates-grantham` and `/book` in `components/header.tsx`

---

## Phase 5 — Sitemap & robots.txt

- [x] **robots.txt** — `app/robots.ts` (allow all, sitemap reference)
- [x] **sitemap.xml** — `app/sitemap.ts` (priorities: `/` = 1.0, `/pilates-grantham` = 0.9)
- [x] **www redirect** — `middleware.ts` (301 `kstherapyclinic.com` → `www.kstherapyclinic.com`)
- [ ] **Google Search Console** — (re)submit `https://www.kstherapyclinic.com/sitemap.xml` after deploy

---

## Phase 6 — Blog / insights section

### Routes (scaffolded)

- [x] `/blog` — index page (`app/blog/page.tsx`)
- [x] `/blog/reformer-vs-mat-pilates` — placeholder (`app/blog/reformer-vs-mat-pilates/page.tsx`)
- [x] `/blog/pilates-for-lower-back-pain-grantham` — placeholder (`app/blog/pilates-for-lower-back-pain-grantham/page.tsx`)
- [x] `/blog/first-pilates-class` — placeholder (`app/blog/first-pilates-class/page.tsx`)
- [x] **Sitemap** — blog routes added to `app/sitemap.ts`
- [x] **Per-post SEO** — title, meta description, H1, canonical, links to `/pilates-grantham` and `/book`

### Content (written, not yet live)

Draft markdown exists in `blog content/`:

- [x] Wire up `blog content/reformer-vs-mat-pilates.md` → `/blog/reformer-vs-mat-pilates`
- [x] Wire up `blog content/pilates-lower-back-pain-grantham.md` → `/blog/pilates-for-lower-back-pain-grantham`
- [x] Wire up `blog content/first-pilates-class-what-to-expect.md` → `/blog/first-pilates-class`
- [ ] Add blog link to site nav or footer (optional)

---

## Off-site / manual tasks (not code)

- [ ] **Google Business Profile** — claim, verify, keep active with posts and photos
- [ ] **Google reviews** — actively request reviews from clients (feeds AggregateRating TODO above)
- [ ] **NAP consistency** — align name/address/phone across Facebook, Instagram, Bark, Yell, Grantham Together, PilatesClassesNear, and other directories
- [ ] **Local press** — pitch Grantham Journal / Grantham Together (Nasreen's 10 years locally + APPI clinical background)

---

## Other fixes

- [x] **Build error** — installed missing `react-google-recaptcha-v3` dependency

---

## Quick reference — key files

| Area | File(s) |
|------|---------|
| Site config & SEO titles | `lib/site.ts` |
| JSON-LD | `components/json-ld.tsx` |
| Root metadata | `app/layout.tsx` |
| Pilates landing page | `app/pilates-grantham/page.tsx` |
| Reviews | `app/reviews/page.tsx` |
| Sitemap | `app/sitemap.ts` |
| Robots | `app/robots.ts` |
| www redirect | `middleware.ts` |
| Blog | `app/blog/` |
| Blog drafts | `blog content/` |

---

*Last updated: September 2026*
