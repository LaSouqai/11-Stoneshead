"use client"

import { motion } from "framer-motion"
import { typography } from "@/src/styles/theme"

interface LuxuryParagraphProps {
  children: React.ReactNode
  variant?: "large" | "base" | "small"
  className?: string
  animate?: boolean
  color?: "default" | "muted"
}

export default function LuxuryParagraph({ 
  children, 
  variant = "base", 
  className = "",
  animate = true,
  color = "muted"
}: LuxuryParagraphProps) {
  const baseClass = typography.paragraph[variant]
  const colorClass = color === "muted" ? "text-[#6A6A6A]" : "text-[#1B1B1B]"
  const fullClass = `${baseClass} ${colorClass} ${className}`

  if (!animate) {
    return <p className={fullClass}>{children}</p>
  }

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={fullClass}
    >
      {children}
    </motion.p>
  )
}


