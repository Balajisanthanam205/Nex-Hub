"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced filtering and payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    technologies: ["React", "Next.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Health Tracking App",
    description: "Mobile application for tracking health metrics and providing personalized insights.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    link: "#",
  },
  {
    id: 3,
    title: "Sentiment Analysis Tool",
    description: "AI-powered tool for analyzing customer sentiment from reviews and feedback.",
    image: "/placeholder.svg?height=600&width=800",
    category: "ai",
    technologies: ["Python", "TensorFlow", "NLP", "AWS"],
    link: "#",
  },
  {
    id: 4,
    title: "Security Audit System",
    description: "Comprehensive security audit system for identifying vulnerabilities in web applications.",
    image: "/placeholder.svg?height=600&width=800",
    category: "security",
    technologies: ["Python", "Docker", "Kubernetes", "Penetration Testing"],
    link: "#",
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "Web-based inventory management system for small to medium-sized businesses.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker App",
    description: "Cross-platform mobile app for tracking workouts and nutrition.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Google Fit API", "Apple HealthKit"],
    link: "#",
  },
  {
    id: 7,
    title: "Predictive Maintenance System",
    description: "AI system that predicts equipment failures before they occur.",
    image: "/placeholder.svg?height=600&width=800",
    category: "ai",
    technologies: ["Python", "TensorFlow", "IoT", "Time Series Analysis"],
    link: "#",
  },
  {
    id: 8,
    title: "Secure Messaging Platform",
    description: "End-to-end encrypted messaging platform for secure communications.",
    image: "/placeholder.svg?height=600&width=800",
    category: "security",
    technologies: ["React", "Node.js", "WebRTC", "Encryption"],
    link: "#",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Apps" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "ai", name: "AI Solutions" },
  { id: "security", name: "Cybersecurity" },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">Explore our showcase of successful projects and case studies</p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-500"
                      : "border-purple-500 text-white hover:bg-purple-500/20"
                  }
                `}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Case Studies Section */}
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
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Dive deeper into our most impactful projects</p>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="E-commerce Platform"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">E-commerce Platform Redesign</h3>
                <p className="text-gray-300 mb-4">
                  We helped a retail client increase their online sales by 150% through a complete redesign of their
                  e-commerce platform, focusing on user experience, performance, and mobile optimization.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>150% increase in online sales</li>
                    <li>65% reduction in cart abandonment</li>
                    <li>3x improvement in page load speed</li>
                    <li>42% increase in mobile conversions</li>
                  </ul>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Read Full Case Study
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Customer Service</h3>
                <p className="text-gray-300 mb-4">
                  We developed an AI chatbot for a SaaS company that handles 80% of customer inquiries automatically,
                  reducing support costs and improving customer satisfaction.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>80% of inquiries handled automatically</li>
                    <li>60% reduction in support costs</li>
                    <li>24/7 customer support coverage</li>
                    <li>15% increase in customer satisfaction</li>
                  </ul>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Read Full Case Study
                </Button>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="AI Chatbot"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg px-8 py-6">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

