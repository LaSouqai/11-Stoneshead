// Hero video sources.
//
// Files are committed under public/video, so the site works with nothing
// configured. Setting NEXT_PUBLIC_HERO_VIDEO_BASE serves the identical
// filenames from Vercel Blob instead. Upload with
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
  { minEffectiveWidth: 769, file: "hero-4k.mp4" },
  { minEffectiveWidth: 0, file: "hero-mobile.mp4" },
] as const

export const HERO_VIDEO_FILES = TIERS.map((t) => t.file)

/**
 * Desktop uses the 4K hero. Phones keep the smaller mobile file.
 */
export function heroVideoUrl(): string {
  // Genuine phones take the small file. Everything else uses the 4K hero.
  const isPhone = window.matchMedia("(max-width: 768px)").matches
  const effective = isPhone ? 0 : 769

  const tier = TIERS.find((t) => effective >= t.minEffectiveWidth) ?? TIERS[TIERS.length - 1]
  return HERO_VIDEO_BASE ? `${HERO_VIDEO_BASE}/${tier.file}` : `/video/${tier.file}`
}
