"use client"

import { useState } from "react"
import { submitContactInquiry, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/contact"
import { trackContactFormStart, trackContactFormSuccess, trackPhoneClick } from "@/lib/analytics"

type ContactFormProps = {
  page: string
  variant?: "dark" | "light"
}

const darkInputClass =
  "w-full px-4 py-3 bg-black/20 border border-gold/30 rounded-md text-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
const lightInputClass =
  "w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/20 font-light"

export default function ContactForm({ page, variant = "dark" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState("")
  const [started, setStarted] = useState(false)

  const isDark = variant === "dark"
  const labelClass = isDark
    ? "block text-sm text-gold/80 mb-2"
    : "block text-xs text-[#6A6A6A] mb-3 uppercase tracking-[0.15em] font-light"
  const inputClass = isDark ? darkInputClass : lightInputClass

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!started) {
      setStarted(true)
      trackContactFormStart(page)
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setError("")

    const result = await submitContactInquiry({
      name: formData.name,
      email: formData.email || undefined,
      phone: formData.phone || undefined,
      message: formData.message,
      page,
      website: formData.website,
    })

    if (result.success) {
      trackContactFormSuccess(page)
      setFormData({ name: "", email: "", phone: "", message: "", website: "" })
      setStarted(false)
      setStatus("success")
      return
    }

    setError(result.error)
    setStatus("error")
  }

  return (
    <div>
      <div className={`text-center mb-8 ${isDark ? "text-stone/80" : "text-[#6A6A6A]"}`}>
        <p className={`${isDark ? "text-gold text-lg" : "text-[#1A1A1A] text-base"} font-raleway tracking-wide mb-2`}>
          Private Tours &amp; Property Information
        </p>
        <a
          href={CONTACT_PHONE_HREF}
          onClick={() => trackPhoneClick(page)}
          className={`${isDark ? "text-gold hover:underline" : "text-[#1A1A1A] hover:underline"} text-lg font-light`}
        >
          {CONTACT_PHONE}
        </a>
      </div>

      <form className="relative max-w-xl mx-auto space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor={`website-${page}`}>Website</label>
          <input
            id={`website-${page}`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor={`name-${page}`} className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id={`name-${page}`}
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className={isDark ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
          <div>
            <label htmlFor={`email-${page}`} className={labelClass}>
              Email
            </label>
            <input
              type="email"
              id={`email-${page}`}
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`phone-${page}`} className={labelClass}>
              Phone
            </label>
            <input
              type="tel"
              id={`phone-${page}`}
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <p className={`text-xs ${isDark ? "text-stone/60" : "text-[#8A8A8A]"} text-center`}>
          Email or phone required.
        </p>

        <div>
          <label htmlFor={`message-${page}`} className={labelClass}>
            Message
          </label>
          <textarea
            id={`message-${page}`}
            name="message"
            rows={isDark ? 5 : 6}
            required
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="text-center pt-2 space-y-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className={
              isDark
                ? "inline-flex items-center justify-center px-8 py-3 bg-gold text-black rounded-md text-sm font-raleway uppercase tracking-wide hover:bg-gold/90 hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold/50"
                : "inline-flex items-center justify-center px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-[#C7A76A] to-[#E2D3AC] text-black/80 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(199,167,106,0.45)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C7A76A]/50"
            }
          >
            {status === "submitting" ? "Sending..." : "Send Inquiry"}
          </button>

          {status === "success" && (
            <p
              className={`text-sm ${isDark ? "text-gold/90" : "text-[#1A1A1A] font-light"}`}
              role="status"
              aria-live="polite"
            >
              Thank you. Your message was sent successfully. We&apos;ll follow up shortly regarding private previews and property information.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-400/90" role="alert" aria-live="assertive">
              {error}
            </p>
          )}
        </div>
      </form>

      <p className={`text-center mt-8 text-sm ${isDark ? "text-stone/70" : "text-[#8A8A8A] font-light"}`}>
        Or call directly:{" "}
        <a
          href={CONTACT_PHONE_HREF}
          onClick={() => trackPhoneClick(`${page}-footer`)}
          className={`${isDark ? "text-gold hover:underline" : "text-[#1A1A1A] hover:underline"}`}
        >
          {CONTACT_PHONE}
        </a>
      </p>
    </div>
  )
}
