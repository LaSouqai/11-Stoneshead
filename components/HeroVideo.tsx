"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

type HeroVideoProps = {
  onVideoPlay?: () => void
}

export default function HeroVideo({ onVideoPlay }: HeroVideoProps) {
  const prefersReducedMotion = useReducedMotion()
  const [showVideo, setShowVideo] = useState(false)
  const [canPlayVideo, setCanPlayVideo] = useState(true)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 75])

  useEffect(() => {
    if (prefersReducedMotion) {
      setCanPlayVideo(false)
      return
    }

    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
    if (connection?.saveData || connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g") {
      setCanPlayVideo(false)
      return
    }

    const timer = setTimeout(() => setShowVideo(true), prefersReducedMotion ? 0 : 1500)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  return (
    <motion.div
      className="absolute inset-0 w-full h-[100vh] overflow-hidden"
      style={{ translateY: parallaxY }}
    >
      {canPlayVideo ? (
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
          onPlay={onVideoPlay}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: prefersReducedMotion ? 0.8 : 0 }}
          animate={showVideo || prefersReducedMotion ? { opacity: 0.8 } : { opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: prefersReducedMotion ? 0 : 1.5 }}
        >
          <source src="/video/hero-mobile.webm" type="video/webm" media="(max-width: 768px)" />
          <source src="/video/hero-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/video/hero-desktop.webm" type="video/webm" />
          <source src="/video/hero-desktop.mp4" type="video/mp4" />
          <source src="/drone-footage.mp4" type="video/mp4" />
        </motion.video>
      ) : (
        <img
          src="/video/hero-poster.jpg"
          alt="11 Stoneshead exterior overlooking the Las Vegas Strip"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      )}
    </motion.div>
  )
}
