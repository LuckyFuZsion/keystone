"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import StaggerContainer, { staggerItem } from "@/components/stagger-container"
import { images, imageSizes } from "@/lib/images"

export default function GalleryPage() {
  const galleryItems = [
    {
      src: images.sportsMassage,
      alt: "Sports Massage Therapy",
      title: "Sports Massage Therapy",
      description: "Professional sports massage and rehabilitation",
    },
    {
      src: images.gallery.cupping,
      alt: "Cupping Therapy",
      title: "Cupping Therapy",
      description: "Traditional cupping therapy for muscle recovery",
    },
    {
      src: images.gallery.groupFitness,
      alt: "Group Fitness Class",
      title: "Group Fitness Classes",
      description: "Energizing group sessions in our modern studio",
    },
    {
      src: images.personalTraining,
      alt: "Personal Training",
      title: "Personal Training",
      description: "Customised fitness programmes and coaching",
    },
    {
      src: images.gallery.rehabEquipment,
      alt: "Rehabilitation Equipment",
      title: "Rehabilitation Equipment",
      description: "Professional equipment for injury recovery",
    },
    {
      src: images.reformer,
      alt: "Reformer Pilates",
      title: "Reformer Pilates Studio",
      description: "State-of-the-art Align Pilates equipment",
    },
    {
      src: images.matPilates,
      alt: "Mat Based Pilates",
      title: "Mat Based Pilates",
      description: "APPI qualified Pilates instruction",
    },
    {
      src: images.gallery.cuppingLegs,
      alt: "Cupping Therapy on Legs",
      title: "Specialized Cupping",
      description: "Targeted cupping therapy for lower body",
    },
    {
      src: images.gallery.assessment,
      alt: "Biomechanical Assessment",
      title: "Assessment & Analysis",
      description: "Comprehensive movement and injury assessment",
    },
    {
      src: images.nutritionAdvice,
      alt: "Nutrition Advice",
      title: "Nutrition Consultation",
      description: "Personalized nutrition guidance and meal planning",
    },
    {
      src: images.b12Injections,
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
                      sizes={imageSizes.gallery}
                      loading="lazy"
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
