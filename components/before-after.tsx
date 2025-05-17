"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  title: string
  description: string
}

const BeforeAfterSlider = ({ beforeImage, afterImage, title, description }: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100

      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const newPosition = ((e.touches[0].clientX - containerRect.left) / containerRect.width) * 100

      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }

    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleTouchEnd)
  }

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
            src={beforeImage || "/placeholder.svg"}
            alt="Before restoration"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* After Image (Partial width based on slider) */}
          <div className="after absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
            <img
              src={afterImage || "/placeholder.svg"}
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
            className="slider"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-500">
              <div className="flex items-center justify-center">
                <div className="w-1 h-8 bg-primary-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">Before</div>
          <div className="absolute bottom-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
            After
          </div>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the difference our restoration services make with these before and after transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterSection
