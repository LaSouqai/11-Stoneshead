import { getStoredUtm } from "./utm"

export type ContactInquiry = {
  name: string
  email?: string
  phone?: string
  message: string
  page: string
  website?: string
}

export async function submitContactInquiry(
  data: ContactInquiry
): Promise<{ success: true } | { success: false; error: string }> {
  const utm = getStoredUtm()

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
      utm,
    }),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    return {
      success: false,
      error: result.error || "We couldn't send your message. Please call (702) 903-0000.",
    }
  }

  return { success: true }
}

export { CONTACT_PHONE, CONTACT_PHONE_HREF } from "./site"
