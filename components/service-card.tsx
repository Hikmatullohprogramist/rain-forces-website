"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`border-none h-full transition-all duration-300 ${
        isHovered
          ? "shadow-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900"
          : "shadow-lg bg-white dark:bg-gray-800"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 text-center h-full flex flex-col">
        <motion.div
          className="flex justify-center mb-6"
          animate={isHovered ? { y: [0, -8, 0], transition: { duration: 0.5 } } : {}}
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>

        <Link
          href={link}
          className="text-blue-900 dark:text-blue-400 font-medium inline-flex items-center hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
        >
          Learn More
          <motion.div
            animate={isHovered ? { x: [0, 5, 0], transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 } } : {}}
          >
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </Link>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
