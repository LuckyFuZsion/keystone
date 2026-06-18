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
    title: "Pilates & Sports Therapy in Grantham | Keystone Clinic",
    description:
      "Reformer & Mat Pilates in Grantham. APPI-qualified classes at our Castlegate clinic. Sports therapy and personal training. Book online.",
    ogTitle: "Pilates Grantham | Reformer & Mat Pilates",
    ogDescription:
      "Expert Reformer and Mat Pilates in Grantham. APPI-qualified instruction at our Castlegate clinic. Beginners welcome — book online.",
    ogImage: "/og-image.png",
    ogImageWidth: 750,
    ogImageHeight: 394,
    ogImageAlt: "Keystone Sports Therapy — Pilates and sports therapy in Grantham",
    twitterTitle: "Pilates Grantham | Keystone Sports Therapy",
    twitterDescription:
      "Reformer & Mat Pilates in Grantham. APPI-qualified classes at our Castlegate clinic. Book your session online.",
    pageTitles: {
      gallery: "Sports Therapy & Pilates Gallery in Grantham",
      contact: "Contact Keystone Sports Therapy — Grantham Clinic",
      services: "Sports Therapy & Pilates Services in Grantham",
      book: "Book Sports Therapy & Pilates Online — Grantham",
      reviews: "Client Reviews — Keystone Sports Therapy Grantham",
      privacy: "Privacy Policy — Keystone Sports Therapy Grantham",
      pilates: "Reformer & Mat Pilates Classes — Grantham Clinic",
      owner: "About Nasreen Davison — APPI Instructor Grantham",
      features: "Keystone Sports — Special Features in Grantham",
      holidays: "Opening Hours & Holiday Schedule — Grantham",
      newPatient: "Patient Intake — Keystone Sports Therapy Grantham",
    },
  },
} as const

// Legacy alias for metadata description
export const siteDescription = siteConfig.seo.description
