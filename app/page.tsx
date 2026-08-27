import { getPropertyJsonLd } from "@/lib/seo"
import HomePageClient from "./HomePageClient"

export default function Home() {
  const jsonLd = getPropertyJsonLd()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomePageClient />
    </>
  )
}
