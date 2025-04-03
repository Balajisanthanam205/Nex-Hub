"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Code,
  Smartphone,
  Brain,
  Shield,
  Database,
  Cpu,
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/80 backdrop-blur-md pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Nex Hub
            </h3>
            <p className="text-gray-300 mb-6">
              A student-led freelancing company specializing in cutting-edge technology solutions for the modern world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Code size={16} className="mr-2" /> Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Smartphone size={16} className="mr-2" /> Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Brain size={16} className="mr-2" /> AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Shield size={16} className="mr-2" /> Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Database size={16} className="mr-2" /> Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Cpu size={16} className="mr-2" /> Quantum Computing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-1 text-gray-400" />
                <a
                  href="mailto:info@nexhub.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  info@nexhub.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-1 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400">Virtual Office</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">&copy; {currentYear} Nex Hub. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

