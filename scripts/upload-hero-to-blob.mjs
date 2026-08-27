/**
 * Uploads the hero video tiers to Vercel Blob and prints the base URL to set as
 * NEXT_PUBLIC_HERO_VIDEO_BASE.
 *
 *   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_... node scripts/upload-hero-to-blob.mjs _not-deployed/hero-blob
 *
 * Get the token from the Vercel dashboard: Storage -> your Blob store -> Tokens.
 * @vercel/blob 0.27.x overwrites an existing pathname by default, so re-running
 * reuses the same URLs and you never have to change the environment variable.
 * (Newer majors require an explicit allowOverwrite flag - add it if you upgrade.)
 */
import { readFile, stat } from "node:fs/promises"
import { join } from "node:path"
import { put } from "@vercel/blob"

const FILES = ["hero-4k.mp4", "hero-desktop.mp4", "hero-mobile.mp4"]
const PREFIX = process.env.HERO_BLOB_PREFIX ?? "hero"
const dir = process.argv[2] ?? "_not-deployed/hero-blob"

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("BLOB_READ_WRITE_TOKEN is not set.")
  console.error("Vercel dashboard -> Storage -> your Blob store -> Tokens.")
  process.exit(1)
}

const urls = []
for (const name of FILES) {
  const path = join(dir, name)
  const { size } = await stat(path)
  process.stdout.write(`uploading ${name} (${(size / 1048576).toFixed(1)} MB) ... `)

  const { url } = await put(`${PREFIX}/${name}`, await readFile(path), {
    access: "public",
    addRandomSuffix: false,          // keeps the path predictable
    contentType: "video/mp4",
    cacheControlMaxAge: 31536000,    // a year; the filenames are stable
    multipart: true,                 // the 4K tier is well past a single request
  })
  console.log("done")
  urls.push(url)
}

const base = urls[0].slice(0, urls[0].lastIndexOf("/"))
console.log("\nUploaded:")
for (const u of urls) console.log("  " + u)
console.log("\nSet this in Vercel (Project -> Settings -> Environment Variables)")
console.log("and in .env.local for local dev:\n")
console.log("  NEXT_PUBLIC_HERO_VIDEO_BASE=" + base + "\n")
console.log("It is read at build time, so redeploy after setting it.")
