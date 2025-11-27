"use client"

import Link from "next/link"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"

export default function GalleryPreview() {
  const galleryImages = [
    "/gallery/Exterior_Entrance_south_facing.jpg",
    "/gallery/Interior_Living_space.png",
    "/gallery/Interior_Kitchen.png",
    "/gallery/Exterior_Backyard_Pool.jpg",
    "/gallery/Interior_Floating_Staircase.png",
    "/gallery/Interior_primary_suite_bedroom_view.png",
  ]

  return (
    <SectionContainer id="gallery" background="light">
      <SectionHeader
        tagline="Visual Journey"
        title="Gallery"
        subtitle="Explore the residence through curated imagery."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-[90%] mx-auto">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)] transition-all duration-500"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <Link
          href="/#gallery"
          className="inline-block px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
                     border-2 border-[#1B1B1B] text-[#1B1B1B]
                     hover:bg-[#1B1B1B] hover:text-white hover:scale-[1.03]
                     hover:shadow-lg transition-all duration-500"
        >
          View Full Gallery
        </Link>
      </motion.div>
    </SectionContainer>
  )
}

