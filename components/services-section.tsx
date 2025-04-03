"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Shield, Database, Cpu } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and technologies.",
    icon: Code,
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI/ML Solutions",
    description: "Intelligent systems and machine learning models for data analysis and automation.",
    icon: Brain,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable and robust solutions for businesses of all sizes.",
    icon: Database,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Quantum Computing",
    description: "Cutting-edge quantum computing research and applications.",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
  },
]

export default function ServicesSection() {
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
    <section id="services" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          What We Do
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We offer a wide range of services to help businesses and individuals achieve their goals
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants} className="service-card group">
            <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${service.color} mb-6`}>
              <service.icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

