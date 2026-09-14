"use client"

import Image from "next/image"
import { HERO_IMAGE } from "@/lib/hero"

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="11 Stoneshead at twilight, above the lit Las Vegas Strip"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  )
}
