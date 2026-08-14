declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export type AnalyticsEvent =
  | "phone_click"
  | "contact_form_start"
  | "contact_form_success"
  | "matterport_launch"
  | "instagram_click"
  | "floor_plan_download"
  | "residence_page_view"
  | "hero_cta_click"

export function trackEvent(event: AnalyticsEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return

  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const metaId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  if (gaId && window.gtag) {
    window.gtag("event", event, params)
  }

  if (metaId && window.fbq) {
    window.fbq("trackCustom", event, params)
  }
}

export function trackPhoneClick(source: string) {
  trackEvent("phone_click", { source })
}

export function trackContactFormStart(page: string) {
  trackEvent("contact_form_start", { page })
}

export function trackContactFormSuccess(page: string) {
  trackEvent("contact_form_success", { page })
}

export function trackMatterportLaunch() {
  trackEvent("matterport_launch")
}

export function trackInstagramClick() {
  trackEvent("instagram_click")
}

export function trackFloorPlanDownload(title: string) {
  trackEvent("floor_plan_download", { title })
}

export function trackResidencePageView() {
  trackEvent("residence_page_view")
}

export function trackHeroCtaClick(action: string) {
  trackEvent("hero_cta_click", { action })
}
