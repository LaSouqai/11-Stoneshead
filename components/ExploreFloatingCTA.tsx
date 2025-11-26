"use client"

import { useState } from "react"
import { Home } from "lucide-react"
import Link from "next/link"

export default function ExploreFloatingCTA() {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href="/residence"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        fixed left-8 top-1/2 -translate-y-1/2 z-50
        hidden md:flex items-center gap-2
        h-[48px]
        backdrop-blur-xl
        bg-[rgba(0,0,0,0.30)]
        border border-[#B8935A]/50
        text-[#B8935A]
        overflow-hidden
        transition-all duration-300 ease-out
        ${hovered ? "w-[260px] bg-[rgba(0,0,0,0.45)] border-[#B8935A] scale-[1.03] shadow-[0_0_20px_rgba(199,167,106,0.35)]" : "w-[48px]"}
        rounded-full
      `}
    >
      <Home className="h-5 w-5 ml-3 text-[#B8935A] flex-shrink-0" />

      <span
        className={`
          whitespace-nowrap text-xs tracking-[0.15em] pr-5 font-raleway uppercase
          transition-all duration-300
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
        `}
      >
        Explore the Residence
      </span>
    </Link>
  )
}

