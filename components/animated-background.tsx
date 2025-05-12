"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  className?: string
  color1?: string
  color2?: string
  duration?: number
  children?: React.ReactNode
}

const AnimatedBackground = ({
  className = "",
  color1 = "rgba(15, 40, 117, 0.8)", // blue-900 with opacity
  color2 = "rgba(31, 41, 55, 0.8)", // gray-800 with opacity
  duration = 20,
  children,
}: AnimatedBackgroundProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute inset-0 opacity-70"
            style={{
              background: `radial-gradient(circle at 20% 30%, ${color1}, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 opacity-70"
            style={{
              background: `radial-gradient(circle at 70% 60%, ${color2}, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: duration * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </>
      )}
      {children}
    </div>
  )
}

export default AnimatedBackground
