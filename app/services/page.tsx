"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Shield, Database, Cpu, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and technologies.",
    icon: Code,
    color: "from-purple-500 to-blue-500",
    features: [
      "Responsive design for all devices",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "Content Management Systems",
      "API development and integration",
      "Performance optimization",
    ],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Native iOS and Android apps",
      "Cross-platform development",
      "UI/UX design",
      "App Store optimization",
      "Push notifications",
      "Offline functionality",
    ],
  },
  {
    title: "AI/ML Solutions",
    description: "Intelligent systems and machine learning models for data analysis and automation.",
    icon: Brain,
    color: "from-green-500 to-teal-500",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Recommendation Systems",
      "Sentiment Analysis",
      "Automated Decision Making",
    ],
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Vulnerability management",
      "Secure coding practices",
      "Security monitoring",
      "Incident response planning",
    ],
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable and robust solutions for businesses of all sizes.",
    icon: Database,
    color: "from-yellow-500 to-amber-500",
    features: [
      "Custom CRM systems",
      "ERP solutions",
      "Business process automation",
      "Data analytics and reporting",
      "Cloud migration",
      "Legacy system integration",
    ],
  },
  {
    title: "Quantum Computing",
    description: "Cutting-edge quantum computing research and applications.",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    features: [
      "Quantum algorithm development",
      "Quantum machine learning",
      "Quantum cryptography",
      "Quantum simulation",
      "Quantum optimization",
      "Quantum computing education",
    ],
  },
]

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">Comprehensive technology solutions tailored to your needs</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${service.color} mb-6`}>
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90`}>Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">How we bring your ideas to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-xl p-6 relative z-10">
                <div className="text-4xl font-bold text-purple-400 mb-4">01</div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-300">
                  We start by understanding your requirements, goals, and vision for the project.
                </p>
              </div>
              <div className="absolute top-1/2 left-full h-0.5 w-16 bg-purple-500 hidden lg:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-xl p-6 relative z-10">
                <div className="text-4xl font-bold text-blue-400 mb-4">02</div>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-gray-300">
                  We create a detailed roadmap and strategy for implementing your solution.
                </p>
              </div>
              <div className="absolute top-1/2 left-full h-0.5 w-16 bg-blue-500 hidden lg:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-xl p-6 relative z-10">
                <div className="text-4xl font-bold text-green-400 mb-4">03</div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-gray-300">
                  Our team works on building your solution with regular updates and feedback.
                </p>
              </div>
              <div className="absolute top-1/2 left-full h-0.5 w-16 bg-green-500 hidden lg:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="text-4xl font-bold text-amber-400 mb-4">04</div>
                <h3 className="text-xl font-bold mb-2">Delivery</h3>
                <p className="text-gray-300">
                  We deliver the final product with documentation and support to ensure success.
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality. Contact us today to discuss your project and how we can help.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg px-8 py-6">
              Get a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

