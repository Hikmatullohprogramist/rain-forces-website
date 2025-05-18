"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { assetImages } from "@/lib/image-utils"
import ServiceCard from "@/components/service-card"
import { Building, Hammer, Wrench, Droplet, Flame, WormIcon as Virus } from "lucide-react"

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    {
      id: "construction",
      title: "General Construction",
      description:
        "Full-service construction for new buildings and major renovations for commercial and residential clients.",
      icon: <Building className="h-12 w-12 text-primary" />,
      link: "/services/construction",
      image: assetImages.services.construction,
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      description: "Transform your space with our expert renovation and remodeling services for homes and businesses.",
      icon: <Hammer className="h-12 w-12 text-primary" />,
      link: "/services/renovation",
      image: assetImages.services.renovation,
    },
    {
      id: "restoration",
      title: "Building Restoration",
      description:
        "Specialized restoration services for historic and aging buildings, preserving their character and integrity.",
      icon: <Wrench className="h-12 w-12 text-primary" />,
      link: "/services/restoration",
      image: assetImages.services.restoration,
    },
    {
      id: "water-damage",
      title: "Water Damage Restoration",
      description: "Fast response to water damage from floods, leaks, or storms with complete restoration services.",
      icon: <Droplet className="h-12 w-12 text-primary" />,
      link: "/services/water-damage",
      image: assetImages.services.waterDamage,
    },
    {
      id: "fire-damage",
      title: "Fire Damage Repair",
      description: "Comprehensive fire and smoke damage restoration services, from cleanup to reconstruction.",
      icon: <Flame className="h-12 w-12 text-primary" />,
      link: "/services/fire-damage",
      image: assetImages.services.fireDamage,
    },
    {
      id: "mold-remediation",
      title: "Mold Remediation",
      description:
        "Professional mold inspection, testing, and remediation to ensure your property is safe and healthy.",
      icon: <Virus className="h-12 w-12 text-primary" />,
      link: "/services/mold-remediation",
      image: assetImages.services.moldRemediation,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From new construction to restoration and disaster recovery, we provide comprehensive solutions for all your
            property needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                imageSrc={service.image}
                isHovered={hoveredService === service.id}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-primary hover:bg-primary-600 text-white rounded-full px-8">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
