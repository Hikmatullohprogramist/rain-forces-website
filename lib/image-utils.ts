/**
 * Utility functions for handling images from the lib/assetss/ directory
 */

// Map of image categories to their file paths
export const assetImages = {
  // Hero and banner images
  banners: {
    homeBanner: "/lib/assetss/banners/home-banner.jpg",
    aboutBanner: "/lib/assetss/banners/about-banner.jpg",
    servicesBanner: "/lib/assetss/banners/services-banner.jpg",
    projectsBanner: "/lib/assetss/banners/projects-banner.jpg",
    contactBanner: "/lib/assetss/banners/contact-banner.jpg",
  },

  // Project images
  projects: {
    commercial: [
      {
        id: "comm-1",
        src: "/lib/assetss/projects/commercial-1.jpg",
        alt: "Commercial Office Renovation",
        title: "Commercial Office Renovation",
        category: "commercial",
      },
      {
        id: "comm-2",
        src: "/lib/assetss/projects/commercial-2.jpg",
        alt: "Retail Store Construction",
        title: "Retail Store Construction",
        category: "commercial",
      },
      {
        id: "comm-3",
        src: "/lib/assetss/projects/commercial-3.jpg",
        alt: "Restaurant Renovation",
        title: "Restaurant Renovation",
        category: "commercial",
      },
    ],
    residential: [
      {
        id: "res-1",
        src: "/lib/assetss/projects/residential-1.jpg",
        alt: "Luxury Home Construction",
        title: "Luxury Home Construction",
        category: "residential",
      },
      {
        id: "res-2",
        src: "/lib/assetss/projects/residential-2.jpg",
        alt: "Kitchen Remodeling",
        title: "Kitchen Remodeling",
        category: "residential",
      },
      {
        id: "res-3",
        src: "/lib/assetss/projects/residential-3.jpg",
        alt: "Bathroom Renovation",
        title: "Bathroom Renovation",
        category: "residential",
      },
    ],
    restoration: [
      {
        id: "rest-1",
        src: "/lib/assetss/projects/restoration-1.jpg",
        alt: "Water Damage Restoration",
        title: "Water Damage Restoration",
        category: "restoration",
      },
      {
        id: "rest-2",
        src: "/lib/assetss/projects/restoration-2.jpg",
        alt: "Fire Damage Repair",
        title: "Fire Damage Repair",
        category: "restoration",
      },
      {
        id: "rest-3",
        src: "/lib/assetss/projects/restoration-3.jpg",
        alt: "Mold Remediation",
        title: "Mold Remediation",
        category: "restoration",
      },
    ],
  },

  // Service images
  services: {
    construction: "/lib/assetss/services/construction.jpg",
    renovation: "/lib/assetss/services/renovation.jpg",
    restoration: "/lib/assetss/services/restoration.jpg",
    waterDamage: "/lib/assetss/services/water-damage.jpg",
    fireDamage: "/lib/assetss/services/fire-damage.jpg",
    moldRemediation: "/lib/assetss/services/mold-remediation.jpg",
  },

  // Team member images
  team: [
    {
      id: "team-1",
      src: "/lib/assetss/team/team-member-1.jpg",
      alt: "John Doe - CEO",
      name: "John Doe",
      position: "CEO & Founder",
    },
    {
      id: "team-2",
      src: "/lib/assetss/team/team-member-2.jpg",
      alt: "Jane Smith - Project Manager",
      name: "Jane Smith",
      position: "Project Manager",
    },
    {
      id: "team-3",
      src: "/lib/assetss/team/team-member-3.jpg",
      alt: "Mike Johnson - Construction Lead",
      name: "Mike Johnson",
      position: "Construction Lead",
    },
  ],

  // Before/After project images
  beforeAfter: [
    {
      id: "ba-1",
      before: "/lib/assetss/before-after/before-1.jpg",
      after: "/lib/assetss/before-after/after-1.jpg",
      title: "Kitchen Renovation",
      description: "Complete kitchen renovation with modern appliances and custom cabinetry",
    },
    {
      id: "ba-2",
      before: "/lib/assetss/before-after/before-2.jpg",
      after: "/lib/assetss/before-after/after-2.jpg",
      title: "Water Damage Restoration",
      description: "Basement restoration after severe flooding",
    },
    {
      id: "ba-3",
      before: "/lib/assetss/before-after/before-3.jpg",
      after: "/lib/assetss/before-after/after-3.jpg",
      title: "Commercial Office Remodel",
      description: "Modern office space transformation",
    },
  ],

  // Testimonial client images
  testimonials: [
    {
      id: "test-1",
      src: "/lib/assetss/testimonials/client-1.jpg",
      alt: "Client 1",
    },
    {
      id: "test-2",
      src: "/lib/assetss/testimonials/client-2.jpg",
      alt: "Client 2",
    },
    {
      id: "test-3",
      src: "/lib/assetss/testimonials/client-3.jpg",
      alt: "Client 3",
    },
  ],

  // Miscellaneous images
  misc: {
    logo: "/lib/assetss/misc/logo.png",
    favicon: "/lib/assetss/misc/favicon.ico",
    ctaBackground: "/lib/assetss/misc/cta-background.jpg",
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

// Function to get a random banner image
export const getRandomBanner = () => {
  const banners = Object.values(assetImages.banners)
  const randomIndex = Math.floor(Math.random() * banners.length)
  return banners[randomIndex]
}
