"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"

const sections = [
  { id: "hero", label: "Overview" },
  { id: "architecture", label: "Architecture" },
  { id: "interior", label: "Interior" },
  { id: "outdoor", label: "Outdoor" },
  { id: "wellness", label: "Wellness" },
  { id: "engineering", label: "Engineering" },
  { id: "builder", label: "Builder" },
  { id: "floorplans", label: "Floor Plans" },
  { id: "gallery", label: "Gallery" },
  { id: "downloads", label: "Downloads" },
  { id: "contact", label: "Contact" },
]

export default function ResidenceNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 80)

      const scrollPosition = window.scrollY + 120
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handler)
    handler()
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 80
      window.scrollTo({ top, behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <>
      <Link
        href="/"
        aria-label="Return to 11 Stoneshead homepage"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-white/40 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:scale-105 hover:bg-white/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/50"
      >
        <ArrowLeft className="h-6 w-6 text-black/70" />
      </Link>

      <button
        type="button"
        aria-label={menuOpen ? "Close section menu" : "Open section menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="lg:hidden fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#B8935A]/50"
      >
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/30" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
        aria-label="Residence page sections"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`${menuOpen ? "block py-24" : "hidden"} lg:block lg:py-5`}>
            <div className="hidden lg:flex gap-10 justify-center">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`text-xs tracking-[0.15em] uppercase transition-all duration-300 focus:outline-none focus:underline ${
                    activeSection === section.id
                      ? "text-[#1B1B1B] font-normal"
                      : "text-[#6A6A6A] hover:text-[#1B1B1B] font-light"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`snap-start shrink-0 px-4 py-2 rounded-full text-xs tracking-[0.12em] uppercase border focus:outline-none focus:ring-2 focus:ring-[#B8935A]/40 ${
                    activeSection === section.id
                      ? "bg-[#1B1B1B] text-white border-[#1B1B1B]"
                      : "bg-white text-[#6A6A6A] border-gray-200"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
