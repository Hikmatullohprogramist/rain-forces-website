import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to restore your property?</h3>
              <p className="text-gray-400">Contact us today for a free consultation and quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-600 text-white">Get a Free Quote</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-2-5269349836656865600-x.jpg-mOZzZST9XMlqAXHuqxoxoXXvt4ww1g.jpeg"
                alt="RainForces Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Professional restoration services for water damage, fire damage, mold remediation, and more. Available
              24/7 for emergency response.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/#services" },
                { name: "Projects", href: "/projects" },
                { name: "Testimonials", href: "/#testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Water Damage Restoration", href: "/services/water-damage" },
                { name: "Fire Damage Restoration", href: "/services/fire-damage" },
                { name: "Mold Remediation", href: "/services/mold-remediation" },
                { name: "Storm Damage Repair", href: "/services/storm-damage" },
                { name: "Biohazard Cleanup", href: "/services/biohazard-cleanup" },
                { name: "Reconstruction Services", href: "/services/reconstruction" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-primary flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Restoration Ave, Suite 100
                  <br />
                  Toronto, ON M5V 2K6
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:1-800-555-0000" className="text-gray-400 hover:text-primary">
                  1-800-555-0000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@rainforces.com" className="text-gray-400 hover:text-primary">
                  info@rainforces.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p className="text-secondary font-medium">24/7 Emergency Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} RainForces Restoration. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
