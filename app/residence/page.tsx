import { residenceMetadata } from "@/lib/seo"
import ResidencePageClient from "./ResidencePageClient"

export const metadata = residenceMetadata

export default function ResidencePage() {
  return (
    <>
      <ResidencePageClient />
    </>
  )
}
