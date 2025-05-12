"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 dark:bg-gray-900/85 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 py-2 mx-4 md:mx-6 lg:mx-8 mt-2 rounded-full shadow-lg"
          : "bg-black/20 backdrop-blur-sm py-4 mt-2 mx-4 md:mx-6 lg:mx-8 rounded-full"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900 dark:text-blue-400">
              Rain<span className="text-gray-800 dark:text-gray-200">Forest</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-6"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-3 py-2 rounded-full transition-all duration-300 font-medium ${
                activeLink === link.href
                  ? "text-blue-900 dark:text-blue-400 bg-white/90 dark:bg-gray-800/90 shadow-sm"
                  : isScrolled
                    ? "text-gray-800 dark:text-gray-100 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-blue-900 dark:hover:text-blue-400"
                    : "text-white hover:bg-white/20 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 ml-2">
              Get a Quote
            </Button>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`md:hidden focus:outline-none p-2 rounded-full ${
            isScrolled ? "text-gray-800 dark:text-white bg-gray-100/50 dark:bg-gray-800/50" : "text-white bg-white/20"
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border border-gray-200/20 dark:border-gray-700/20 mx-4 mt-2 rounded-2xl"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                    activeLink === link.href
                      ? "text-blue-900 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-blue-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
              className="pt-2"
            >
              <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-full w-full shadow-md hover:shadow-lg transition-all duration-300">
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
