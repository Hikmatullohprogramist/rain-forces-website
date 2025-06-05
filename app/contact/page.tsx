"use client"

import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

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
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your construction and restoration needs. Contact us today for a free
              consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg"
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
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-primary to-primary-700 p-6 text-white">
                    <h3 className="text-2xl font-bold">Send Us a Message</h3>
                    <p className="text-white/80">Fill out the form below and we'll get back to you shortly</p>
                  </div>
                  <div className="p-6">
                    <ContactForm />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
