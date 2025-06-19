"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import StaggerContainer, { staggerItem } from "@/components/stagger-container"

export default function GalleryPage() {
  const galleryItems = [
    {
      src: "/images/sports_massage.png",
      alt: "Sports Massage Therapy",
      title: "Sports Massage Therapy",
      description: "Professional sports massage and rehabilitation",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3300927_eeb190fd-338b-479b-a3e6-da262a248950-aadef4dc-c1bfac1c-10e999d1-79991ee2-33e6cb56-f95d5c92-af98378b-11a25a12.jpg-yLKAKEqFAF45G1QdG2e66KJEDhkFxR.jpeg",
      alt: "Cupping Therapy",
      title: "Cupping Therapy",
      description: "Traditional cupping therapy for muscle recovery",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3300927_839c4e14-e0ca-4fb5-9a1c-e4b63ecb49a3-806a6a75-1920w.jpg-d9K0zddKsbf2lIjZO6TCc9ijsJNuka.jpeg",
      alt: "Group Fitness Class",
      title: "Group Fitness Classes",
      description: "Energizing group sessions in our modern studio",
    },
    {
      src: "/images/personal_training.png",
      alt: "Personal Training",
      title: "Personal Training",
      description: "Customised fitness programmes and coaching",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3300927_64a2fd66-132d-4230-9b15-99f4485af97e-3d940cc4-a097ea1a-7a32b3c0-5c43e274-cefb1dba.jpg-HkNwzybdVD4TK59lGq1THJlgTHhKUg.jpeg",
      alt: "Rehabilitation Equipment",
      title: "Rehabilitation Equipment",
      description: "Professional equipment for injury recovery",
    },
    {
      src: "/images/reformer.png",
      alt: "Reformer Pilates",
      title: "Reformer Pilates Studio",
      description: "State-of-the-art Align Pilates equipment",
    },
    {
      src: "/images/mat_based_pilates.png",
      alt: "Mat Based Pilates",
      title: "Mat Based Pilates",
      description: "APPI qualified Pilates instruction",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3300927_60e6a4f2-6392-40a2-b567-3afee8ab75fa-ffec25d7-1000h.jpg-maSh7ppc9QvI4o4lGaRQpUwZnbxwOX.jpeg",
      alt: "Cupping Therapy on Legs",
      title: "Specialized Cupping",
      description: "Targeted cupping therapy for lower body",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3300927_8dd9049e-cd0d-4a4e-84f1-8769b5963af4-551e5e46-7216c8b1-fe9609f3-edd30bbf-0f6d2687.jpg-beCCKBKaabBNYWcWRsb2qTryXTQiI7.jpeg",
      alt: "Biomechanical Assessment",
      title: "Assessment & Analysis",
      description: "Comprehensive movement and injury assessment",
    },
    {
      src: "/images/nutrition_advice.png",
      alt: "Nutrition Advice",
      title: "Nutrition Consultation",
      description: "Personalized nutrition guidance and meal planning",
    },
    {
      src: "/images/b12_injections.png",
      alt: "B12 Injections",
      title: "B12 Injections",
      description: "Vitamin B12 injections for energy and wellness",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
              <p className="text-xl text-gray-600">Take a look at our facilities and services</p>
            </motion.div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                  <motion.div
                    className="p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
