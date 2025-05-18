"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  background?: "primary" | "secondary" | "light" | "dark"
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  background = "primary",
}: CTASectionProps) {
  const backgrounds = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    light: "bg-gray-50 text-gray-900",
    dark: "bg-gray-900 text-white",
  }

  return (
    <section className={`py-16 ${backgrounds[background]}`}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl max-w-2xl mx-auto mb-8 opacity-90"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary-600 text-white">
            <Link href={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>

          {secondaryButtonText && secondaryButtonLink && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className={
                background === "light"
                  ? "border-primary text-primary hover:bg-primary-50"
                  : "border-white text-white hover:bg-white/10"
              }
            >
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
