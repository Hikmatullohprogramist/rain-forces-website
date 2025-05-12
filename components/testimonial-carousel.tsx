"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "John Smith",
    position: "Property Manager",
    company: "Skyline Properties",
    content:
      "RainForces did an exceptional job restoring our commercial building. Their attention to detail and commitment to quality was impressive. The project was completed on time and within budget.",
  },
  {
    name: "Sarah Johnson",
    position: "Homeowner",
    company: "Residential Client",
    content:
      "We hired RainForces for our home renovation project and couldn't be happier with the results. The team was professional, courteous, and the quality of work exceeded our expectations.",
  },
  {
    name: "Michael Brown",
    position: "Facilities Director",
    company: "Ontario Business Center",
    content:
      "The team at RainForces provided excellent service during our building rehabilitation project. Their expertise and professionalism made the entire process smooth and stress-free.",
  },
]

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      next()
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, autoplay])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  if (prefersReducedMotion) {
    return (
      <div className="relative max-w-4xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardContent className="p-8 md:p-12">
            <Quote className="h-12 w-12 text-blue-200 mb-6" />
            <p className="text-lg md:text-xl text-gray-700 mb-8 italic">"{testimonials[current].content}"</p>
            <div>
              <h4 className="text-lg font-bold text-gray-900">{testimonials[current].name}</h4>
              <p className="text-gray-600">
                {testimonials[current].position}, {testimonials[current].company}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-blue-900" : "bg-gray-300"}`}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 md:p-12">
                <Quote className="h-12 w-12 text-blue-200 mb-6" />
                <p className="text-lg md:text-xl text-gray-700 mb-8 italic">"{testimonials[current].content}"</p>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[current].name}</h4>
                  <p className="text-gray-600">
                    {testimonials[current].position}, {testimonials[current].company}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-blue-900" : "bg-gray-300"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white rounded-full p-2 shadow-lg text-gray-700 hover:text-blue-900 transition-colors focus:outline-none hidden md:block"
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white rounded-full p-2 shadow-lg text-gray-700 hover:text-blue-900 transition-colors focus:outline-none hidden md:block"
        onClick={() => {
          next()
          setAutoplay(false)
        }}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>
    </div>
  )
}

export default TestimonialCarousel
