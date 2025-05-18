"use client"

import { motion } from "framer-motion"
import ResponsiveImage from "@/components/ui/responsive-image"

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  overlayColor?: string
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=600&width=1200",
  overlayColor = "from-primary/80 to-gray-900/80",
}: PageBannerProps) {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ResponsiveImage src={backgroundImage} alt={title} fill priority className="object-cover" />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
