import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0B0B0B",
        gold: "#B8935A",
        stone: "#DAD6CF",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      },
      transitionTimingFunction: {
        'lux': 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        cormorant: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
export default config





