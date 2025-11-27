"use client"

import { useState } from "react"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion, AnimatePresence } from "framer-motion"
import { Download } from "lucide-react"

export default function FloorPlansSection() {
  const [activeLevel, setActiveLevel] = useState<1 | 2>(1)
  const [selectedPlan, setSelectedPlan] = useState<{ image: string; title: string; pdfLink: string } | null>(null)

  const plans = {
    1: {
      title: "Level 1",
      image: "/gallery/first floor plan(1)(1).jpg",
      pdfLink: "/pdf/First Floor Plan.pdf",
      details: "Main living areas, kitchen, primary suite, and garage"
    },
    2: {
      title: "Level 2",
      image: "/gallery/2nd Floor Plan.jpg",
      pdfLink: "/pdf/2nd Floor Plan.pdf",
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
          {/* Floor Plan as Image - Click to Enlarge */}
          <div 
            className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden w-[90%] mx-auto group cursor-pointer"
            onClick={() => setSelectedPlan(plans[activeLevel])}
          >
            <img
              src={plans[activeLevel].image}
              alt={plans[activeLevel].title}
              className="w-full h-auto object-contain"
              onError={(e) => {
                // Fallback: if image doesn't exist, show a placeholder
                e.currentTarget.src = "/placeholder-floorplan.jpg"
              }}
            />
            {/* Overlay with Click to Enlarge hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <p className="text-[#1A1A1A] text-sm font-raleway tracking-wide uppercase">Click to Enlarge</p>
              </div>
            </div>
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
          href="/pdf/1and2floor plan.pdf"
          download
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
                     bg-gradient-to-r from-[#C7A76A] to-[#E2D3AC]
                     text-black/80 backdrop-blur-xl
                     hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(199,167,106,0.45)]
                     transition-all duration-300"
        >
          <Download size={18} />
          Download Full Plans
        </a>
      </motion.div>

      {/* Lightbox Popup - Same as Gallery */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlan(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center z-[60] p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedPlan.image}
              alt={selectedPlan.title}
              className="max-w-[95vw] max-h-[85vh] rounded-lg shadow-2xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
              className="text-[#B8935A] mt-6 text-center text-sm md:text-base font-raleway tracking-wide uppercase"
            >
              {selectedPlan.title} • Click anywhere to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  )
}

