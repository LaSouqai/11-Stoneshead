"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import LuxuryTagline from "@/src/components/ui/LuxuryTagline"
import LuxuryHeading from "@/src/components/ui/LuxuryHeading"
import LuxuryParagraph from "@/src/components/ui/LuxuryParagraph"

export default function ResidenceHero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/drone-footage.mp4" // fallback - user should replace
          alt="11 Stoneshead Residence"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LuxuryTagline animate={false} className="mb-10 text-sm md:text-base font-normal">
            11 Stoneshead · Ascaya
          </LuxuryTagline>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#1B1B1B] mb-12 leading-none">
            The Residence
          </h1>
          
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-3xl text-[#6A6A6A] mb-12 font-normal tracking-wide"
          >
            A modern architectural estate designed to frame the Las Vegas Strip.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-base md:text-lg tracking-wide leading-relaxed font-normal text-[#6A6A6A]">
              Spanning 9,747 square feet across two meticulously designed levels, 11 Stoneshead represents 
              the convergence of commercial-grade engineering, luxury construction quality, and architectural vision. 
              Every material, system, and detail has been selected to create an enduring modern masterpiece.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - matches landing page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute -bottom-48 left-0 right-0 hidden md:flex justify-center"
        >
          <div className="flex flex-col items-center text-[#8A8A8A] text-xs tracking-widest">
            <span>SCROLL</span>
            <span className="mt-2 w-[1px] h-8 bg-[#B8935A]/60 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

