"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import ScrollCue from "@/components/ScrollCue"
import HeroVideo from "@/components/HeroVideo"
import { PROPERTY_STATS } from "@/lib/site"
import { trackHeroCtaClick } from "@/lib/analytics"

type HomeHeroProps = {
  onPreviewRequest: () => void
}

export default function HomeHero({ onPreviewRequest }: HomeHeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const [showSanctuary, setShowSanctuary] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowSanctuary(true)
      return
    }

    const timer = setTimeout(() => setShowSanctuary(false), 3500)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      <HeroVideo />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent" />

      <motion.div
        initial={false}
        animate={
          prefersReducedMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: isMobile ? -280 : -300 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: isMobile ? 4 : 6.5, ease: [0.16, 1, 0.3, 1], delay: 1.5 }
        }
        className="relative z-10 text-center px-6 flex flex-col items-center justify-center w-full max-w-5xl"
      >
        <h1
          className={`font-raleway text-5xl md:text-7xl tracking-[0.15em] font-light uppercase text-white text-shadow-sm text-center transition-opacity duration-1000 ${
            showSanctuary || prefersReducedMotion ? "opacity-100" : "opacity-0"
          }`}
        >
          A Sanctuary Above the Strip
        </h1>

        <div
          className="mt-6 text-base md:text-lg text-[#B8935A] font-raleway font-light tracking-[0.15em] uppercase flex flex-wrap justify-center gap-2 w-full"
          style={{
            textShadow:
              "0 0 30px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.7), 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <span>11 STONESHEAD CT</span>
          <span className="text-[#B8935A]">·</span>
          <span>HENDERSON</span>
          <span className="text-[#B8935A]">·</span>
          <span>NEVADA</span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 w-full">
          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#B8935A]/50" />
          <span className="text-[#B8935A] text-xl md:text-2xl tracking-[0.3em] font-raleway font-light uppercase">
            Ascaya
          </span>
          <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#B8935A]/50" />
        </div>

        <div className="mt-10 w-full max-w-3xl space-y-4">
          <p className="text-sm md:text-base text-stone/90 font-raleway tracking-wide">
            {PROPERTY_STATS.sqft} · {PROPERTY_STATS.bedrooms} · {PROPERTY_STATS.baths} · {PROPERTY_STATS.acreage} · {PROPERTY_STATS.levels}
          </p>
          <p className="text-sm md:text-base text-gold/90 font-raleway tracking-[0.12em] uppercase">
            Final Construction Phase · Private Previews Coming Soon
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link
            href="/residence"
            onClick={() => trackHeroCtaClick("explore_residence")}
            className="inline-flex items-center justify-center min-w-[240px] h-[48px] rounded-full px-6 text-sm tracking-wide font-raleway uppercase bg-black/40 backdrop-blur-xl border border-[#B8935A]/40 text-[#B8935A] hover:bg-black/50 hover:border-[#B8935A]/60 hover:scale-[1.04] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            Explore the Residence
          </Link>
          <button
            type="button"
            onClick={() => {
              trackHeroCtaClick("request_private_preview")
              onPreviewRequest()
            }}
            className="inline-flex items-center justify-center min-w-[240px] h-[48px] rounded-full px-6 text-sm tracking-wide font-raleway uppercase bg-gold text-black hover:bg-gold/90 hover:scale-[1.04] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            Request a Private Preview
          </button>
        </div>
      </motion.div>

      <ScrollCue />
    </section>
  )
}
