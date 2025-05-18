"use client"

import { motion } from "framer-motion"
import TeamMember from "@/components/team-member"
import { getTeamMembers } from "@/lib/image-utils"

export default function TeamSection() {
  const teamMembers = getTeamMembers()

  // Add additional team member data
  const teamData = [
    {
      ...teamMembers[0],
      bio: "With over 20 years of experience in construction and restoration, John leads our team with expertise and vision.",
      email: "john@rainforces.com",
      phone: "+1-555-123-4567",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      ...teamMembers[1],
      bio: "Jane oversees all our projects, ensuring they're completed on time, within budget, and to the highest standards.",
      email: "jane@rainforces.com",
      phone: "+1-555-234-5678",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      ...teamMembers[2],
      bio: "Mike brings technical expertise and hands-on experience to every construction project we undertake.",
      email: "mike@rainforces.com",
      phone: "+1-555-345-6789",
      linkedin: "https://linkedin.com/in/mikejohnson",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet Our Experts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced professionals is dedicated to providing the highest quality construction and
            restoration services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamMember
              key={member.id}
              image={member.src}
              name={member.name}
              position={member.position}
              bio={member.bio}
              email={member.email}
              phone={member.phone}
              linkedin={member.linkedin}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
