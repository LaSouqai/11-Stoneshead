"use client"

export default function ResidenceFooter() {
  return (
    <footer className="py-20 text-center text-gray-500 text-sm tracking-wide bg-white border-t border-gray-100">
      <p className="font-light">
        © {new Date().getFullYear()} · 11 Stoneshead · Ascaya · Henderson, Nevada
      </p>
    </footer>
  )
}

