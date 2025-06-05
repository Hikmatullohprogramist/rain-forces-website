"use client"

import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import CTASection from "@/components/layout/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Shield, Car, Droplet, AlertTriangle, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Building Envelope",
      description:
        "Also known as the building shell, fabric or enclosure – is the boundary between the conditioned interior of a building and the outdoors. Components of the building envelope include: external walls, floors, roofs, ceilings, windows and doors.",
      features: [
        "External Wall Systems",
        "Roof & Ceiling Solutions",
        "Window & Door Installation",
        "Thermal Insulation",
        "Moisture Barrier Systems",
        "Energy Efficiency Optimization",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/building-envelope",
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Balcony Restoration",
      description:
        "With an understanding of the budgetary and logistical demands of busy settings and occupied spaces, we have helped many building owners and managers restore the structural integrity of their balconies by offering consistent good work for a fair price.",
      features: [
        "Structural Assessment",
        "Concrete Repair & Restoration",
        "Waterproofing Systems",
        "Railing & Safety Features",
        "Drainage Solutions",
        "Aesthetic Improvements",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/balcony-restoration",
    },
    {
      icon: <Car className="h-12 w-12 text-secondary" />,
      title: "Parking Garage Repairs",
      description:
        "Putting off parking garage upkeep can cause minor cracks to escalate into major hazards. Garages and parking decks deteriorate more rapidly than other built structures. Addressing parking garage deterioration at the first sign of trouble allows for proactive maintenance and repair that minimize disruption and maximize efficiency.",
      features: [
        "Crack Repair & Sealing",
        "Concrete Restoration",
        "Waterproofing Systems",
        "Traffic Deck Coatings",
        "Structural Reinforcement",
        "Preventive Maintenance",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/parking-garage-repairs",
    },
    {
      icon: <Droplet className="h-12 w-12 text-primary" />,
      title: "Weatherproofing",
      description:
        "Bad apples don't go good. And so does water infiltration. The longer a water leak is allowed to progress unchecked, the more extensive the underlying deterioration can become. Stopping a minor leak is far easier than rehabilitating the damage from a major one. At rainForces, our waterproofing experience is both diverse and specialized, as we apply focused expertise to a range of settings and situations to correct water infiltration conditions at homes, businesses, schools, libraries, and other facilities.",
      features: [
        "Water Infiltration Assessment",
        "Sealant & Caulking Services",
        "Membrane Installation",
        "Drainage System Design",
        "Leak Detection & Repair",
        "Preventive Waterproofing",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/weatherproofing",
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-secondary" />,
      title: "Emergency Services",
      description:
        "From restoring deteriorated balconies to resolving waterproofing deficiencies, we know the issues, and we know the solutions. With an understanding of the budgetary and logistical demands of busy settings and occupied spaces, we have helped many building owners and managers restore their property by offering consistent good work for a fair price.",
      features: [
        "24/7 Emergency Response",
        "Rapid Assessment & Mitigation",
        "Temporary Protective Measures",
        "Urgent Repair Services",
        "Safety Compliance",
        "Insurance Coordination",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/emergency-services",
    },
  ]

  return (
    <PageLayout>
      <PageBanner
        title="Our Construction Services"
        subtitle="General contracting & Professional construction services for building envelope, restoration, and maintenance solutions."
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Construction Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized construction and restoration services focused on building envelope systems,
              structural integrity, and long-term maintenance solutions for commercial and residential properties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{service.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-secondary hover:bg-secondary-600 text-white">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive, step-by-step process to ensure efficient and effective construction and
              restoration of your property.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description:
                  "We conduct a thorough inspection to assess the condition and develop a construction plan.",
              },
              {
                step: "2",
                title: "Planning",
                description: "We create detailed plans and specifications to ensure project success and compliance.",
              },
              {
                step: "3",
                title: "Construction",
                description: "Our team works efficiently to complete your project to the highest standards of quality.",
              },
              {
                step: "4",
                title: "Final Inspection",
                description:
                  "We conduct a final inspection to ensure all work meets our high standards and your expectations.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">{step.step}</span>
                  </div>
                  <CardContent className="p-6 pt-12">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Professional Construction Services?"
        description="Our team is ready to help with your building envelope, restoration, and maintenance needs."
        primaryButtonText="Call Now: 1-800-555-0000"
        primaryButtonLink="tel:1-800-555-0000"
        secondaryButtonText="Get a Free Quote"
        secondaryButtonLink="/contact"
        background="secondary"
      />
    </PageLayout>
  )
}
