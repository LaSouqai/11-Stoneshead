"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { HERO_POSTER, heroVideoUrl } from "@/lib/hero"

type HeroVideoProps = {
  onVideoPlay?: () => void
}

export default function HeroVideo({ onVideoPlay }: HeroVideoProps) {
  const prefersReducedMotion = useReducedMotion()
  const [showVideo, setShowVideo] = useState(false)
  const [src, setSrc] = useState<string | null>(null)
  const [isPhone, setIsPhone] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return

    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
    if (connection?.saveData || connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g") {
      return
    }

    // Resolve the tier here rather than with <source media>, which Chrome ignores.
    const phone = window.matchMedia("(max-width: 768px)").matches
    setIsPhone(phone)
    setSrc(heroVideoUrl())
  }, [prefersReducedMotion])

  const videoActive = Boolean(src)

  return (
    <div className="absolute inset-0 overflow-hidden">
      {videoActive && (
        <video
          key={src}
          src={src ?? undefined}
          width={isPhone ? 1440 : 3840}
          height={isPhone ? 810 : 2160}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          onPlay={onVideoPlay}
          // Reveal on the video actually being ready, never on a timer. A fixed
          // delay hands the hero over even when the file 404s, stalls on a slow
          // connection, or uses an unsupported codec; gating on these events means
          // a failure just leaves the poster up, which is the correct fallback.
          onCanPlay={() => setShowVideo(true)}
          onPlaying={() => setShowVideo(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Carries the hero until the video is decoded, and stays put for
          reduced-motion and save-data visitors. */}
      <img
        src={HERO_POSTER}
        alt="11 Stoneshead at twilight, above the lit Las Vegas Strip"
        aria-hidden={videoActive || undefined}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoActive && showVideo ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  )
}
