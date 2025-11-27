"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { shadows } from "@/src/styles/theme"

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

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 80)

      // Find active section
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
    handler() // Initial check
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Luxury Floating Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full 
                   flex items-center justify-center 
                   bg-white/40 backdrop-blur-md 
                   shadow-[0_8px_20px_rgba(0,0,0,0.1)]
                   hover:scale-105 hover:bg-white/60 
                   transition-all duration-300"
      >
        <ArrowLeft className="h-6 w-6 text-black/70" />
      </Link>

      {/* Sticky Fading Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center py-5">
            {/* Section Links - Hidden on mobile */}
            <div className="hidden lg:flex gap-10">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-[#1B1B1B] font-normal"
                      : "text-[#6A6A6A] hover:text-[#1B1B1B] font-light"
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

