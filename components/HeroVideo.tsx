"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { HERO_POSTER, heroVideoUrl } from "@/lib/hero"

type HeroVideoProps = {
  onVideoPlay?: () => void
}

export default function HeroVideo({ onVideoPlay }: HeroVideoProps) {
  const prefersReducedMotion = useReducedMotion()
  const [showVideo, setShowVideo] = useState(false)
  const [src, setSrc] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 75])

  useEffect(() => {
    if (prefersReducedMotion) return

    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
    if (connection?.saveData || connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g") {
      return
    }

    // Resolve the tier here rather than with <source media>, which Chrome ignores.
    setSrc(heroVideoUrl())
  }, [prefersReducedMotion])

  const videoActive = Boolean(src)

  return (
    <motion.div
      className="absolute inset-0 w-full h-[100vh] overflow-hidden"
      style={{ translateY: parallaxY }}
    >
      {videoActive && (
        <motion.video
          key={src}
          src={src ?? undefined}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          onPlay={onVideoPlay}
          // Reveal on the video actually being ready, never on a timer. A fixed
          // delay hands the hero over even when the file 404s, stalls on a slow
          // connection, or uses an unsupported codec; gating on these events means
          // a failure just leaves the poster up, which is the correct fallback.
          onCanPlay={() => setShowVideo(true)}
          onPlaying={() => setShowVideo(true)}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={showVideo ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      )}

      {/* Carries the hero until the video is decoded, and stays put for
          reduced-motion and save-data visitors. */}
      <img
        src={HERO_POSTER}
        alt="11 Stoneshead at twilight, above the lit Las Vegas Strip"
        aria-hidden={videoActive || undefined}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoActive && showVideo ? "opacity-0" : "opacity-100"
        }`}
      />
    </motion.div>
  )
}
