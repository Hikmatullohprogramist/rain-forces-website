"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Clock, Shield, Award, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        serviceType: "",
        message: "",
      })
    }, 1500)
  }

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Emergency Response",
      description: "Available day or night for urgent restoration needs.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Certified Technicians",
      description: "IICRC certified professionals with extensive training.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "5-Year Warranty",
      description: "All our restoration work is backed by a 5-year warranty.",
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-primary" />,
      title: "Satisfaction Guaranteed",
      description: "We're not satisfied until you're completely happy.",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Free Quote</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form to request a free quote for our construction and restoration services. Our team will get
              back to you within 24 hours to discuss your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-4 p-2 bg-primary-50 rounded-full">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary-50 p-6 rounded-lg border border-primary-100"
            >
              <div className="flex items-center">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-primary-800">Emergency Service</h3>
                  <p className="text-primary-700 mb-2">Need immediate assistance? Call our emergency hotline:</p>
                  <a href="tel:647-342-8600" className="text-2xl font-bold text-primary hover:text-primary-600">
                    (647) 342-8600
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary to-primary-700 p-6 text-white">
                  <h3 className="text-2xl font-bold">Request a Quote</h3>
                  <p className="text-white/80">Fill out the form below and we'll get back to you shortly</p>
                </div>
                <div className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 text-green-800 rounded-full p-4 inline-flex mb-6">
                        <CheckCircle2 className="h-12 w-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        Your quote request has been submitted successfully. One of our construction specialists will
                        contact you shortly.
                      </p>
                      <Button
                        className="bg-primary hover:bg-primary-600 text-white"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name*</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address*</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number*</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(647) 123-4567"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Needed*</Label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            required
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            <option value="building-envelope">Building Envelope</option>
                            <option value="balcony-restoration">Balcony Restoration</option>
                            <option value="parking-garage">Parking Garage Repairs</option>
                            <option value="weatherproofing">Weatherproofing</option>
                            <option value="emergency">Emergency Services</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Property Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main St, City, Province"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Tell Us About Your Project</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide details about your construction or restoration needs..."
                          rows={4}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-secondary hover:bg-secondary-600 text-white py-6 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Get Your Free Quote"}
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
