"use client"

import { trackHeroCtaClick } from "@/lib/analytics"

type MobileStickyCTAProps = {
  onClick: () => void
}

export default function MobileStickyCTA({ onClick }: MobileStickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
      <button
        type="button"
        onClick={() => {
          trackHeroCtaClick("mobile_sticky_preview")
          onClick()
        }}
        className="px-5 py-3 rounded-full bg-gold text-black text-xs uppercase tracking-[0.18em] shadow-[0_8px_24px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-gold/50"
      >
        Request Private Preview
      </button>
    </div>
  )
}
