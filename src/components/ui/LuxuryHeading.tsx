"use client"

import { motion } from "framer-motion"
import { typography } from "@/src/styles/theme"

interface LuxuryHeadingProps {
  children: React.ReactNode
  variant?: "hero" | "section" | "subsection" | "card"
  className?: string
  animate?: boolean
}

export default function LuxuryHeading({ 
  children, 
  variant = "section", 
  className = "",
  animate = true 
}: LuxuryHeadingProps) {
  const baseClass = typography.heading[variant]
  const fullClass = `${baseClass} text-[#1B1B1B] ${className}`

  if (!animate) {
    return <h2 className={fullClass}>{children}</h2>
  }

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={fullClass}
    >
      {children}
    </motion.h2>
  )
}

