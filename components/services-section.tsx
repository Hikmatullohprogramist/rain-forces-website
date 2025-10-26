"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ServiceCard from "@/components/service-card"
import { Building, Shield, Car, Droplet, AlertTriangle } from "lucide-react"

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    {
      id: "building-envelope",
      title: "Building Envelope",
      description:
        "Also known as the building shell, fabric or enclosure – is the boundary between the conditioned interior of a building and the outdoors. Components include external walls, floors, roofs, ceilings, windows and doors.",
      icon: <Building className="h-12 w-12 text-primary" />,
      link: "/services/building-envelope",
      image: "/images/projects/building-envelope-work.jpg",
    },
    {
      id: "balcony-restoration",
      title: "Balcony Restoration",
      description:
        "With an understanding of the budgetary and logistical demands of busy settings and occupied spaces, we help building owners and managers restore the structural integrity of their balconies by offering consistent good work for a fair price.",
      icon: <Shield className="h-12 w-12 text-primary" />,
      link: "/services/balcony-restoration",
      image: "/images/projects/balcony-work-ladder.jpg",
    },
    {
      id: "parking-garage-repairs",
      title: "Parking Garage Repairs",
      description:
        "Putting off parking garage upkeep can cause minor cracks to escalate into major hazards. Garages deteriorate more rapidly than other structures. Addressing deterioration at the first sign allows for proactive maintenance that minimizes disruption.",
      icon: <Car className="h-12 w-12 text-primary" />,
      link: "/services/parking-garage-repairs",
      image: "/images/projects/brick-building-garage.jpg",
    },
    {
      id: "weatherproofing",
      title: "Weatherproofing",
      description:
        "The longer a water leak is allowed to progress unchecked, the more extensive the underlying deterioration becomes. Our waterproofing experience is diverse and specialized, applying focused expertise to correct water infiltration conditions.",
      icon: <Droplet className="h-12 w-12 text-primary" />,
      link: "/services/weatherproofing",
      image: "/images/projects/brick-masonry-detail.jpg",
    },
    {
      id: "emergency-services",
      title: "Emergency Services",
      description:
        "From restoring deteriorated balconies to resolving waterproofing deficiencies, we know the issues and solutions. We help building owners and managers restore their property by offering consistent good work for a fair price.",
      icon: <AlertTriangle className="h-12 w-12 text-primary" />,
      link: "/services/emergency-services",
      image: "/images/projects/construction-site-cityview.jpg",
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
            General Contractor services for building envelope, restoration, and maintenance solutions.
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
