export const CONTACT_EMAIL = "rabih@kw.com"
export const CONTACT_PHONE = "(702) 903-0000"
export const CONTACT_PHONE_HREF = "tel:+17029030000"

export type ContactInquiry = {
  name: string
  email: string
  phone?: string
  message: string
}

export async function submitContactInquiry(
  data: ContactInquiry
): Promise<{ success: true } | { success: false; error: string }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    return {
      success: false,
      error: result.error || "Failed to send message. Please try again or call directly.",
    }
  }

  return { success: true }
}
