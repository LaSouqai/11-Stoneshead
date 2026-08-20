import Link from "next/link"
import RenderingDisclosure from "@/components/RenderingDisclosure"

export default function Footer() {
  return (
    <footer className="text-center py-12 text-sm text-stone/70 px-6">
      <div className="flex flex-col items-center mb-4">
        <img src="/logos/ascaya.svg" alt="Ascaya logo" className="h-7 md:h-8 w-auto object-contain opacity-90 brightness-0 invert mb-5" />
        <a
          href="https://www.instagram.com/zariosconstruction"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Zarios Construction on Instagram"
          className="inline-flex flex-col items-center hover:opacity-90 transition-opacity"
        >
          <img
            src="/logos/zarios.svg"
            alt="Zarios Construction logo"
            className="h-12 md:h-14 w-auto object-contain opacity-95 brightness-0 invert sepia saturate-[3] hue-rotate-[10deg]"
          />
          <span className="mt-2 text-[10px] md:text-xs text-stone/60 font-raleway font-light tracking-[0.16em] uppercase">
            Zarios Construction
          </span>
        </a>
      </div>

      <RenderingDisclosure className="text-stone/55 mb-6 max-w-3xl mx-auto" />

      <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
        <Link href="/privacy" className="hover:text-gold transition-colors focus:outline-none focus:underline">
          Privacy Policy
        </Link>
        <span className="text-stone/40">•</span>
        <a href="tel:+17029030000" className="hover:text-gold transition-colors focus:outline-none focus:underline">
          (702) 903-0000
        </a>
      </div>

      <p>© {new Date().getFullYear()} Ascaya · Henderson, NV</p>
    </footer>
  )
}
