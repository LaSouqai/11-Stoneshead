"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import ScrollCue from "@/components/ScrollCue"
import InstagramCarousel from "@/components/InstagramCarousel"
import Footer from "@/components/Footer"
import FloatingPanel from "@/components/FloatingPanel"
import Link from "next/link"

/* --------------------------------------------------------- */
/*   GALLERY IMAGE ARRAYS (Exterior + Interior)              */
/* --------------------------------------------------------- */
const exteriorImages = [
  "/gallery/exterior1.jpg",
  "/gallery/exterior2.jpg",
  "/gallery/exterior3.jpg",
  "/gallery/exterior4.jpg",
  "/gallery/exterior5.jpg",
  "/gallery/exterior6.jpg",
]

const interiorImages = [
  "/gallery/interior1.jpg",
  "/gallery/interior2.jpg",
  "/gallery/interior3.jpg",
  "/gallery/interior4.jpg",
  "/gallery/interior5.jpg",
  "/gallery/interior6.jpg",
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<"exterior" | "interior">("exterior")
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [showSanctuary, setShowSanctuary] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, 75]) // Subtle parallax

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 350)
    return () => clearTimeout(t)
  }, [])

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Black screen intro
  useEffect(() => {
    const videoTimer = setTimeout(() => setShowVideo(true), 1500) // Show video after 1.5s
    return () => clearTimeout(videoTimer)
  }, [])

  // Hero animation sequence
  useEffect(() => {
    // Phase 1: Content fades in and pauses
    const initialFadeInTimer = setTimeout(() => {
      setHeroVisible(true)
    }, 0) // Starts immediately

    // Phase 2: After pause, content starts rising
    const riseTimer = setTimeout(() => {
      // No direct state change needed here, animate prop handles it
    }, 1500) // Pause for 1.5s before rise animation starts

    // Phase 3: Sanctuary text fades out during rise
    const sanctuaryFadeOutTimer = setTimeout(() => {
      setShowSanctuary(false)
    }, 5000) // Fades out at 5.0s (1.5s pause + 3.5s into rise)

    return () => {
      clearTimeout(initialFadeInTimer)
      clearTimeout(riseTimer)
      clearTimeout(sanctuaryFadeOutTimer)
    }
  }, [])

  const handleVideoPlay = () => {
    setVideoPlaying(true)
  }

  const toContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-charcoal text-stone relative">
      {/* Thin gold frame around the page with rounded corners */}
      <div className="fixed inset-2 md:inset-4 border border-[#B8935A]/30 rounded-2xl md:rounded-3xl pointer-events-none z-[100]" />
      
      {/* ✅ FLOATING PANEL (includes Explore button) */}
      <FloatingPanel />

      {/* Cinematic loading fade */}
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

      {/* Black screen intro overlay - behind text, covers video */}
      <AnimatePresence>
        {!showVideo && (
          <motion.div
            className="fixed inset-0 bg-black z-[5]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.5 }} // Fades out after 1.5s
          />
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-[100vh] overflow-hidden"
          style={{ translateY: parallaxY }}
        >
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            onPlay={handleVideoPlay}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={showVideo ? { opacity: 0.6 } : { opacity: 0 }} // Video fades in after black screen
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.5 }}
            src="/drone-footage.mp4"
          />
        </motion.div>

        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />

        {/* Hero text container - moves up smoothly */}
        <motion.div
          initial={{ opacity: 1, y: 0 }} // Starts visible at center
          animate={heroVisible ? { 
            opacity: 1, 
            y: isMobile ? -320 : -420 
          } : { opacity: 1, y: 0 }} // Rises 420px desktop, 320px mobile
          transition={{ 
            duration: isMobile ? 4 : 6.5, 
            ease: [0.16, 1, 0.3, 1], 
            delay: 1.5 
          }} // Desktop: slower 6.5s, more graceful easing
          className="relative z-10 text-center px-6 flex flex-col items-center justify-center w-full" // Added w-full for centering
        >
          {/* Title - fades away */}
          <motion.h1
            initial={{ opacity: 1 }} // Starts visible
            animate={showSanctuary ? { opacity: 1 } : { opacity: 0 }} // Fades out during rise
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-raleway text-5xl md:text-7xl tracking-[0.15em] font-light uppercase text-white text-shadow-sm text-center"
          >
            A Sanctuary Above the Strip
          </motion.h1>

          {/* Address - stays visible and moves to top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-6 text-base md:text-lg text-[#B8935A] font-raleway font-light tracking-[0.15em] uppercase flex flex-wrap justify-center gap-2 w-full"
          >
            <span>11 STONESHEAD CT</span>
            <span className="text-[#B8935A]">·</span>
            <span>HENDERSON</span>
            <span className="text-[#B8935A]">·</span>
            <span>NEVADA</span>
          </motion.div>

          {/* Ascaya text with separators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4 w-full"
          >
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#B8935A]/50" />
            <span className="text-[#B8935A] text-xl md:text-2xl tracking-[0.3em] font-raleway font-light uppercase">
              Ascaya
            </span>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#B8935A]/50" />
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <ScrollCue />
      </section>

      <div className="hr-gold" />

      {/* RESIDENCE SECTION */}
      <section id="residence-intro" className="section max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-raleway font-light tracking-tight text-[#B8935A] mb-6">
            The Residence
          </h2>
          <p className="text-xl md:text-2xl text-[#B8935A] font-raleway font-light tracking-wide mb-10">
            A modern architectural estate designed to frame the Las Vegas Strip.
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-stone/80 text-base md:text-lg leading-relaxed font-raleway font-light tracking-wide mb-12">
              Spanning 9,747 square feet across two meticulously designed levels, 11 Stoneshead represents the convergence of commercial-grade engineering, luxury construction quality, and architectural vision. Every material, system, and detail has been selected to create an enduring modern masterpiece.
            </p>
          </div>
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ 
              scale: [1, 1.15, 1],
              filter: [
                "drop-shadow(0 0 0px rgba(184,147,90,0))",
                "drop-shadow(0 0 30px rgba(184,147,90,1))",
                "drop-shadow(0 0 0px rgba(184,147,90,0))"
              ]
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          >
            <Link
              href="/residence"
              className="inline-flex items-center justify-center min-w-[220px] h-[48px]
                         rounded-full
                         px-6 text-sm tracking-wide font-raleway uppercase
                         bg-black/40 backdrop-blur-xl
                         border border-[#B8935A]/40
                         text-[#B8935A]
                         shadow-[0_0_20px_rgba(0,0,0,0.4)]
                         hover:bg-black/50
                         hover:border-[#B8935A]/60
                         hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]
                         hover:scale-[1.04]
                         transition-all duration-300 ease-out"
            >
              Explore Full Details
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="hr-gold" />

      {/* 3D VIRTUAL TOUR SECTION */}
      <section id="tour3d" className="section pb-32">
        <h2 className="text-3xl mb-12 text-gold font-cormorant text-center">3D Virtual Tour</h2>
        <p className="text-center text-stone/80 mb-8 max-w-2xl mx-auto">
          Explore every detail of this architectural masterpiece. Navigate through the home at your own pace.
        </p>
        <div className="relative w-full max-w-6xl mx-auto" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://my.matterport.com/show/?m=m5MUrQ81k6V"
            className="absolute inset-0 w-full h-full rounded-2xl shadow-soft"
            frameBorder="0"
            allowFullScreen
            allow="xr-spatial-tracking"
          />
        </div>
      </section>

      <div className="hr-gold" />

      {/* GALLERY SECTION */}
      <section id="gallery" className="section">
        <h2 className="text-3xl mb-12 text-gold font-cormorant text-center">Gallery</h2>
        <p className="text-center text-stone/80 mb-8 max-w-2xl mx-auto">
          A curated collection of moments, materials, and views.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("exterior")}
            className={`
              px-6 py-2 rounded-full text-sm font-raleway uppercase tracking-wide
              ${activeTab === "exterior"
                ? "bg-gold text-black shadow-soft"
                : "bg-black/20 text-gold/80 hover:text-gold hover:bg-black/30"}
              transition-all duration-300 mr-4
            `}
          >
            Exterior
          </button>
          <button
            onClick={() => setActiveTab("interior")}
            className={`
              px-6 py-2 rounded-full text-sm font-raleway uppercase tracking-wide
              ${activeTab === "interior"
                ? "bg-gold text-black shadow-soft"
                : "bg-black/20 text-gold/80 hover:text-gold hover:bg-black/30"}
              transition-all duration-300
            `}
          >
            Interior
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
          {(activeTab === "exterior" ? exteriorImages : interiorImages).map((src, index) => (
            <motion.img
              key={index}
              src={src}
              onClick={() => setSelectedImage(src)}
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl cursor-pointer object-cover w-full h-40 md:h-64 lg:h-80 shadow-soft"
              alt={`Property image ${index + 1}`}
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
              className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-[60] p-4 cursor-pointer"
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage}
                className="max-w-full max-h-full rounded-lg shadow-soft"
                alt="Selected property image"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className="hr-gold" />

      {/* INSTAGRAM SECTION */}
      <section id="instagram" className="section">
        <h2 className="text-3xl mb-12 text-gold font-cormorant text-center">Instagram</h2>
        <p className="text-center text-stone/80 mb-8 max-w-2xl mx-auto">
          Follow @lasouq.luxury for the latest updates and exclusive content.
        </p>
        <InstagramCarousel />
      </section>

      <div className="hr-gold" />

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <h2 className="text-3xl mb-12 text-gold font-cormorant text-center">Contact Us</h2>
        <p className="text-center text-stone/80 mb-8 max-w-2xl mx-auto">
          Reach out to schedule a private tour or for more information.
        </p>
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gold/80 mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-3 bg-black/20 border border-gold/30 rounded-md text-stone focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gold/80 mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-3 bg-black/20 border border-gold/30 rounded-md text-stone focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gold/80 mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full px-4 py-3 bg-black/20 border border-gold/30 rounded-md text-stone focus:outline-none focus:border-gold resize-none"></textarea>
          </div>
          <button
            type="submit"
            className="group relative px-8 py-3 bg-gold text-black rounded-md text-sm font-raleway uppercase tracking-wide
                       hover:bg-gold/90 hover:shadow-lg transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </section>

      <Footer />
    </main>
  )
}
