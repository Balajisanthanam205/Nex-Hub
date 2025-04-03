"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Frontend library for building user interfaces",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "React framework for production",
  },
  {
    name: "JWT",
    logo: "https://jwt.io/img/pic_logo.svg",
    description: "JSON Web Token for secure authentication",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    description: "Java-based framework for backend development",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    description: "Cloud computing services",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description: "App development platform",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "NoSQL database",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Mobile app development framework",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    description: "Modern programming language for Android",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    description: "UI toolkit for building natively compiled applications",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Programming language for AI/ML and backend",
  },
]

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Our Tech Stack
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We leverage cutting-edge technologies to deliver exceptional solutions for our clients
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="tech-card group"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={tech.logo || "/placeholder.svg"}
                alt={`${tech.name} logo`}
                fill
                style={{ objectFit: "contain" }}
                className="transition-all duration-300 filter group-hover:brightness-125"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
            <p className="text-sm text-gray-400 text-center">{tech.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

