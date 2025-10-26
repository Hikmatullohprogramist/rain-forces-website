"use client"

import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import CTASection from "@/components/layout/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Shield, Car, Droplet, AlertTriangle, CheckCircle2, ArrowRight, Phone } from "lucide-react"
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
      image: "/images/projects/building-envelope-work.jpg",
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
      image: "/images/projects/balcony-work-ladder.jpg",
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
      image: "/images/projects/brick-building-garage.jpg",
      link: "/services/parking-garage-repairs",
    },
    {
      icon: <Droplet className="h-12 w-12 text-primary" />,
      title: "Weatherproofing",
      description:
        "Bad apples don't go good. And so does water infiltration. The longer a water leak is allowed to progress unchecked, the more extensive the underlying deterioration can become. Stopping a minor leak is far easier than rehabilitating the damage from a major one.",
      features: [
        "Water Infiltration Assessment",
        "Sealant & Caulking Services",
        "Membrane Installation",
        "Drainage System Design",
        "Leak Detection & Repair",
        "Preventive Waterproofing",
      ],
      image: "/images/projects/brick-masonry-detail.jpg",
      link: "/services/weatherproofing",
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-secondary" />,
      title: "Emergency Services",
      description:
        "From restoring deteriorated balconies to resolving waterproofing deficiencies, we know the issues, and we know the solutions. With an understanding of the budgetary and logistical demands of busy settings and occupied spaces.",
      features: [
        "24/7 Emergency Response",
        "Rapid Assessment & Mitigation",
        "Temporary Protective Measures",
        "Urgent Repair Services",
        "Safety Compliance",
        "Insurance Coordination",
      ],
      image: "/images/projects/construction-site-cityview.jpg",
      link: "/services/emergency-services",
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Foundation Work",
      description:
        "Professional foundation excavation, repair, and construction services using modern equipment and proven techniques to ensure structural integrity and long-term stability.",
      features: [
        "Foundation Excavation",
        "Structural Foundation Repair",
        "Underpinning Services",
        "Waterproofing & Drainage",
        "Heavy Equipment Operation",
        "Site Preparation",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-2-5341324138394023501-y.jpg-AP95tJodpLehEqtzwcIYYjCbEU4nD6.jpeg",
      link: "/services/foundation-work",
    },
  ]

  return (
    <PageLayout>
      <PageBanner
        title="Our Construction Services"
        subtitle="General Contractor services for building envelope, restoration, and maintenance solutions."
        backgroundImage="/images/projects/multi-story-scaffolding.jpg"
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">{service.icon}</div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button asChild className="flex-1 bg-primary hover:bg-primary-600 text-white">
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <Link href="/contact">
                          <Phone className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                <Card className="h-full border-none shadow-lg relative overflow-hidden bg-white">
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose RainForces?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 17 years of experience in the construction industry, we've built a reputation for excellence,
                reliability, and professional service across Ontario.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { number: "17+", label: "Years Experience" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Emergency Service" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/projects/construction-worker-balcony.jpg"
                  alt="RainForces Team at Work"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        description="Contact us today for a free consultation and quote. Our team is ready to help with your construction and restoration needs."
        primaryButtonText="Call Now: (416) 555-0000"
        primaryButtonLink="tel:416-555-0000"
        secondaryButtonText="Get a Free Quote"
        secondaryButtonLink="/contact"
        background="primary"
      />
    </PageLayout>
  )
}
