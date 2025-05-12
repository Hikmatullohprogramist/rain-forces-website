"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  element?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  highlightColor?: string
}

export const AnimatedText = ({
  text,
  className = "",
  element = "p",
  highlightColor = "text-blue-900 dark:text-blue-400",
}: AnimatedTextProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const words = text.split(" ")

  const Element = element

  return (
    <Element
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          whileHover={{
            scale: 1.05,
            color: "var(--highlight)",
            transition: { duration: 0.2 },
          }}
          style={
            {
              "--highlight": highlightColor.startsWith("text-")
                ? `var(--${highlightColor.substring(5)})`
                : highlightColor,
            } as any
          }
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Element>
  )
}

export default AnimatedText
