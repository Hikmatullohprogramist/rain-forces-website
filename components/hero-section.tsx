"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { assetImages } from "@/lib/image-utils"
import ResponsiveImage from "@/components/ui/responsive-image"

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const bannerImages = Object.values(assetImages.banners)

  // Auto-rotate banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [bannerImages.length])

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <ResponsiveImage
              src={image}
              alt={`RainForces Construction - Banner ${index + 1}`}
              fill
              priority={index === 0}
              className="z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            General conducting & Professional construction
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Delivering comprehensive construction and restoration solutions including general contracting, building
            rehabilitation, and specialized disaster recovery services for residential and commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white rounded-full px-8 text-lg">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-full px-8 text-lg"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? "bg-primary scale-110" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
