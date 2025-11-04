"use client"

export default function ScrollCue() {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
      <div className="flex flex-col items-center text-stone/80 text-xs tracking-widest">
        <span>SCROLL</span>
        <span className="mt-2 w-[1px] h-8 bg-gold/60 animate-pulse" />
      </div>
    </div>
  )
}


