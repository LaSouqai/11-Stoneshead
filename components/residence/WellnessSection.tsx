"use client"

import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"

export default function WellnessSection() {
  const amenities = [
    {
      title: "Theater Room",
      description: "Dedicated cinema with recessed slab foundation for optimal acoustics and seating."
    },
    {
      title: "Game Room",
      description: "Flexible entertainment space designed for recreation and gathering."
    },
    {
      title: "Wine Room",
      description: "Climate-controlled wine storage with display and tasting area."
    },
    {
      title: "Fitness Room with Cold Plunge Prep",
      description: "Fully plumbed fitness space ready for cold plunge installation and wellness routines."
    },
    {
      title: "Whole-House Sound System",
      description: "Integrated audio throughout all living spaces for seamless entertainment."
    },
    {
      title: "Bioethanol Fireplace",
      description: "Ventless modern fireplace providing ambiance without traditional venting requirements."
    }
  ]

  return (
    <SectionContainer id="wellness">
      <SectionHeader
        tagline="Lifestyle & Amenities"
        title="Wellness & Entertainment"
        subtitle="Spaces designed for health, relaxation, and social connection."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group space-y-6"
          >
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)] transition-all duration-500">
              <img
                src={`/gallery/${index < 6 ? index + 1 : (index % 6) + 1}.jpg`}
                alt={amenity.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-light text-[#1A1A1A] tracking-wide">
              {amenity.title}
            </h3>
            <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide">
              {amenity.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

