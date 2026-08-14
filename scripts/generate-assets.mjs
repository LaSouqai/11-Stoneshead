import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const root = process.cwd()
const sourceImage = path.join(root, "public/gallery/Exterior_Entrance_south_facing.jpg")
const ogOutput = path.join(root, "public/og-image.jpg")
const posterOutput = path.join(root, "public/video/hero-poster.jpg")

await fs.mkdir(path.join(root, "public/video"), { recursive: true })

await sharp(sourceImage)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(ogOutput)

await sharp(sourceImage)
  .resize(1920, 1080, { fit: "cover", position: "centre" })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(posterOutput)

console.log("Generated og-image.jpg and video/hero-poster.jpg")
