"use client"

import { useEffect, useState } from "react"
import { Camera, Instagram, Mail, Phone, Box } from "lucide-react"

export default function FloatingPanel() {
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setVisible(true)
    }
  }

  /* Auto-hide on scroll */
  useEffect(() => {
    const handler = () => {
      const current = window.scrollY
      setVisible(current < lastScroll)   // show when scrolling UP
      setLastScroll(current)
    }

    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [lastScroll])

  /* --------------------------- */
  /* DESKTOP PANEL               */
  /* --------------------------- */
  const DesktopPanel = (
    <div
      className={`
        hidden md:flex flex-col gap-6 fixed right-6 top-1/2 -translate-y-1/2
        bg-black/40 backdrop-blur-xl border border-gold/20 rounded-3xl p-4 z-50
        shadow-[0_0_25px_rgba(0,0,0,0.25)] transition-all duration-700
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
      `}
    >
        {[
          { icon: <Camera size={22} strokeWidth={1.2} />, label: "Gallery", id: "gallery" },
          { icon: <Instagram size={22} strokeWidth={1.2} />, label: "Instagram", id: "instagram" },
          { icon: <Box size={22} strokeWidth={1.2} />, label: "3D Tour", id: "tour3d" },
          { icon: <Mail size={22} strokeWidth={1.2} />, label: "Contact", id: "contact" },
          { icon: <Phone size={22} strokeWidth={1.2} />, label: "Call", id: "call" },
        ].map((item) => (
        <button
          key={item.id}
          onClick={() =>
            item.id === "call"
              ? (window.location.href = "tel:+17029030000")
              : scrollTo(item.id)
          }
          className="
            group relative p-3
            text-transparent bg-clip-text bg-gradient-to-br from-gold/70 to-gold
            hover:from-gold hover:to-[#e8d6a2]
            transition-all duration-500
            hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(198,166,100,0.35)]
          "
        >
          {item.icon}

          {/* Tooltip */}
          <span
            className="
              absolute left-[-130px] top-1/2 -translate-y-1/2
              bg-black/60 backdrop-blur-md text-gold px-3 py-1 rounded-xl
              text-xs whitespace-nowrap shadow-[0_0_15px_rgba(0,0,0,0.25)]
              opacity-0 translate-x-[-6px]
              group-hover:opacity-100 group-hover:translate-x-[-12px]
              transition-all duration-500 ease-out
            "
          >
            {item.label}
          </span>

          {/* Underline */}
          <span
            className="
              absolute left-1/2 -translate-x-1/2 bottom-[4px]
              h-[2px] w-0 bg-gold rounded-full
              group-hover:w-full transition-all duration-500
            "
          />
        </button>
      ))}
    </div>
  )

  /* --------------------------- */
  /* MOBILE PANEL                */
  /* --------------------------- */
  const MobilePanel = (
    <div
      className={`
        md:hidden fixed bottom-4 left-1/2 -translate-x-1/2
        flex gap-8 bg-black/50 backdrop-blur-xl border border-gold/10 
        px-6 py-3 rounded-3xl z-50
        shadow-[0_0_20px_rgba(0,0,0,0.25)]
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {[
        { icon: <Camera size={22} strokeWidth={1.2} />, id: "gallery" },
        { icon: <Instagram size={22} strokeWidth={1.2} />, id: "instagram" },
        { icon: <Box size={22} strokeWidth={1.2} />, id: "tour3d" },
        { icon: <Phone size={22} strokeWidth={1.2} />, id: "call" },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() =>
            item.id === "call"
              ? (window.location.href = "tel:+17029030000")
              : scrollTo(item.id)
          }
          className="
            p-2
            text-transparent bg-clip-text bg-gradient-to-br from-gold/70 to-gold
            hover:from-gold hover:to-[#e8d6a2]
            transition-all duration-500 hover:scale-110
          "
        >
          {item.icon}
        </button>
      ))}
    </div>
  )

  return (
    <>
      {DesktopPanel}
      {MobilePanel}
    </>
  )
}
