// Hero video sources.
//
// Two modes, and the site works in either without a code change:
//
//   Default (nothing configured) - serves the 1440p/810p pair committed under
//   public/video. Fine quality, ~15MB total, ships with the repo.
//
//   NEXT_PUBLIC_HERO_VIDEO_BASE set - serves higher-quality tiers from Vercel
//   Blob instead, including a native 4K master that is far too large to keep in
//   git. Upload with scripts/upload-hero-to-blob.mjs, then set the variable to
//   the base URL it prints. It is read at BUILD time, so redeploy after setting it.

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

// Smallest first; the first tier the device fits inside wins.
const BLOB_TIERS = [
  { maxEffectiveWidth: 1280, file: "hero-mobile.mp4" },  // 1440x810,  5.3MB
  { maxEffectiveWidth: 2600, file: "hero-desktop.mp4" }, // 2560x1440, 25MB
  { maxEffectiveWidth: Infinity, file: "hero-4k.mp4" },  // 3840x2160, 44MB
] as const

const LOCAL_TIERS = [
  { maxEffectiveWidth: 1280, file: "/video/hero-mobile.mp4" },  // 1440x810,  3.1MB
  { maxEffectiveWidth: Infinity, file: "/video/hero-desktop.mp4" }, // 2560x1440, 12MB
] as const

export const HERO_BLOB_FILES = BLOB_TIERS.map((t) => t.file)

/**
 * Device pixel ratio is deliberately capped at 1.5 rather than used raw. This is
 * a dimmed background behind text, not detail work, and an uncapped 2x would hand
 * the largest file to every high-DPI laptop. Raise the cap to push bigger tiers
 * to more people.
 */
export function heroVideoUrl(cssWidth: number, devicePixelRatio: number): string {
  const effective = cssWidth * Math.min(devicePixelRatio || 1, 1.5)
  const pick = <T extends { maxEffectiveWidth: number }>(tiers: readonly T[]) =>
    tiers.find((t) => effective <= t.maxEffectiveWidth) ?? tiers[tiers.length - 1]

  if (!HERO_VIDEO_BASE) return pick(LOCAL_TIERS).file
  return `${HERO_VIDEO_BASE}/${pick(BLOB_TIERS).file}`
}
