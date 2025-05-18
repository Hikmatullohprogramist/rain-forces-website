"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import ResponsiveImage from "@/components/ui/responsive-image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6 h-14 w-auto relative bg-white/10 px-2 py-1 rounded-md inline-block">
              <ResponsiveImage
                src="/images/rainforces-logo-transparent.png"
                alt="RainForces - The Restoration Specialists"
                width={220}
                height={56}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Professional construction and restoration services for residential and commercial properties. Serving
              Ontario since 2007.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/construction" className="text-gray-400 hover:text-white transition-colors">
                  General Construction
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="text-gray-400 hover:text-white transition-colors">
                  Renovation & Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services/restoration" className="text-gray-400 hover:text-white transition-colors">
                  Building Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/water-damage" className="text-gray-400 hover:text-white transition-colors">
                  Water Damage Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/fire-damage" className="text-gray-400 hover:text-white transition-colors">
                  Fire Damage Repair
                </Link>
              </li>
              <li>
                <Link href="/services/mold-remediation" className="text-gray-400 hover:text-white transition-colors">
                  Mold Remediation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a href="tel:1-800-555-0000" className="text-gray-400 hover:text-white transition-colors">
                    1-800-555-0000
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a href="mailto:info@rainforces.com" className="text-gray-400 hover:text-white transition-colors">
                    info@rainforces.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Visit Us</p>
                  <address className="text-gray-400 not-italic">123 Construction Ave, Toronto, ON M5V 2K4</address>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <p className="text-gray-400">Mon-Fri: 8AM-6PM</p>
                  <p className="text-gray-400">24/7 Emergency Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ready to start your project?</h3>
            <p className="text-gray-400">Contact us today for a free consultation and quote.</p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} RainForces Construction & Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
