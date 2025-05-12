"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  tiltEffect?: boolean
  hoverScale?: number
  hoverElevation?: boolean
}

const InteractiveCard = ({
  children,
  className = "",
  tiltEffect = true,
  hoverScale = 1.02,
  hoverElevation = true,
}: InteractiveCardProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useState(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)
    }
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || prefersReducedMotion || !cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Calculate rotation (max 5 degrees)
    const maxRotation = 5
    const rotateY = (x / (rect.width / 2)) * maxRotation
    const rotateX = -(y / (rect.height / 2)) * maxRotation

    setRotation({ x: rotateX, y: rotateY })
  }

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
      style={{
        transform: prefersReducedMotion
          ? undefined
          : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: hoverScale,
              boxShadow: hoverElevation
                ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                : undefined,
            }
      }
    >
      {children}
    </motion.div>
  )
}

export default InteractiveCard
