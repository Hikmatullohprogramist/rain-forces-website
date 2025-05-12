"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  isActive?: boolean
}

export const AnimatedLink = ({ href, children, className = "", isActive = false }: AnimatedLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>

      {/* Animated underline */}
      {(isActive || isHovered) && (
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-blue-900 dark:bg-blue-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  )
}
