"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  title: string
  description: string
}

const BeforeAfterSlider = ({ beforeImage, afterImage, title, description }: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const newPosition = ((clientX - containerRect.left) / containerRect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  const stopDragging = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("mouseup", stopDragging)
      window.addEventListener("touchend", stopDragging)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mouseup", stopDragging)
      window.removeEventListener("touchend", stopDragging)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mouseup", stopDragging)
      window.removeEventListener("touchend", stopDragging)
    }
  }, [isDragging])

  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardContent className="p-0">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div ref={containerRef} className="before-after-slider relative h-[300px] md:h-[400px]">
          {/* Before Image (Full width) */}
          <img
            src={beforeImage || "/placeholder.svg?height=600&width=800"}
            alt="Before restoration"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* After Image (Partial width based on slider) */}
          <div className="after absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
            <img
              src={afterImage || "/placeholder.svg?height=600&width=800"}
              alt="After restoration"
              className="absolute top-0 left-0 w-[100vw] max-w-none h-full object-cover"
              style={{
                width: `${100 / (sliderPosition / 100)}%`,
                maxWidth: "none",
              }}
            />
          </div>

          {/* Slider Control */}
          <div
            ref={sliderRef}
            className="slider absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary">
              <div className="flex items-center justify-center">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">Before</div>
          <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">After</div>
        </div>
      </CardContent>
    </Card>
  )
}

const BeforeAfterSection = () => {
  const projects = [
    {
      beforeImage: "/placeholder.svg?height=600&width=800",
      afterImage: "/placeholder.svg?height=600&width=800",
      title: "Water Damage Restoration",
      description: "Basement flood recovery in a residential home in Toronto.",
    },
    {
      beforeImage: "/placeholder.svg?height=600&width=800",
      afterImage: "/placeholder.svg?height=600&width=800",
      title: "Fire Damage Restoration",
      description: "Kitchen fire restoration in a family home in Vancouver.",
    },
    {
      beforeImage: "/placeholder.svg?height=600&width=800",
      afterImage: "/placeholder.svg?height=600&width=800",
      title: "Mold Remediation",
      description: "Bathroom mold removal and restoration in Montreal.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the difference our restoration services make with these before and after transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                title={project.title}
                description={project.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterSection
