"use client"

import { useState } from "react"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion, AnimatePresence } from "framer-motion"

export default function FloorPlansSection() {
  const [activeLevel, setActiveLevel] = useState<1 | 2>(1)

  const plans = {
    1: {
      title: "Level 1",
      image: "/residence/floorplans/level1.jpg",
      details: "Main living areas, kitchen, primary suite, and garage"
    },
    2: {
      title: "Level 2",
      image: "/residence/floorplans/level2.jpg",
      details: "Guest suites, wellness areas, and entertainment spaces"
    }
  }

  return (
    <SectionContainer id="floorplans">
      <SectionHeader
        tagline="Spatial Design"
        title="Floor Plans"
        subtitle="9,747 square feet across two thoughtfully designed levels."
      />

      {/* Level Selector */}
      <div className="flex justify-center gap-4 mb-16">
        <button
          onClick={() => setActiveLevel(1)}
          className={`px-10 py-4 rounded-full text-sm tracking-[0.15em] uppercase transition-all duration-500 ${
            activeLevel === 1
              ? "bg-[#1A1A1A] text-white shadow-lg hover:shadow-xl hover:scale-105"
              : "bg-white text-[#6A6A6A] border border-gray-200 hover:border-[#1A1A1A] hover:scale-105"
          }`}
        >
          Level 1
        </button>
        <button
          onClick={() => setActiveLevel(2)}
          className={`px-10 py-4 rounded-full text-sm tracking-[0.15em] uppercase transition-all duration-500 ${
            activeLevel === 2
              ? "bg-[#1A1A1A] text-white shadow-lg hover:shadow-xl hover:scale-105"
              : "bg-white text-[#6A6A6A] border border-gray-200 hover:border-[#1A1A1A] hover:scale-105"
          }`}
        >
          Level 2
        </button>
      </div>

      {/* Floor Plan Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden w-[90%] mx-auto">
            <img
              src={plans[activeLevel].image}
              alt={plans[activeLevel].title}
              className="w-full h-auto"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                e.currentTarget.src = "/gallery/1.jpg"
              }}
            />
          </div>
          <p className="text-center mt-8 text-[#6A6A6A] font-light tracking-wide">
            {plans[activeLevel].details}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Download CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a
          href="#downloads"
          className="inline-block px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
                     bg-gradient-to-r from-[#C7A76A] to-[#E2D3AC]
                     text-black/80 backdrop-blur-xl
                     hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(199,167,106,0.45)]
                     transition-all duration-300"
        >
          Download Full Plans
        </a>
      </motion.div>
    </SectionContainer>
  )
}

