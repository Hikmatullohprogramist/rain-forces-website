"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import TextReveal from "@/components/text-reveal"
import AnimatedImage from "@/components/animated-image"
import ParticleBackground from "@/components/particle-background"
import AnimatedBackground from "@/components/animated-background"
import HighlightBadge from "@/components/highlight-badge"
import InteractiveCard from "@/components/interactive-card"

const projects = [
  {
    id: 1,
    title: "High-rise Residential Restoration",
    description:
      "Complete restoration of a 20-story residential building, including facade repairs, waterproofing, and structural reinforcement.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
    tags: ["High-rise", "Restoration", "Facade"],
  },
  {
    id: 2,
    title: "Commercial Building Rehabilitation",
    description:
      "Comprehensive rehabilitation of a commercial office building, including roof replacement, HVAC upgrades, and interior renovations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
    tags: ["Office", "Rehabilitation", "Renovation"],
  },
  {
    id: 3,
    title: "Historic Building Preservation",
    description:
      "Careful preservation of a historic building, maintaining its architectural integrity while upgrading its structural elements.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Restoration",
    tags: ["Historic", "Preservation", "Restoration"],
  },
  {
    id: 4,
    title: "Condominium Complex Repairs",
    description:
      "Extensive repairs to a condominium complex, addressing water damage, concrete deterioration, and balcony repairs.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
    tags: ["Condominium", "Repairs", "Water Damage"],
  },
  {
    id: 5,
    title: "Retail Center Renovation",
    description:
      "Complete renovation of a retail center, including facade updates, structural repairs, and accessibility improvements.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
    tags: ["Retail", "Renovation", "Facade"],
  },
  {
    id: 6,
    title: "Apartment Building Maintenance",
    description:
      "Ongoing maintenance program for a large apartment building, including preventive repairs and seasonal inspections.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
    tags: ["Apartment", "Maintenance", "Preventive"],
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === filter || project.tags.includes(filter)))
    }
  }, [filter])

  const categories = ["All", "Residential", "Commercial", "Restoration", "Repairs", "Maintenance"]

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
              <HighlightBadge text="OUR PORTFOLIO" className="mb-4" />
              <TextReveal text="Our Projects" element="h1" className="text-4xl md:text-5xl font-bold mb-6" />
              <TextReveal
                text="Explore our portfolio of successful building restoration and rehabilitation projects"
                element="p"
                className="text-xl md:text-2xl text-blue-100"
                delay={0.3}
              />
            </AnimatedSection>
          </div>
        </AnimatedBackground>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={filter === category ? "default" : "outline"}
                      className={`rounded-full ${
                        filter === category
                          ? "bg-blue-900 hover:bg-blue-800 text-white"
                          : "text-gray-700 hover:text-blue-900"
                      }`}
                      onClick={() => setFilter(category)}
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 * ((index % 3) + 1)}>
                <InteractiveCard>
                  <Card className="border-none shadow-lg overflow-hidden h-full">
                    <div className="relative h-64 overflow-hidden">
                      <AnimatedImage src={project.image || "/placeholder.svg"} alt={project.title} fill effect="zoom" />
                      <div className="absolute top-4 left-4">
                        <HighlightBadge text={project.category} />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-900 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/projects/${project.id}`}
                        className="text-blue-900 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
                      >
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <ParticleBackground color="rgba(15, 40, 117, 0.1)" particleCount={20} className="z-0" speed={0.2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <HighlightBadge text="SPOTLIGHT" className="mb-4" />
              <TextReveal
                text="Featured Project"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              />
              <TextReveal
                text="Take a closer look at one of our most challenging and successful projects."
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <InteractiveCard tiltEffect={false} hoverScale={1.01}>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[400px] lg:h-auto">
                    <AnimatedImage
                      src="/placeholder.svg?height=800&width=600"
                      alt="Featured project"
                      fill
                      effect="zoom"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <HighlightBadge text="Commercial" className="mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      Downtown Office Tower Restoration
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      This comprehensive restoration project involved addressing significant structural issues, facade
                      repairs, and complete modernization of a 30-story office tower in downtown Toronto. The project
                      was completed on time and within budget, despite numerous challenges.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Client</h4>
                        <p className="text-gray-700">Ontario Business Group</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Duration</h4>
                        <p className="text-gray-700">18 months</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                        <p className="text-gray-700">Toronto, ON</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Year</h4>
                        <p className="text-gray-700">2021</p>
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6 inline-flex items-center"
                      >
                        <Link href="/projects/featured">
                          View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </AnimatedSection>
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
              Contact us today to discuss your building restoration and rehabilitation needs. Our team is ready to help
              you achieve your goals.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <Button asChild className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
