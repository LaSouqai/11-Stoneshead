"use client"

import { useEffect, useState } from "react"
import { Camera, Instagram, Mail, Phone, Box, Calendar, Home } from "lucide-react"

export default function FloatingPanel() {
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const [ctaPop, setCtaPop] = useState(false)

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

  // CTA pop animation - once on load, then once every 10 seconds (slower)
  useEffect(() => {
    // Initial pop after page loads
    const initialDelay = setTimeout(() => {
      setCtaPop(true)
      setTimeout(() => setCtaPop(false), 1800)
    }, 500)

    // Set up interval for single pop every 10 seconds
    const interval = setInterval(() => {
      setCtaPop(true)
      setTimeout(() => setCtaPop(false), 1800)
    }, 10000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [])

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
        
        {/* Gold coin border wrapper - Pop out CTA with controlled pulse */}
        <div 
          className={`p-[3px] rounded-full transition-all duration-[1800ms] ease-in-out hover:scale-[1.08] ${ctaPop ? 'scale-[1.15]' : 'scale-100'}`}
          style={{
            background: 'linear-gradient(145deg, #D4AF37 0%, #B8935A 50%, #8B7765 100%)',
            boxShadow: `
              0 8px 25px rgba(0,0,0,0.5),
              0 4px 15px rgba(184,147,90,0.4),
              0 0 0 1px rgba(212,175,55,0.3)
            `
          }}
        >
          <button
            onClick={() => window.location.href = "/residence"}
            className="
              group relative
              w-[74px] h-[74px] flex items-center justify-center rounded-full 
              bg-gradient-to-br from-[#B8935A]/50 to-[#8B7765]/40 backdrop-blur-xl
              transition-all duration-500 ease-out
              hover:from-[#B8935A]/70 hover:to-[#8B7765]/60
            "
            style={{
              boxShadow: 'inset 0 2px 10px rgba(212,175,55,0.2), inset 0 -2px 10px rgba(0,0,0,0.3)'
            }}
          >
          {/* Elegant gold R letter - CTA style */}
          <span 
            className="text-[#D4AF37] text-5xl font-light tracking-wider transition-transform duration-500 group-hover:scale-110" 
            style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontStyle: 'italic',
              fontWeight: '500',
              textShadow: `
                0 2px 8px rgba(0,0,0,0.4),
                0 0 15px rgba(212,175,55,0.3)
              `,
              background: 'linear-gradient(145deg, #E8C97A 0%, #D4AF37 50%, #B8935A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'brightness(1.1) contrast(1.05) drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
            }}
          >
            R
          </span>
          
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
        flex items-center gap-0.5 z-50
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* Horizontal connecting line behind panels */}
      <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8935A]/20 to-transparent top-1/2 -z-10" />

      {/* Left Panel */}
      <div className="relative bg-black/35 backdrop-blur-xl border border-[#B8935A]/30 pl-3 pr-2.5 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex gap-3 z-0">
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
      <div className="relative -mx-2 z-10">
        {/* Subtle rotating glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B8935A]/20 via-transparent to-[#B8935A]/20 animate-spin-slow" style={{ animationDuration: '8s' }} />
        
        {/* Gold coin border wrapper - Mobile Pop out CTA with controlled pulse */}
        <div 
          className={`p-[3px] rounded-full transition-all duration-[1800ms] ease-in-out ${ctaPop ? 'scale-[1.15]' : 'scale-100'}`}
          style={{
            background: 'linear-gradient(145deg, #D4AF37 0%, #B8935A 50%, #8B7765 100%)',
            boxShadow: `
              0 8px 25px rgba(0,0,0,0.5),
              0 4px 15px rgba(184,147,90,0.4),
              0 0 0 1px rgba(212,175,55,0.3)
            `
          }}
        >
          <button
            onClick={() => window.location.href = "/residence"}
            className="
              relative
              w-[62px] h-[62px] flex items-center justify-center rounded-full 
              bg-gradient-to-br from-[#B8935A]/50 to-[#8B7765]/40 backdrop-blur-xl
              transition-all duration-500 ease-out
              active:scale-95
              hover:from-[#B8935A]/70 hover:to-[#8B7765]/60
            "
            style={{
              boxShadow: 'inset 0 2px 10px rgba(212,175,55,0.2), inset 0 -2px 10px rgba(0,0,0,0.3)'
            }}
          >
          {/* Elegant gold R letter - Mobile CTA style */}
          <span 
            className="text-[#D4AF37] text-4xl font-light tracking-wider" 
            style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontStyle: 'italic',
              fontWeight: '500',
              textShadow: `
                0 2px 8px rgba(0,0,0,0.4),
                0 0 15px rgba(212,175,55,0.3)
              `,
              background: 'linear-gradient(145deg, #E8C97A 0%, #D4AF37 50%, #B8935A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'brightness(1.1) contrast(1.05) drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
            }}
          >
            R
          </span>
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative bg-black/35 backdrop-blur-xl border border-[#B8935A]/30 pl-2.5 pr-3 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex gap-3 z-0">
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
