"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-2-5269349836656865600-x.jpg-mOZzZST9XMlqAXHuqxoxoXXvt4ww1g.jpeg"
              alt="RainForces Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Emergency Contact */}
          <div className="hidden lg:flex items-center mr-8">
            <div className="bg-secondary rounded-full p-2 mr-3">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">24/7 Emergency Service</p>
              <a href="tel:1-800-555-0000" className="text-lg font-bold text-primary hover:text-primary-600">
                1-800-555-0000
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-gray-800" : "text-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-secondary hover:bg-secondary-600 text-white rounded-md">Get a Quote</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-800 font-medium hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center py-2">
                  <div className="bg-secondary rounded-full p-2 mr-3">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">24/7 Emergency</p>
                    <a href="tel:1-800-555-0000" className="text-lg font-bold text-primary">
                      1-800-555-0000
                    </a>
                  </div>
                </div>
                <Button className="bg-secondary hover:bg-secondary-600 text-white w-full">Get a Quote</Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
