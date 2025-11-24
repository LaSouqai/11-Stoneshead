export default function Footer() {
  return (
    <footer className="text-center py-12 text-sm text-stone/70">
      <div className="flex items-center justify-center gap-4 mb-3">
        <img src="/logos/ascaya.svg" alt="Ascaya" className="h-5 opacity-80" />
        <span className="text-stone/40">•</span>
        <a href="https://www.instagram.com/zariosconstruction" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
          <img src="/logos/zarios.svg" alt="Zarios Construction" className="h-5 opacity-80" />
        </a>
      </div>
      © {new Date().getFullYear()} Ascaya · Henderson, NV
    </footer>
  )
}





