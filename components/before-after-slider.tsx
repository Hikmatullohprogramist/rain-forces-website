"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ResponsiveImage from "@/components/ui/responsive-image"
import { getBeforeAfterImages } from "@/lib/image-utils"

export default function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const beforeAfterProjects = getBeforeAfterImages()

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? beforeAfterProjects.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === beforeAfterProjects.length - 1 ? 0 : prevIndex + 1))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const touch = e.touches[0]
      const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width))
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [])

  const currentProject = beforeAfterProjects[currentIndex]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">TRANSFORMATIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Before & After</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic transformations we've achieved for our clients through our construction and restoration
            services.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div
              ref={sliderRef}
              className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden cursor-ew-resize shadow-xl"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchStart={handleMouseDown}
              onTouchMove={handleTouchMove}
            >
              {/* Before Image */}
              <div className="absolute inset-0 z-10">
                <ResponsiveImage src={currentProject.before} alt={`Before: ${currentProject.title}`} fill priority />
              </div>

              {/* After Image (clipped) */}
              <div
                className="absolute inset-0 z-20"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <ResponsiveImage src={currentProject.after} alt={`After: ${currentProject.title}`} fill priority />
              </div>

              {/* Slider Control */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white z-30 cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="flex items-center justify-center">
                    <ChevronLeft className="h-4 w-4 text-gray-600" />
                    <ChevronRight className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-40">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm z-40">
                After
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
            <p className="text-gray-600 mb-6">{currentProject.description}</p>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300"
                onClick={handlePrev}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300"
                onClick={handleNext}
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
