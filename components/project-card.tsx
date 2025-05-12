"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  image: string
  title: string
  category: string
}

const ProjectCard = ({ image, title, category }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="overflow-hidden rounded-lg shadow-lg"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="inline-block bg-blue-900 px-3 py-1 text-sm rounded-full mb-2"
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.span>
          <motion.h3
            className="text-xl font-bold"
            initial={{ y: 10 }}
            animate={{ y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {title}
          </motion.h3>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
