"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color: i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#3b82f6" : "#10b981",
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        })
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      }

      connectParticles()
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 neon-text"
          >
            Innovate. Build. Elevate.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            The Future with Nex Hub
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            A student-led freelancing company specializing in cutting-edge technology solutions for the modern world.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row justify-center gap-8">
  {/* Get a Quote Button with Your Animation */}
  <button className="get-quote-btn">
    Get a Quote
    <svg className="star-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#fffdef"  d="M12 2l1.9 6H20l-5 3.5 1.9 6L12 14l-4.9 3.5L9 11.5 4 8h6.1z" />
    </svg>
    <svg className="star-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#fffdef"  d="M12 2l1.9 6H20l-5 3.5 1.9 6L12 14l-4.9 3.5L9 11.5 4 8h6.1z" />
    </svg>
    <svg className="star-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#fffdef"  d="M12 2l1.9 6H20l-5 3.5 1.9 6L12 14l-4.9 3.5L9 11.5 4 8h6.1z" />
    </svg>
    <svg className="star-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#fffdef"  d="M12 2l1.9 6H20l-5 3.5 1.9 6L12 14l-4.9 3.5L9 11.5 4 8h6.1z" />
    </svg>
    <svg className="star-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#fffdef"  d="M12 2l1.9 6H20l-5 3.5 1.9 6L12 14l-4.9 3.5L9 11.5 4 8h6.1z" />
    </svg>
    <svg className="star-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#fffdef"  d="M12 2l1.9 6H20l-5 3.5 1.9 6L12 14l-4.9 3.5L9 11.5 4 8h6.1z" />
    </svg>
  </button>

  {/* Explore Services Button (Same Size) */}
  <button className="relative px-8 py-4 h-[50px] text-lg font-semibold border border-gray-800 bg-[#212121] text-[#ae00ff] uppercase tracking-wider overflow-hidden transition-all rounded-[20px] hover:shadow-[0_0_10px_#ae00ff,0_0_25px_#001eff,0_0_50px_#ae00ff] flex items-center justify-center">
    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
    <span className="absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent to-[#ae00ff]"></span>
    <span className="absolute bottom-0 right-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent to-[#001eff]"></span>
    <span className="absolute top-[-100%] right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-[#ae00ff]"></span>
    <span className="absolute bottom-[-100%] left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-[#001eff]"></span>
  </button>
</motion.div>




        </div>
      </div>
    </div>
  )
}

