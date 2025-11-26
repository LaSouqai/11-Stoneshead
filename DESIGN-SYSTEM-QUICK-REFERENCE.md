# 🎨 Design System Quick Reference

Quick guide for using the new luxury design system.

---

## 📦 **IMPORTING COMPONENTS**

```tsx
// Typography Components
import LuxuryHeading from "@/src/components/ui/LuxuryHeading"
import LuxuryParagraph from "@/src/components/ui/LuxuryParagraph"
import LuxuryTagline from "@/src/components/ui/LuxuryTagline"
import LuxuryButton from "@/src/components/ui/LuxuryButton"

// Design Tokens
import { colors, spacing, shadows, typography, buttonStyles, imageStyles } from "@/src/styles/theme"
```

---

## 🎯 **USAGE EXAMPLES**

### **Typography**

```tsx
// Tagline
<LuxuryTagline>Form & Materiality</LuxuryTagline>

// Heading (variants: hero, section, subsection, card)
<LuxuryHeading variant="section">
  Architecture
</LuxuryHeading>

// Paragraph (variants: large, base, small)
<LuxuryParagraph variant="large">
  A modern architectural estate designed for modern living.
</LuxuryParagraph>

// Disable animation if needed
<LuxuryHeading animate={false}>No Animation</LuxuryHeading>
```

---

### **Buttons**

```tsx
// Primary (gold gradient)
<LuxuryButton variant="primary" href="/residence">
  Explore the Residence
</LuxuryButton>

// Secondary (transparent with gold border)
<LuxuryButton variant="secondary" onClick={handleClick}>
  Schedule a Tour
</LuxuryButton>

// Outline (black border)
<LuxuryButton variant="outline" href="/gallery">
  View Gallery
</LuxuryButton>

// As button with type
<LuxuryButton variant="primary" type="submit">
  Send Inquiry
</LuxuryButton>
```

---

### **Manual Button Styling** (if not using component)

```tsx
// Primary Button
<a
  href="/residence"
  className="px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
             bg-gradient-to-r from-[#C7A76A] to-[#E2D3AC]
             text-black/80 backdrop-blur-xl
             hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(199,167,106,0.45)]
             transition-all duration-300"
>
  Explore the Residence
</a>

// Secondary Button
<button
  className="px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
             bg-black/40 backdrop-blur-xl border border-[#C7A76A]/30
             text-[#C7A76A] hover:border-[#C7A76A]/70
             hover:bg-black/50 hover:shadow-[0_0_30px_rgba(199,167,106,0.3)]
             hover:scale-[1.03] transition-all duration-300"
>
  Schedule a Tour
</button>

// Outline Button
<a
  href="/gallery"
  className="px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase
             border-2 border-[#1B1B1B] text-[#1B1B1B]
             hover:bg-[#1B1B1B] hover:text-white hover:scale-[1.03]
             hover:shadow-lg transition-all duration-500"
>
  View Gallery
</a>
```

---

### **Images (Cinematic Style)**

```tsx
// Basic image wrapper
<div className="w-[90%] mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
  <img
    src="/gallery/hero.jpg"
    alt="Property exterior"
    className="w-full h-[500px] md:h-[600px] object-cover"
  />
</div>

// Image with Framer Motion
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <div className="w-[90%] mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
    <img src="/gallery/hero.jpg" alt="Hero" className="w-full h-[600px] object-cover" />
  </div>
</motion.div>
```

---

### **Animations**

```tsx
// Fade-in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Your content here
</motion.div>

// Fade-in left → right
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Your content here
</motion.div>

// With delay (for staggered reveals)
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  Your content here
</motion.div>
```

---

## 🎨 **COLOR TOKENS**

```tsx
import { colors } from "@/src/styles/theme"

// Usage in JSX
<div style={{ color: colors.gold }}>Gold text</div>
<div style={{ backgroundColor: colors.sand }}>Sand background</div>

// In Tailwind (use direct values)
<div className="text-[#C7A76A]">Gold text</div>
<div className="bg-[#F5F3EF]">Sand background</div>
```

### **Palette**
- `colors.gold` → #C7A76A
- `colors.goldLight` → #E2D3AC
- `colors.charcoal` → #1B1B1B
- `colors.charcoalLight` → #2A2A2A
- `colors.sand` → #F5F3EF
- `colors.sandLight` → #FCFAF6

---

## 📐 **SPACING TOKENS**

```tsx
import { spacing } from "@/src/styles/theme"

// Section spacing
<section className={spacing.sectionY}>
  {/* pt-40 md:pt-52 pb-32 md:pb-40 */}
</section>

// Gap system
<div className={spacing.gapLarge}>
  {/* gap-12 md:gap-16 */}
</div>

<div className={spacing.gapMedium}>
  {/* gap-8 md:gap-10 */}
</div>
```

---

## 🌑 **SHADOW TOKENS**

```tsx
import { shadows } from "@/src/styles/theme"

// In inline styles
<div style={{ boxShadow: shadows.card }}>Card shadow</div>

// In Tailwind
<div className="shadow-[0_20px_60px_rgba(0,0,0,0.20)]">Cinematic shadow</div>
<div className="hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]">Hover state</div>
```

### **Available Shadows**
- `shadows.card` → 0 20px 60px rgba(0,0,0,0.20)
- `shadows.cardHover` → 0 25px 70px rgba(0,0,0,0.25)
- `shadows.soft` → 0 10px 30px rgba(0,0,0,0.10)
- `shadows.glowGold` → 0 0 20px rgba(199,167,106,0.35)

---

## 📝 **TYPOGRAPHY TOKENS**

```tsx
import { typography } from "@/src/styles/theme"

// Heading variants
<h1 className={typography.heading.hero}>Hero Title</h1>
<h2 className={typography.heading.section}>Section Title</h2>
<h3 className={typography.heading.card}>Card Title</h3>

// Paragraph variants
<p className={typography.paragraph.large}>Large paragraph</p>
<p className={typography.paragraph.base}>Base paragraph</p>

// Tagline
<p className={typography.tagline.default}>TAGLINE TEXT</p>
```

---

## 🎬 **COMMON PATTERNS**

### **Section Header**

```tsx
<div className="mb-24 text-center">
  <LuxuryTagline>Form & Materiality</LuxuryTagline>
  <LuxuryHeading variant="section" className="mb-8">
    Architecture
  </LuxuryHeading>
  <LuxuryParagraph variant="large" className="max-w-3xl mx-auto">
    A study in modern form, materiality, and engineering precision.
  </LuxuryParagraph>
</div>
```

---

### **Section Container**

```tsx
import SectionContainer from "@/components/residence/SectionContainer"

<SectionContainer id="architecture" background="light">
  {/* Your content */}
</SectionContainer>

// background options: "white" (default) or "light" (sand #F5F3EF)
```

---

### **Sticky Navigation Pattern**

```tsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 80)
  window.addEventListener("scroll", handler)
  return () => window.removeEventListener("scroll", handler)
}, [])

<nav className={`
  fixed top-0 left-0 w-full z-40 transition-all duration-300
  ${scrolled 
    ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]" 
    : "bg-transparent"
  }
`}>
  {/* Nav content */}
</nav>
```

---

### **Parallax Scroll Effect**

```tsx
const [scrollY, setScrollY] = useState(0)

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY)
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

<div style={{ transform: `translateY(${scrollY * 0.25}px)` }}>
  {/* Background content */}
</div>
```

---

## 🚀 **BEST PRACTICES**

1. **Use components** instead of manual classes when possible
2. **Animate on scroll** with `viewport={{ once: true }}` for performance
3. **Apply w-[90%] mx-auto** to all hero images for breathing room
4. **Use rounded-2xl** for all images and cards
5. **Add taglines** to all major sections
6. **Use luxury gold gradient** for primary CTAs
7. **Apply consistent spacing** with `spacing.sectionY`
8. **Use tracking-wide** for all paragraph text
9. **Apply font-light** (300 weight) for body text
10. **Add hover scale** (1.03) to all interactive elements

---

## ⚡ **PERFORMANCE TIPS**

- Use `viewport={{ once: true }}` to prevent re-animation on scroll
- Prefer CSS transforms over position changes
- Use `will-change: transform` sparingly
- Keep transition durations between 300-700ms
- Use GPU-accelerated properties (transform, opacity)

---

**Need Help?** Check `DESIGN-SYSTEM-UPGRADE-COMPLETE.md` for full implementation details.

