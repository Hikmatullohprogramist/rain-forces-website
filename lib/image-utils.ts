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

  // Project images - Only real RainForces projects
  projects: {
    commercial: [
      {
        id: "comm-1",
        src: "/images/projects/building-envelope-work.jpg",
        alt: "Building Envelope & Stucco Preparation",
        title: "Building Envelope & Stucco Preparation",
        category: "commercial",
      },
      {
        id: "comm-2",
        src: "/images/projects/commercial-building-workers.jpg",
        alt: "Commercial Building Restoration",
        title: "Commercial Building Restoration",
        category: "commercial",
      },
      {
        id: "comm-3",
        src: "/images/projects/building-complex.jpg",
        alt: "Multi-Unit Building Construction",
        title: "Multi-Unit Building Construction",
        category: "commercial",
      },
      {
        id: "comm-4",
        src: "/images/projects/brick-building-exterior.jpg",
        alt: "Commercial Brick Building Restoration",
        title: "Commercial Brick Building Restoration",
        category: "commercial",
      },
      {
        id: "comm-5",
        src: "/images/projects/multi-story-scaffolding.jpg",
        alt: "Multi-Story Building Construction",
        title: "Multi-Story Building Construction",
        category: "commercial",
      },
      {
        id: "comm-6",
        src: "/images/projects/construction-worker-balcony.jpg",
        alt: "Commercial Building Balcony Work",
        title: "Commercial Building Balcony Work",
        category: "commercial",
      },
      {
        id: "comm-7",
        src: "/images/projects/multi-unit-balcony-work.jpg",
        alt: "Multi-Unit Balcony Construction",
        title: "Multi-Unit Balcony Construction",
        category: "commercial",
      },
      {
        id: "comm-8",
        src: "/images/projects/large-residential-complex.jpg",
        alt: "Large Residential Complex",
        title: "Large Residential Complex",
        category: "commercial",
      },
      {
        id: "comm-9",
        src: "/images/projects/construction-site-cityview.jpg",
        alt: "Urban Construction Site with City View",
        title: "Urban Construction Site with City View",
        category: "commercial",
      },
      {
        id: "comm-10",
        src: "/images/projects/multi-unit-construction-fencing.jpg",
        alt: "Multi-Unit Building Construction",
        title: "Multi-Unit Building Construction",
        category: "commercial",
      },
      {
        id: "comm-11",
        src: "/images/projects/balcony-work-ladder.jpg",
        alt: "Professional Balcony Construction",
        title: "Professional Balcony Construction",
        category: "commercial",
      },
      {
        id: "comm-12",
        src: "/images/projects/large-complex-landscaping.jpg",
        alt: "Large Residential Complex Development",
        title: "Large Residential Complex Development",
        category: "commercial",
      },
    ],
    residential: [
      {
        id: "res-1",
        src: "/images/projects/building-stone-sills.jpg",
        alt: "New Stone Window Sills Installation",
        title: "New Stone Window Sills Installation",
        category: "residential",
      },
      {
        id: "res-2",
        src: "/images/projects/brick-building-garage.jpg",
        alt: "Residential Brick Building with Garage",
        title: "Residential Brick Building with Garage",
        category: "residential",
      },
      {
        id: "res-3",
        src: "/images/projects/residential-building-work.jpg",
        alt: "Residential Building Renovation",
        title: "Residential Building Renovation",
        category: "residential",
      },
      {
        id: "res-4",
        src: "/images/projects/patio-balcony-work.jpg",
        alt: "Patio & Balcony Construction",
        title: "Patio & Balcony Construction",
        category: "residential",
      },
      {
        id: "res-5",
        src: "/images/projects/brick-window-detail.jpg",
        alt: "Brick Window Detail Work",
        title: "Brick Window Detail Work",
        category: "residential",
      },
      {
        id: "res-6",
        src: "/images/projects/brick-entrance-handrail.jpg",
        alt: "Brick Entrance with Custom Handrail",
        title: "Brick Entrance with Custom Handrail",
        category: "residential",
      },
      {
        id: "res-7",
        src: "/images/projects/brick-townhouse-balconies.jpg",
        alt: "Brick Townhouse with Balconies",
        title: "Brick Townhouse with Balconies",
        category: "residential",
      },
      {
        id: "res-8",
        src: "/images/projects/residential-retaining-wall.jpg",
        alt: "Residential Retaining Wall & Landscaping",
        title: "Residential Retaining Wall & Landscaping",
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
      {
        id: "rest-4",
        src: "/images/projects/brick-masonry-detail.jpg",
        alt: "Detailed Brick Masonry Work",
        title: "Detailed Brick Masonry Work",
        category: "restoration",
      },
      {
        id: "rest-5",
        src: "/images/projects/building-landscaping.jpg",
        alt: "Building Restoration with Landscaping",
        title: "Building Restoration with Landscaping",
        category: "restoration",
      },
      {
        id: "rest-6",
        src: "/images/projects/landscaping-in-progress.jpg",
        alt: "Site Restoration & Landscaping",
        title: "Site Restoration & Landscaping",
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

  // Gallery images - Only real RainForces project images
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
      src: "/images/projects/building-stone-sills.jpg",
      alt: "New stone window sills installation",
      category: "residential",
    },
    {
      id: "gal-5",
      src: "/images/projects/building-envelope-work.jpg",
      alt: "Building envelope & stucco preparation",
      category: "commercial",
    },
    {
      id: "gal-6",
      src: "/images/projects/brick-building-garage.jpg",
      alt: "Residential brick building with garage",
      category: "residential",
    },
    {
      id: "gal-7",
      src: "/images/projects/commercial-building-workers.jpg",
      alt: "Commercial building restoration",
      category: "commercial",
    },
    {
      id: "gal-8",
      src: "/images/projects/brick-masonry-detail.jpg",
      alt: "Detailed brick masonry work",
      category: "restoration",
    },
    {
      id: "gal-9",
      src: "/images/projects/residential-building-work.jpg",
      alt: "Residential building renovation",
      category: "residential",
    },
    {
      id: "gal-10",
      src: "/images/projects/building-complex.jpg",
      alt: "Multi-unit building construction",
      category: "commercial",
    },
    {
      id: "gal-11",
      src: "/images/projects/building-landscaping.jpg",
      alt: "Building restoration with landscaping",
      category: "restoration",
    },
    {
      id: "gal-12",
      src: "/images/projects/brick-building-exterior.jpg",
      alt: "Commercial brick building restoration",
      category: "commercial",
    },
    {
      id: "gal-13",
      src: "/images/projects/patio-balcony-work.jpg",
      alt: "Patio & balcony construction",
      category: "residential",
    },
    {
      id: "gal-14",
      src: "/images/projects/multi-story-scaffolding.jpg",
      alt: "Multi-story building construction",
      category: "commercial",
    },
    {
      id: "gal-15",
      src: "/images/projects/brick-window-detail.jpg",
      alt: "Brick window detail work",
      category: "residential",
    },
    {
      id: "gal-16",
      src: "/images/projects/brick-entrance-handrail.jpg",
      alt: "Brick entrance with custom handrail",
      category: "residential",
    },
    {
      id: "gal-17",
      src: "/images/projects/brick-townhouse-balconies.jpg",
      alt: "Brick townhouse with balconies",
      category: "residential",
    },
    {
      id: "gal-18",
      src: "/images/projects/landscaping-in-progress.jpg",
      alt: "Site restoration & landscaping",
      category: "restoration",
    },
    {
      id: "gal-19",
      src: "/images/projects/construction-worker-balcony.jpg",
      alt: "Commercial building balcony work",
      category: "commercial",
    },
    {
      id: "gal-20",
      src: "/images/projects/residential-retaining-wall.jpg",
      alt: "Residential retaining wall & landscaping",
      category: "residential",
    },
    {
      id: "gal-21",
      src: "/images/projects/multi-unit-balcony-work.jpg",
      alt: "Multi-unit balcony construction",
      category: "commercial",
    },
    {
      id: "gal-22",
      src: "/images/projects/large-residential-complex.jpg",
      alt: "Large residential complex",
      category: "commercial",
    },
    {
      id: "gal-23",
      src: "/images/projects/construction-site-cityview.jpg",
      alt: "Urban construction site with city view",
      category: "commercial",
    },
    {
      id: "gal-24",
      src: "/images/projects/multi-unit-construction-fencing.jpg",
      alt: "Multi-unit building construction",
      category: "commercial",
    },
    {
      id: "gal-25",
      src: "/images/projects/balcony-work-ladder.jpg",
      alt: "Professional balcony construction",
      category: "commercial",
    },
    {
      id: "gal-26",
      src: "/images/projects/large-complex-landscaping.jpg",
      alt: "Large residential complex development",
      category: "commercial",
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
