import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-charcoal text-stone flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-6">
        <p className="text-gold tracking-[0.3em] uppercase text-sm">11 Stoneshead</p>
        <h1 className="font-cormorant text-5xl text-gold">Page Not Found</h1>
        <p className="text-stone/80 font-light">
          The page you requested is not available. Return to the estate homepage to explore the residence, gallery, and private preview information.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gold text-black uppercase tracking-wide text-sm hover:bg-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
