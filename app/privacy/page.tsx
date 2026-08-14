import Link from "next/link"
import { Metadata } from "next"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy | 11 Stoneshead",
  description: "Privacy policy for inquiries submitted through 11stoneshead.luxury.",
  alternates: { canonical: `${SITE_URL}/privacy` },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#2A2A2A]">
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
        <Link href="/" className="text-sm text-[#B8935A] hover:underline">
          ← Return Home
        </Link>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A]">Draft for Owner Review</p>
          <h1 className="font-cormorant text-4xl text-[#1A1A1A]">Privacy Policy</h1>
          <p className="text-[#6A6A6A] font-light">
            This page explains how inquiry information submitted through 11stoneshead.luxury is collected and used.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-light text-[#1A1A1A]">Information We Collect</h2>
          <p className="font-light leading-relaxed">
            When you submit a contact form, we may collect your name, email address, phone number, message, the page you submitted from, referrer information, and marketing attribution parameters such as UTM tags.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-light text-[#1A1A1A]">How We Use Information</h2>
          <p className="font-light leading-relaxed">
            Information is used to respond to private tour requests, property information requests, and related follow-up regarding 11 Stoneshead. We do not sell personal information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-light text-[#1A1A1A]">Sharing</h2>
          <p className="font-light leading-relaxed">
            Inquiry information may be processed by website infrastructure providers such as hosting, email delivery, analytics, and future CRM integrations required to respond to your request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-light text-[#1A1A1A]">Retention</h2>
          <p className="font-light leading-relaxed">
            Inquiry records are retained only as long as reasonably necessary to respond to requests and manage property-related communications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-light text-[#1A1A1A]">Contact</h2>
          <p className="font-light leading-relaxed">
            For privacy questions regarding this website, please call{" "}
            <a href="tel:+17029030000" className="text-[#B8935A] hover:underline">
              (702) 903-0000
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-[#8A8A8A] italic">
          Owner review required before treating this page as final legal language.
        </p>
      </div>
    </main>
  )
}
