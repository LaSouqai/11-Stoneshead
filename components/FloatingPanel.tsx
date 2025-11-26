"use client"

import { useEffect, useState } from "react"
import { Camera, Instagram, Mail, Phone, Box, Calendar, Home } from "lucide-react"

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
  const topIcons = [
    { icon: <Camera size={20} strokeWidth={1.2} />, label: "Gallery", id: "gallery" },
    { icon: <Instagram size={20} strokeWidth={1.2} />, label: "Instagram", id: "instagram" },
    { icon: <Box size={20} strokeWidth={1.2} />, label: "3D Tour", id: "tour3d" },
  ]

  const bottomIcons = [
    { icon: <Calendar size={20} strokeWidth={1.2} />, label: "Schedule", id: "schedule" },
    { icon: <Mail size={20} strokeWidth={1.2} />, label: "Contact", id: "contact" },
    { icon: <Phone size={20} strokeWidth={1.2} />, label: "Call", id: "call" },
  ]

  const DesktopPanel = (
    <div
      className={`
        hidden md:flex flex-col items-center fixed right-6 top-1/2 -translate-y-1/2 z-50
        transition-all duration-700
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
      `}
    >
      {/* Vertical connecting line behind panels */}
      <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#B8935A]/20 to-transparent -z-10" />

      {/* Top Panel */}
      <div className="relative bg-black/35 backdrop-blur-xl border border-[#B8935A]/30 rounded-2xl px-2.5 pt-2.5 pb-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col gap-2 z-0">
        {topIcons.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="
              group relative p-2.5 rounded-xl
              text-[#B8935A]
              bg-transparent
              border border-transparent
              transition-all duration-500 ease-out
              hover:scale-[1.15]
              hover:drop-shadow-[0_0_20px_rgba(184,147,90,0.8)]
            "
          >
            {item.icon}

            {/* Label text with shine */}
            <span
              className="
                absolute right-[52px] top-1/2 -translate-y-1/2
                text-[#B8935A] px-3 py-1
                text-xs whitespace-nowrap font-raleway uppercase tracking-wider
                opacity-0 translate-x-[8px] pointer-events-none
                group-hover:opacity-100 group-hover:translate-x-0
                group-hover:drop-shadow-[0_0_20px_rgba(184,147,90,0.8)]
                transition-all duration-400 ease-out
              "
            >
              {item.label}
            </span>

            {/* Smaller gold indicator line */}
            <span
              className="
                absolute left-1/2 -translate-x-1/2 bottom-[4px]
                h-[1.5px] w-0 bg-[#B8935A] rounded-full
                group-hover:w-[60%] transition-all duration-500
                drop-shadow-[0_0_8px_rgba(184,147,90,0.6)]
              "
            />
          </button>
        ))}
      </div>

      {/* Center Home Icon - Enhanced & Overlapping */}
      <div className="relative -my-6 z-10">
        {/* Subtle rotating glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B8935A]/20 via-transparent to-[#B8935A]/20 animate-spin-slow" style={{ animationDuration: '8s' }} />
        
        <button
          onClick={() => window.location.href = "/residence"}
          className="
            group relative
            w-[80px] h-[80px] flex items-center justify-center rounded-full 
            border-[3px] border-[#B8935A]/60 bg-[#B8935A]/40 backdrop-blur-xl
            shadow-[0_0_30px_rgba(184,147,90,0.25),0_8px_32px_rgba(0,0,0,0.4)]
            text-[#B8935A]
            transition-all duration-500 ease-out
            hover:scale-[1.12]
            hover:border-[#B8935A]
            hover:bg-[#B8935A]/60
            hover:shadow-[0_0_40px_rgba(184,147,90,0.6),0_12px_40px_rgba(0,0,0,0.5)]
          "
        >
          <Home size={36} strokeWidth={1.4} className="transition-transform duration-500 group-hover:scale-110" />
          
          {/* Enhanced tooltip */}
          <span
            className="
              absolute right-[82px] top-1/2 -translate-y-1/2
              text-[#B8935A] px-4 py-2
              text-sm whitespace-nowrap font-raleway uppercase tracking-wider
              opacity-0 translate-x-[10px] pointer-events-none
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-400 ease-out
            "
          >
            Explore Residence
          </span>
        </button>
      </div>

      {/* Bottom Panel */}
      <div className="relative bg-black/35 backdrop-blur-xl border border-[#B8935A]/30 rounded-2xl px-2.5 pt-8 pb-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col gap-2 z-0">
        {bottomIcons.map((item) => (
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
              group relative p-2.5 rounded-xl
              text-[#B8935A]
              bg-transparent
              border border-transparent
              transition-all duration-500 ease-out
              hover:scale-[1.15]
              hover:drop-shadow-[0_0_20px_rgba(184,147,90,0.8)]
            "
          >
            {item.icon}

            {/* Label text with shine */}
            <span
              className="
                absolute right-[52px] top-1/2 -translate-y-1/2
                text-[#B8935A] px-3 py-1
                text-xs whitespace-nowrap font-raleway uppercase tracking-wider
                opacity-0 translate-x-[8px] pointer-events-none
                group-hover:opacity-100 group-hover:translate-x-0
                group-hover:drop-shadow-[0_0_20px_rgba(184,147,90,0.8)]
                transition-all duration-400 ease-out
              "
            >
              {item.label}
            </span>

            {/* Smaller gold indicator line */}
            <span
              className="
                absolute left-1/2 -translate-x-1/2 bottom-[4px]
                h-[1.5px] w-0 bg-[#B8935A] rounded-full
                group-hover:w-[60%] transition-all duration-500
                drop-shadow-[0_0_8px_rgba(184,147,90,0.6)]
              "
            />
          </button>
        ))}
      </div>
    </div>
  )

  /* --------------------------- */
  /* MOBILE PANEL                */
  /* --------------------------- */
  const mobileLeftIcons = [
    { icon: <Camera size={18} strokeWidth={1.2} />, id: "gallery" },
    { icon: <Instagram size={18} strokeWidth={1.2} />, id: "instagram" },
    { icon: <Box size={18} strokeWidth={1.2} />, id: "tour3d" },
  ]

  const mobileRightIcons = [
    { icon: <Calendar size={18} strokeWidth={1.2} />, id: "schedule" },
    { icon: <Mail size={18} strokeWidth={1.2} />, id: "contact" },
    { icon: <Phone size={18} strokeWidth={1.2} />, id: "call" },
  ]

  const MobilePanel = (
    <div
      className={`
        md:hidden fixed bottom-8 left-1/2 -translate-x-1/2
        flex items-center gap-2 z-50
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* Horizontal connecting line behind panels */}
      <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8935A]/20 to-transparent top-1/2 -z-10" />

      {/* Left Panel */}
      <div className="relative bg-black/35 backdrop-blur-xl border border-[#B8935A]/30 pl-3 pr-7 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex gap-3 z-0">
        {mobileLeftIcons.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="
              p-2 rounded-lg
              text-[#B8935A]
              transition-all duration-500 
              hover:scale-110
              hover:drop-shadow-[0_0_15px_rgba(199,167,106,0.6)]
              active:scale-95
            "
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Center Home Icon - Enhanced & Overlapping */}
      <div className="relative -mx-5 z-10">
        {/* Subtle rotating glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B8935A]/20 via-transparent to-[#B8935A]/20 animate-spin-slow" style={{ animationDuration: '8s' }} />
        
        <button
          onClick={() => window.location.href = "/residence"}
          className="
            relative
            w-[68px] h-[68px] flex items-center justify-center rounded-full 
            border-[3px] border-[#B8935A]/60 bg-[#B8935A]/40 backdrop-blur-xl
            shadow-[0_0_30px_rgba(184,147,90,0.25),0_8px_32px_rgba(0,0,0,0.4)]
            text-[#B8935A]
            transition-all duration-500 ease-out
            active:scale-95
            hover:scale-[1.08]
            hover:border-[#B8935A]
            hover:bg-[#B8935A]/60
            hover:shadow-[0_0_40px_rgba(184,147,90,0.6),0_12px_40px_rgba(0,0,0,0.5)]
          "
        >
          <Home size={32} strokeWidth={1.4} />
        </button>
      </div>

      {/* Right Panel */}
      <div className="relative bg-black/35 backdrop-blur-xl border border-[#B8935A]/30 pl-7 pr-3 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex gap-3 z-0">
        {mobileRightIcons.map((item) => (
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
              p-2 rounded-lg
              text-[#B8935A]
              transition-all duration-500
              hover:scale-110
              hover:drop-shadow-[0_0_15px_rgba(199,167,106,0.6)]
              active:scale-95
            "
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <>
      {DesktopPanel}
      {MobilePanel}
    </>
  )
}
