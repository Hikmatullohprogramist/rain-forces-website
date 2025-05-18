"use client"

import { useState } from "react"
import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { assetImages, getImagesByCategory } from "@/lib/image-utils"
import GalleryGrid from "@/components/gallery/gallery-grid"

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")
  const [view, setView] = useState<"grid" | "masonry">("grid")

  const galleryImages = getImagesByCategory(filter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "restoration", label: "Restoration" },
  ]

  return (
    <PageLayout>
      <PageBanner
        title="Project Gallery"
        subtitle="Browse our collection of construction and restoration projects"
        backgroundImage={assetImages.banners.projectsBanner}
      />

      <Breadcrumbs items={[{ label: "Gallery" }]} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Our Project Gallery</h2>
              <p className="text-gray-600">Browse our portfolio of successful projects</p>
            </div>

            <div className="flex mt-4 md:mt-0">
              <Button
                variant={view === "grid" ? "default" : "outline"}
                className="mr-2"
                onClick={() => setView("grid")}
              >
                Grid View
              </Button>
              <Button variant={view === "masonry" ? "default" : "outline"} onClick={() => setView("masonry")}>
                Masonry View
              </Button>
            </div>
          </div>

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

          {/* Gallery Grid */}
          <GalleryGrid images={galleryImages} view={view} />
        </div>
      </section>
    </PageLayout>
  )
}
