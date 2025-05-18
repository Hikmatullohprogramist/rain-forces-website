import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import EmergencyCTA from "@/components/emergency-cta"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import TrustBadges from "@/components/trust-badges"
import BeforeAfterSection from "@/components/before-after-slider"
import Footer from "@/components/footer"
import ProjectShowcase from "@/components/project-showcase"

export default function Home() {
  // Sample project data with images
  const featuredProjects = [
    {
      id: "1",
      title: "Commercial Building Renovation",
      category: "Commercial Construction",
      description:
        "Complete renovation of a 5-story office building in downtown Toronto, including structural repairs, facade restoration, and interior modernization.",
      image: "/images/commercial-renovation.jpg",
    },
    {
      id: "2",
      title: "Luxury Home Construction",
      category: "Residential Construction",
      description:
        "Custom-built 4,500 sq ft luxury home featuring high-end finishes, smart home technology, and energy-efficient systems.",
      image: "/images/luxury-home.jpg",
    },
    {
      id: "3",
      title: "Historic Building Restoration",
      category: "Restoration",
      description:
        "Careful restoration of a 100-year-old heritage building, preserving historical elements while updating structural integrity and systems.",
      image: "/images/historic-restoration.jpg",
    },
  ]

  return (
    <main>
      <Header />
      <HeroSection />
      <TrustBadges />
      <ServicesSection />

      {/* Add Project Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent construction and restoration projects showcasing our expertise and quality
              craftsmanship.
            </p>
          </div>
          <ProjectShowcase projects={featuredProjects} />
        </div>
      </section>

      <BeforeAfterSection />
      <EmergencyCTA />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
