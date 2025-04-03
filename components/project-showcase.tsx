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
    link: "#",
  },
  {
    id: 2,
    title: "Health Tracking App",
    description: "Mobile application for tracking health metrics and providing personalized insights.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    link: "#",
  },
  {
    id: 3,
    title: "Sentiment Analysis Tool",
    description: "AI-powered tool for analyzing customer sentiment from reviews and feedback.",
    image: "/placeholder.svg?height=600&width=800",
    category: "ai",
    link: "#",
  },
  {
    id: 4,
    title: "Security Audit System",
    description: "Comprehensive security audit system for identifying vulnerabilities in web applications.",
    image: "/placeholder.svg?height=600&width=800",
    category: "security",
    link: "#",
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "Web-based inventory management system for small to medium-sized businesses.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker App",
    description: "Cross-platform mobile app for tracking workouts and nutrition.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
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

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Our Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore our portfolio of successful projects and case studies
        </p>
      </div>

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
    </section>
  )
}

