import { spacing } from "@/src/styles/theme"

interface SectionContainerProps {
  id?: string
  className?: string
  children: React.ReactNode
  background?: "white" | "light"
}

export default function SectionContainer({ 
  id, 
  className = "", 
  children, 
  background = "white" 
}: SectionContainerProps) {
  const bgClass = background === "light" ? "bg-[#F5F3EF]" : "bg-white"
  
  return (
    <section 
      id={id} 
      className={`${bgClass} ${spacing.sectionY} scroll-mt-20 w-full ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  )
}

