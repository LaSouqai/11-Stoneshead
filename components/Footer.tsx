export default function Footer() {
  return (
    <footer className="text-center py-12 text-sm text-stone/70">
      <div className="flex items-center justify-center gap-5 mb-3">
        <img src="/logos/ascaya.svg" alt="Ascaya" className="h-7 md:h-8 w-auto object-contain opacity-90 brightness-0 invert" />
        <span className="text-stone/40">•</span>
        <a
          href="https://www.instagram.com/zariosconstruction"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center hover:opacity-90 transition-opacity"
        >
          <img
            src="/logos/zarios.svg"
            alt="Zarios Construction"
            className="h-12 md:h-14 w-auto object-contain opacity-95 brightness-0 invert sepia saturate-[3] hue-rotate-[10deg]"
          />
        </a>
      </div>
      © {new Date().getFullYear()} Ascaya · Henderson, NV
    </footer>
  )
}





