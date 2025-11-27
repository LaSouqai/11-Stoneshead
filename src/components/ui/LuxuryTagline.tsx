"use client"

import { motion } from "framer-motion"

interface LuxuryTaglineProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export default function LuxuryTagline({ 
  children, 
  className = "",
  animate = true 
}: LuxuryTaglineProps) {
  const content = (
    <div className={`flex items-center justify-center gap-4 mb-8 ${className}`}>
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#B8935A]/30" />
      <span className="text-sm md:text-base tracking-[0.2em] uppercase font-light text-[#B8935A]">
        {children}
      </span>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#B8935A]/30" />
    </div>
  )

  if (!animate) {
    return content
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  )
}


