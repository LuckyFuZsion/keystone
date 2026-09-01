import { siteConfig } from "@/lib/site"

export const homeFaqs = [
  {
    question: "Where are your Pilates classes in Grantham?",
    answer: `Our clinic is at ${siteConfig.address.full}, in the centre of Grantham. We welcome clients from Barrowby, Great Gonerby, Manthorpe, Harlaxton, and surrounding villages.`,
  },
  {
    question: "Do you offer Reformer Pilates in Grantham?",
    answer:
      "Yes. We offer Reformer Pilates on Align Pilates equipment, including 1:1 sessions, duet sessions, and small group classes limited to five people per class.",
  },
  {
    question: "Is Pilates suitable for beginners?",
    answer:
      "Absolutely. Our APPI-qualified instructor tailors every session to your ability. Complete beginners are welcome at our Grantham clinic.",
  },
  {
    question: "How do I book a class or treatment?",
    answer: `Book online at ${siteConfig.bookwhenUrl}, email ${siteConfig.email}, or call ${siteConfig.phone}.`,
  },
  {
    question: "What other services do you offer besides Pilates?",
    answer:
      "Alongside Reformer and Mat Pilates, we offer sports massage therapy, personal training, nutrition advice, and rehabilitation programmes at our Castlegate clinic.",
  },
] as const

export const homeServicesList = [
  "Reformer Pilates (group, 1:1, and duet sessions)",
  "Mat Pilates classes",
  "Sports massage and remedial therapy",
  "Personal training and strength coaching",
  "Clinical rehabilitation and injury recovery support",
] as const
