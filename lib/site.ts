export const siteConfig = {
  name: "Keystone Sports Therapy Clinic & Reformer Pilates",
  shortName: "Keystone Sports Therapy",
  url: "https://www.kstherapyclinic.com",
  email: "hello@kstherapyclinic.com",
  phone: "07398 989425",
  phoneTel: "+447398989425",
  address: {
    street: "71 Castlegate",
    city: "Grantham",
    postcode: "NG31 6SQ",
    country: "GB",
    full: "71 Castlegate, Grantham, NG31 6SQ",
  },
  geo: {
    latitude: 52.9142,
    longitude: -0.6419,
  },
  social: {
    facebook: "https://facebook.com/Keystonesportstherapy",
    instagram: "https://instagram.com/keystone_sports_therapY",
  },
  bookwhenUrl: "https://bookwhen.com/keystone",
  seo: {
    title: "Pilates Grantham | Reformer & Mat | Keystone",
    description:
      "Reformer & Mat Pilates in Grantham. APPI-qualified classes at our Castlegate clinic. Sports therapy and personal training. Book online.",
    ogTitle: "Pilates Grantham | Reformer & Mat Pilates",
    ogDescription:
      "Expert Reformer and Mat Pilates in Grantham. APPI-qualified instruction at our Castlegate clinic. Beginners welcome — book online.",
    ogImage: "/android-chrome-512x512.png",
    twitterTitle: "Pilates Grantham | Keystone Sports Therapy",
    twitterDescription:
      "Reformer & Mat Pilates in Grantham. APPI-qualified classes at our Castlegate clinic. Book your session online.",
  },
} as const

// Legacy alias for metadata description
export const siteDescription = siteConfig.seo.description
