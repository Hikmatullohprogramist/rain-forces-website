"use client"

import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import CTASection from "@/components/layout/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Flame, Sprout, Wind, Shield, Home, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: <Droplet className="h-12 w-12 text-primary" />,
      title: "Water Damage Restoration",
      description:
        "Fast response to water damage from floods, leaks, or storms. We extract water, dry your property, and restore damaged areas.",
      features: [
        "24/7 Emergency Response",
        "Water Extraction & Removal",
        "Structural Drying",
        "Dehumidification",
        "Mold Prevention",
        "Content Restoration",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/water-damage",
    },
    {
      icon: <Flame className="h-12 w-12 text-secondary" />,
      title: "Fire Damage Restoration",
      description:
        "Complete fire and smoke damage restoration services, from cleanup to reconstruction and odor removal.",
      features: [
        "Fire Damage Assessment",
        "Smoke & Soot Removal",
        "Odor Elimination",
        "Structural Repairs",
        "Content Cleaning & Restoration",
        "Reconstruction Services",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/fire-damage",
    },
    {
      icon: <Sprout className="h-12 w-12 text-primary" />,
      title: "Mold Remediation",
      description:
        "Professional mold inspection, testing, and remediation to ensure your property is safe and healthy.",
      features: [
        "Mold Inspection & Testing",
        "Containment & Air Filtration",
        "Mold Removal & Treatment",
        "Structural Drying",
        "Preventative Treatments",
        "Post-Remediation Verification",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/mold-remediation",
    },
    {
      icon: <Wind className="h-12 w-12 text-secondary" />,
      title: "Storm Damage Repair",
      description: "Comprehensive storm damage restoration for roofs, siding, windows, and structural repairs.",
      features: [
        "Emergency Board-Up",
        "Roof Tarping & Repair",
        "Water Damage Mitigation",
        "Debris Removal",
        "Structural Repairs",
        "Complete Restoration",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/storm-damage",
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Biohazard Cleanup",
      description: "Safe and discreet biohazard cleanup services with proper disposal and thorough sanitization.",
      features: [
        "Biohazard Assessment",
        "Safe Material Removal",
        "Thorough Decontamination",
        "Odor Elimination",
        "Proper Waste Disposal",
        "Structural Restoration",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/biohazard-cleanup",
    },
    {
      icon: <Home className="h-12 w-12 text-secondary" />,
      title: "Reconstruction Services",
      description: "Full-service reconstruction to restore your property to its pre-loss condition or better.",
      features: [
        "Structural Repairs",
        "Carpentry & Framing",
        "Drywall Installation",
        "Flooring Replacement",
        "Painting & Finishing",
        "Complete Remodeling",
      ],
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/reconstruction",
    },
  ]

  return (
    <PageLayout>
      <PageBanner
        title="Our Restoration Services"
        subtitle="Comprehensive restoration solutions for water damage, fire damage, mold, and more."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Restoration Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a full range of restoration services to help you recover from water damage, fire damage, mold,
              and more. Our expert team is ready to restore your property quickly and efficiently.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Restoration Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive, step-by-step process to ensure efficient and effective restoration of your
              property.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "We conduct a thorough inspection to assess the damage and develop a restoration plan.",
              },
              {
                step: "2",
                title: "Mitigation",
                description: "We take immediate action to prevent further damage and begin the restoration process.",
              },
              {
                step: "3",
                title: "Restoration",
                description: "Our team works efficiently to restore your property to its pre-damage condition.",
              },
              {
                step: "4",
                title: "Final Inspection",
                description: "We conduct a final inspection to ensure all work meets our high standards of quality.",
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
        title="Need Emergency Restoration Services?"
        description="Our team is available 24/7 to respond to your restoration emergency."
        primaryButtonText="Call Now: 1-800-555-0000"
        primaryButtonLink="tel:1-800-555-0000"
        secondaryButtonText="Get a Free Quote"
        secondaryButtonLink="/contact"
        background="secondary"
      />
    </PageLayout>
  )
}
