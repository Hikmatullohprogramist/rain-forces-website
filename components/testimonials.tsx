"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "RainForces responded quickly to our water damage emergency. Their team was professional, thorough, and compassionate during a stressful time. They restored our home perfectly and even helped with the insurance process. Highly recommend!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      location: "Vancouver, BC",
      rating: 5,
      text: "After a kitchen fire, I was devastated. RainForces came in and handled everything from cleanup to reconstruction. They were transparent about the process and timeline, and the results exceeded my expectations. Thank you for making our house a home again.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily Rodriguez",
      location: "Montreal, QC",
      rating: 5,
      text: "We discovered mold in our basement and called RainForces. They conducted a thorough inspection, explained the remediation process, and completed the work efficiently. Their follow-up testing gave us peace of mind that our home was safe again.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David Thompson",
      location: "Calgary, AB",
      rating: 5,
      text: "When a storm damaged our roof and caused water damage, RainForces was there within hours. Their team worked diligently to prevent further damage and then restored everything to perfect condition. Their expertise and professionalism are unmatched.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jennifer Lee",
      location: "Ottawa, ON",
      rating: 5,
      text: "I can't thank RainForces enough for their exceptional service. From the initial assessment to the final walkthrough, they were communicative, respectful, and detail-oriented. They turned a disaster into an opportunity to improve our home.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = () => {
    const items = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      items.push({ ...testimonials[index], index })
    }
    return items
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our restoration
            services.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials().map((testimonial) => (
                <motion.div
                  key={testimonial.index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="testimonial-card border-none shadow-lg h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <Quote className="h-8 w-8 text-primary/20" />
                      </div>
                      <p className="text-gray-700 mb-6 italic flex-grow">{testimonial.text}</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md border-gray-200 rounded-full p-2 hidden md:flex"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md border-gray-200 rounded-full p-2 hidden md:flex"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Button
            variant="outline"
            className="mr-2 bg-white shadow-md border-gray-200 rounded-full p-2"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="bg-white shadow-md border-gray-200 rounded-full p-2"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
