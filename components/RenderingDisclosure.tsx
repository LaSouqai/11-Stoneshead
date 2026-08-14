import { RENDERING_DISCLOSURE } from "@/lib/site"

type RenderingDisclosureProps = {
  className?: string
}

export default function RenderingDisclosure({ className = "" }: RenderingDisclosureProps) {
  return (
    <p className={`text-center text-xs md:text-sm leading-relaxed ${className}`}>{RENDERING_DISCLOSURE}</p>
  )
}
