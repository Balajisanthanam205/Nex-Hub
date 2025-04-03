"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is transforming the way we build and interact with websites and web applications.",
    image: "/placeholder.svg?height=600&width=800",
    category: "AI",
    date: "March 15, 2023",
    author: "Alex Johnson",
    slug: "future-of-ai-in-web-development",
  },
  {
    id: 2,
    title: "Building Secure Mobile Applications",
    excerpt: "Learn the best practices for developing secure mobile applications that protect user data and privacy.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Security",
    date: "April 22, 2023",
    author: "Sophia Chen",
    slug: "building-secure-mobile-applications",
  },
  {
    id: 3,
    title: "Introduction to Quantum Computing",
    excerpt:
      "A beginner-friendly guide to understanding quantum computing and its potential applications in various industries.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Quantum",
    date: "May 10, 2023",
    author: "Marcus Williams",
    slug: "introduction-to-quantum-computing",
  },
  {
    id: 4,
    title: "The Rise of Progressive Web Apps",
    excerpt:
      "Discover how PWAs are changing the landscape of web development and providing native-like experiences on the web.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    date: "June 5, 2023",
    author: "Priya Patel",
    slug: "rise-of-progressive-web-apps",
  },
  {
    id: 5,
    title: "Machine Learning for Predictive Analytics",
    excerpt:
      "How businesses are leveraging machine learning algorithms to predict trends and make data-driven decisions.",
    image: "/placeholder.svg?height=600&width=800",
    category: "AI",
    date: "July 18, 2023",
    author: "David Kim",
    slug: "machine-learning-for-predictive-analytics",
  },
  {
    id: 6,
    title: "The Impact of 5G on Mobile App Development",
    excerpt:
      "Exploring how the rollout of 5G networks will influence the future of mobile application development and user experiences.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Mobile",
    date: "August 30, 2023",
    author: "Emma Rodriguez",
    slug: "impact-of-5g-on-mobile-app-development",
  },
]

const categories = [
  { name: "All", count: 12 },
  { name: "AI", count: 5 },
  { name: "Web", count: 4 },
  { name: "Mobile", count: 3 },
  { name: "Security", count: 2 },
  { name: "Quantum", count: 1 },
]

export default function BlogPage() {
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
              Blog & Research
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights and articles on AI, ML, Cybersecurity, Quantum Computing, and Web Development
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search articles..."
                className="pl-10 py-6 bg-gray-900/70 border-gray-700 focus:border-purple-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-purple-400 transition-colors duration-300"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.name.toLowerCase()}`}
                          className="flex justify-between items-center text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-800 text-xs px-2 py-1 rounded-full">{category.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm hover:text-purple-400 transition-colors duration-300">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h4>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-300 text-sm mb-4">Stay updated with our latest articles and research.</p>
                  <Input placeholder="Your email address" className="mb-4 bg-gray-800/50 border-gray-700" />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Want to Contribute?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We welcome guest blog submissions from industry experts and enthusiasts. Share your knowledge with our
              community.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg px-8 py-6">
              Submit a Guest Post
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

