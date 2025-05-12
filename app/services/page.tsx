import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, PenToolIcon as Tool, Wrench, Hammer, PaintBucket } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import TextReveal from "@/components/text-reveal"
import AnimatedImage from "@/components/animated-image"
import AnimatedIcon from "@/components/animated-icon"
import ParticleBackground from "@/components/particle-background"
import AnimatedBackground from "@/components/animated-background"
import HighlightBadge from "@/components/highlight-badge"
import InteractiveCard from "@/components/interactive-card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-blue-900 text-white overflow-hidden">
        <AnimatedBackground>
          <ParticleBackground
            color="rgba(255, 255, 255, 0.5)"
            particleCount={40}
            className="z-0"
            minSize={1}
            maxSize={3}
          />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <HighlightBadge text="PROFESSIONAL SOLUTIONS" className="mb-4" />
              <TextReveal text="Our Services" element="h1" className="text-4xl md:text-5xl font-bold mb-6" />
              <TextReveal
                text="Comprehensive building restoration and rehabilitation solutions for residential and commercial properties"
                element="p"
                className="text-xl md:text-2xl text-white"
                delay={0.3}
              />
            </AnimatedSection>
          </div>
        </AnimatedBackground>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <TextReveal
                text="What We Offer"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              />
              <TextReveal
                text="At RainForces, we provide a wide range of building restoration and rehabilitation services to meet all your property needs."
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          {/* Restoration */}
          <div id="restoration" className="mb-24 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div>
                  <div className="flex items-center mb-6">
                    <AnimatedIcon icon={<Tool className="h-10 w-10" />} size="lg" hoverEffect="rotate" />
                    <h3 className="text-3xl font-bold text-gray-900 ml-4">Restoration</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Our comprehensive restoration services are designed to bring damaged buildings back to their
                    original condition or better. We specialize in restoring buildings affected by water damage, fire
                    damage, structural issues, and more.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Water damage restoration",
                      "Fire damage restoration",
                      "Structural restoration",
                      "Facade restoration",
                      "Historic building restoration",
                    ].map((item, index) => (
                      <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-900 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      </AnimatedSection>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.3}>
                <InteractiveCard>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <AnimatedImage
                      src="/placeholder.svg?height=800&width=600"
                      alt="Building restoration services"
                      fill
                      effect="zoom"
                    />
                  </div>
                </InteractiveCard>
              </AnimatedSection>
            </div>
          </div>

          {/* Repairs */}
          <div id="repairs" className="mb-24 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
                <InteractiveCard>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <AnimatedImage
                      src="/placeholder.svg?height=800&width=600"
                      alt="Building repair services"
                      fill
                      effect="slide"
                    />
                  </div>
                </InteractiveCard>
              </AnimatedSection>
              <AnimatedSection direction="right" className="order-1 lg:order-2">
                <div>
                  <div className="flex items-center mb-6">
                    <AnimatedIcon icon={<Wrench className="h-10 w-10" />} size="lg" hoverEffect="shake" />
                    <h3 className="text-3xl font-bold text-gray-900 ml-4">Repairs</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Our expert repair services address specific issues in your building to prevent further damage and
                    ensure the safety and functionality of your property. We handle everything from minor repairs to
                    major structural fixes.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Concrete repairs",
                      "Masonry repairs",
                      "Roof repairs",
                      "Foundation repairs",
                      "Structural repairs",
                    ].map((item, index) => (
                      <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-900 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      </AnimatedSection>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Maintenance */}
          <div id="maintenance" className="mb-24 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div>
                  <div className="flex items-center mb-6">
                    <AnimatedIcon icon={<Hammer className="h-10 w-10" />} size="lg" hoverEffect="bounce" />
                    <h3 className="text-3xl font-bold text-gray-900 ml-4">Maintenance</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Regular maintenance is essential for preserving the value and integrity of your property. Our
                    maintenance services help prevent costly repairs and extend the life of your building components.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Preventive maintenance programs",
                      "Seasonal inspections",
                      "Building envelope maintenance",
                      "Mechanical systems maintenance",
                      "Electrical systems maintenance",
                    ].map((item, index) => (
                      <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-900 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      </AnimatedSection>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.3}>
                <InteractiveCard>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <AnimatedImage
                      src="/placeholder.svg?height=800&width=600"
                      alt="Building maintenance services"
                      fill
                      effect="zoom"
                    />
                  </div>
                </InteractiveCard>
              </AnimatedSection>
            </div>
          </div>

          {/* Replacement */}
          <div id="replacement" className="scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
                <InteractiveCard>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <AnimatedImage
                      src="/placeholder.svg?height=800&width=600"
                      alt="Building component replacement services"
                      fill
                      effect="slide"
                    />
                  </div>
                </InteractiveCard>
              </AnimatedSection>
              <AnimatedSection direction="right" className="order-1 lg:order-2">
                <div>
                  <div className="flex items-center mb-6">
                    <AnimatedIcon icon={<PaintBucket className="h-10 w-10" />} size="lg" hoverEffect="pulse" />
                    <h3 className="text-3xl font-bold text-gray-900 ml-4">Replacement</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    When repair is not an option, our replacement services provide a complete solution for outdated or
                    severely damaged building components. We ensure seamless integration with your existing structure.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Window and door replacement",
                      "Roof replacement",
                      "Siding replacement",
                      "Flooring replacement",
                      "Fixture and fitting replacement",
                    ].map((item, index) => (
                      <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-900 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      </AnimatedSection>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <ParticleBackground color="rgba(15, 40, 117, 0.1)" particleCount={20} className="z-0" speed={0.2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <HighlightBadge text="OUR APPROACH" className="mb-4" />
              <TextReveal
                text="Our Process"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              />
              <TextReveal
                text="We follow a systematic approach to ensure the successful completion of every project."
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We begin with a thorough consultation to understand your needs and assess the condition of your property.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Our team develops a detailed plan tailored to your specific requirements, including timeline and budget.",
              },
              {
                number: "03",
                title: "Execution",
                description:
                  "We execute the project with precision, adhering to the highest standards of quality and safety.",
              },
              {
                number: "04",
                title: "Follow-up",
                description:
                  "After completion, we conduct a thorough inspection and follow up to ensure your complete satisfaction.",
              },
            ].map((step, index) => (
              <AnimatedSection key={index} delay={0.2 * (index + 1)}>
                <InteractiveCard>
                  <Card className="border-none shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="text-5xl font-bold text-blue-200 mb-4">{step.number}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <AnimatedBackground color1="rgba(30, 58, 138, 0.5)" color2="rgba(30, 64, 175, 0.5)">
          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection>
              <TextReveal text="Ready to Get Started?" element="h2" className="text-3xl md:text-4xl font-bold mb-6" />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our team is ready to help you with your building
                restoration and rehabilitation needs.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <Button asChild className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </AnimatedSection>
          </div>
        </AnimatedBackground>
      </section>
    </div>
  )
}
