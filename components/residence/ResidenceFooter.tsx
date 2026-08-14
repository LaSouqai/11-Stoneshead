"use client"

import Link from "next/link"
import RenderingDisclosure from "@/components/RenderingDisclosure"

export default function ResidenceFooter() {
  return (
    <footer className="py-20 text-center text-gray-500 text-sm tracking-wide bg-white border-t border-gray-100 px-6">
      <RenderingDisclosure className="text-[#8A8A8A] mb-6 max-w-3xl mx-auto" />
      <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
        <Link href="/privacy" className="hover:text-[#1A1A1A] transition-colors focus:outline-none focus:underline">
          Privacy Policy
        </Link>
        <span className="text-gray-300">•</span>
        <a href="tel:+17029030000" className="hover:text-[#1A1A1A] transition-colors focus:outline-none focus:underline">
          (702) 903-0000
        </a>
      </div>
      <p className="font-light">© {new Date().getFullYear()} · 11 Stoneshead · Ascaya · Henderson, Nevada</p>
    </footer>
  )
}
