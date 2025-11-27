"use client"

import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import FeatureList from "./FeatureList"
import { motion } from "framer-motion"

export default function OutdoorSection() {
  const features = [
    {
      title: "Covered Patios (Upper & Lower)",
      description: "Expansive covered outdoor spaces on both levels extend the living area and provide shade year-round."
    },
    {
      title: "Motorized Pocketing Doors",
      description: "Fully disappearing glass walls create seamless indoor-outdoor transitions at the touch of a button."
    },
    {
      title: "Outdoor Heaters",
      description: "Integrated heating systems (design intent, pending final confirmation) for comfortable evening entertaining."
    },
    {
      title: "Outdoor Shower",
      description: "Dedicated outdoor shower with hot/cold water for post-activity refreshment."
    },
    {
      title: "Stone-Wrapped Exterior",
      description: "Natural stone cladding continues outdoors, creating architectural unity across all facades."
    },
    {
      title: "Thunderbird Deck Drains",
      description: "High-end copper/bronze deck drainage system ensuring water management and aesthetic refinement."
    }
  ]

  return (
    <SectionContainer id="outdoor" background="light">
      <SectionHeader
        tagline="Indoor-Outdoor Living"
        title="Outdoor Living"
        subtitle="Seamless transitions between interior and exterior realms."
      />

      <FeatureList features={features} columns={3} />

      {/* Outdoor Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="w-[90%] mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
          <img
            src="/gallery/Exterior_Backyard_Pool.jpg"
            alt="Backyard pool and outdoor living"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
        </div>
      </motion.div>
    </SectionContainer>
  )
}

