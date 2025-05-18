"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveImage from "@/components/ui/responsive-image"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  imageSrc?: string
  isHovered?: boolean
}

const ServiceCard = ({ icon, title, description, link, imageSrc, isHovered = false }: ServiceCardProps) => {
  const [internalHover, setInternalHover] = useState(false)
  const isHoveredState = isHovered || internalHover

  return (
    <Card
      className="border-none h-full transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
    >
      {/* Image Section */}
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <ResponsiveImage
            src={imageSrc}
            alt={title}
            fill
            className={`transition-transform duration-500 ${isHoveredState ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      )}

      <CardContent className={`p-6 text-center h-full flex flex-col ${!imageSrc ? "pt-8" : ""}`}>
        {!imageSrc && (
          <>
            <motion.div
              className="flex justify-center mb-6"
              animate={isHoveredState ? { y: [0, -8, 0], transition: { duration: 0.5 } } : {}}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
          </>
        )}

        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        <Link
          href={link}
          className="text-primary font-medium inline-flex items-center hover:text-primary-600 transition-colors group"
        >
          Learn More
          <motion.div
            animate={
              isHoveredState ? { x: [0, 5, 0], transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 } } : {}
            }
          >
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </Link>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
