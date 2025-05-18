"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveImage from "@/components/ui/responsive-image"
import { Linkedin, Mail, Phone } from "lucide-react"

interface TeamMemberProps {
  image: string
  name: string
  position: string
  bio?: string
  email?: string
  phone?: string
  linkedin?: string
  delay?: number
}

export default function TeamMember({ image, name, position, bio, email, phone, linkedin, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full border-none shadow-lg overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <ResponsiveImage
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-primary font-medium mb-3">{position}</p>
          {bio && <p className="text-gray-600 mb-4">{bio}</p>}

          {(email || phone || linkedin) && (
            <div className="flex gap-3 mt-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={`Email ${name}`}
                >
                  <Mail className="h-5 w-5" />
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={`Call ${name}`}
                >
                  <Phone className="h-5 w-5" />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={`${name}'s LinkedIn profile`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
