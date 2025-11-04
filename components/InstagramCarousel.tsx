"use client"

import { useEffect, useRef, useState } from "react"

type Slide = { url: string, caption?: string }

const slides: Slide[] = [
  { url: "https://www.instagram.com/reel/DPEpcejjUlg/" },
  { url: "https://www.instagram.com/reel/DQekmwuiPen/" },
  { url: "https://www.instagram.com/reel/DMhoNlSMbfm/" },
]

export default function InstagramCarousel() {
  const [index, setIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  // Load/refresh Instagram embed script when slide changes
  useEffect(() => {
    if (!ref.current) return
    const s = document.createElement("script")
    s.async = true
    s.src = "https://www.instagram.com/embed.js"
    ref.current.appendChild(s)
    return () => { s.remove() }
  }, [index])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-soft">
        <div ref={ref} className="bg-[#111]">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={slides[index].url}
            data-instgrm-version="14" 
            style={{ width: "100%", margin: 0, border: 0, background: "transparent" }}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <button onClick={prev} className="px-4 py-2 border border-gold/40 rounded-lg hover:bg-gold/10">Prev</button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i===index ? "bg-gold" : "bg-gold/30"}`} />
            ))}
          </div>
          <button onClick={next} className="px-4 py-2 border border-gold/40 rounded-lg hover:bg-gold/10">Next</button>
        </div>
      </div>
    </div>
  )
}


