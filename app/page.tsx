import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, Shield, ThumbsUp, PenToolIcon as Tool, Wrench, Hammer, PaintBucket } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ServiceCard from "@/components/service-card"
import ValueCard from "@/components/value-card"
import ProjectCard from "@/components/project-card"
import AnimatedSection from "@/components/animated-section"
import ParallaxBackground from "@/components/parallax-background"
import AnimatedCounter from "@/components/animated-counter"
import TextReveal from "@/components/text-reveal"
import ScrollProgress from "@/components/scroll-progress"
import FloatingElement from "@/components/floating-element"
import InteractiveCard from "@/components/interactive-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <ParallaxBackground
          imageUrl="/placeholder.svg?height=1080&width=1920"
          alt="Construction site"
          className="absolute inset-0"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <TextReveal
                text="Trust Rain Forest to put things right."
                element="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Specializing in building restoration and rehabilitation services for residential and commercial
                buildings in Ontario since 2007.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} direction="left">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <AnimatedSection delay={0.1}>
              <div className="p-4">
                <h3 className="text-4xl font-bold text-blue-900 mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-4">
                <h3 className="text-4xl font-bold text-blue-900 mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-4">
                <h3 className="text-4xl font-bold text-blue-900 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </h3>
                <p className="text-gray-600">Team Members</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-4">
                <h3 className="text-4xl font-bold text-blue-900 mb-2">
                  <AnimatedCounter end={98} suffix="%" />
                </h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <TextReveal
                text="Our Services"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              />
              <TextReveal
                text="We provide comprehensive building restoration and rehabilitation services to keep your property in excellent condition."
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Tool className="h-12 w-12 text-blue-900 dark:text-blue-400" />,
                title: "Restoration",
                description: "Complete restoration services for damaged buildings and structures.",
                link: "/services#restoration",
              },
              {
                icon: <Wrench className="h-12 w-12 text-blue-900 dark:text-blue-400" />,
                title: "Repairs",
                description: "Professional repair services for all types of building issues.",
                link: "/services#repairs",
              },
              {
                icon: <Hammer className="h-12 w-12 text-blue-900 dark:text-blue-400" />,
                title: "Maintenance",
                description: "Regular maintenance to prevent costly repairs and extend building life.",
                link: "/services#maintenance",
              },
              {
                icon: <PaintBucket className="h-12 w-12 text-blue-900 dark:text-blue-400" />,
                title: "Replacement",
                description: "Complete replacement services for outdated or damaged components.",
                link: "/services#replacement",
              },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <InteractiveCard>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                  />
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <TextReveal
                text="Why Choose Us"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              />
              <TextReveal
                text="At Rain Forest, we pride ourselves on our commitment to excellence and customer satisfaction."
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-16 w-16 text-blue-900 dark:text-blue-400" />,
                title: "On-time Delivery",
                description:
                  "We understand the importance of timely project completion and always deliver on schedule.",
              },
              {
                icon: <DollarSign className="h-16 w-16 text-blue-900 dark:text-blue-400" />,
                title: "Cost-effectiveness",
                description: "We provide high-quality services at competitive prices without compromising on quality.",
              },
              {
                icon: <ThumbsUp className="h-16 w-16 text-blue-900 dark:text-blue-400" />,
                title: "High-quality Result",
                description:
                  "Our team of professionals ensures that every project meets the highest standards of quality.",
              },
              {
                icon: <Shield className="h-16 w-16 text-blue-900 dark:text-blue-400" />,
                title: "Honesty & Integrity",
                description: "We believe in transparent communication and maintaining the highest level of integrity.",
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <ValueCard icon={value.icon} title={value.title} description={value.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <TextReveal
                text="Featured Projects"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              />
              <TextReveal
                text="Take a look at some of our recent building restoration and rehabilitation projects."
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/placeholder.svg?height=600&width=800",
                title: "High-rise Residential Restoration",
                category: "Residential",
              },
              {
                image: "/placeholder.svg?height=600&width=800",
                title: "Commercial Building Rehabilitation",
                category: "Commercial",
              },
              {
                image: "/placeholder.svg?height=600&width=800",
                title: "Historic Building Preservation",
                category: "Restoration",
              },
            ].map((project, index) => (
              <AnimatedSection key={index} delay={0.2 * (index + 1)}>
                <InteractiveCard>
                  <ProjectCard image={project.image} title={project.title} category={project.category} />
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.8} direction="up">
            <div className="text-center mt-12">
              <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-8">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <TextReveal
                text="What Our Clients Say"
                element="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              />
              <TextReveal
                text="Don't just take our word for it. Here's what our satisfied clients have to say about our services."
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                delay={0.3}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <TextReveal
              text="Ready to Start Your Project?"
              element="h2"
              className="text-3xl md:text-4xl font-bold mb-6"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let us help you bring your vision to life.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <FloatingElement amplitude={5} duration={3}>
              <Button asChild className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </FloatingElement>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
