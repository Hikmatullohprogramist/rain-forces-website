"use client"

import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import CTASection from "@/components/layout/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertTriangle, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// This is a placeholder for demonstration purposes
// In a real application, you would fetch this data from a CMS or API
const serviceData = {
  "water-damage": {
    title: "Water Damage Restoration",
    description:
      "Fast response to water damage from floods, leaks, or storms. We extract water, dry your property, and restore damaged areas.",
    icon: <AlertTriangle className="h-12 w-12 text-primary" />,
    image: "/placeholder.svg?height=600&width=800",
    content:
      "Water damage can be devastating to your property, causing structural issues, mold growth, and damage to your belongings. Our water damage restoration services are designed to quickly address the problem and restore your property to its pre-damage condition.",
    features: [
      "24/7 Emergency Response",
      "Water Extraction & Removal",
      "Structural Drying",
      "Dehumidification",
      "Mold Prevention",
      "Content Restoration",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We conduct a thorough inspection to assess the extent of water damage and develop a restoration plan.",
      },
      {
        title: "Water Extraction",
        description: "Using powerful pumps and vacuums, we remove standing water from your property.",
      },
      {
        title: "Drying & Dehumidification",
        description: "We use industrial-grade dehumidifiers and air movers to thoroughly dry affected areas.",
      },
      {
        title: "Cleaning & Sanitizing",
        description: "We clean and sanitize all affected areas and belongings to prevent mold and bacterial growth.",
      },
      {
        title: "Restoration",
        description: "We restore damaged areas, replacing drywall, flooring, and other materials as needed.",
      },
    ],
  },
  "fire-damage": {
    title: "Fire Damage Restoration",
    description:
      "Complete fire and smoke damage restoration services, from cleanup to reconstruction and odor removal.",
    icon: <AlertTriangle className="h-12 w-12 text-secondary" />,
    image: "/placeholder.svg?height=600&width=800",
    content:
      "Fire damage can be devastating, affecting not only the structure of your property but also causing smoke damage, water damage from firefighting efforts, and lingering odors. Our comprehensive fire damage restoration services address all aspects of fire damage to restore your property.",
    features: [
      "Fire Damage Assessment",
      "Smoke & Soot Removal",
      "Odor Elimination",
      "Structural Repairs",
      "Content Cleaning & Restoration",
      "Reconstruction Services",
    ],
    process: [
      {
        title: "Emergency Response",
        description: "We secure your property with board-up and roof-tarping services if needed.",
      },
      {
        title: "Assessment",
        description: "We conduct a thorough inspection to assess the extent of fire, smoke, and water damage.",
      },
      {
        title: "Water Removal",
        description: "We remove water used in firefighting efforts to prevent further damage.",
      },
      {
        title: "Smoke & Soot Removal",
        description: "We use specialized equipment and techniques to remove smoke and soot from all surfaces.",
      },
      {
        title: "Cleaning & Sanitizing",
        description: "We clean, sanitize, and deodorize all affected areas and belongings.",
      },
      {
        title: "Restoration & Reconstruction",
        description: "We restore and rebuild damaged areas of your property.",
      },
    ],
  },
  // Add more services as needed
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const service = serviceData[slug as keyof typeof serviceData] || serviceData["water-damage"]

  return (
    <PageLayout>
      <PageBanner
        title={service.title}
        subtitle={service.description}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center mb-6">
                <div className="mr-4">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
              </div>

              <p className="text-lg text-gray-600 mb-6">{service.content}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-secondary hover:bg-secondary-600 text-white">Get a Free Quote</Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary-50">
                  Emergency Service
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our {service.title} Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive, step-by-step process to ensure efficient and effective restoration of your
              property.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-8 last:mb-0"
              >
                <div className="mr-6 relative">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="absolute top-12 bottom-0 left-1/2 w-0.5 bg-primary-100 -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RainForces</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality restoration services with expertise, compassion, and
              integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Fast Response Time",
                description:
                  "We respond to emergencies 24/7 and arrive on-site within 1-2 hours to begin the restoration process.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Certified Technicians",
                description:
                  "Our IICRC certified technicians have the expertise and training to handle all aspects of restoration, ensuring the highest quality results.",
              },
              {
                icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
                title: "Satisfaction Guaranteed",
                description:
                  "We stand behind our work with a 100% satisfaction guarantee and a 5-year workmanship warranty.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary-50 rounded-full">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our other restoration services to address all your property damage needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mold Remediation",
                description:
                  "Professional mold inspection, testing, and remediation to ensure your property is safe and healthy.",
                link: "/services/mold-remediation",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Storm Damage Repair",
                description:
                  "Comprehensive storm damage restoration for roofs, siding, windows, and structural repairs.",
                link: "/services/storm-damage",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Reconstruction Services",
                description:
                  "Full-service reconstruction to restore your property to its pre-loss condition or better.",
                link: "/services/reconstruction",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((relatedService, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={relatedService.image || "/placeholder.svg"}
                      alt={relatedService.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.description}</p>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-50">
                      <Link href={relatedService.link}>Learn More</Link>
                    </Button>
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
