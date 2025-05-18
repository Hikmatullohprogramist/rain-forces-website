import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import ResponsiveImage from "@/components/ui/responsive-image"
import ClientAnimatedText from "./client-animated-text"

export default function OwnerStoryServer() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The journey behind RainForces and how our founder's vision shaped our company
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative opacity-0 -translate-x-12 animate-fade-in-left">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <ResponsiveImage
                src="/images/mehriddin-gadoyev.jpg"
                alt="Mehriddin Gadoyev - Founder of RainForces"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <Quote className="h-12 w-12 text-primary/20" />
            </div>
          </div>

          <div className="opacity-0 translate-x-12 animate-fade-in-right">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Mehriddin Gadoyev</h3>
                <p className="text-primary font-medium mb-6">Founder & CEO</p>

                <div className="space-y-4 text-gray-700">
                  <p>
                    The story of RainForces begins with Mehriddin Gadoyev, who immigrated to Canada in 2001 with a dream
                    and a deep passion for construction and restoration. With just $500 in his pocket and years of
                    experience in his homeland, Mehriddin started working for various construction companies to learn
                    the Canadian building standards and practices.
                  </p>

                  <p>
                    After six years of hands-on experience and saving every penny, Mehriddin founded RainForces in 2007.
                    What began as a small operation focusing on minor restoration projects quickly grew as clients
                    recognized his exceptional attention to detail, unwavering work ethic, and commitment to quality.
                  </p>

                  <p>
                    "I named the company RainForces because I believe in the power of restoration – just as rain renews
                    and brings life, we restore and bring new life to damaged buildings," Mehriddin explains. "The
                    'Forces' represents the strength and expertise we bring to every project."
                  </p>

                  <p>
                    Today, RainForces has grown into one of Ontario's most trusted restoration specialists, with a team
                    of over 30 dedicated professionals. Mehriddin still personally oversees many projects, maintaining
                    the same standards of excellence that built the company's reputation.
                  </p>

                  <p>
                    "Every building has a story, and every restoration is a new chapter in that story," says Mehriddin.
                    "At RainForces, we don't just repair buildings – we restore their dignity, their function, and their
                    place in the community."
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <ClientAnimatedText
                    text="Our mission is to provide the highest quality restoration services while treating every project, whether large or small, with the same level of care and attention as if it were our own home."
                    className="italic text-gray-600"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
