"use client"

import Image from "next/image"
import { INSTAGRAM_POSTS } from "@/lib/instagram"
import { trackInstagramClick } from "@/lib/analytics"

export default function LazyInstagramCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {INSTAGRAM_POSTS.map((post) => (
          <a
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            aria-label={post.alt}
            onClick={() => trackInstagramClick()}
            className="group relative aspect-square overflow-hidden rounded-xl border border-[#B8935A]/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <Image
              src={post.image}
              alt={post.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
