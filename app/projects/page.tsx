"use client"

import { useState } from "react"
import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import CTASection from "@/components/layout/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import ResponsiveImage from "@/components/ui/responsive-image"
import { assetImages, getAllProjectImages } from "@/lib/image-utils"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  // Get all project images
  const galleryImages = getAllProjectImages()

  // Filter images based on selected category
  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "restoration", label: "Restoration" },
  ]

  return (
    <PageLayout>
      <PageBanner
        title="Our Projects"
        subtitle="View our portfolio of successful construction and restoration projects."
        backgroundImage={assetImages.banners.projectsBanner}
      />

      <Breadcrumbs items={[{ label: "Projects" }]} />

      {/* Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Project Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our gallery of successful construction and restoration projects. Each project showcases our
              commitment to quality and customer satisfaction.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                className={
                  filter === category.id
                    ? "bg-primary hover:bg-primary-600 text-white"
                    : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                }
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredImages.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-none shadow-lg overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <ResponsiveImage
                        src={project.src}
                        alt={project.alt}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {categories.find((cat) => cat.id === project.category)?.label}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.alt}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        description="Contact us today to discuss your construction or restoration needs and get a free quote."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        background="primary"
      />
    </PageLayout>
  )
}
