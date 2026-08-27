// The hero video is served from Vercel Blob, not from this repo. The 4K master
// is 44MB and git is the wrong place for it: every re-encode would be stored
// forever and Vercel would clone it on every build.
//
// Set NEXT_PUBLIC_HERO_VIDEO_BASE to the Blob directory that
// scripts/upload-hero-to-blob.mjs prints, e.g.
//   https://<store>.public.blob.vercel-storage.com/hero
//
// With it unset the hero falls back to the poster image, which IS committed.
// That degrades quietly rather than breaking, so check the console in dev.

const RAW_BASE = process.env.NEXT_PUBLIC_HERO_VIDEO_BASE
export const HERO_VIDEO_BASE = RAW_BASE ? RAW_BASE.replace(/\/+$/, "") : null

export const HERO_POSTER = "/video/hero-poster.jpg"

/** Origin of the Blob host, for a preconnect hint. Null if the base is unset or malformed. */
export const HERO_VIDEO_ORIGIN = (() => {
  if (!HERO_VIDEO_BASE) return null
  try {
    return new URL(HERO_VIDEO_BASE).origin
  } catch {
    return null
  }
})()

// Smallest first. The first tier the device fits inside wins.
const TIERS = [
  { maxEffectiveWidth: 1280, file: "hero-mobile.mp4" },  // 1440x810,  5.3MB
  { maxEffectiveWidth: 2600, file: "hero-desktop.mp4" }, // 2560x1440, 25MB
  { maxEffectiveWidth: Infinity, file: "hero-4k.mp4" },  // 3840x2160, 44MB
] as const

export const HERO_VIDEO_FILES = TIERS.map((t) => t.file)

/**
 * Device pixel ratio is deliberately capped at 1.5 rather than used raw. This is
 * a dimmed background behind text, not detail work, and an uncapped 2x would
 * hand the 44MB file to every high-DPI laptop. At 1.5x, 4K goes only to genuinely
 * large displays. Raise the cap if the 4K tier should reach more people.
 */
export function heroVideoUrl(cssWidth: number, devicePixelRatio: number): string | null {
  if (!HERO_VIDEO_BASE) return null
  const effective = cssWidth * Math.min(devicePixelRatio || 1, 1.5)
  const tier = TIERS.find((t) => effective <= t.maxEffectiveWidth) ?? TIERS[TIERS.length - 1]
  return `${HERO_VIDEO_BASE}/${tier.file}`
}
