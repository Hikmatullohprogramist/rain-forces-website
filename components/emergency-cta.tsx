"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { motion } from "framer-motion"

const EmergencyCTA = () => {
  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0 md:mr-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Response</h2>
            <p className="text-xl text-white/90 max-w-2xl">
              Disasters don't wait for business hours. Our emergency response team is available 24/7 to minimize damage
              and start the restoration process immediately.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white rounded-full p-4 mb-4 animate-pulse">
              <Phone size={32} className="text-primary" />
            </div>
            <p className="text-lg font-medium mb-2">Call our emergency hotline</p>
            <a href="tel:1-800-555-0000" className="text-3xl font-bold hover:underline mb-4">
              1-800-555-0000
            </a>
            <Button className="bg-secondary hover:bg-secondary-600 text-white px-8 py-6 text-lg">
              Request Emergency Service
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyCTA
