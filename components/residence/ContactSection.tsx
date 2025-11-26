"use client"

import { useState } from "react"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (static for now)
    console.log("Form submitted:", formData)
    alert("Thank you for your interest. We'll be in touch shortly.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <SectionContainer id="contact" background="light">
      <SectionHeader
        tagline="Get in Touch"
        title="Request a Private Tour"
        subtitle="Experience 11 Stoneshead in person."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-xs text-[#6A6A6A] mb-3 uppercase tracking-[0.15em] font-light">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A1A1A] focus:shadow-lg transition-all duration-300 font-light"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-[#6A6A6A] mb-3 uppercase tracking-[0.15em] font-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A1A1A] focus:shadow-lg transition-all duration-300 font-light"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs text-[#6A6A6A] mb-3 uppercase tracking-[0.15em] font-light">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A1A1A] focus:shadow-lg transition-all duration-300 font-light"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs text-[#6A6A6A] mb-3 uppercase tracking-[0.15em] font-light">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A1A1A] focus:shadow-lg transition-all duration-300 resize-none font-light"
            />
          </div>

          <button
            type="submit"
            className="w-full px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
                       bg-gradient-to-r from-[#C7A76A] to-[#E2D3AC]
                       text-black/80 backdrop-blur-xl
                       hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(199,167,106,0.45)]
                       transition-all duration-300"
          >
            Send Inquiry
          </button>
        </form>

        <p className="text-center mt-8 text-[#8A8A8A] text-sm font-light">
          Or call directly: <a href="tel:+17029030000" className="text-[#1A1A1A] hover:underline">(702) 903-0000</a>
        </p>
      </motion.div>
    </SectionContainer>
  )
}

