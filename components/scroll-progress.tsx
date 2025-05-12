"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"

interface ScrollProgressProps {
  color?: string
  height?: number
  position?: "top" | "bottom"
  zIndex?: number
}

const ScrollProgress = ({
  color = "#0f2875", // blue-900
  height = 4,
  position = "top",
  zIndex = 100,
}: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="fixed left-0 right-0"
      style={{
        top: position === "top" ? 0 : "auto",
        bottom: position === "bottom" ? 0 : "auto",
        height,
        backgroundColor: color,
        transformOrigin: "0%",
        zIndex,
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgress
