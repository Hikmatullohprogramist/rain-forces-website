"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface AnimatedIconProps {
  icon: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  color?: string
  hoverEffect?: "pulse" | "bounce" | "rotate" | "shake" | "none"
}

const AnimatedIcon = ({
  icon,
  className = "",
  size = "md",
  color = "text-blue-900 dark:text-blue-400",
  hoverEffect = "pulse",
}: AnimatedIconProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  }

  const getHoverAnimation = () => {
    if (!isHovered) return {}

    switch (hoverEffect) {
      case "pulse":
        return {
          scale: [1, 1.1, 1],
          transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
        }
      case "bounce":
        return {
          y: [0, -5, 0],
          transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
        }
      case "rotate":
        return {
          rotate: [0, 10, -10, 0],
          transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
        }
      case "shake":
        return {
          x: [0, 3, -3, 3, 0],
          transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
        }
      case "none":
      default:
        return {}
    }
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${color} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={getHoverAnimation()}
      whileHover={{ scale: hoverEffect === "none" ? 1 : 1.1 }}
    >
      {icon}
    </motion.div>
  )
}

export default AnimatedIcon
