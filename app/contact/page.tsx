"use client"

import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Location",
      details: ["14-1085 Bellamy Rd N", "Toronto, Ontario, M1H 3C7"],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone & Fax",
      details: ["Phone: (647) 342-8600", "Fax: (416) 751-0433"],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Address",
      details: ["info@rainforces.ca"],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Office Hours",
      details: ["Mon-Fri: 8:00AM - 5:00PM", "Saturday: 8:00AM - 12:00PM"],
    },
  ]

  return (
    <PageLayout>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our team for construction services, quotes, or general inquiries."
        backgroundImage="/project-1.jpg?height=600&width=1200"
      />

      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your construction and restoration needs. Contact us today for a free
              consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary-50 rounded-full">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[600px] bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8234567890123!2d-79.25150000000001!3d43.76150000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1234567890a%3A0x1234567890abcdef!2s14-1085%20Bellamy%20Rd%20N%2C%20Toronto%2C%20ON%20M1H%203C7!5e0!3m2!1sen!2sca!4v1653012345678!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-none shadow-lg overflow-hidden h-[600px]">
                <div className="bg-gradient-to-r from-primary to-primary-700 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Get a Free Quote</h3>
                  <p className="text-white/90">
                    Fill out the form to request a free quote for our construction and restoration services.
                  </p>
                </div>
                <div className="p-6 overflow-y-auto" style={{ height: "calc(600px - 120px)" }}>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="(647) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service Needed*
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="">Select a Service</option>
                          <option value="building-envelope">Building Envelope</option>
                          <option value="balcony-restoration">Balcony Restoration</option>
                          <option value="parking-garage">Parking Garage Repairs</option>
                          <option value="weatherproofing">Weatherproofing</option>
                          <option value="foundation-work">Foundation Work</option>
                          <option value="emergency-services">Emergency Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="123 Main St, City, Province"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Please provide details about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Get Your Free Quote
                    </button>

                    <p className="text-xs text-gray-600 text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>

          <Separator className="my-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RainForces?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the RainForces advantage: Quality, reliability, and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-gray-50 rounded-lg shadow-md text-center"
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-primary mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 00-7.5 0v3h7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We deliver top-notch construction and restoration services with attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-gray-50 rounded-lg shadow-md text-center"
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-primary mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a1.5 1.5 0 00-1.977-1.666l-5.16 1.55a1.5 1.5 0 00-.783 1.304v4.19a1.5 1.5 0 002.94.936l5.16-1.55a1.5 1.5 0 00.783-1.304v-4.19z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                Count on us for timely and dependable solutions, tailored to your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-gray-50 rounded-lg shadow-md text-center"
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-primary mx-auto"
                >
                  <path d="M12.375 2.25a.75.75 0 00-1.5 0v1.5h-2.125a.75.75 0 000 1.5H12a.75.75 0 00.75-.75V5.25h2.125a.75.75 0 000-1.5H12.75V2.25zM6.344 3.656a2.25 2.25 0 013.182 3.182l-2.014 2.014a.75.75 0 001.06 1.06l2.014-2.014a2.25 2.25 0 01-3.182-3.182zM14.536 5.764a2.25 2.25 0 013.182-3.182l2.014 2.014a.75.75 0 00-1.06-1.06l-2.014-2.014a2.25 2.25 0 01-3.182 3.182zM6 13.5a3 3 0 106 0v-1.5a3 3 0 10-6 0v1.5zm6.75 0a3 3 0 106 0v-1.5a3 3 0 10-6 0v1.5z" />
                  <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 18a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Exceptional Service</h3>
              <p className="text-gray-600">
                We are committed to providing outstanding customer service and support throughout your project.
              </p>
            </motion.div>
          </div>

          <Separator className="my-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Contact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For urgent construction or restoration needs, contact our 24/7 emergency hotline.
            </p>
          </motion.div>

          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Emergency?</strong>
            <span className="block sm:inline"> Call us immediately at (647) 123-4567.</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide construction and restoration services throughout the Greater Toronto Area and surrounding
              regions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              "Toronto",
              "Mississauga",
              "Brampton",
              "Hamilton",
              "Oshawa",
              "Vaughan",
              "Markham",
              "Richmond Hill",
              "Oakville",
              "Burlington",
              "Pickering",
              "Ajax",
            ].map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-4 bg-white rounded-lg shadow-md"
              >
                {city}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our construction and restoration services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can you respond to an emergency?",
                answer:
                  "We offer 24/7 emergency response and typically arrive on-site within 1-2 hours of your call, depending on your location.",
              },
              {
                question: "Do you work with insurance companies?",
                answer:
                  "Yes, we work directly with all major insurance companies and can help you navigate the claims process for a smoother experience.",
              },
              {
                question: "How long does a typical construction project take?",
                answer:
                  "The timeline varies depending on the scope of work. Small projects may take a few days, while larger construction projects can take several weeks to months.",
              },
              {
                question: "Are your technicians certified?",
                answer:
                  "Yes, all our technicians are certified and undergo regular training to stay current with industry best practices and building codes.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
