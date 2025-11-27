"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import LuxuryTagline from "@/src/components/ui/LuxuryTagline"
import LuxuryHeading from "@/src/components/ui/LuxuryHeading"
import LuxuryParagraph from "@/src/components/ui/LuxuryParagraph"

export default function ResidenceHero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-10 text-[#6A6A6A] font-raleway font-light tracking-[0.2em] uppercase">
            <span className="text-xs md:text-sm">11 Stoneshead</span>
            <span className="mx-3 text-[#B8935A]">·</span>
            <span className="text-xs md:text-sm">Ascaya</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#1B1B1B] mb-8 leading-none">
            The Residence
          </h1>
          
          {/* By Zarios Construction - Clickable */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <span className="text-sm text-[#8A8A8A] font-raleway font-light tracking-wide uppercase">by</span>
            <Link 
              href="https://zariosconstruction.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
            >
              <img 
                src="/logos/Zarios_logo.png" 
                alt="Zarios Construction" 
                className="h-8 md:h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="text-sm md:text-base text-[#8A8A8A] font-raleway font-light tracking-wide group-hover:text-[#B8935A] transition-colors duration-300">
                Zarios Construction
              </span>
            </Link>
          </motion.div>
          
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
              the convergence of commercial-grade engineering, luxury construction quality, natural stone cladding, and architectural vision. 
              Every material, system, and detail has been selected to create an enduring modern masterpiece.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - matches landing page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-0 right-0 hidden md:flex justify-center z-10"
      >
        <div className="flex flex-col items-center text-[#8A8A8A] text-xs tracking-widest">
          <span>SCROLL</span>
          <span className="mt-2 w-[1px] h-8 bg-[#B8935A]/60 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}

