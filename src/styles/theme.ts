// 11 Stoneshead Luxury Design System
// Ultra-luxury real estate design tokens

export const colors = {
  gold: "#B8935A",
  goldLight: "#D4BB88",
  charcoal: "#1B1B1B",
  charcoalLight: "#2A2A2A",
  sand: "#F5F3EF",
  sandLight: "#FCFAF6",
  whiteSoft: "rgba(255,255,255,0.85)",
  blackSoft: "rgba(0,0,0,0.6)",
};

export const spacing = {
  sectionY: "pt-40 md:pt-52 pb-32 md:pb-40",
  blockY: "py-12",
  gapLarge: "gap-12 md:gap-16",
  gapMedium: "gap-8 md:gap-10",
};

export const shadows = {
  card: "0 20px 60px rgba(0,0,0,0.20)",
  cardHover: "0 25px 70px rgba(0,0,0,0.25)",
  soft: "0 10px 30px rgba(0,0,0,0.10)",
  glowGold: "0 0 20px rgba(199,167,106,0.35)",
  glowGoldStrong: "0 0 30px rgba(199,167,106,0.45)",
  nav: "0 8px 30px rgba(0,0,0,0.08)",
};

export const transitions = {
  smooth: "transition-all duration-300 ease-out",
  smoothLong: "transition-all duration-500 ease-out",
  smoothXLong: "transition-all duration-700 ease-out",
};

export const borderRadius = {
  card: "rounded-2xl",
  button: "rounded-full",
  input: "rounded-xl",
};

export const typography = {
  heading: {
    hero: "text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none",
    section: "text-5xl md:text-7xl font-light tracking-tight leading-none",
    subsection: "text-3xl md:text-4xl font-light tracking-tight",
    card: "text-xl md:text-2xl font-light tracking-wide",
  },
  paragraph: {
    large: "text-lg md:text-xl tracking-wide leading-relaxed font-light",
    base: "text-base md:text-lg tracking-wide leading-relaxed font-light",
    small: "text-sm md:text-base tracking-wide leading-relaxed font-light",
  },
  tagline: {
    default: "text-xs tracking-[0.25em] uppercase font-light",
  },
};

export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fadeInLarge: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// CSS class presets
export const buttonStyles = {
  primary: `
    px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
    bg-gradient-to-r from-[#C7A76A] to-[#E2D3AC]
    text-black/80 backdrop-blur-xl
    hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(199,167,106,0.45)]
    transition-all duration-300
  `,
  secondary: `
    px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
    bg-black/40 backdrop-blur-xl border border-[#C7A76A]/30
    text-[#C7A76A] hover:border-[#C7A76A]/70
    hover:bg-black/50 hover:shadow-[0_0_30px_rgba(199,167,106,0.3)]
    hover:scale-[1.03] transition-all duration-300
  `,
  outline: `
    px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
    border-2 border-[#1B1B1B] text-[#1B1B1B]
    hover:bg-[#1B1B1B] hover:text-white hover:scale-[1.03]
    hover:shadow-lg transition-all duration-500
  `,
};

export const imageStyles = {
  cinematic: "w-[90%] mx-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.20)]",
  cinematicHover: "w-[90%] mx-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.20)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-all duration-500",
};

