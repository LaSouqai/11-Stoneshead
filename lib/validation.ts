const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s().+\-]{7,20}$/

export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, maxLength).replace(/[\u0000-\u001F\u007F]/g, "")
}

export function sanitizeOptionalText(value: unknown, maxLength: number): string | undefined {
  const sanitized = sanitizeText(value, maxLength)
  return sanitized || undefined
}

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value)
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "")
  return digits.length >= 10 && PHONE_REGEX.test(value)
}

export type ContactPayload = {
  name: string
  email?: string
  phone?: string
  message: string
  page?: string
  referrer?: string
  utm?: Record<string, string>
  website?: string
}

export function validateContactPayload(data: ContactPayload): { ok: true } | { ok: false; error: string } {
  if (data.website) {
    return { ok: false, error: "Invalid submission." }
  }

  if (!data.name.trim()) {
    return { ok: false, error: "Name is required." }
  }

  const email = data.email?.trim() ?? ""
  const phone = data.phone?.trim() ?? ""

  if (!email && !phone) {
    return { ok: false, error: "Please provide an email address or phone number." }
  }

  if (email && !isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }

  if (phone && !isValidPhone(phone)) {
    return { ok: false, error: "Please enter a valid phone number." }
  }

  if (!data.message.trim()) {
    return { ok: false, error: "Message is required." }
  }

  return { ok: true }
}
