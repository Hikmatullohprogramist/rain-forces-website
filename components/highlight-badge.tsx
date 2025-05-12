"use client"

import { motion } from "framer-motion"

interface HighlightBadgeProps {
  text: string
  className?: string
}

const HighlightBadge = ({ text, className = "" }: HighlightBadgeProps) => {
  return (
    <motion.div
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-white ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.05, backgroundColor: "#1e3a8a" }}
    >
      {text}
    </motion.div>
  )
}

export default HighlightBadge
