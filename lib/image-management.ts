/**
 * Image Management Utility
 *
 * This utility provides functions for managing images in the application.
 * It includes functions for loading images, optimizing images, and managing image metadata.
 */

import { assetImages } from "./image-utils"

// Image categories
export type ImageCategory = "banners" | "projects" | "services" | "team" | "testimonials" | "gallery" | "misc"

// Image metadata
export interface ImageMetadata {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
  category?: string
  tags?: string[]
  width?: number
  height?: number
  createdAt?: string
  updatedAt?: string
}

/**
 * Get image metadata for a specific image
 * @param src The image source URL
 * @returns The image metadata or null if not found
 */
export function getImageMetadata(src: string): ImageMetadata | null {
  // Check in projects
  for (const category of Object.keys(assetImages.projects)) {
    const images = assetImages.projects[category as keyof typeof assetImages.projects]
    if (Array.isArray(images)) {
      const image = images.find((img) => img.src === src)
      if (image) {
        return {
          ...image,
          category,
        }
      }
    }
  }

  // Check in gallery
  const galleryImage = assetImages.gallery.find((img) => img.src === src)
  if (galleryImage) {
    return galleryImage
  }

  // Check in team
  const teamImage = assetImages.team.find((img) => img.src === src)
  if (teamImage) {
    return teamImage
  }

  // Check in testimonials
  const testimonialImage = assetImages.testimonials.find((img) => img.src === src)
  if (testimonialImage) {
    return testimonialImage
  }

  return null
}

/**
 * Get optimized image URL for a CDN
 * @param src The original image source URL
 * @param width The desired width
 * @param quality The desired quality (1-100)
 * @returns The optimized image URL
 */
export function getOptimizedImageUrl(src: string, width?: number, quality?: number): string {
  // If it's an Unsplash image, we can use their CDN parameters
  if (src.includes("unsplash.com")) {
    const url = new URL(src)

    // Add width parameter if provided
    if (width) {
      url.searchParams.set("w", width.toString())
    }

    // Add quality parameter if provided
    if (quality) {
      url.searchParams.set("q", quality.toString())
    }

    // Add auto format parameter for WebP support
    url.searchParams.set("auto", "format")

    return url.toString()
  }

  // For other images, return the original URL
  return src
}

/**
 * Get responsive image sources for different screen sizes
 * @param src The original image source URL
 * @returns An object with different image sizes
 */
export function getResponsiveImageSources(src: string) {
  return {
    small: getOptimizedImageUrl(src, 640, 80),
    medium: getOptimizedImageUrl(src, 1024, 80),
    large: getOptimizedImageUrl(src, 1920, 80),
    original: src,
  }
}

/**
 * Generate image placeholder URL
 * @param width The placeholder width
 * @param height The placeholder height
 * @param text Optional text to display on the placeholder
 * @returns The placeholder URL
 */
export function getPlaceholderImage(width: number, height: number, text?: string): string {
  const textParam = text ? `&text=${encodeURIComponent(text)}` : ""
  return `https://placehold.co/${width}x${height}/2563eb/ffffff?${textParam}&font=montserrat`
}
