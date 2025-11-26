"use client"

import { useEffect, useState } from "react"
import { Camera, Instagram, Mail, Phone, Box, Calendar } from "lucide-react"

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

  // Auto-hide on scroll (show when scrolling up or at top)
  useEffect(() => {
    const handler = () => {
      const current = window.scrollY
      // Always show at top of page or when scrolling up
      setVisible(current < 50 || current < lastScroll)
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
        hidden md:flex flex-col gap-5 fixed right-6 top-1/2 -translate-y-1/2
        bg-black/40 backdrop-blur-xl
        border border-[#B8935A]/35 rounded-3xl p-3 z-50
        shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-700
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
      `}
    >
      {[
        { icon: <Camera size={22} strokeWidth={1.2} />, label: "Gallery", id: "gallery" },
        { icon: <Instagram size={22} strokeWidth={1.2} />, label: "Instagram", id: "instagram" },
        { icon: <Box size={22} strokeWidth={1.2} />, label: "3D Tour", id: "tour3d" },
        { icon: <Calendar size={22} strokeWidth={1.2} />, label: "Schedule", id: "schedule" },
        { icon: <Mail size={22} strokeWidth={1.2} />, label: "Contact", id: "contact" },
        { icon: <Phone size={22} strokeWidth={1.2} />, label: "Call", id: "call" },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => {
            if (item.id === "call") {
              window.location.href = "tel:+17029030000"
            } else if (item.id === "schedule") {
              scrollTo("contact")
            } else {
              scrollTo(item.id)
            }
          }}
          className="
            group relative p-3 rounded-xl
            text-[#B8935A]
            bg-transparent
            border border-transparent
            transition-all duration-500
            hover:scale-110
            hover:drop-shadow-[0_0_15px_rgba(199,167,106,0.6)]
          "
        >
          {item.icon}

          {/* Tooltip - closer to panel */}
          <span
            className="
              absolute right-[55px] top-1/2 -translate-y-1/2
              text-[#B8935A] px-3 py-1 rounded-xl
              text-xs whitespace-nowrap font-raleway uppercase tracking-wide
              opacity-0 translate-x-[6px]
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-500 ease-out
            "
          >
            {item.label}
          </span>

          {/* Gold indicator line */}
          <span
            className="
              absolute left-1/2 -translate-x-1/2 bottom-[4px]
              h-[2px] w-0 bg-[#B8935A] rounded-full
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
        flex gap-7 
        bg-black/40 backdrop-blur-xl
        border border-[#B8935A]/35
        px-6 py-3 rounded-3xl z-50
        shadow-[0_0_20px_rgba(0,0,0,0.4)]
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {[
        { icon: <Camera size={22} strokeWidth={1.2} />, id: "gallery" },
        { icon: <Instagram size={22} strokeWidth={1.2} />, id: "instagram" },
        { icon: <Box size={22} strokeWidth={1.2} />, id: "tour3d" },
        { icon: <Calendar size={22} strokeWidth={1.2} />, id: "schedule" },
        { icon: <Phone size={22} strokeWidth={1.2} />, id: "call" },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => {
            if (item.id === "call") {
              window.location.href = "tel:+17029030000"
            } else if (item.id === "schedule") {
              scrollTo("contact")
            } else {
              scrollTo(item.id)
            }
          }}
          className="
            p-2
            text-[#B8935A]
            transition-all duration-500 hover:scale-110
            hover:drop-shadow-[0_0_15px_rgba(199,167,106,0.6)]
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
