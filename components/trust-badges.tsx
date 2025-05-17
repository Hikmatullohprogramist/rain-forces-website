"use client"

import { motion } from "framer-motion"

const TrustBadges = () => {
  const badges = [
    {
      name: "IICRC Certified",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "Better Business Bureau A+ Rating",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "HomeAdvisor Screened & Approved",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "Angie's List Super Service Award",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "EPA Lead-Safe Certified",
      logo: "/placeholder.svg?height=80&width=200",
    },
  ]

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold">Trusted & Certified</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img
                src={badge.logo || "/placeholder.svg"}
                alt={badge.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-sm text-gray-600 mt-2">{badge.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
