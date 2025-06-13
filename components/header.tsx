"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7324757115_9404d9ed-960c-438d-ada9-e734da33c769-BcpXNSMgOJCsC3SRdl3br0GIKD64pA.png"
              alt="Keystone Sports Therapy Logo - Teal diamond with white K"
              width={162}
              height={162}
              className="filter brightness-0 invert"
            />
          </motion.div>
        </Link>

        {/* Mobile Logo */}
        <Link href="/" className="md:hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7324757115_9404d9ed-960c-438d-ada9-e734da33c769-BcpXNSMgOJCsC3SRdl3br0GIKD64pA.png"
            alt="Keystone Sports Therapy Logo"
            width={80}
            height={80}
            priority
            className="filter brightness-0 invert"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button (Hamburger Icon) - Implement functionality with JavaScript */}
        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
