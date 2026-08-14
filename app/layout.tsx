import "./globals.css"
import AnalyticsProvider from "@/components/AnalyticsProvider"
import { homepageMetadata } from "@/lib/seo"

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
