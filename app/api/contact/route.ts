import { NextResponse } from "next/server"
import { Resend } from "resend"
import {
  sanitizeOptionalText,
  sanitizeText,
  validateContactPayload,
  type ContactPayload,
} from "@/lib/validation"

function buildEmailBody(data: ContactPayload): string {
  const utmLines = data.utm
    ? Object.entries(data.utm)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")
    : "None captured"

  return [
    "New inquiry from 11stoneshead.luxury",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email || "Not provided"}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Page: ${data.page || "Unknown"}`,
    `Referrer: ${data.referrer || "Direct / unknown"}`,
    "",
    "UTM Parameters:",
    utmLines,
    "",
    "Message:",
    data.message,
  ].join("\n")
}

async function sendWebhook(data: ContactPayload) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL
  if (!webhookUrl) return

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "11stoneshead.luxury",
      ...data,
      submittedAt: new Date().toISOString(),
    }),
  })
}

async function sendAcknowledgmentEmail(resend: Resend, fromEmail: string, data: ContactPayload) {
  if (!data.email) return

  await resend.emails.send({
    from: fromEmail,
    to: data.email,
    subject: "We received your inquiry — 11 Stoneshead",
    text: [
      `Hello ${data.name},`,
      "",
      "Thank you for your interest in 11 Stoneshead.",
      "We received your message and will follow up shortly regarding private previews and property information.",
      "",
      "Private Tours & Property Information",
      "(702) 903-0000",
      "",
      "— Zarios Construction",
    ].join("\n"),
  })
}

async function sendViaFormspree(formId: string, data: ContactPayload) {
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      page: data.page,
      referrer: data.referrer,
      utm: data.utm,
      _subject: `11 Stoneshead Inquiry from ${data.name}`,
    }),
  })

  if (!response.ok) {
    const result = await response.json().catch(() => ({}))
    const message =
      typeof result.error === "string"
        ? result.error
        : "We couldn't send your message. Please call (702) 903-0000."
    throw new Error(message)
  }
}

async function sendViaResend(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !toEmail || !fromEmail) {
    return false
  }

  const resend = new Resend(apiKey)
  const sendResult = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: data.email || undefined,
    subject: `11 Stoneshead Inquiry from ${data.name}`,
    text: buildEmailBody(data),
  })

  if (sendResult.error) {
    throw new Error("We couldn't send your message. Please call (702) 903-0000.")
  }

  try {
    await sendAcknowledgmentEmail(resend, fromEmail, data)
  } catch {
    // Lead was delivered; acknowledgment failure should not block success.
  }

  return true
}

export async function POST(request: Request) {
  const resendConfigured = Boolean(
    process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL
  )
  const formspreeFormId = process.env.FORMSPREE_FORM_ID || "xbgrarro"

  if (!resendConfigured && !formspreeFormId) {
    return NextResponse.json(
      { error: "Contact delivery is not configured yet. Please call (702) 903-0000." },
      { status: 503 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const raw = body as Record<string, unknown>
  const payload: ContactPayload = {
    name: sanitizeText(raw.name, 120),
    email: sanitizeOptionalText(raw.email, 254),
    phone: sanitizeOptionalText(raw.phone, 40),
    message: sanitizeText(raw.message, 4000),
    page: sanitizeOptionalText(raw.page, 200) ?? "Unknown",
    referrer: sanitizeOptionalText(raw.referrer, 500),
    website: sanitizeOptionalText(raw.website, 200),
    utm: {},
  }

  if (raw.utm && typeof raw.utm === "object") {
    const utmRaw = raw.utm as Record<string, unknown>
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const value = sanitizeOptionalText(utmRaw[key], 200)
      if (value) payload.utm![key] = value
    }
  }

  const validation = validateContactPayload(payload)
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 })
  }

  try {
    if (resendConfigured) {
      await sendViaResend(payload)
    } else if (formspreeFormId) {
      await sendViaFormspree(formspreeFormId, payload)
    }

    try {
      await sendWebhook(payload)
    } catch {
      // Webhook failures should not block successful lead delivery.
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "We couldn't send your message. Please call (702) 903-0000."

    return NextResponse.json({ error: message }, { status: 502 })
  }
}
