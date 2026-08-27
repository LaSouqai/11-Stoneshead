import { getStoredUtm } from "./utm"
import { CONTACT_PHONE } from "./site"

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

  let response: Response
  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
        utm,
      }),
    })
  } catch {
    // Network failure, offline, or a blocked request. This function promises a
    // result object and must never reject: an unhandled rejection here left the
    // submit button disabled on "Sending..." with no error shown, and the only
    // way back was a page reload. On a lead-capture page that silently loses
    // the inquiry.
    return {
      success: false,
      error: `We couldn't reach the server. Please check your connection or call ${CONTACT_PHONE}.`,
    }
  }

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
