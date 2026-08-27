"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

type HeroVideoProps = {
  onVideoPlay?: () => void
}

const DESKTOP_SRC = "/video/hero-desktop.mp4"
const MOBILE_SRC = "/video/hero-mobile.mp4"
const MOBILE_QUERY = "(max-width: 768px)"

export default function HeroVideo({ onVideoPlay }: HeroVideoProps) {
  const prefersReducedMotion = useReducedMotion()
  const [showVideo, setShowVideo] = useState(false)
  const [canPlayVideo, setCanPlayVideo] = useState(true)
  const [src, setSrc] = useState<string | null>(null)
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

    // Chrome dropped support for the `media` attribute on <source>, so the
    // browser would simply take the first playable file regardless of device.
    // Resolve the right file here instead.
    setSrc(window.matchMedia(MOBILE_QUERY).matches ? MOBILE_SRC : DESKTOP_SRC)

    const timer = setTimeout(() => setShowVideo(true), 1500)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  return (
    <motion.div
      className="absolute inset-0 w-full h-[100vh] overflow-hidden"
      style={{ translateY: parallaxY }}
    >
      {canPlayVideo && src ? (
        <motion.video
          key={src}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
          onPlay={onVideoPlay}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={showVideo ? { opacity: 0.8 } : { opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ) : null}

      {/* Poster carries the hero until the video is decoded, and stays put
          for reduced-motion and save-data visitors. */}
      <img
        src="/video/hero-poster.jpg"
        alt="11 Stoneshead exterior overlooking the Las Vegas Strip"
        aria-hidden={canPlayVideo && src ? true : undefined}
        className={`absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-700 ${
          canPlayVideo && src && showVideo ? "opacity-0" : "opacity-80"
        }`}
      />
    </motion.div>
  )
}
