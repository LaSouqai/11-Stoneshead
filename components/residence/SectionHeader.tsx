"use client"

import LuxuryTagline from "@/src/components/ui/LuxuryTagline"
import LuxuryHeading from "@/src/components/ui/LuxuryHeading"
import LuxuryParagraph from "@/src/components/ui/LuxuryParagraph"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  tagline?: string
  align?: "left" | "center"
}

export default function SectionHeader({ title, subtitle, tagline, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`mb-24 ${align === "center" ? "text-center" : "text-left"}`}>
      {tagline && <LuxuryTagline>{tagline}</LuxuryTagline>}
      
      <LuxuryHeading variant="section" className="mb-8">
        {title}
      </LuxuryHeading>
      
      {subtitle && (
        <LuxuryParagraph variant="large" className="max-w-3xl mx-auto">
          {subtitle}
        </LuxuryParagraph>
      )}
    </div>
  )
}

