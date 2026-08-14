"use client"

import { useEffect, useRef, useState } from "react"
import { trackInstagramClick } from "@/lib/analytics"

export default function LazyInstagramCarousel() {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return

    const existing = document.querySelector('script[data-elfsight="true"]')
    if (existing) return

    const script = document.createElement("script")
    script.src = "https://elfsightcdn.com/platform.js"
    script.async = true
    script.dataset.elfsight = "true"
    document.body.appendChild(script)
  }, [visible])

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto">
      {visible ? (
        <div
          className="elfsight-app-d17121da-0627-4319-884c-7ee833088669"
          data-elfsight-app-lazy
          onClick={() => trackInstagramClick()}
        />
      ) : (
        <div className="h-40 flex items-center justify-center text-stone/60 text-sm">
          Loading Instagram feed…
        </div>
      )}
    </div>
  )
}
