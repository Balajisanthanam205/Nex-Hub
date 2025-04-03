"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Computer Science student with a passion for AI and entrepreneurship.",
  },
  {
    name: "Sophia Chen",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Machine Learning specialist and full-stack developer.",
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Software Engineering student specializing in web and mobile development.",
  },
  {
    name: "Priya Patel",
    role: "AI Research Lead",
    image: "/placeholder.svg?height=400&width=400",
    bio: "PhD candidate in Artificial Intelligence with multiple published papers.",
  },
]

const otherTeamMembers = [
  {
    name: "David Kim",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emma Rodriguez",
    role: "Mobile Developer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "James Wilson",
    role: "Backend Developer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Olivia Taylor",
    role: "Cybersecurity Specialist",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Brown",
    role: "Data Scientist",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Aisha Khan",
    role: "Project Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Team background"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              About Nex Hub
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A student-led tech company pushing the boundaries of innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4">
                Nex Hub was founded in 2022 by a group of passionate computer science students who saw a gap in the
                market for innovative tech solutions created by young, forward-thinking individuals.
              </p>
              <p className="text-gray-300 mb-4">
                What started as a small project among friends quickly grew into a full-fledged freelancing company,
                serving clients across various industries and delivering cutting-edge solutions.
              </p>
              <p className="text-gray-300">
                Today, Nex Hub is a team of over 20 talented students and recent graduates, all united by a passion for
                technology and innovation. We continue to push the boundaries of what's possible in web development,
                mobile apps, AI, and more.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-xl overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Our team working"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Meet Our Core Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">The brilliant minds behind Nex Hub's success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Extended Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The talented individuals who make our vision a reality
            </p>
          </motion.div>

          <div className="relative overflow-hidden py-10">
            <div className="flex animate-carousel">
              {[...otherTeamMembers, ...otherTeamMembers].map((member, index) => (
                <div key={index} className="flex-shrink-0 w-48 mx-4">
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="relative h-48 w-48">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Milestones that mark our journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-purple-400 mb-4">50+</div>
              <h3 className="text-xl font-bold mb-2">Projects Completed</h3>
              <p className="text-gray-300">
                Successfully delivered over 50 projects to satisfied clients across various industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-blue-400 mb-4">20+</div>
              <h3 className="text-xl font-bold mb-2">Team Members</h3>
              <p className="text-gray-300">
                A growing team of talented students and recent graduates passionate about technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-green-400 mb-4">5</div>
              <h3 className="text-xl font-bold mb-2">Research Papers</h3>
              <p className="text-gray-300">
                Published research papers in the fields of AI, machine learning, and cybersecurity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

