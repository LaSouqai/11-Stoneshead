"use client"

import { useEffect } from "react"
import { trackResidencePageView } from "@/lib/analytics"
import ResidenceHero from "@/components/residence/ResidenceHero"
import ResidenceNav from "@/components/residence/ResidenceNav"
import ArchitectureSection from "@/components/residence/ArchitectureSection"
import InteriorSection from "@/components/residence/InteriorSection"
import OutdoorSection from "@/components/residence/OutdoorSection"
import WellnessSection from "@/components/residence/WellnessSection"
import EngineeringSection from "@/components/residence/EngineeringSection"
import FloorPlansSection from "@/components/residence/FloorPlansSection"
import GalleryPreview from "@/components/residence/GalleryPreview"
import BuilderSection from "@/components/residence/BuilderSection"
import DownloadsSection from "@/components/residence/DownloadsSection"
import ContactSection from "@/components/residence/ContactSection"
import ResidenceFooter from "@/components/residence/ResidenceFooter"
import MobileStickyCTA from "@/components/MobileStickyCTA"

export default function ResidencePageClient() {
  useEffect(() => {
    trackResidencePageView()
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="bg-white text-[#2A2A2A]">
      <ResidenceNav />
      <MobileStickyCTA onClick={scrollToContact} />
      <ResidenceHero />
      <ArchitectureSection />
      <InteriorSection />
      <OutdoorSection />
      <WellnessSection />
      <EngineeringSection />
      <BuilderSection />
      <FloorPlansSection />
      <GalleryPreview />
      <DownloadsSection />
      <ContactSection />
      <ResidenceFooter />
    </main>
  )
}
