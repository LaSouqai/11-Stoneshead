"use client"

import { buttonStyles } from "@/src/styles/theme"

interface LuxuryButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  onClick?: () => void
  href?: string
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function LuxuryButton({ 
  children, 
  variant = "primary", 
  onClick,
  href,
  className = "",
  type = "button"
}: LuxuryButtonProps) {
  const baseClass = buttonStyles[variant].replace(/\s+/g, " ").trim()
  const fullClass = `${baseClass} ${className}`

  if (href) {
    return (
      <a href={href} className={fullClass}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={fullClass}>
      {children}
    </button>
  )
}

