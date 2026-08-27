// Hero video sources.
//
// Files are committed under public/video, so the site works with nothing
// configured. Setting NEXT_PUBLIC_HERO_VIDEO_BASE serves the identical
// filenames from Vercel Blob instead. Upload with
// scripts/upload-hero-to-blob.mjs. The variable is read at BUILD time.

const RAW_BASE = process.env.NEXT_PUBLIC_HERO_VIDEO_BASE
export const HERO_VIDEO_BASE = RAW_BASE ? RAW_BASE.replace(/\/+$/, "") : null

export const HERO_POSTER = "/video/hero-poster.jpg"

// Bump when the encode changes so browsers and the CDN cannot keep an old file.
export const HERO_VIDEO_VERSION = "20260827"

/** Origin of the Blob host, for a preconnect hint. Null when serving locally. */
export const HERO_VIDEO_ORIGIN = (() => {
  if (!HERO_VIDEO_BASE) return null
  try {
    return new URL(HERO_VIDEO_BASE).origin
  } catch {
    return null
  }
})()

const FILES = ["hero-4k.mp4", "hero-mobile.mp4"] as const

export const HERO_VIDEO_FILES = FILES

export function heroAssetUrl(file: string): string {
  const query = `?v=${HERO_VIDEO_VERSION}`
  return HERO_VIDEO_BASE ? `${HERO_VIDEO_BASE}/${file}${query}` : `/video/${file}${query}`
}

/** Desktop preload target. Phones should not fetch this. */
export const HERO_4K_PRELOAD = heroAssetUrl("hero-4k.mp4")

/**
 * Desktop uses the 4K hero. Phones keep the smaller mobile file.
 */
export function heroVideoUrl(): string {
  const isPhone = window.matchMedia("(max-width: 768px)").matches
  return heroAssetUrl(isPhone ? "hero-mobile.mp4" : "hero-4k.mp4")
}
