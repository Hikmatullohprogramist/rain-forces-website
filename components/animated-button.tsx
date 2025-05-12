"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

export const AnimatedButton = ({ children, className, ...props }: AnimatedButtonProps) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
      <Button className={`shadow-md hover:shadow-lg transition-all duration-300 ${className}`} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
