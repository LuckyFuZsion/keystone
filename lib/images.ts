export const images = {
  logo: "/images/logo.webp",
  sportsMassageHero: "/images/sports_massage_hero.webp",
  owner: "/images/owner.webp",
  sportsMassage: "/images/sports_massage.webp",
  personalTraining: "/images/personal_training.webp",
  reformer: "/images/reformer.webp",
  matPilates: "/images/mat_based_pilates.webp",
  nutritionAdvice: "/images/nutrition_advice.webp",
  b12Injections: "/images/b12_injections.webp",
  gallery: {
    cupping: "/images/gallery/cupping.webp",
    groupFitness: "/images/gallery/group_fitness.webp",
    rehabEquipment: "/images/gallery/rehab_equipment.webp",
    cuppingLegs: "/images/gallery/cupping_legs.webp",
    assessment: "/images/gallery/assessment.webp",
  },
} as const

export const imageDimensions = {
  logo: { width: 300, height: 173 },
  sportsMassageHero: { width: 890, height: 900 },
  personalTraining: { width: 1000, height: 1333 },
  reformer: { width: 1044, height: 1160 },
  matPilates: { width: 827, height: 1364 },
  nutritionAdvice: { width: 640, height: 1015 },
  sportsMassage: { width: 640, height: 480 },
  b12Injections: { width: 640, height: 480 },
  owner: { width: 400, height: 500 },
  gallery: {
    cupping: { width: 1200, height: 900 },
    groupFitness: { width: 828, height: 1792 },
    rehabEquipment: { width: 1200, height: 1120 },
    cuppingLegs: { width: 563, height: 1000 },
    assessment: { width: 1200, height: 1600 },
  },
} as const

export const imageSizes = {
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px",
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px",
  gallery: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px",
  studio: "(max-width: 768px) 50vw, 300px",
  logoDesktop: "162px",
  logoMobile: "80px",
} as const

/** Absolute URL for schema.org and Open Graph */
export function absoluteImageUrl(path: string, siteUrl: string) {
  return `${siteUrl}${path}`
}
