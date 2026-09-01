import type { Metadata } from "next"
import { imageDimensions, images } from "@/lib/images"
import { siteConfig } from "@/lib/site"

export type BlogPostSlug =
  | "first-pilates-class"
  | "reformer-vs-mat-pilates"
  | "pilates-for-lower-back-pain-grantham"

export type BlogTocItem = { id: string; label: string }

export type BlogThumbnail = {
  src: string
  alt: string
  width: number
  height: number
}

export type BlogPost = {
  slug: BlogPostSlug
  title: string
  headline: string
  description: string
  canonicalPath: string
  ogTitle: string
  ogDescription: string
  author: string
  datePublished: string
  quickAnswer: string
  thumbnail?: BlogThumbnail
  toc: BlogTocItem[]
  faqs: { question: string; answer: string }[]
  howTo?: { name: string; steps: { name: string; text: string }[] }
}

export const blogPosts: Record<BlogPostSlug, BlogPost> = {
  "first-pilates-class": {
    slug: "first-pilates-class",
    title: "What to Expect at Your First Pilates Class | Keystone Sports Therapy Grantham",
    headline: "What to Expect at Your First Pilates Class",
    description:
      "Nervous about your first Pilates class? Here's exactly what happens, what to wear, and what beginners can expect at our Grantham studio.",
    canonicalPath: "/blog/first-pilates-class",
    ogTitle: "What to Expect at Your First Pilates Class",
    ogDescription:
      "A step-by-step guide to your first Pilates class: what to wear, what happens, and how beginners are supported at our Grantham studio.",
    author: "Nasreen Alexandra Davison, APPI-qualified Pilates Instructor",
    datePublished: "2026-09-01",
    thumbnail: {
      src: images.gallery.groupFitness,
      alt: "Group fitness class in the modern Keystone Sports Therapy studio, Grantham",
      width: imageDimensions.gallery.groupFitness.width,
      height: imageDimensions.gallery.groupFitness.height,
    },
    quickAnswer:
      "Your first Pilates class will typically start with a short health questionnaire and a chat with your instructor about any injuries or concerns, followed by a class adapted to beginners, focused on correct movement, breathing, and control rather than intensity. Wear fitted, stretchy clothing and socks, and arrive 10–15 minutes early.",
    toc: [
      { id: "before-you-book-mat-or-reformer", label: "Before you book: Mat or Reformer?" },
      { id: "what-to-wear", label: "What to wear" },
      { id: "what-to-bring", label: "What to bring" },
      { id: "arriving-at-the-studio", label: "Arriving at the studio" },
      { id: "what-happens-during-the-class", label: "What happens during the class" },
      { id: "will-it-be-hard", label: "Will it be hard?" },
      { id: "after-your-first-class", label: "After your first class" },
      { id: "frequently-asked-questions", label: "Frequently asked questions" },
    ],
    howTo: {
      name: "How to prepare for your first Pilates class",
      steps: [
        {
          name: "Book your class",
          text: "Choose Mat or Reformer Pilates and book online or by calling the studio.",
        },
        {
          name: "Wear the right clothing",
          text: "Wear fitted, stretchy clothing and socks (grip socks for Reformer classes if you have them).",
        },
        {
          name: "Arrive early",
          text: "Arrive 10–15 minutes early to fill in a brief health questionnaire and meet your instructor.",
        },
        {
          name: "Share your history",
          text: "Tell your instructor about any injuries, conditions, or concerns so the class can be adapted to you.",
        },
        {
          name: "Follow the class at your pace",
          text: "Move at a pace that feels controlled, ask questions, and let the instructor know if anything feels wrong.",
        },
      ],
    },
    faqs: [
      {
        question: "What should I wear to my first Pilates class?",
        answer:
          "Fitted, stretchy clothing that allows a full range of movement, such as leggings and a fitted top. Avoid loose or baggy clothes that could get caught in equipment. Socks are usually required, and grip socks are recommended for Reformer Pilates.",
      },
      {
        question: "Do I need to be fit or flexible to start Pilates?",
        answer:
          "No. Pilates is designed to meet you at your current level. Complete beginners are welcome, and a qualified instructor will adapt exercises to your ability rather than expecting a set fitness level from day one.",
      },
      {
        question: "Will my first Pilates class be hard?",
        answer:
          "A well-taught first class should feel challenging but manageable, focused on learning correct movement and breathing rather than intensity. You may feel muscles working that you don't normally notice, but it shouldn't feel overwhelming.",
      },
      {
        question: "How early should I arrive for my first class?",
        answer:
          "Arrive 10 to 15 minutes early to complete a brief health questionnaire and speak with your instructor about any injuries or concerns before the class begins.",
      },
    ],
  },
  "reformer-vs-mat-pilates": {
    slug: "reformer-vs-mat-pilates",
    title: "Reformer vs Mat Pilates: What's the Difference? | Keystone Sports Therapy Grantham",
    headline: "Reformer vs Mat Pilates: What's the Difference?",
    description:
      "Reformer and Mat Pilates both build core strength and posture, but they work differently. Compare equipment, intensity, and cost at our Grantham studio.",
    canonicalPath: "/blog/reformer-vs-mat-pilates",
    ogTitle: "Reformer vs Mat Pilates: What's the Difference?",
    ogDescription:
      "A clear, practical comparison of Reformer and Mat Pilates: equipment, intensity, cost, and who each is best for, from an APPI-qualified instructor in Grantham.",
    author: "Nasreen Alexandra Davison, APPI-qualified Pilates Instructor",
    datePublished: "2026-09-01",
    thumbnail: {
      src: images.reformer,
      alt: "Reformer Pilates studio with Align Pilates equipment in Grantham",
      width: imageDimensions.reformer.width,
      height: imageDimensions.reformer.height,
    },
    quickAnswer:
      'Reformer Pilates uses a spring-loaded machine (the "reformer") to add adjustable resistance and support to each movement. Mat Pilates uses only your body weight, gravity, and small equipment like resistance bands or a Pilates ring, performed on a floor mat. Both build core strength, posture, and control. They just get you there through different tools.',
    toc: [
      { id: "what-is-mat-pilates", label: "What is Mat Pilates?" },
      { id: "what-is-reformer-pilates", label: "What is Reformer Pilates?" },
      { id: "key-differences-at-a-glance", label: "Key differences at a glance" },
      { id: "which-is-better-for-beginners", label: "Which is better for beginners?" },
      {
        id: "which-is-better-for-injury-recovery-or-back-pain",
        label: "Which is better for injury recovery or back pain?",
      },
      { id: "cost-comparison", label: "Cost comparison" },
      { id: "can-you-do-both", label: "Can you do both?" },
      { id: "frequently-asked-questions", label: "Frequently asked questions" },
    ],
    faqs: [
      {
        question: "Is Reformer Pilates better than Mat Pilates?",
        answer:
          "Neither is objectively better. They build the same core principles through different tools. Reformer Pilates uses spring-loaded resistance for adjustable intensity and support, while Mat Pilates uses body weight alone. Many people do both.",
      },
      {
        question: "Which is better for beginners, Reformer or Mat Pilates?",
        answer:
          "Both are suitable for beginners when taught by a qualified instructor. Reformer Pilates can feel more supportive for some people because the machine assists and guides movement, while Mat Pilates relies more on body awareness from the start.",
      },
      {
        question: "Is Reformer Pilates more expensive than Mat Pilates?",
        answer:
          "Generally yes, because Reformer Pilates requires specialist equipment. At Keystone Sports Therapy in Grantham, group Reformer classes start from £20 per session, with an 8-session pass at £150, and private 1:1 Reformer sessions from £65 per hour.",
      },
      {
        question: "Can I do Reformer and Mat Pilates together?",
        answer:
          "Yes. Many clients combine both: Mat Pilates to reinforce body control and core awareness, and Reformer Pilates to add resistance and variety. An instructor can advise on a mix based on your goals.",
      },
    ],
  },
  "pilates-for-lower-back-pain-grantham": {
    slug: "pilates-for-lower-back-pain-grantham",
    title: "Pilates for Lower Back Pain in Grantham | Keystone Sports Therapy",
    headline: "Pilates for Lower Back Pain in Grantham",
    description:
      "Can Pilates help lower back pain? How clinical Pilates supports the spine, what to expect from a session, and how to start safely at our Grantham clinic.",
    canonicalPath: "/blog/pilates-for-lower-back-pain-grantham",
    ogTitle: "Pilates for Lower Back Pain in Grantham",
    ogDescription:
      "How clinical, APPI-qualified Pilates can support lower back pain management, and what a first session looks like at our Grantham clinic.",
    author: "Nasreen Alexandra Davison, APPI-qualified Pilates Instructor",
    datePublished: "2026-09-01",
    thumbnail: {
      src: images.gallery.assessment,
      alt: "Movement and injury assessment at Keystone Sports Therapy clinic, Grantham",
      width: imageDimensions.gallery.assessment.width,
      height: imageDimensions.gallery.assessment.height,
    },
    quickAnswer:
      "Pilates can help some people manage lower back pain by building strength and control in the deep core and postural muscles that support the spine, using slow, controlled movement rather than high-impact exercise. It isn't a guaranteed treatment for every type of back pain, and anyone with a diagnosed condition, recent injury, or acute pain should speak to their GP or a physiotherapist before starting.",
    toc: [
      { id: "how-pilates-relates-to-lower-back-pain", label: "How Pilates relates to lower back pain" },
      {
        id: "why-clinical-appi-qualified-instruction-matters",
        label: "Why clinical, APPI-qualified instruction matters",
      },
      { id: "reformer-or-mat-pilates-for-back-pain", label: "Reformer or Mat Pilates for back pain?" },
      { id: "what-to-expect-in-your-first-session", label: "What to expect in your first session" },
      { id: "when-to-check-with-a-doctor-first", label: "When to check with a doctor first" },
      { id: "getting-started-in-grantham", label: "Getting started in Grantham" },
      { id: "frequently-asked-questions", label: "Frequently asked questions" },
    ],
    faqs: [
      {
        question: "Can Pilates help with lower back pain?",
        answer:
          "For many people, Pilates can help by building strength and control in the deep core and postural muscles that support the spine. It is not a guaranteed fix for every cause of back pain, and anyone with a diagnosed condition or acute injury should check with their GP or physiotherapist before starting.",
      },
      {
        question: "Is Reformer or Mat Pilates better for back pain?",
        answer:
          "Reformer Pilates is often used in clinical settings because spring resistance can be precisely adjusted to support a weak area and increased gradually. Mat Pilates also has genuine value for building core control. The right choice depends on the individual, which is why an assessment with a qualified instructor matters more than the format itself.",
      },
      {
        question: "Is it safe to start Pilates with an existing back problem?",
        answer:
          "It can be, when taught by an appropriately qualified instructor who adapts exercises to your history and current symptoms. At Keystone Sports Therapy in Grantham, sessions are led by an APPI-qualified instructor with a clinical Pilates background.",
      },
      {
        question: "What is APPI-qualified Pilates?",
        answer:
          "APPI (Australian Physiotherapy & Pilates Institute) is a Pilates education provider used widely by NHS professionals and healthcare workers. APPI-qualified instructors are trained to apply Pilates exercises with clinical reasoning, rather than as generic fitness workouts.",
      },
    ],
  },
}

export const blogPostList = Object.values(blogPosts)

export function getBlogPost(slug: BlogPostSlug): BlogPost {
  return blogPosts[slug]
}

export function getBlogPostMetadata(slug: BlogPostSlug): Metadata {
  const post = blogPosts[slug]
  const url = `${siteConfig.url}${post.canonicalPath}`
  const { seo } = siteConfig
  const ogImage = {
    url: seo.ogImage,
    width: seo.ogImageWidth,
    height: seo.ogImageHeight,
    alt: seo.ogImageAlt,
  }

  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: post.canonicalPath },
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      url,
      siteName: siteConfig.shortName,
      locale: "en_GB",
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle,
      description: post.ogDescription,
      images: [ogImage.url],
    },
  }
}

export function getBlogPostUrl(slug: BlogPostSlug): string {
  return `${siteConfig.url}${blogPosts[slug].canonicalPath}`
}
