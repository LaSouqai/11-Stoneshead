import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formId = process.env.FORMSPREE_FORM_ID

  if (!formId) {
    return NextResponse.json(
      { error: "Contact form is not configured. Add FORMSPREE_FORM_ID in Vercel." },
      { status: 503 }
    )
  }

  const data = await request.json()

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      message: data.message,
      _subject: `11 Stoneshead Inquiry from ${data.name}`,
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
