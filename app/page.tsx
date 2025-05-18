import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import BeforeAfterSection from "@/components/before-after-slider"
import Testimonials from "@/components/testimonials"
import EmergencyCTA from "@/components/emergency-cta"
import GalleryPreview from "@/components/gallery-preview"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <GalleryPreview />
      <Testimonials />
      <EmergencyCTA />
    </main>
  )
}
