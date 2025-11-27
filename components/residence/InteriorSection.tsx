"use client"

import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import FeatureList from "./FeatureList"
import { motion } from "framer-motion"

export default function InteriorSection() {
  const features = [
    {
      title: "Porcelain Slab Countertops",
      description: "Full-height porcelain slabs in kitchen and baths provide seamless, non-porous surfaces with refined veining."
    },
    {
      title: "Sub-Zero, Wolf & Cove Appliances",
      description: "Complete professional-grade appliance suite including built-in coffee system, vacuum-sealer drawer, and warming drawers."
    },
    {
      title: "Custom Cabinetry Throughout",
      description: "Bespoke millwork designed for every room, integrating storage, display, and architectural continuity."
    },
    {
      title: "DenseShield Moisture System",
      description: "Advanced moisture-resistant substrate installed in all wet areas to ensure long-term durability."
    },
    {
      title: "Tempered Glass Enclosures",
      description: "Frameless or minimally framed glass enclosures in bathrooms for a spa-like aesthetic."
    },
    {
      title: "Freestanding Tub & Steam Shower",
      description: "Master bath features a sculptural freestanding tub and a steam shower clad in natural wood."
    }
  ]

  return (
    <SectionContainer id="interior">
      <SectionHeader
        tagline="Curated Finishes"
        title="Interior"
        subtitle="Curated materials and integrated systems designed for modern living."
      />

      <FeatureList features={features} columns={2} />

      {/* Interior Image Grid */}
      <div className="mt-20 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.20)]"
        >
          <img
            src="/gallery/Interior_Living_space.png"
            alt="Interior living space"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.20)]"
        >
          <img
            src="/gallery/Interior_Floating_Staircase.png"
            alt="Floating staircase detail"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </SectionContainer>
  )
}

