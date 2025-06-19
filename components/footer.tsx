"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import StaggerContainer, { staggerItem } from "@/components/stagger-container"
import Image from "next/image"

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

            {/* Social Media Links */}
            <motion.div
              className="flex justify-center items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="https://facebook.com/Keystonesportstherapy" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </motion.div>
              </Link>
              
              <Link href="https://instagram.com/keystone_sports_therapY" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </motion.div>
              </Link>
            </motion.div>

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

            {/* WebFuzsion Credit */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col items-center gap-2">
                <p className="text-gray-400 text-xs mb-2">Website designed by</p>
                <Link href="https://webfuzsion.co.uk" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all duration-300"
                  >
                    <Image
                      src="https://www.jammmyslots.com/webfuzsion-logo-optimized.png"
                      alt="WebFuzsion - Web Design Studio"
                      width={120}
                      height={40}
                      className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  )
}
