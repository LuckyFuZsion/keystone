"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

// Utility functions
function quickApply(str, fn, ele, options = {}) {
  const {
    insert = false,
    pos = "afterbegin",
    separator = " ",
    style: { isAnim = false, animName = "anim", styleId = "my-style" } = {},
  } = options
  let data
  if (Array.isArray(str)) {
    data = str
  } else {
    data = str.split(separator)
  }
  if (/\|/.test(str)) data = data.map((s) => s.split("|"))
  const Z = (fn) => data.map(fn).join("")
  if (ele == "style") {
    const existStyle = document.querySelector("style#" + styleId)
    const cssRuleStr = isAnim ? `@keyframes ${animName}{` + Z(fn) + "}" : Z(fn)

    if (existStyle) {
      existStyle.innerHTML += cssRuleStr
    } else {
      const style = document.createElement("style")
      style.id = styleId
      style.innerHTML = cssRuleStr
      document.head.appendChild(style)
    }
  } else {
    if (insert) {
      document.querySelector(ele).insertAdjacentHTML(pos, Z(fn))
    } else {
      document.querySelector(ele).innerHTML = Z(fn)
    }
  }
}

function quickQuery(str, sign = "", separator = " ") {
  return str.split(separator).map((s) => document.querySelector(sign + s))
}

const queryAll = (str, scope = document, separator = " ") => {
  if (!str.includes(separator)) {
    return scope.querySelectorAll(str)
  } else {
    return str.split(separator).map((s) => document.querySelector(s))
  }
}

const activeLink = (str, fn = () => {}) => {
  const list = queryAll(str)
  if (list[0]) {
    list[0].classList.add("active")
    list.forEach(
      (item) =>
        (item.onclick = () => {
          list.forEach((item) => item.classList.remove("active"))
          item.classList.add("active")
          fn()
        }),
    )
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Apply custom styles using quickApply
  useEffect(() => {
    // Create dynamic hover animations for nav links
    quickApply(
      "0% 50% 100%",
      (frame) => `${frame} { transform: translateY(${frame === "50%" ? "-2px" : "0px"}); }`,
      "style",
      {
        style: {
          isAnim: true,
          animName: "navHover",
          styleId: "nav-animations",
        },
      },
    )

    // Create active link styles
    quickApply(
      ".nav-link.active { color: #14b8a6 !important; font-weight: 600; } .nav-link.active::after { width: 100% !important; background: #14b8a6; }",
      (rule) => rule,
      "style",
      {
        style: {
          styleId: "nav-active-styles",
        },
      },
    )

    // Create hover effect styles
    quickApply(
      '.nav-link { position: relative; transition: all 0.3s ease; } .nav-link::after { content: ""; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #14b8a6; transition: width 0.3s ease; } .nav-link:hover::after { width: 100%; } .nav-link:hover { animation: navHover 0.3s ease; }',
      (rule) => rule,
      "style",
      {
        style: {
          styleId: "nav-hover-styles",
        },
      },
    )

    // Apply active link functionality after component mounts
    setTimeout(() => {
      activeLink(".nav-link")
    }, 100)
  }, [])

  // Update active link based on current pathname
  useEffect(() => {
    setTimeout(() => {
      const navLinks = document.querySelectorAll(".nav-link")
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === pathname) {
          link.classList.add("active")
        }
      })
    }, 100)
  }, [pathname])

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  }

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/owner", label: "Owner" },
    { href: "/services", label: "Our Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Customer Reviews" },
    { href: "/book", label: "Book Appointment" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-sm border-b z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo section - hidden on mobile */}
      <div className="container mx-auto px-4 py-6 hidden lg:block">
        <div className="text-center">
          <motion.div
            className="flex items-center justify-center mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="hidden lg:flex items-center justify-center space-x-12 py-4">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className="nav-link text-white hover:text-teal-400 font-medium uppercase tracking-wide text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button with logo */}
          <div className="lg:hidden flex justify-between items-center py-4 px-4">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7324757115_9404d9ed-960c-438d-ada9-e734da33c769-BcpXNSMgOJCsC3SRdl3br0GIKD64pA.png"
                  alt="Keystone Sports Therapy Logo"
                  width={80}
                  height={80}
                  className="filter brightness-0 invert"
                />
              </motion.div>
            </Link>
            <motion.button onClick={toggleMenu} className="p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden overflow-hidden bg-gray-900 border-t border-gray-700"
              >
                <div className="py-4 space-y-4">
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <Link
                        href={link.href}
                        className={`nav-link block text-white hover:text-teal-400 font-medium uppercase tracking-wide text-sm py-2 transition-colors duration-200 ${
                          pathname === link.href ? "active" : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}
