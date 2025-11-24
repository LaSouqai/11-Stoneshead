import "./globals.css"
import { Cormorant_Garamond, Raleway } from "next/font/google"

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant" 
})
const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway" 
})

export const metadata = {
  title: "Ascaya Residence · A Sanctuary Above the Strip",
  description: "Ultra-luxury modern residence above the Las Vegas Strip.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${cormorant.variable}`}>
      <body className="font-raleway">{children}</body>
    </html>
  )
}





