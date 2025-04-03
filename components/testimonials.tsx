"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Nex Hub delivered an exceptional e-commerce platform that exceeded our expectations. Their team was professional, responsive, and delivered on time and within budget.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, HealthTech",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The mobile app developed by Nex Hub has transformed our business. Their expertise in AI and mobile development is unmatched. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthCo",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Working with Nex Hub was a pleasure. Their team understood our requirements perfectly and delivered a solution that has significantly improved our customer engagement.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Hear from our satisfied clients about their experience working with Nex Hub
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
        >
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
        </div>

        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
        >
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <Quote className="h-10 w-10 text-purple-500 mb-4 opacity-50" />
                  <p className="text-lg md:text-xl italic mb-6 text-gray-200">{testimonials[current].quote}</p>
                  <div>
                    <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                    <p className="text-gray-400">{testimonials[current].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === current ? "bg-purple-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

