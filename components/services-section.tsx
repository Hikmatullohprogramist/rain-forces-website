"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplet, Flame, Sprout, Wind, Shield, Home } from "lucide-react"
import { motion } from "framer-motion"

const ServicesSection = () => {
  const services = [
    {
      icon: <Droplet className="h-10 w-10 text-primary" />,
      title: "Water Damage Restoration",
      description:
        "Fast response to water damage from floods, leaks, or storms. We extract water, dry your property, and restore damaged areas.",
      link: "/services/water-damage",
    },
    {
      icon: <Flame className="h-10 w-10 text-secondary" />,
      title: "Fire Damage Restoration",
      description:
        "Complete fire and smoke damage restoration services, from cleanup to reconstruction and odor removal.",
      link: "/services/fire-damage",
    },
    {
      icon: <Sprout className="h-10 w-10 text-primary" />,
      title: "Mold Remediation",
      description:
        "Professional mold inspection, testing, and remediation to ensure your property is safe and healthy.",
      link: "/services/mold-remediation",
    },
    {
      icon: <Wind className="h-10 w-10 text-secondary" />,
      title: "Storm Damage Repair",
      description: "Comprehensive storm damage restoration for roofs, siding, windows, and structural repairs.",
      link: "/services/storm-damage",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Biohazard Cleanup",
      description: "Safe and discreet biohazard cleanup services with proper disposal and thorough sanitization.",
      link: "/services/biohazard-cleanup",
    },
    {
      icon: <Home className="h-10 w-10 text-secondary" />,
      title: "Reconstruction Services",
      description: "Full-service reconstruction to restore your property to its pre-loss condition or better.",
      link: "/services/reconstruction",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Restoration Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive restoration services to help you recover from water damage, fire damage, mold, and
            more.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="service-card border-none shadow-lg h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary-50 w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button className="bg-secondary hover:bg-secondary-600 text-white px-8 py-6 text-lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
