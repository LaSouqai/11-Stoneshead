import { residenceMetadata, getPropertyJsonLd } from "@/lib/seo"
import ResidencePageClient from "./ResidencePageClient"

export const metadata = residenceMetadata

export default function ResidencePage() {
  const jsonLd = getPropertyJsonLd()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ResidencePageClient />
    </>
  )
}
