import PageLayout from "@/components/layout/page-layout"
import PageBanner from "@/components/layout/page-banner"
import { getCompanyInfo } from "@/lib/db-service"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import OwnerStoryServer from "@/components/about/owner-story-server"

export const metadata = {
  title: "About Us | RainForces",
  description: "Learn about RainForces, our mission, values, and the team behind our success.",
}

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo()

  if (!companyInfo) {
    return <div>Loading...</div>
  }

  return (
    <PageLayout>
      <PageBanner
        title="About Us"
        subtitle="Learn about our company, our mission, and the team behind our success"
        backgroundImage="/images/about-banner.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{companyInfo.mission}</p>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{companyInfo.vision}</p>
          </div>
        </div>
      </section>

      <OwnerStoryServer />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do at RainForces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
