"use client"

import { motion } from "framer-motion"
import { typography } from "@/src/styles/theme"

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
  const baseClass = typography.tagline.default
  const fullClass = `${baseClass} text-[#8A8A8A] mb-6 ${className}`

  if (!animate) {
    return <p className={fullClass}>{children}</p>
  }

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={fullClass}
    >
      {children}
    </motion.p>
  )
}

