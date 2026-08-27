"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import ScrollCue from "@/components/ScrollCue"
import HeroVideo from "@/components/HeroVideo"
import { PROPERTY_STATS, COMPLETION_TIMELINE } from "@/lib/site"
import { trackHeroCtaClick } from "@/lib/analytics"

type HomeHeroProps = {
  onPreviewRequest: () => void
}

// Read the preference directly rather than through framer's hook: that hook's
// value lagged a render behind here, so the effect below and the markup could
// disagree about it and the title ended up absolutely positioned on top of the
// address instead of stacking above it.
function useReducedMotionPref() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  return reduced
}

export default function HomeHero({ onPreviewRequest }: HomeHeroProps) {
  const prefersReducedMotion = useReducedMotionPref()
  const [showSanctuary, setShowSanctuary] = useState(true)

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowSanctuary(true)
      return
    }

    const timer = setTimeout(() => setShowSanctuary(false), 3500)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  // The footage puts the Strip band and the house across the middle of the
  // frame; the only empty regions are the sky at the top and the desert at the
  // bottom. So the copy is split into those two bands rather than stacked in
  // one centred block, which used to sit straight over the subject.
  const titleCard = !prefersReducedMotion && showSanctuary

  return (
    <section className="relative h-[100svh] overflow-hidden">
      <HeroVideo />

      {/* Kept light on purpose: this sits over twilight footage, and white type
          already has plenty of contrast against that sky. A heavier scrim only
          costs brightness in the city lights, which are the point of the shot. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/5 to-transparent" />

      {/* Sky band — the title card hands off to the address in place, so
          neither one pushes the other down onto the view. */}
      <div className="absolute inset-x-0 top-0 z-10 px-6 pt-[7vh] flex flex-col items-center text-center">
        {/* With motion allowed the title is a transient card over the sky, so it
            is taken out of flow and crossfades to the address in place. With
            motion reduced it is permanent, so it stacks in flow at a size that
            still leaves the Strip and the house uncovered. */}
        <h1
          className={`font-raleway tracking-[0.15em] font-light uppercase text-white text-shadow-sm text-center ${
            prefersReducedMotion
              ? "relative mb-6 text-2xl md:text-4xl opacity-100"
              : `absolute inset-x-6 top-[7vh] text-4xl sm:text-5xl md:text-7xl transition-opacity duration-1000 ${
                  titleCard ? "opacity-100" : "opacity-0"
                }`
          }`}
        >
          A Sanctuary Above the Strip
        </h1>

        <motion.div
          initial={false}
          animate={{ opacity: titleCard ? 0 : 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.2 }}
          className="flex flex-col items-center w-full max-w-5xl"
        >
          <div
            className="text-base md:text-lg text-[#B8935A] font-raleway font-light tracking-[0.15em] uppercase flex flex-wrap justify-center gap-2 w-full"
            style={{
              textShadow:
                "0 0 30px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.7), 0 4px 20px rgba(0,0,0,0.6)",
            }}
          >
            {/* Each separator is bound to the segment before it so a wrap on
                narrow screens never leaves a "·" starting the next line. */}
            <span className="whitespace-nowrap">11 STONESHEAD CT&nbsp;·</span>
            <span className="whitespace-nowrap">HENDERSON&nbsp;·</span>
            <span className="whitespace-nowrap">NEVADA</span>
          </div>

          <div className="mt-6 md:mt-8 flex items-center justify-center gap-4 w-full">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#B8935A]/50" />
            <span className="text-[#B8935A] text-xl md:text-2xl tracking-[0.3em] font-raleway font-light uppercase">
              Ascaya
            </span>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#B8935A]/50" />
          </div>
        </motion.div>
      </div>

      {/* Desert band — facts sit with the action, clear of the house. The
          bottom padding leaves room for the scroll cue on desktop and for the
          sticky CTA and contact rail on mobile. */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }
        }
        className="absolute inset-x-0 bottom-0 z-10 px-6 pb-40 md:pb-32 md:[@media(max-height:860px)]:pb-20 flex flex-col items-center text-center"
      >
        <div className="w-full max-w-3xl space-y-3">
          <p
            className="text-sm md:text-base text-stone/90 font-raleway tracking-wide"
            style={{
              textShadow:
                "0 0 30px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            {PROPERTY_STATS.sqft} · {PROPERTY_STATS.bedrooms} · {PROPERTY_STATS.baths} · {PROPERTY_STATS.acreage} · {PROPERTY_STATS.levels}
          </p>
          <p
            className="text-sm md:text-base text-gold/90 font-raleway tracking-[0.12em] uppercase"
            style={{
              textShadow:
                "0 0 30px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            {COMPLETION_TIMELINE}
          </p>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link
            href="/residence"
            onClick={() => trackHeroCtaClick("explore_residence")}
            className="inline-flex items-center justify-center min-w-[240px] h-[48px] rounded-full px-6 text-sm tracking-wide font-raleway uppercase bg-black/40 backdrop-blur-xl border border-[#B8935A]/40 text-[#B8935A] hover:bg-black/50 hover:border-[#B8935A]/60 hover:scale-[1.04] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            Explore the Residence
          </Link>
          {/* Hidden below md because MobileStickyCTA already carries this
              action on phones — the two used to render together. */}
          <button
            type="button"
            onClick={() => {
              trackHeroCtaClick("request_private_preview")
              onPreviewRequest()
            }}
            className="hidden md:inline-flex items-center justify-center min-w-[240px] h-[48px] rounded-full px-6 text-sm tracking-wide font-raleway uppercase bg-gold text-black hover:bg-gold/90 hover:scale-[1.04] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            Request a Private Preview
          </button>
        </div>
      </motion.div>

      <ScrollCue />
    </section>
  )
}
