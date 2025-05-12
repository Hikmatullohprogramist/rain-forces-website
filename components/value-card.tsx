"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`text-center p-6 rounded-lg transition-all duration-300 ${
        isHovered ? "bg-blue-50 dark:bg-gray-800 shadow-md" : "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900"
      }`}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="flex justify-center mb-6"
        animate={
          isHovered
            ? {
                rotate: [0, 5, -5, 5, 0],
                transition: { duration: 0.5 },
              }
            : {}
        }
      >
        {icon}
      </motion.div>

      <motion.h3
        className="text-xl font-bold mb-3 text-gray-900 dark:text-white"
        animate={isHovered ? { scale: 1.05, transition: { duration: 0.2 } } : { scale: 1 }}
      >
        {title}
      </motion.h3>

      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

export default ValueCard
