"use client"

import { useEffect, useRef, useState } from "react"
import { trackMatterportLaunch } from "@/lib/analytics"

const MATTERPORT_URL = "https://my.matterport.com/show/?m=m5MUrQ81k6V"
const PREVIEW_IMAGE = "/gallery/Exterior_Entrance_south_facing.jpg"

export default function MatterportEmbed() {
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || loaded) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [loaded])

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto" style={{ paddingBottom: "56.25%" }}>
      {!loaded ? (
        <button
          type="button"
          onClick={() => {
            setLoaded(true)
            trackMatterportLaunch()
          }}
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-gold/60"
          aria-label="Launch 3D virtual tour of 11 Stoneshead"
        >
          <img
            src={PREVIEW_IMAGE}
            alt="Preview of 11 Stoneshead exterior before launching 3D tour"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-8 py-4 rounded-full border border-gold/50 bg-black/50 text-gold uppercase tracking-[0.2em] text-sm font-raleway">
              Launch 3D Tour
            </span>
          </div>
        </button>
      ) : (
        <iframe
          src={MATTERPORT_URL}
          title="3D virtual tour of 11 Stoneshead"
          className="absolute inset-0 w-full h-full rounded-2xl shadow-soft"
          frameBorder="0"
          allowFullScreen
          allow="xr-spatial-tracking"
          loading="lazy"
        />
      )}
    </div>
  )
}
