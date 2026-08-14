# Requires FFmpeg installed locally.
# Source: public/drone-footage.mp4 (~96 MB)
# Outputs optimized web assets used by components/HeroVideo.tsx

$source = "public/drone-footage.mp4"
$outDir = "public/video"

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

ffmpeg -y -i $source `
  -vf "scale=-2:720" `
  -c:v libx264 -preset slow -crf 24 `
  -movflags +faststart `
  -an `
  "$outDir/hero-mobile.mp4"

ffmpeg -y -i $source `
  -vf "scale=-2:720" `
  -c:v libvpx-vp9 -crf 33 -b:v 0 `
  -an `
  "$outDir/hero-mobile.webm"

ffmpeg -y -i $source `
  -vf "scale=-2:1080" `
  -c:v libx264 -preset slow -crf 23 `
  -movflags +faststart `
  -an `
  "$outDir/hero-desktop.mp4"

ffmpeg -y -i $source `
  -vf "scale=-2:1080" `
  -c:v libvpx-vp9 -crf 32 -b:v 0 `
  -an `
  "$outDir/hero-desktop.webm"

Write-Host "Optimized hero videos written to $outDir"
