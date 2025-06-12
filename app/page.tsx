"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import StaggerContainer, { staggerItem } from "@/components/stagger-container"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Welcome Section - Only visible on mobile */}
      <section className="py-8 bg-gray-50 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-xl font-light text-gray-900 mb-4 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                WELCOME TO KEYSTONE SPORTS THERAPY
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed text-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                From sports massage to personal training, we offer a wide range of options including Mat Pilates,
                Reformer Pilates, Nutrition Advice and Rehabilitation. At Keystone Sports Therapy Grantham, we welcome
                all levels so whether you're a complete beginner or have been practicing regularly, we offer treatments
                to suit your particular needs.
              </motion.p>
              <motion.p
                className="text-gray-600 leading-relaxed text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our experienced therapist Nasreen brings over 10 years of expertise in sports therapy, personal
                training, and clinical Pilates instruction to help you achieve your health and fitness goals.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Hero Section with Service Images */}
      <section className="relative pt-8 pb-0 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Images Grid */}
            <StaggerContainer className="grid md:grid-cols-3 gap-0 mb-12">
              {/* Sports Massage */}
              <motion.div
                variants={staggerItem}
                className="relative h-80 md:h-96 overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3300927_513eebfd-00c1-45ce-b5a4-5fedaa085874-01fdb51d-a1138f65-60589cc5-046f2d0b-d5589021-632f65d8-8599bf4e-bd729e50.jpg-d4AjWFatn3d7rx6AaNu6YmflahSPdz.jpeg"
                  alt="Sports Massage Therapy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-sm font-medium text-gray-900 tracking-wide">SPORTS MASSAGE</span>
                </motion.div>
              </motion.div>

              {/* Personal Training */}
              <motion.div
                variants={staggerItem}
                className="relative h-80 md:h-96 overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/personal_training.png"
                  alt="Personal Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-sm font-medium text-gray-900 tracking-wide">PERSONAL TRAINING</span>
                </motion.div>
              </motion.div>

              {/* Reformer Pilates */}
              <motion.div
                variants={staggerItem}
                className="relative h-80 md:h-96 overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/reformer.png"
                  alt="Reformer Pilates"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-sm font-medium text-gray-900 tracking-wide">REFORMER PILATES</span>
                </motion.div>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Welcome Section - Mobile First */}
      <AnimatedSection className="">
        <section className="py-8 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                {/* Welcome Text */}
                <motion.div
                  className="lg:col-span-2 order-1 hidden lg:block"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h2
                    className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-900 mb-4 lg:mb-6 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    WELCOME TO KEYSTONE SPORTS THERAPY
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 leading-relaxed text-sm lg:text-base mb-4 lg:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    From sports massage to personal training, we offer a wide range of options including Mat Pilates,
                    Reformer Pilates, Nutrition Advice and Rehabilitation. At Keystone Sports Therapy Grantham, we
                    welcome all levels so whether you're a complete beginner or have been practicing regularly, we offer
                    treatments to suit your particular needs.
                  </motion.p>
                  <motion.p
                    className="text-gray-600 leading-relaxed text-sm lg:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Our experienced therapist Nasreen brings over 10 years of expertise in sports therapy, personal
                    training, and clinical Pilates instruction to help you achieve your health and fitness goals.
                  </motion.p>
                </motion.div>

                {/* Intro Offer Card */}
                <motion.div
                  className="bg-gray-100 p-6 lg:p-8 text-center order-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.h3
                    className="text-lg lg:text-xl font-light text-gray-900 mb-2 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    OUR SERVICES
                  </motion.h3>
                  <motion.div
                    className="text-base lg:text-lg text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    EXPLORE OUR RANGE
                  </motion.div>
                  <motion.p
                    className="text-xs lg:text-sm text-gray-600 mb-6 uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    PROFESSIONAL TREATMENTS
                  </motion.p>
                  <Link href="/services">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="border-2 border-gray-900 text-white bg-gray-900 hover:bg-gray-700 px-6 lg:px-8 py-2 lg:py-3 text-xs lg:text-sm font-medium tracking-wide transition-all duration-300">
                        VIEW SERVICES
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">OUR CORE SERVICES</h2>
                <motion.div
                  className="w-24 h-px bg-gray-300 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              {/* Services Carousel */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-8"
                  animate={{
                    x: [0, -100 * 5], // Adjusted to match exact number of services
                  }}
                  transition={{
                    duration: 30, // Increased duration for smoother movement
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "linear",
                    repeatDelay: 0, // Ensure no delay between loops
                  }}
                  style={{ 
                    width: "calc(400px * 10)", // Adjusted width for smoother transition
                    willChange: "transform" // Optimize for animation performance
                  }}
                >
                  {/* First set of services */}
                  {[
                    {
                      src: "/images/sports_massage.png",
                      title: "SPORTS MASSAGE THERAPY",
                      description:
                        "Professional sports massage with comprehensive assessment including dry needling and cupping therapy.",
                      price: "From £40",
                      color: "teal",
                    },
                    {
                      src: "/images/personal_training.png",
                      title: "PERSONAL TRAINING",
                      description:
                        "Customized training programs with flexible packages designed to meet your individual fitness goals.",
                      price: "From £50",
                      color: "blue",
                    },
                    {
                      src: "/images/reformer.png",
                      title: "REFORMER PILATES",
                      description:
                        "Premium Reformer Pilates using state-of-the-art Align Pilates equipment at our Grantham clinic.",
                      price: "From £65",
                      color: "purple",
                    },
                    {
                      src: "/images/nutrition_advice.png",
                      title: "NUTRITION ADVICE",
                      description:
                        "Personalized nutrition guidance and meal planning with comprehensive dietary education.",
                      price: "From £60",
                      color: "orange",
                    },
                    {
                      src: "/images/b12_injections.png",
                      title: "B12 INJECTIONS",
                      description:
                        "Vitamin B12 injections for energy and wellness with immune system support benefits.",
                      price: "From £30",
                      color: "red",
                    },
                  ]
                    .concat([
                      {
                        src: "/images/sports_massage.png",
                        title: "SPORTS MASSAGE THERAPY",
                        description:
                          "Professional sports massage with comprehensive assessment including dry needling and cupping therapy.",
                        price: "From £40",
                        color: "teal",
                      },
                      {
                        src: "/images/personal_training.png",
                        title: "PERSONAL TRAINING",
                        description:
                          "Customized training programs with flexible packages designed to meet your individual fitness goals.",
                        price: "From £50",
                        color: "blue",
                      },
                      {
                        src: "/images/reformer.png",
                        title: "REFORMER PILATES",
                        description:
                          "Premium Reformer Pilates using state-of-the-art Align Pilates equipment at our Grantham clinic.",
                        price: "From £65",
                        color: "purple",
                      },
                      {
                        src: "/images/nutrition_advice.png",
                        title: "NUTRITION ADVICE",
                        description:
                          "Personalized nutrition guidance and meal planning with comprehensive dietary education.",
                        price: "From £60",
                        color: "orange",
                      },
                      {
                        src: "/images/b12_injections.png",
                        title: "B12 INJECTIONS",
                        description:
                          "Vitamin B12 injections for energy and wellness with immune system support benefits.",
                        price: "From £30",
                        color: "red",
                      },
                    ])
                    .map((service, index) => (
                      <motion.div
                        key={index}
                        className="flex-shrink-0 w-80"
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.3 }}
                        style={{ 
                          willChange: "transform", // Optimize hover animation
                          backfaceVisibility: "hidden" // Prevent flickering
                        }}
                      >
                        <div className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden h-full">
                          <motion.div
                            className="relative h-48 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={service.src || "/placeholder.svg"}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                          </motion.div>
                          <div className="p-6 text-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                            <div className="text-xl font-light text-gray-900 mb-4">{service.price}</div>
                            <Link href="/services">
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className={`border border-${service.color}-300 text-${service.color}-700 hover:border-${service.color}-600 hover:text-${service.color}-900 text-xs tracking-wide`}
                                >
                                  LEARN MORE
                                </Button>
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1, 2, 3, 4].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300"
                    animate={{
                      backgroundColor: ["#d1d5db", "#0d9488", "#d1d5db"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: (index * 20) / 5,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Studio Experience Section */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Studio Images */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="relative h-48 overflow-hidden rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/images/mat_based_pilates.png"
                      alt="Mat Pilates Studio"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.div
                    className="relative h-48 overflow-hidden rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/images/nutrition_advice.png"
                      alt="Nutrition Consultation"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </motion.div>

                {/* Experience Text */}
                <motion.div
                  className="bg-white p-8 border border-gray-200"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.h3
                    className="text-xl font-light text-gray-900 mb-4 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    EXPERIENCE INSTANT <em className="font-medium">REJUVENATION</em> THE MOMENT YOU WALK THROUGH OUR
                    DOORS.
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 leading-relaxed text-sm mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Our professional clinic space is modern and welcoming, providing the perfect environment to focus on
                    your health and wellness journey. Located in the heart of Grantham, we offer a tranquil space to
                    practice all forms of therapeutic treatment.
                  </motion.p>
                  <Link href="/gallery">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 text-xs tracking-wide"
                      >
                        VIEW GALLERY
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
