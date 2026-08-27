import "./globals.css"
import AnalyticsProvider from "@/components/AnalyticsProvider"
import { homepageMetadata } from "@/lib/seo"
import { HERO_VIDEO_ORIGIN } from "@/lib/hero"

export const metadata = {
  ...homepageMetadata,
  metadataBase: new URL("https://11stoneshead.luxury"),
  icons: {
    icon: "/logos/ascaya.svg",
    apple: "/logos/ascaya.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* The hero video streams from Blob, so open that connection early.
            No crossOrigin: <video> does not fetch with CORS, and a mismatched
            hint just opens a second connection. */}
        {HERO_VIDEO_ORIGIN && <link rel="preconnect" href={HERO_VIDEO_ORIGIN} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-raleway">
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  )
}
