/**
 * Utility functions for handling images from internet sources
 */

// Map of image categories to their file paths
export const assetImages = {
  // Hero and banner images
  banners: {
    homeBanner: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
    aboutBanner: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
    servicesBanner: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    projectsBanner: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071",
    contactBanner: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069",
  },

  // Project images
  projects: {
    commercial: [
      {
        id: "comm-1",
        src: "/images/projects/stucco-work.jpg",
        alt: "Building Envelope & Stucco Preparation",
        title: "Building Envelope & Stucco Preparation",
        category: "commercial",
      },
      {
        id: "comm-2",
        src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070",
        alt: "Retail Store Construction",
        title: "Retail Store Construction",
        category: "commercial",
      },
      {
        id: "comm-3",
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974",
        alt: "Restaurant Renovation",
        title: "Restaurant Renovation",
        category: "commercial",
      },
    ],
    residential: [
      {
        id: "res-1",
        src: "/images/projects/new-stone-sill.jpg",
        alt: "New Stone Window Sills Installation",
        title: "New Stone Window Sills Installation",
        category: "residential",
      },
      {
        id: "res-2",
        src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070",
        alt: "Kitchen Remodeling",
        title: "Kitchen Remodeling",
        category: "residential",
      },
      {
        id: "res-3",
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974",
        alt: "Bathroom Renovation",
        title: "Bathroom Renovation",
        category: "residential",
      },
    ],
    restoration: [
      {
        id: "rest-1",
        src: "/images/projects/after-1.jpg",
        alt: "Masonry Restoration",
        title: "Masonry Restoration",
        category: "restoration",
      },
      {
        id: "rest-2",
        src: "/images/projects/after-2.jpg",
        alt: "Building Envelope Repair",
        title: "Building Envelope Repair",
        category: "restoration",
      },
      {
        id: "rest-3",
        src: "/images/projects/after-3.jpg",
        alt: "Brick Wall Reconstruction",
        title: "Brick Wall Reconstruction",
        category: "restoration",
      },
    ],
  },

  // Service images
  services: {
    construction: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    renovation: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=2070",
    restoration: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070",
    waterDamage: "https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?q=80&w=2073",
    fireDamage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    damageRepair: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2071",
    moldRemediation: "https://images.unsplash.com/photo-1585211969224-3e992986159d?q=80&w=2071",
  },

  // Team member images
  team: [
    {
      id: "team-1",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
      alt: "John Doe - CEO",
      name: "John Doe",
      position: "CEO & Founder",
    },
    {
      id: "team-2",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
      alt: "Jane Smith - Project Manager",
      name: "Jane Smith",
      position: "Project Manager",
    },
    {
      id: "team-3",
      src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
      alt: "Mike Johnson - Construction Lead",
      name: "Mike Johnson",
      position: "Construction Lead",
    },
  ],

  // Before/After project images - Real RainForces projects
  beforeAfter: [
    {
      id: "ba-1",
      before: "/images/projects/before-1.jpg",
      after: "/images/projects/after-1.jpg",
      title: "Masonry Restoration & Cleanup",
      description: "Complete restoration of deteriorated brick masonry with professional cleanup and mortar repair",
    },
    {
      id: "ba-2",
      before: "/images/projects/before-2.jpg",
      after: "/images/projects/after-2.jpg",
      title: "Building Envelope Restoration",
      description: "Structural repair of damaged brick wall with complete restoration to original integrity",
    },
    {
      id: "ba-3",
      before: "/images/projects/before-3.jpg",
      after: "/images/projects/after-3.jpg",
      title: "Brick Wall Reconstruction",
      description:
        "Professional reconstruction of damaged brick sections with matching materials and expert craftsmanship",
    },
  ],

  // Testimonial client images
  testimonials: [
    {
      id: "test-1",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
      alt: "Sarah Johnson - Homeowner",
    },
    {
      id: "test-2",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
      alt: "Michael Chen - Business Owner",
    },
    {
      id: "test-3",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974",
      alt: "Emily Rodriguez - Property Manager",
    },
  ],

  // Gallery images - Updated with new real project images
  gallery: [
    {
      id: "gal-1",
      src: "/images/projects/after-2.jpg",
      alt: "Building envelope restoration",
      category: "restoration",
    },
    {
      id: "gal-2",
      src: "/images/projects/after-1.jpg",
      alt: "Masonry restoration",
      category: "restoration",
    },
    {
      id: "gal-3",
      src: "/images/projects/after-3.jpg",
      alt: "Brick wall reconstruction",
      category: "restoration",
    },
    {
      id: "gal-4",
      src: "/images/projects/new-stone-sill.jpg",
      alt: "New stone window sills installation",
      category: "residential",
    },
    {
      id: "gal-5",
      src: "/images/projects/stucco-work.jpg",
      alt: "Building envelope & stucco preparation",
      category: "commercial",
    },
    {
      id: "gal-6",
      src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072",
      alt: "Restoration project",
      category: "restoration",
    },
    {
      id: "gal-7",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
      alt: "Modern kitchen",
      category: "residential",
    },
    {
      id: "gal-8",
      src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070",
      alt: "Commercial interior",
      category: "commercial",
    },
    {
      id: "gal-9",
      src: "https://images.unsplash.com/photo-1584463623578-37726932b211?q=80&w=2033",
      alt: "Water damage repair",
      category: "restoration",
    },
    {
      id: "gal-10",
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
      alt: "Bathroom remodel",
      category: "residential",
    },
    {
      id: "gal-11",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      alt: "Commercial building",
      category: "commercial",
    },
    {
      id: "gal-12",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      alt: "Luxury home",
      category: "residential",
    },
  ],

  // Miscellaneous images
  misc: {
    logo: "/images/rainforces-logo-transparent.png",
    favicon: "https://placehold.co/32x32/2563eb/ffffff?text=RF&font=montserrat",
    ctaBackground: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
  },
}

// Get all project images as a flat array
export const getAllProjectImages = () => {
  const { commercial, residential, restoration } = assetImages.projects
  return [...commercial, ...residential, ...restoration]
}

// Get all before/after images
export const getBeforeAfterImages = () => {
  return assetImages.beforeAfter
}

// Get team member images
export const getTeamMembers = () => {
  return assetImages.team
}

// Get testimonial images
export const getTestimonialImages = () => {
  return assetImages.testimonials
}

// Get gallery images
export const getGalleryImages = () => {
  return assetImages.gallery
}

// Function to get a random banner image
export const getRandomBanner = () => {
  const banners = Object.values(assetImages.banners)
  const randomIndex = Math.floor(Math.random() * banners.length)
  return banners[randomIndex]
}

// Function to get images by category
export const getImagesByCategory = (category: string) => {
  if (category === "all") {
    return assetImages.gallery
  }
  return assetImages.gallery.filter((img) => img.category === category)
}
