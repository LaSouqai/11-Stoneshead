export type UtmParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

const STORAGE_KEY = "11stoneshead_utm"

export function captureUtmFromUrl(): void {
  if (typeof window === "undefined") return

  const params = new URLSearchParams(window.location.search)
  const utm: UtmParams = {}
  let hasUtm = false

  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const) {
    const value = params.get(key)
    if (value) {
      utm[key] = value
      hasUtm = true
    }
  }

  if (hasUtm) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm))
  }
}

export function getStoredUtm(): UtmParams {
  if (typeof window === "undefined") return {}

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as UtmParams) : {}
  } catch {
    return {}
  }
}

export function formatUtmForDisplay(utm: UtmParams): string {
  return Object.entries(utm)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")
}
