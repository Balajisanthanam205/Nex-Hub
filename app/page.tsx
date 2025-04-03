"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import TechStack from "@/components/tech-stack"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import ProjectShowcase from "@/components/project-showcase"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-20"
      >
        <TechStack />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto px-4 py-20"
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto px-4 py-20"
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <ProjectShowcase />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="container mx-auto px-4 py-20"
      >
        <Testimonials />
      </motion.div>
    </div>
  )
}

