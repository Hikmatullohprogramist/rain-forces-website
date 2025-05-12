import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import TextReveal from "@/components/text-reveal"
import AnimatedImage from "@/components/animated-image"
import AnimatedIcon from "@/components/animated-icon"
import ParticleBackground from "@/components/particle-background"
import AnimatedBackground from "@/components/animated-background"
import HighlightBadge from "@/components/highlight-badge"
import InteractiveCard from "@/components/interactive-card"

export default function AboutPage() {
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
              <HighlightBadge text="ESTABLISHED 2007" className="mb-4" />
              <TextReveal text="About RainForces" element="h1" className="text-4xl md:text-5xl font-bold mb-6" />
              <TextReveal
                text="Building trust through quality restoration since 2007"
                element="p"
                className="text-xl md:text-2xl text-blue-100"
                delay={0.3}
              />
            </AnimatedSection>
          </div>
        </AnimatedBackground>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <TextReveal
                  text="Our Story"
                  element="h2"
                  className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                />
                <AnimatedSection delay={0.2}>
                  <p className="text-lg text-gray-700 mb-6">
                    Founded in 2007 by Mehrddin Gadoyev, RainForces has grown from a small local contractor to one of
                    Ontario's most trusted building restoration and rehabilitation companies.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <p className="text-lg text-gray-700 mb-6">
                    With over 15 years of experience in the industry, we have successfully completed hundreds of
                    projects across Ontario, ranging from small residential repairs to large-scale commercial
                    rehabilitations.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <p className="text-lg text-gray-700">
                    Our mission is to provide high-quality building restoration and rehabilitation services that exceed
                    our clients' expectations while maintaining the highest standards of professionalism, integrity, and
                    craftsmanship.
                  </p>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <AnimatedImage
                  src="/placeholder.svg?height=800&width=600"
                  alt="RainForces company history"
                  fill
                  effect="zoom"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <ParticleBackground color="rgba(15, 40, 117, 0.1)" particleCount={20} className="z-0" speed={0.2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <TextReveal
                text="Our Values"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              />
              <TextReveal
                text="At RainForces, our values guide everything we do and shape how we interact with our clients, partners, and community."
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12" />,
                title: "Quality",
                description:
                  "We are committed to delivering the highest quality workmanship in every project we undertake.",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Customer Focus",
                description:
                  "We prioritize our clients' needs and strive to exceed their expectations in every interaction.",
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Excellence",
                description:
                  "We pursue excellence in all aspects of our work, from planning to execution and follow-up.",
              },
              {
                icon: <Calendar className="h-12 w-12" />,
                title: "Reliability",
                description: "We honor our commitments and deliver our services on time and within budget.",
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <InteractiveCard>
                  <Card className="border-none shadow-lg h-full">
                    <CardContent className="p-8 text-center">
                      <AnimatedIcon icon={value.icon} size="lg" className="mx-auto mb-6" hoverEffect="bounce" />
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div>
                <HighlightBadge text="LEADERSHIP" className="mb-4" />
                <TextReveal
                  text="Meet Our Founder"
                  element="h2"
                  className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                />
                <TextReveal
                  text="Mehrddin Gadoyev"
                  element="h3"
                  className="text-2xl font-semibold mb-4 text-blue-900"
                  delay={0.2}
                />
                <AnimatedSection delay={0.3}>
                  <p className="text-lg text-gray-700 mb-6">
                    With over 10 years of experience in the construction industry, Mehrddin Gadoyev founded RainForces
                    in 2007 with a vision to provide high-quality building restoration and rehabilitation services to
                    the Ontario community.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <p className="text-lg text-gray-700 mb-6">
                    Mehrddin's expertise in building restoration, combined with his commitment to quality and customer
                    satisfaction, has been the driving force behind RainForces' success and growth over the years.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.5}>
                  <p className="text-lg text-gray-700">
                    Under his leadership, RainForces has completed numerous successful projects and built a reputation
                    for excellence, reliability, and integrity in the construction industry.
                  </p>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.3} className="order-1 lg:order-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <AnimatedImage
                  src="/placeholder.svg?height=800&width=600"
                  alt="Mehrddin Gadoyev, Founder of RainForces"
                  fill
                  effect="slide"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Description */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <HighlightBadge text="OUR EXPERTS" className="mb-4" />
              <TextReveal text="Our Team" element="h2" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" />
              <TextReveal
                text="Our team of in-house professionals brings together decades of combined experience in building restoration and rehabilitation."
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/placeholder.svg?height=400&width=400",
                name: "Jane Smith",
                position: "Project Manager",
              },
              {
                image: "/placeholder.svg?height=400&width=400",
                name: "Robert Johnson",
                position: "Lead Engineer",
              },
              {
                image: "/placeholder.svg?height=400&width=400",
                name: "Emily Davis",
                position: "Restoration Specialist",
              },
            ].map((member, index) => (
              <AnimatedSection key={index} delay={0.2 * (index + 1)}>
                <InteractiveCard tiltEffect={true} hoverScale={1.03}>
                  <Card className="border-none shadow-lg overflow-hidden h-full">
                    <div className="relative h-80">
                      <AnimatedImage src={member.image || "/placeholder.svg"} alt={member.name} fill effect="zoom" />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                      <p className="text-blue-900">{member.position}</p>
                    </CardContent>
                  </Card>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.8} direction="up">
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Join Our Team</h3>
              <p className="text-lg text-gray-700 mb-6">
                We are always looking for talented and passionate individuals to join our team. If you are interested in
                a career in building restoration and rehabilitation, we'd love to hear from you.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At RainForces, we offer competitive compensation, opportunities for professional growth, and a
                collaborative work environment.
              </p>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6">
                View Career Opportunities
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <AnimatedBackground color1="rgba(30, 58, 138, 0.5)" color2="rgba(30, 64, 175, 0.5)">
          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection>
              <TextReveal text="Ready to Work With Us?" element="h2" className="text-3xl md:text-4xl font-bold mb-6" />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact our team today to discuss your building restoration and rehabilitation needs.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <Button asChild className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </AnimatedSection>
          </div>
        </AnimatedBackground>
      </section>
    </div>
  )
}
