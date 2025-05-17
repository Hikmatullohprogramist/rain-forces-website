import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import EmergencyCTA from "@/components/emergency-cta"
import BeforeAfterSection from "@/components/before-after-slider"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import TrustBadges from "@/components/trust-badges"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <ServicesSection />
      <EmergencyCTA />
      <BeforeAfterSection />
      <Testimonials />
      <ContactForm />
      <TrustBadges />
      <Footer />
    </main>
  )
}
