"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  effect?: "fade" | "slide" | "zoom" | "rotate"
  fill?: boolean
}

const AnimatedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  effect = "fade",
  fill = false,
}: AnimatedImageProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const getAnimationVariants = () => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    }

    switch (effect) {
      case "slide":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -5 },
          visible: { opacity: 1, rotate: 0 },
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial="hidden"
      animate="visible"
      variants={getAnimationVariants()}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        fill={fill}
        className={`${fill ? "object-cover" : ""} ${className}`}
      />
    </motion.div>
  )
}

export default AnimatedImage
