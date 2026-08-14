"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type GalleryImageProps = {
  src: string
  desc: string
  index: number
  onSelect: () => void
}

export default function GalleryImage({ src, desc, index, onSelect }: GalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col gap-3"
    >
      <button
        type="button"
        onClick={onSelect}
        className="relative rounded-2xl overflow-hidden w-full h-40 md:h-64 lg:h-80 shadow-soft focus:outline-none focus:ring-2 focus:ring-gold/60"
        aria-label={`Open gallery image: ${desc}`}
      >
        <Image
          src={src}
          alt={desc}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
          loading={index < 3 ? "eager" : "lazy"}
        />
      </button>
      <p className="text-center text-[#B8935A] text-xs md:text-sm font-raleway font-light tracking-wider uppercase">
        {desc}
      </p>
    </motion.div>
  )
}
