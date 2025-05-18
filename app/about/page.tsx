"use client"

import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import CTASection from "@/components/layout/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Award, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"
import ResponsiveImage from "@/components/ui/responsive-image"
import { assetImages, getTeamMembers } from "@/lib/image-utils"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  const values = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Rapid Response",
      description:
        "We understand that time is critical in restoration. Our team is available 24/7 to respond quickly to your emergency.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Team",
      description:
        "Our certified technicians have extensive training and experience in all aspects of restoration services.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Quality Workmanship",
      description:
        "We take pride in our work and stand behind it with a 5-year workmanship warranty on all restoration projects.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work closely with you throughout the restoration process.",
    },
  ]

  const teamMembers = getTeamMembers()

  return (
    <PageLayout>
      <PageBanner
        title="About RainForces"
        subtitle="Learn about our company, our mission, and the dedicated team behind our restoration services."
        backgroundImage={assetImages.banners.aboutBanner}
      />

      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2007, RainForces has grown from a small family business to one of the leading restoration
                companies in Ontario. Our journey began with a simple mission: to help homeowners and businesses recover
                from property damage with compassion, expertise, and efficiency.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                RainForces delivers comprehensive construction and restoration solutions, offering general contracting,
                building rehabilitation, and specialized disaster recovery services for both residential and commercial
                properties.
              </p>
              <p className="text-lg text-gray-600">
                Today, RainForces is proud to serve communities across Ontario with a team of certified technicians,
                state-of-the-art equipment, and a dedication to customer satisfaction that sets us apart in the
                industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <ResponsiveImage
                  src={assetImages.projects.commercial[0].src}
                  alt="RainForces team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At RainForces, our values guide everything we do. They reflect our commitment to excellence and our
              dedication to serving our clients with integrity and compassion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary-50 rounded-full">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to providing exceptional restoration services with
              expertise, compassion, and integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.id}
                image={member.src}
                name={member.name}
                position={member.position}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Contact our team today to schedule a consultation or request emergency restoration services."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/services"
        background="primary"
      />
    </PageLayout>
  )
}
