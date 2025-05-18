"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ResponsiveImage from "@/components/ui/responsive-image"
import { getGalleryImages } from "@/lib/image-utils"

export default function GalleryPreview() {
  const galleryImages = getGalleryImages().slice(0, 8) // Get first 8 images

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">OUR WORK</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Project Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of successful construction and restoration projects showcasing our expertise and
            attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 || index === 3 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <ResponsiveImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-primary hover:bg-primary-600 text-white">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
