"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxBackgroundProps {
  imageUrl: string
  alt: string
  overlayColor?: string
  speed?: number
  className?: string
}

const ParallaxBackground = ({
  imageUrl,
  alt,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  speed = 0.5,
  className = "",
}: ParallaxBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleScroll = () => {
      if (!containerRef.current) return

      const { top, height } = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the element is from the viewport center
      const centerOffset = top - windowHeight / 2 + height / 2

      // Apply parallax effect
      setOffset(centerOffset * speed)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, prefersReducedMotion])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor }}></div>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: prefersReducedMotion ? "none" : `translateY(${offset}px)`,
          transition: prefersReducedMotion ? "none" : "transform 0.1s linear",
        }}
      >
        <Image src={imageUrl || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
      </div>
    </div>
  )
}

export default ParallaxBackground
