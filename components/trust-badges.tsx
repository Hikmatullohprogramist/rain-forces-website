"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TrustBadges() {
  const badges = [
    { name: "IICRC Certified", image: "/placeholder.svg?height=100&width=100&text=IICRC" },
    { name: "BBB Accredited", image: "/placeholder.svg?height=100&width=100&text=BBB" },
    { name: "EPA Lead-Safe", image: "/placeholder.svg?height=100&width=100&text=EPA" },
    { name: "HomeAdvisor", image: "/placeholder.svg?height=100&width=100&text=HomeAdvisor" },
    { name: "Angie's List", image: "/placeholder.svg?height=100&width=100&text=Angie's" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-2">Trusted & Certified</h2>
          <p className="text-gray-600">
            We maintain the highest standards through industry certifications and accreditations.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={badge.image || "/placeholder.svg"}
                  alt={badge.name}
                  width={100}
                  height={100}
                  className="max-w-full max-h-full"
                />
              </div>
              <span className="text-sm text-gray-600 mt-2">{badge.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
