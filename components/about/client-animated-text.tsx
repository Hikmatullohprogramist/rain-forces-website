"use client"

import { useEffect, useState } from "react"

interface ClientAnimatedTextProps {
  text: string
  className?: string
}

export default function ClientAnimatedText({ text, className = "" }: ClientAnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <p className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>{text}</p>
  )
}
