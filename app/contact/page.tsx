"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import TextReveal from "@/components/text-reveal"
import AnimatedIcon from "@/components/animated-icon"
import ParticleBackground from "@/components/particle-background"
import AnimatedBackground from "@/components/animated-background"
import HighlightBadge from "@/components/highlight-badge"
import InteractiveCard from "@/components/interactive-card"
import GoogleMap from "@/components/google-map"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-blue-900 text-white overflow-hidden">
        <AnimatedBackground>
          <ParticleBackground
            color="rgba(255, 255, 255, 0.5)"
            particleCount={40}
            className="z-0"
            minSize={1}
            maxSize={3}
          />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <HighlightBadge text="GET IN TOUCH" className="mb-4" />
              <TextReveal text="Contact Us" element="h1" className="text-4xl md:text-5xl font-bold mb-6" />
              <TextReveal
                text="Get in touch with our team for all your building restoration and rehabilitation needs"
                element="p"
                className="text-xl md:text-2xl text-blue-100"
                delay={0.3}
              />
            </AnimatedSection>
          </div>
        </AnimatedBackground>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div>
                <TextReveal
                  text="Get In Touch"
                  element="h2"
                  className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                />
                <p className="text-lg text-gray-700 mb-8">
                  Have questions about our services or want to request a quote? Contact us using the information below
                  or fill out the form.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <AnimatedIcon
                      icon={<MapPin className="h-6 w-6" />}
                      size="md"
                      className="mr-4 flex-shrink-0 mt-1"
                      hoverEffect="bounce"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">14-1085 Bellamy Rd N Toronto, Ontario, M1H 3C7</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <AnimatedIcon
                      icon={<Phone className="h-6 w-6" />}
                      size="md"
                      className="mr-4 flex-shrink-0 mt-1"
                      hoverEffect="shake"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <AnimatedIcon
                      icon={<Mail className="h-6 w-6" />}
                      size="md"
                      className="mr-4 flex-shrink-0 mt-1"
                      hoverEffect="pulse"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">info@rainforces.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <AnimatedIcon
                      icon={<Clock className="h-6 w-6" />}
                      size="md"
                      className="mr-4 flex-shrink-0 mt-1"
                      hoverEffect="rotate"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className="bg-gray-200 hover:bg-blue-900 hover:text-white text-gray-700 p-3 rounded-full transition-colors"
                      whileHover={{ scale: 1.1, backgroundColor: "#0f2875", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-gray-200 hover:bg-blue-900 hover:text-white text-gray-700 p-3 rounded-full transition-colors"
                      whileHover={{ scale: 1.1, backgroundColor: "#0f2875", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-gray-200 hover:bg-blue-900 hover:text-white text-gray-700 p-3 rounded-full transition-colors"
                      whileHover={{ scale: 1.1, backgroundColor: "#0f2875", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.3} className="lg:col-span-2">
              <InteractiveCard tiltEffect={false} hoverScale={1.01}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center"
                      >
                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                        <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                              className="focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                              className="focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(123) 456-7890"
                              className="focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="How can we help you?"
                              required
                              className="focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                            />
                          </div>
                        </div>

                        <div className="space-y-2 mb-6">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please provide details about your project or inquiry..."
                            rows={6}
                            required
                            className="focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                          />
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-8 w-full md:w-auto"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </motion.div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </InteractiveCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <ParticleBackground color="rgba(15, 40, 117, 0.1)" particleCount={20} className="z-0" speed={0.2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <HighlightBadge text="FIND US" className="mb-4" />
              <TextReveal
                text="Our Location"
                element="h2"
                className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
              />
              <TextReveal
                text="Visit our office in Toronto, Ontario"
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <InteractiveCard tiltEffect={false} hoverScale={1.01}>
              <GoogleMap address="14-1085 Bellamy Rd N Toronto, Ontario, M1H 3C7" height="400px" zoom={15} />
            </InteractiveCard>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <HighlightBadge text="QUESTIONS" className="mb-4" />
              <TextReveal
                text="Frequently Asked Questions"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              />
              <TextReveal
                text="Find answers to common questions about our services"
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What areas do you serve?",
                answer:
                  "We primarily serve the Greater Toronto Area, including Toronto, Scarborough, North York, Etobicoke, and surrounding areas.",
              },
              {
                question: "Do you offer free estimates?",
                answer: "Yes, we provide free estimates for all our services. Contact us to schedule a consultation.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on the scope and complexity. Small repairs may take a few days, while larger restoration projects can take several months.",
              },
              {
                question: "Are you licensed and insured?",
                answer:
                  "Yes, RainForces is fully licensed and insured. We maintain all necessary certifications and insurance coverage for your peace of mind.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={0.2 * (index + 1)}>
                <InteractiveCard>
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed UI issues */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let us help you bring your vision to life.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              (123) 456-7890
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
