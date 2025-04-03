"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Clock, Award } from "lucide-react"

const reasons = [
  {
    title: "Student-Led Innovation",
    description: "Fresh perspectives and cutting-edge ideas from the next generation of tech leaders.",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We stay ahead of the curve with the latest technologies and methodologies.",
    icon: Lightbulb,
    color: "bg-blue-500",
  },
  {
    title: "Quick Turnaround",
    description: "Efficient processes and dedicated teams ensure timely delivery of projects.",
    icon: Clock,
    color: "bg-green-500",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control for reliable and robust solutions.",
    icon: Award,
    color: "bg-amber-500",
  },
]

export default function WhyChooseUs() {
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
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">What sets Nex Hub apart from the competition</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className={`${reason.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <reason.icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-gray-300">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

