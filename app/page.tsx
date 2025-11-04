"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollCue from "@/components/ScrollCue"
import InstagramCarousel from "@/components/InstagramCarousel"
import Footer from "@/components/Footer"

const galleryImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 350) // subtle loading fade-in
    return () => clearTimeout(t)
  }, [])

  const toContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-charcoal text-stone">
      {/* Initial cinematic fade */}
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

      {/* Hero */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/drone-footage.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair text-5xl md:text-7xl tracking-tight"
          >
            A Sanctuary Above the Strip
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-lg md:text-2xl text-gold"
          >
            11 Stoneshead Ct · Henderson, Nevada
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <button onClick={toContact} className="btn-gold">Schedule a Tour</button>
          </motion.div>
        </div>
        <ScrollCue />
      </section>

      <div className="hr-gold" />

      {/* About */}
      <section className="section max-w-5xl">
        <h2 className="text-3xl text-gold font-playfair mb-6">The Residence</h2>
        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            Perched high above the Las Vegas Valley, this residence redefines modern serenity.
            Crafted by Zarios Construction, it harmonizes natural stone, warm lighting, and panoramic glass
            to frame the city's glittering skyline. Every space feels expansive yet intimate — a sanctuary
            of design and emotion.
          </p>
        </div>
      </section>

      <div className="hr-gold" />

      {/* Gallery */}
      <section className="section">
        <h2 className="text-3xl mb-10 text-gold font-playfair text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src) => (
            <motion.img
              key={src}
              src={src}
              onClick={() => setSelectedImage(src)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl cursor-pointer object-cover w-full h-64 md:h-80"
              alt="Property image"
            />
          ))}
        </div>

        {/* Lightbox */}
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

      {/* Instagram */}
      <section className="section text-center">
        <h2 className="text-3xl mb-8 text-gold font-playfair">Follow the Build</h2>
        <p className="text-stone/80 mb-6">Recent posts from Zarios Construction</p>
        <InstagramCarousel />
      </section>

      <div className="hr-gold" />

      {/* Contact */}
      <section id="contact" className="section text-center">
        <h2 className="text-3xl mb-8 text-gold font-playfair">Schedule a Private Tour</h2>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Your Email" className="input" />
          <textarea placeholder="Message" rows={3} className="input" />
          <button type="submit" className="btn-gold">Send Inquiry</button>
        </form>
      </section>

      <Footer />
    </main>
  )
}
