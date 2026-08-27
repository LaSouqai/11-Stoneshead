// Hero video sources.
//
// All three tiers are committed under public/video, so the site works with
// nothing configured. Setting NEXT_PUBLIC_HERO_VIDEO_BASE serves the identical
// filenames from Vercel Blob instead, which keeps the ~75MB out of the git
// checkout Vercel clones on every build. Upload with
// scripts/upload-hero-to-blob.mjs. The variable is read at BUILD time.

const RAW_BASE = process.env.NEXT_PUBLIC_HERO_VIDEO_BASE
export const HERO_VIDEO_BASE = RAW_BASE ? RAW_BASE.replace(/\/+$/, "") : null

export const HERO_POSTER = "/video/hero-poster.jpg"

/** Origin of the Blob host, for a preconnect hint. Null when serving locally. */
export const HERO_VIDEO_ORIGIN = (() => {
  if (!HERO_VIDEO_BASE) return null
  try {
    return new URL(HERO_VIDEO_BASE).origin
  } catch {
    return null
  }
})()

// Largest first. The first tier the display is big enough for wins.
const TIERS = [
  { minEffectiveWidth: 2800, file: "hero-4k.mp4" },      // 3840x2160, 44MB
  { minEffectiveWidth: 1200, file: "hero-desktop.mp4" }, // 2560x1440, 25MB
  { minEffectiveWidth: 0, file: "hero-mobile.mp4" },     // 1440x810,   5.3MB
] as const

export const HERO_VIDEO_FILES = TIERS.map((t) => t.file)

/**
 * Picks a tier from the SCREEN, not the browser window.
 *
 * Keying off window.innerWidth was a bug: a half-width window on an ordinary
 * desktop fell through to the phone file. Screen size is also stable across
 * resizes, so the source never has to change mid-view.
 *
 * Device pixel ratio is capped at 1.5 rather than used raw - this is a dimmed
 * background behind text, not detail work, and uncapped 2x would send the 44MB
 * file to laptops that gain nothing from it.
 */
export function heroVideoUrl(): string {
  const screenWidth = typeof window.screen?.width === "number" ? window.screen.width : window.innerWidth
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

  // Genuine phones take the small file whatever the arithmetic says.
  const isPhone = window.matchMedia("(max-width: 768px)").matches
  const effective = isPhone ? 0 : screenWidth * dpr

  const tier = TIERS.find((t) => effective >= t.minEffectiveWidth) ?? TIERS[TIERS.length - 1]
  return HERO_VIDEO_BASE ? `${HERO_VIDEO_BASE}/${tier.file}` : `/video/${tier.file}`
}
