"use client"

import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import FeatureList from "./FeatureList"
import { motion } from "framer-motion"

export default function ArchitectureSection() {
  const features = [
    {
      title: "Full Curtainwall Glazing System",
      description: "Floor-to-ceiling commercial-grade glass systems frame panoramic Las Vegas Strip views from every major living space."
    },
    {
      title: "Natural Limestone Flooring",
      description: "Large-format 48×48 limestone tiles create seamless interior planes, sourced and installed to the highest specifications."
    },
    {
      title: "Stone Cladding with Mock-Up Control",
      description: "Exterior stone was selected through rigorous mock-ups to ensure color consistency, texture, and long-term durability."
    },
    {
      title: "Architectural Louvers",
      description: "Precision-engineered louvers provide solar control and visual rhythm across the facade."
    },
    {
      title: "Commercial Waterproofing",
      description: "Multi-layered waterproofing systems including Bituthene 3000, Mel-Rol, and Vycor V40 ensure long-term envelope integrity."
    },
    {
      title: "Sculptural Massing & Lines",
      description: "Large-format volumes and clean horizontal planes create a bold, timeless silhouette against the desert landscape."
    }
  ]

  return (
    <SectionContainer id="architecture" background="light">
      <SectionHeader
        tagline="Form & Materiality"
        title="Architecture"
        subtitle="A study in modern form, materiality, and engineering precision."
      />

      <FeatureList features={features} columns={2} />

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="w-[90%] mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
          <img
            src="/gallery/Exterior_Lot_view.jpg"
            alt="Architectural exterior lot view"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
        </div>
      </motion.div>
    </SectionContainer>
  )
}

