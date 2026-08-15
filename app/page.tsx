"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import HomeHero from "@/components/home/HomeHero"
import MatterportEmbed from "@/components/MatterportEmbed"
import LazyInstagramCarousel from "@/components/LazyInstagramCarousel"
import ContactForm from "@/components/ContactForm"
import GalleryImage from "@/components/GalleryImage"
import RenderingDisclosure from "@/components/RenderingDisclosure"
import MobileStickyCTA from "@/components/MobileStickyCTA"
import Footer from "@/components/Footer"
import FloatingPanel from "@/components/FloatingPanel"
import { COMPLETION_TIMELINE } from "@/lib/site"

const exteriorImages = [
  { src: "/gallery/Exterior_Entrance_south_facing.jpg", desc: "Entrance South Facing" },
  { src: "/gallery/Exterior_Entrance_Cul_de_sac.jpg", desc: "Entrance Cul-de-sac" },
  { src: "/gallery/Exterior_Entrance_Side_View.jpg", desc: "Entrance Side View" },
  { src: "/gallery/Exterior_Driveway.jpg", desc: "Driveway" },
  { src: "/gallery/Exterior_Backyard_Pool.jpg", desc: "Backyard Pool" },
  { src: "/gallery/Exterior_Backyard_Eastside.jpg", desc: "Backyard Eastside" },
  { src: "/gallery/Exterior_sideyard.jpg", desc: "Sideyard" },
  { src: "/gallery/Exterior_Lot_view.jpg", desc: "Lot View" },
]

const interiorImages = [
  { src: "/gallery/Interior_Living_space.png", desc: "Living Space" },
  { src: "/gallery/Interior_Kitchen.png", desc: "Kitchen" },
  { src: "/gallery/Interior_kitchen_Nook.png", desc: "Kitchen Nook" },
  { src: "/gallery/Interior_dining_area.png", desc: "Dining Area" },
  { src: "/gallery/Interior_Floating_Staircase.png", desc: "Floating Staircase" },
  { src: "/gallery/Interior_media_room_theatre.png", desc: "Media Room Theatre" },
  { src: "/gallery/Interior_media_room_theatre_screen.png", desc: "Theatre Screen" },
  { src: "/gallery/Interior_media_room_game_room.png", desc: "Media Room Game Room" },
  { src: "/gallery/Interior_primary_suite_bedroom.png", desc: "Primary Suite Bedroom" },
  { src: "/gallery/Interior_primary_suite_bedroom_view.png", desc: "Bedroom View" },
  { src: "/gallery/Interior_primary_suite_private Hallway.png", desc: "Private Hallway" },
  { src: "/gallery/Interior_primary_suite_boutique_closet.png", desc: "Boutique Closet" },
  { src: "/gallery/Interior_primary_suite_boutique_closet_side.png", desc: "Closet Side View" },
  { src: "/gallery/Interior_Primary_Suite_Floating_vanity.png", desc: "Floating Vanity" },
  { src: "/gallery/Interior_Primary_Suite_FLoating_double_Vanity.png", desc: "Floating Double Vanity" },
  { src: "/gallery/Interior_Primary_suite_Shower.png", desc: "Primary Suite Shower" },
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; desc: string } | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<"exterior" | "interior">("exterior")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 350)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-charcoal text-stone relative">
      <div
        className={`fixed inset-2 md:inset-4 border border-[#B8935A]/30 rounded-2xl md:rounded-3xl pointer-events-none z-[100] transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      <FloatingPanel />
      <MobileStickyCTA onClick={scrollToContact} />

      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 bg-black z-[70]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <HomeHero onPreviewRequest={scrollToContact} />

      <div className="hr-gold" />

      <section id="residence-intro" className="section max-w-6xl mx-auto px-6 py-20 md:py-32 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-raleway font-light tracking-tight text-[#B8935A] mb-6">
            The Residence
          </h2>
          <p className="text-xl md:text-2xl text-[#B8935A] font-raleway font-light tracking-wide mb-4">
            A modern architectural estate designed to frame the Las Vegas Strip.
          </p>
          <p className="text-sm md:text-base text-gold/80 font-raleway tracking-[0.12em] uppercase mb-10">
            {COMPLETION_TIMELINE}
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-stone/80 text-base md:text-lg leading-relaxed font-raleway font-light tracking-wide mb-12">
              Spanning approximately 9,748 square feet across two meticulously designed levels, 11 Stoneshead represents the convergence of commercial-grade engineering, luxury construction quality, natural stone cladding, and architectural vision.
            </p>
          </div>
          <Link
            href="/residence"
            className="inline-flex items-center justify-center min-w-[220px] h-[48px] rounded-full px-6 text-sm tracking-wide font-raleway uppercase bg-black/40 backdrop-blur-xl border border-[#B8935A]/40 text-[#B8935A] hover:bg-black/50 hover:border-[#B8935A]/60 hover:scale-[1.04] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            Explore Full Details
          </Link>
        </motion.div>
      </section>

      <div className="hr-gold" />

      <section id="tour3d" className="section pb-32">
        <h2 className="text-3xl mb-12 text-gold font-cormorant text-center">3D Virtual Tour</h2>
        <p className="text-center text-stone/80 mb-8 max-w-2xl mx-auto">
          Explore every detail of this architectural masterpiece. Navigate through the home at your own pace.
        </p>
        <MatterportEmbed />
      </section>

      <div className="hr-gold" />

      <section id="gallery" className="section">
        <h2 className="text-3xl mb-12 text-gold font-cormorant text-center">Gallery</h2>
        <p className="text-center text-stone/80 mb-4 max-w-2xl mx-auto">
          A curated collection of moments, materials, and views.
        </p>
        <RenderingDisclosure className="text-stone/60 mb-8 max-w-3xl mx-auto px-4" />

        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("exterior")}
            className={`px-6 py-2 rounded-full text-sm font-raleway uppercase tracking-wide mr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 ${
              activeTab === "exterior"
                ? "bg-gold text-black shadow-soft"
                : "bg-black/20 text-gold/80 hover:text-gold hover:bg-black/30"
            }`}
          >
            Exterior
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("interior")}
            className={`px-6 py-2 rounded-full text-sm font-raleway uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 ${
              activeTab === "interior"
                ? "bg-gold text-black shadow-soft"
                : "bg-black/20 text-gold/80 hover:text-gold hover:bg-black/30"
            }`}
          >
            Interior
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10 max-w-6xl mx-auto">
          {(activeTab === "exterior" ? exteriorImages : interiorImages).map((item, index) => (
            <GalleryImage
              key={item.src}
              src={item.src}
              desc={item.desc}
              index={index}
              onSelect={() => setSelectedImage(item)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center z-[60] p-4 cursor-pointer"
              role="dialog"
              aria-modal="true"
              aria-label={`Gallery image: ${selectedImage.desc}`}
            >
              <div className="relative w-full max-w-5xl h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.desc}
                  fill
                  sizes="100vw"
                  className="object-contain rounded-lg shadow-soft"
                />
              </div>
              <p className="mt-6 text-[#B8935A] text-base md:text-lg font-raleway font-light tracking-wider uppercase">
                {selectedImage.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className="hr-gold" />

      <section id="instagram" className="section">
        <h2 className="text-3xl mb-12 text-gold font-cormorant text-center">Instagram</h2>
        <p className="text-center text-stone/80 mb-8 max-w-2xl mx-auto">Follow the Build</p>
        <LazyInstagramCarousel />
      </section>

      <div className="hr-gold" />

      <section id="contact" className="section">
        <h2 className="text-3xl mb-8 text-gold font-cormorant text-center">Contact</h2>
        <p className="text-center text-stone/80 mb-8 max-w-2xl mx-auto">
          Request a private preview or ask about the residence, construction progress, and available documentation.
        </p>
        <ContactForm page="homepage" variant="dark" />
      </section>

      <Footer />
    </main>
  )
}
