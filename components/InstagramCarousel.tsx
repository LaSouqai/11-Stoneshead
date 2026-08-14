"use client"

import { useEffect } from "react"

export default function InstagramCarousel() {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement("script")
    script.src = "https://elfsightcdn.com/platform.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Elfsight Instagram Feed */}
      <div 
        className="elfsight-app-d17121da-0627-4319-884c-7ee833088669" 
        data-elfsight-app-lazy
      />
    </div>
  )
}


