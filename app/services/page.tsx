import Image from "next/image"

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden rounded-lg">
        <Image
          src="/images/projects/multi-story-scaffolding.jpg"
          alt="RainForces Services"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg">Providing top-quality building restoration and maintenance services.</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Building Envelope */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/projects/building-envelope-work.jpg"
            alt="Building Envelope"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Building Envelope</h2>
            <p className="text-gray-700">
              Comprehensive solutions for your building's exterior, ensuring protection and longevity.
            </p>
          </div>
        </div>

        {/* Balcony Restoration */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/projects/balcony-work-ladder.jpg"
            alt="Balcony Restoration"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Balcony Restoration</h2>
            <p className="text-gray-700">
              Expert restoration services to revitalize and ensure the safety of your balconies.
            </p>
          </div>
        </div>

        {/* Parking Garage Repairs */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/projects/brick-building-garage.jpg"
            alt="Parking Garage Repairs"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Parking Garage Repairs</h2>
            <p className="text-gray-700">
              Specialized repair services to maintain the structural integrity of your parking garages.
            </p>
          </div>
        </div>

        {/* Weatherproofing */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/projects/brick-masonry-detail.jpg"
            alt="Weatherproofing"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Weatherproofing</h2>
            <p className="text-gray-700">
              Protect your building from the elements with our professional weatherproofing services.
            </p>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/projects/construction-site-cityview.jpg"
            alt="Emergency Services"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Emergency Services</h2>
            <p className="text-gray-700">
              Rapid response and effective solutions for urgent building maintenance needs.
            </p>
          </div>
        </div>

        {/* Additional Service Example - Replace with a real project image if available */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/projects/building-envelope-work.jpg"
            alt="Another Service"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Another Service</h2>
            <p className="text-gray-700">Description of another service provided by RainForces.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
