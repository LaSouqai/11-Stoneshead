/*
====================================================
WIREFRAME LAYOUT
====================================================
┌─────────────────────────────────────────────┐
│  Sticky Navigation (section links)         │
├─────────────────────────────────────────────┤
│  HERO                                       │
│  - Large title + subtitle                  │
│  - Brief intro paragraph                   │
├─────────────────────────────────────────────┤
│  ARCHITECTURE                               │
│  - Section header                          │
│  - Feature grid (2-3 cols)                 │
│  - Hero image                              │
├─────────────────────────────────────────────┤
│  INTERIOR                                   │
│  - Section header                          │
│  - Feature list with images               │
├─────────────────────────────────────────────┤
│  OUTDOOR LIVING                             │
│  - Section header                          │
│  - Image grid + features                   │
├─────────────────────────────────────────────┤
│  WELLNESS & ENTERTAINMENT                   │
│  - Section header                          │
│  - Feature cards                           │
├─────────────────────────────────────────────┤
│  ENGINEERING & PERFORMANCE                  │
│  - Technical specs grid                    │
├─────────────────────────────────────────────┤
│  FLOOR PLANS                                │
│  - Interactive plan viewer                 │
├─────────────────────────────────────────────┤
│  GALLERY PREVIEW                            │
│  - Thumbnail grid                          │
├─────────────────────────────────────────────┤
│  DOWNLOADS                                  │
│  - Download cards                          │
├─────────────────────────────────────────────┤
│  CONTACT                                    │
│  - Contact form                            │
└─────────────────────────────────────────────┘
*/

import { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "The Residence – 11 Stoneshead | Ascaya Luxury Estate",
  description: "Discover the architectural, interior, engineering, and lifestyle details behind 11 Stoneshead — a 9,747 sq ft modern masterpiece with panoramic Strip views.",
  openGraph: {
    title: "The Residence – 11 Stoneshead | Ascaya Luxury Estate",
    description: "A modern architectural estate designed to frame the Las Vegas Strip. Explore 9,747 sq ft of luxury living.",
    images: ["/residence/hero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Residence – 11 Stoneshead | Ascaya Luxury Estate",
    description: "Discover the architectural, interior, engineering, and lifestyle details behind 11 Stoneshead.",
    images: ["/residence/hero.jpg"],
  },
}

export default function ResidencePage() {
  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LuxuryRealEstateListing",
    "name": "11 Stoneshead Court",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Stoneshead Ct",
      "addressLocality": "Henderson",
      "addressRegion": "NV",
      "postalCode": "89011",
      "addressCountry": "US"
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 9747,
      "unitCode": "FTK"
    },
    "numberOfRooms": 5,
    "description": "A modern architectural estate in Ascaya featuring panoramic Las Vegas Strip views, commercial-grade construction, and luxury finishes throughout 9,747 square feet.",
    "image": "/residence/hero.jpg"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="bg-white text-[#2A2A2A]">
        <ResidenceNav />
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
    </>
  )
}

