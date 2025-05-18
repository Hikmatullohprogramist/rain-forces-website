"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function EmergencyCTA() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">24/7 Emergency Restoration Services</h2>
            <p className="text-xl text-white/90 mb-6">
              Disasters don't wait for business hours. Our emergency response team is available 24/7 to respond quickly
              to your restoration emergency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  icon: <Phone className="h-8 w-8 text-white" />,
                  title: "Rapid Response",
                  description: "We respond to emergencies within 1-2 hours.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-white" />,
                  title: "Available 24/7",
                  description: "Our team is ready to help any time, day or night.",
                },
                {
                  icon: <Shield className="h-8 w-8 text-white" />,
                  title: "Certified Experts",
                  description: "IICRC certified technicians ready to help.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 p-2 bg-white/10 rounded-full">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Emergency Hotline</h3>
            <p className="text-gray-600 mb-6">
              Call our 24/7 emergency hotline for immediate assistance with water damage, fire damage, or mold.
            </p>
            <div className="flex items-center mb-6">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <a href="tel:1-800-555-0000" className="text-3xl font-bold text-secondary hover:text-secondary-600">
                1-800-555-0000
              </a>
            </div>
            <Button className="w-full bg-primary hover:bg-primary-600 text-white py-6 text-lg">
              Request Emergency Service
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
