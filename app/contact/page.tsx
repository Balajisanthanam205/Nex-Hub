"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

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
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">Get in touch with our team to discuss your project</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Have a question or want to work together? Fill out the form and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@nexhub.com"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      info@nexhub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">Virtual Office</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                  <Twitter className="h-6 w-6 text-white" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-gray-800 border-gray-700 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-800 border-gray-700 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="bg-gray-800 border-gray-700 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        className="bg-gray-800 border-gray-700 focus:border-purple-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Our Location
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              While we primarily work remotely, we're planning to open physical offices soon
            </p>
          </motion.div>

          <div className="relative h-96 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1619427748449!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-300">
                Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a
                complex application could take 2-6 months. We'll provide a detailed timeline during our initial
                consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">What is your pricing structure?</h3>
              <p className="text-gray-300">
                We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements.
                The best option depends on your project's nature and requirements. Contact us for a custom quote.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-300">
                Yes, we offer maintenance and support packages to ensure your solution continues to run smoothly after
                launch. We can also provide training for your team to manage the system independently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">How do you handle project management?</h3>
              <p className="text-gray-300">
                We use agile methodologies with regular sprints and check-ins. You'll have access to a dedicated project
                manager and our project management tools to track progress and provide feedback throughout the
                development process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

