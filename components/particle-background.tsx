"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

interface ParticleBackgroundProps {
  color?: string
  particleCount?: number
  className?: string
  minSize?: number
  maxSize?: number
  speed?: number
}

const ParticleBackground = ({
  color = "#0f2875", // blue-900
  particleCount = 30,
  className = "",
  minSize = 2,
  maxSize = 6,
  speed = 0.5,
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const animationRef = useRef<number>()

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Initialize particles
  useEffect(() => {
    if (prefersReducedMotion) return

    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const width = canvas.clientWidth
        const height = canvas.clientHeight

        // Set canvas dimensions to match display size
        canvas.width = width
        canvas.height = height

        setDimensions({ width, height })

        // Create particles
        const newParticles: Particle[] = []
        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * (maxSize - minSize) + minSize,
            speedX: (Math.random() - 0.5) * speed,
            speedY: (Math.random() - 0.5) * speed,
            opacity: Math.random() * 0.5 + 0.1,
          })
        }
        particlesRef.current = newParticles
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [particleCount, minSize, maxSize, speed, prefersReducedMotion])

  // Animation loop
  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > dimensions.height) particle.speedY *= -1

        // Wrap around edges
        if (particle.x < 0) particle.x = dimensions.width
        if (particle.x > dimensions.width) particle.x = 0
        if (particle.y < 0) particle.y = dimensions.height
        if (particle.y > dimensions.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(")", `, ${particle.opacity})`).replace("rgb", "rgba").replace("#", "rgba(")
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, color, prefersReducedMotion])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

export default ParticleBackground
