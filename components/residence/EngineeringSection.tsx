"use client"

import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"

export default function EngineeringSection() {
  const specs = [
    {
      category: "Structural Engineering",
      items: ["Vector Engineers", "Commercial-grade structural systems", "Seismic compliance"]
    },
    {
      category: "Civil Engineering",
      items: ["MG Engineering", "Site grading and drainage", "Utility coordination"]
    },
    {
      category: "MEP Engineering",
      items: ["Love Engineering", "HVAC zoning and controls", "Electrical and plumbing systems"]
    },
    {
      category: "Elevator Ready",
      items: ["One-hour fire-rated hoistway", "Structural prep for future installation", "Code-compliant design"]
    },
    {
      category: "Glazing & Safety",
      items: ["ANSI safety glazing standards", "AAMA window compliance", "IGCC insulated glass certifications"]
    },
    {
      category: "Performance Systems",
      items: ["Commercial-grade HVAC zoning", "Whole-house water filtration", "Smart home integration prep"]
    }
  ]

  return (
    <SectionContainer id="engineering" background="light">
      <SectionHeader
        tagline="Technical Excellence"
        title="Engineering & Performance"
        subtitle="Built to commercial standards with residential refinement."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-10 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-500"
          >
            <h3 className="text-sm font-normal text-[#1A1A1A] tracking-[0.15em] mb-6 uppercase">
              {spec.category}
            </h3>
            <ul className="space-y-3">
              {spec.items.map((item, i) => (
                <li key={i} className="text-[#6A6A6A] text-sm font-light flex items-start tracking-wide">
                  <span className="mr-3 text-[#1A1A1A]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 text-center text-[#8A8A8A] text-sm font-light max-w-4xl mx-auto"
      >
        Every system has been engineered by licensed professionals and built to exceed code requirements. 
        This residence represents the intersection of luxury residential design and commercial-grade construction quality.
      </motion.p>
    </SectionContainer>
  )
}

