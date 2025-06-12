"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import StaggerContainer, { staggerItem } from "@/components/stagger-container"

export default function Footer() {
  return (
    <AnimatedSection>
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-light mb-8 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              READY TO BEGIN YOUR JOURNEY?
            </motion.h2>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div variants={staggerItem} className="text-center">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <Mail className="w-6 h-6 mx-auto mb-3 text-gray-300" />
                </motion.div>
                <h4 className="font-medium text-sm mb-2 tracking-wide">EMAIL</h4>
                <p className="text-gray-300 text-sm">hello@kstherapyclinic.com</p>
              </motion.div>

              <motion.div variants={staggerItem} className="text-center">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <MapPin className="w-6 h-6 mx-auto mb-3 text-gray-300" />
                </motion.div>
                <h4 className="font-medium text-sm mb-2 tracking-wide">LOCATION</h4>
                <p className="text-gray-300 text-sm">71 Castlegate, Grantham, NG31 6SQ</p>
              </motion.div>

              <motion.div variants={staggerItem} className="text-center">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <Clock className="w-6 h-6 mx-auto mb-3 text-gray-300" />
                </motion.div>
                <h4 className="font-medium text-sm mb-2 tracking-wide">HOURS</h4>
                <p className="text-gray-300 text-sm">Flexible appointments available</p>
              </motion.div>
            </StaggerContainer>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300">
                  BOOK CONSULTATION
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  )
}
