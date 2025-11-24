"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollCue from "@/components/ScrollCue"
import InstagramCarousel from "@/components/InstagramCarousel"
import Footer from "@/components/Footer"
import FloatingPanel from "@/components/FloatingPanel"   // ✅ FIXED: PANEL IMPORT

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

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 350)
    return () => clearTimeout(t)
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
        <video
          autoPlay
          loop
          muted
          playsInline
          onPlay={handleVideoPlay}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/drone-footage.mp4"
        />

        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Hero text */}
        <motion.div
          animate={{
            y: videoPlaying ? "-38vh" : "0vh",
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="font-playfair text-5xl md:text-7xl tracking-tight"
          >
            A Sanctuary Above the Strip
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-4 text-lg md:text-2xl text-gold"
          >
            11 Stoneshead Ct · Henderson, Nevada
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex items-center justify-center"
          >
            <button 
              onClick={toContact} 
              className="btn-gold py-3 px-8 tracking-wide hover:shadow-[0_0_20px_rgba(198,166,100,0.45)] transition-all duration-300"
            >
              Schedule a Tour
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <ScrollCue />
      </section>

      <div className="hr-gold" />

      {/* ABOUT SECTION */}
      <section className="section max-w-4xl">
        <h2 className="text-3xl text-gold font-playfair mb-8">The Residence</h2>
        <div className="prose prose-invert prose-lg max-w-none leading-relaxed">
          <p>
            Perched high above the Las Vegas Valley, this residence redefines modern serenity.
            Crafted by Zarios Construction, it harmonizes natural stone, warm lighting, and panoramic
            glass that frames the iconic skyline. Designed for both quiet reflection and elevated
            entertainment, every room carries a sense of calm, purpose, and architectural significance.
          </p>
        </div>
      </section>

      <div className="hr-gold" />

      {/* --------------------------------------------------------- */}
      {/*   3D VIRTUAL TOUR                                         */}
      {/* --------------------------------------------------------- */}
      <section id="tour3d" className="section pb-32">
        <h2 className="text-3xl mb-12 text-gold font-playfair text-center">3D Virtual Tour</h2>
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
        <h2 className="text-3xl mb-12 text-gold font-playfair text-center">Gallery</h2>

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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {exteriorImages.map((src) => (
              <motion.img
                key={src}
                src={src}
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl cursor-pointer object-cover w-full h-64 md:h-80 shadow-soft hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]"
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {interiorImages.map((src) => (
              <motion.img
                key={src}
                src={src}
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl cursor-pointer object-cover w-full h-64 md:h-80 shadow-soft hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]"
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

      {/* 3D VIRTUAL TOUR */}
      <section id="tour3d" className="section text-center pb-32">
        <h2 className="text-3xl mb-8 text-gold font-playfair">3D Virtual Tour</h2>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-soft">
          <iframe 
            src="YOUR_MATTERPORT_URL_HERE"
            className="w-full h-[600px] rounded-3xl"
            allow="xr-spatial-tracking; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <div className="hr-gold" />

      {/* INSTAGRAM SECTION */}
      <section id="instagram" className="section text-center pb-28">
        <h2 className="text-3xl mb-8 text-gold font-playfair">Follow the Build</h2>
        <p className="text-stone/80 mb-6">Recent posts from Zarios Construction</p>

        <div className="max-w-3xl mx-auto">
          <InstagramCarousel />
        </div>
      </section>

      <div className="hr-gold" />

      {/* CONTACT */}
      <section id="contact" className="section text-center pt-28 pb-36">
        <h2 className="text-3xl mb-10 text-gold font-playfair">Schedule a Private Tour</h2>

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
