import { Metadata } from "next"
import { SITE_URL } from "./site"

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const homepageMetadata: Metadata = {
  title: "11 Stoneshead | Private Luxury Estate Above the Las Vegas Strip",
  description:
    "Explore 11 Stoneshead — an approx. 9,748 SF modern estate in Ascaya, Henderson. Private previews, 3D tour, gallery, and property information from Zarios Construction.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "11 Stoneshead | Private Luxury Estate Above the Las Vegas Strip",
    description:
      "Final construction phase. Request a private preview of this Ascaya estate with panoramic Strip views.",
    url: SITE_URL,
    siteName: "11 Stoneshead",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "11 Stoneshead exterior rendering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "11 Stoneshead | Private Luxury Estate Above the Las Vegas Strip",
    description:
      "Final construction phase. Request a private preview of this Ascaya estate with panoramic Strip views.",
    images: [DEFAULT_OG_IMAGE],
  },
}

export const residenceMetadata: Metadata = {
  title: "The Residence | 11 Stoneshead · Ascaya Luxury Estate",
  description:
    "Architecture, interiors, engineering, floor plans, and builder details for 11 Stoneshead — an approx. 9,748 SF modern estate in Henderson, Nevada.",
  alternates: {
    canonical: `${SITE_URL}/residence`,
  },
  openGraph: {
    title: "The Residence | 11 Stoneshead · Ascaya Luxury Estate",
    description:
      "Discover the architectural, interior, and engineering details behind 11 Stoneshead in Ascaya.",
    url: `${SITE_URL}/residence`,
    siteName: "11 Stoneshead",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "11 Stoneshead exterior rendering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Residence | 11 Stoneshead · Ascaya Luxury Estate",
    description:
      "Discover the architectural, interior, and engineering details behind 11 Stoneshead in Ascaya.",
    images: [DEFAULT_OG_IMAGE],
  },
}

export function getPropertyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "11 Stoneshead Court",
    description:
      "An approx. 9,748 square foot modern architectural estate in Ascaya with panoramic Las Vegas Strip views.",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "11 Stoneshead Ct",
      addressLocality: "Henderson",
      addressRegion: "NV",
      postalCode: "89012",
      addressCountry: "US",
    },
    itemOffered: {
      "@type": "SingleFamilyResidence",
      name: "11 Stoneshead Court",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 9748,
        unitCode: "FTK",
      },
      numberOfBedrooms: 5,
      numberOfBathroomsTotal: 5.5,
      address: {
        "@type": "PostalAddress",
        streetAddress: "11 Stoneshead Ct",
        addressLocality: "Henderson",
        addressRegion: "NV",
        postalCode: "89012",
        addressCountry: "US",
      },
      image: DEFAULT_OG_IMAGE,
    },
  }
}
