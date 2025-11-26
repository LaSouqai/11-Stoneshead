"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollCue from "@/components/ScrollCue"
import InstagramCarousel from "@/components/InstagramCarousel"
import Footer from "@/components/Footer"
import FloatingPanel from "@/components/FloatingPanel"
import ExploreFloatingCTA from "@/components/ExploreFloatingCTA"

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
  const [scrollY, setScrollY] = useState(0)
  const [heroVisible, setHeroVisible] = useState(false)
  const [showSanctuary, setShowSanctuary] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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

  // Show video after 1.5 second black screen
  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hero intro animation sequence
  useEffect(() => {
    setHeroVisible(true)
    // Fade out sanctuary during rise: 1.5s pause + 2.5s into rise = 4s
    const timer = setTimeout(() => setShowSanctuary(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleVideoPlay = () => {
    setTimeout(() => setVideoPlaying(true), 2000)
  }

  const toContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-charcoal text-stone">

      {/* ✅ RESTORED FLOATING PANEL */}
      <FloatingPanel />

      {/* ✅ LEFT FLOATING CTA */}
      <ExploreFloatingCTA />

      {/* --------------------------------------------------------- */}
      {/*   Cinematic loading fade                                  */}
      {/* --------------------------------------------------------- */}
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

      {/* --------------------------------------------------------- */}
      {/*   HERO SECTION                                             */}
      {/* --------------------------------------------------------- */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Black screen for initial 1 second */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-700 ${showVideo ? 'opacity-0' : 'opacity-100'}`}
          style={{ pointerEvents: showVideo ? 'none' : 'auto' }}
        />

        <div
          className="absolute inset-0 hero-bg"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            onPlay={handleVideoPlay}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${showVideo ? 'opacity-60' : 'opacity-0'}`}
            src="/drone-footage.mp4"
          />
        </div>

        {/* Lighter gradient overlay - reveals more Strip detail */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent transition-opacity duration-700 ${showVideo ? 'opacity-100' : 'opacity-0'}`} />

        {/* Hero intro animation wrapper - visible immediately, pauses, then rises */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={heroVisible ? { 
            opacity: 1, 
            y: isMobile ? -200 : -420 
          } : { opacity: 1, y: 0 }}
          transition={{ duration: 4, ease: "easeOut", delay: 1.5 }}
          className="relative z-10 flex flex-col items-center gap-6 px-6 pt-16 text-center w-full"
        >
          {/* Title - Sanctuary text that fades out after appearing */}
          <motion.h1
            initial={{ opacity: 1 }}
            animate={showSanctuary ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light tracking-tight text-white text-shadow-sm font-raleway uppercase text-center"
          >
            A Sanctuary Above the Strip
          </motion.h1>

          {/* Address - all gold for luxury */}
          <div className="text-[#B8935A] tracking-widest text-base md:text-lg flex flex-wrap gap-2 font-raleway uppercase text-shadow-sm justify-center">
            <span>11 Stoneshead Ct</span>
            <span>·</span>
            <span>Henderson</span>
            <span>·</span>
            <span>Nevada</span>
          </div>

          {/* ASCAYA with luxury separators */}
          <div className="mt-8 flex items-center justify-center gap-4 w-full">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#B8935A]/50" />
            <span className="text-[#B8935A] text-xl md:text-2xl tracking-[0.3em] font-raleway font-light uppercase">
              Ascaya
            </span>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#B8935A]/50" />
          </div>
        </motion.div>

        {/* Scroll cue */}
        <ScrollCue />
      </section>

      <div className="hr-gold" />

      {/* ABOUT SECTION */}
      <section className="section max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#B8935A] font-raleway font-light tracking-tight mb-6">
            The Residence
          </h2>
          <p className="text-xl md:text-2xl text-[#B8935A] font-light tracking-wide mb-8">
            A modern architectural estate designed to frame the Las Vegas Strip.
          </p>
          <div className="prose prose-invert prose-lg max-w-none leading-relaxed mx-auto mb-12">
            <p className="text-stone/80 font-light tracking-wide">
              Spanning 9,747 square feet across two meticulously designed levels, 11 Stoneshead represents 
              the convergence of commercial-grade engineering, luxury construction quality, and architectural vision. 
              Every material, system, and detail has been selected to create an enduring modern masterpiece.
            </p>
          </div>

          {/* CTA to Residence Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="/residence"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-wide font-raleway uppercase
                         bg-black/40 backdrop-blur-xl
                         border border-[#B8935A]/40
                         text-[#B8935A]
                         shadow-[0_0_20px_rgba(0,0,0,0.4)]
                         hover:bg-black/50
                         hover:border-[#B8935A]/60
                         hover:shadow-[0_0_30px_rgba(199,167,106,0.4)]
                         hover:scale-[1.04]
                         transition-all duration-300 ease-out"
            >
              Explore Full Details
            </a>
          </motion.div>
        </motion.div>
      </section>

      <div className="hr-gold" />

      {/* --------------------------------------------------------- */}
      {/*   3D VIRTUAL TOUR                                         */}
      {/* --------------------------------------------------------- */}
      <section id="tour3d" className="section pb-32">
        <h2 className="text-3xl mb-12 text-gold font-raleway text-center">3D Virtual Tour</h2>
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

      {/* --------------------------------------------------------- */}
      {/*   GALLERY WITH TABS                                       */}
      {/* --------------------------------------------------------- */}
      <section id="gallery" className="section pb-32">
        <h2 className="text-3xl mb-12 text-gold font-raleway text-center">Gallery</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-12 text-lg">
          <button
            onClick={() => setActiveTab("exterior")}
            className={`pb-2 transition tracking-wide ${
              activeTab === "exterior"
                ? "text-gold border-b-2 border-gold"
                : "text-stone/60 hover:text-stone/90"
            }`}
          >
            Exterior
          </button>

          <button
            onClick={() => setActiveTab("interior")}
            className={`pb-2 transition tracking-wide ${
              activeTab === "interior"
                ? "text-gold border-b-2 border-gold"
                : "text-stone/60 hover:text-stone/90"
            }`}
          >
            Interior
          </button>
        </div>

        {/* EXTERIOR GRID */}
        {activeTab === "exterior" && (
          <motion.div
            key="ext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          >
            {exteriorImages.map((src) => (
              <motion.img
                key={src}
                src={src}
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl cursor-pointer object-cover w-full h-40 md:h-64 lg:h-80 shadow-soft hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]"
                alt="Exterior property image"
              />
            ))}
          </motion.div>
        )}

        {/* INTERIOR GRID */}
        {activeTab === "interior" && (
          <motion.div
            key="int"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          >
            {interiorImages.map((src) => (
              <motion.img
                key={src}
                src={src}
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl cursor-pointer object-cover w-full h-40 md:h-64 lg:h-80 shadow-soft hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]"
                alt="Interior property image"
              />
            ))}
          </motion.div>
        )}

        {/* LIGHTBOX */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                className="max-w-5xl w-full max-h-[90vh] rounded-2xl object-contain shadow-soft"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                alt="Expanded property image"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className="hr-gold" />

      {/* --------------------------------------------------------- */}
      {/*   INSTAGRAM SECTION                                        */}
      {/* --------------------------------------------------------- */}
      <section id="instagram" className="section text-center pb-28">
        <h2 className="text-3xl mb-8 text-gold font-raleway">Follow the Build</h2>
        <p className="text-stone/80 mb-6">Recent posts from Zarios Construction</p>

        <div className="max-w-3xl mx-auto">
          <InstagramCarousel />
        </div>
      </section>

      <div className="hr-gold" />

      {/* CONTACT */}
      <section id="contact" className="section text-center pt-28 pb-36">
        <h2 className="text-3xl mb-10 text-gold font-raleway">Schedule a Private Tour</h2>

        <form className="max-w-md mx-auto flex flex-col gap-5">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Your Email" className="input" />
          <textarea placeholder="Message" rows={4} className="input" />
          <button type="submit" className="btn-gold py-3 px-8 tracking-wide">
            Send Inquiry
          </button>
        </form>
      </section>

      <Footer />
    </main>
  )
}
