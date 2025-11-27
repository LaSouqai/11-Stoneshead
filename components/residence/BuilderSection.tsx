"use client"

import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"

export default function BuilderSection() {
  return (
    <SectionContainer id="builder">
      <SectionHeader
        tagline="Where Engineering Meets Artistry"
        title="Meet the Builder"
        subtitle="Zarios Construction – Where uncompromising vision becomes enduring legacy."
      />

      {/* Centered Hero Layout */}
      <div className="max-w-5xl mx-auto mt-20">
        {/* Zarios Logo - Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <img 
            src="/logos/Zarios_logo.png" 
            alt="Zarios Construction" 
            className="h-16 md:h-20 object-contain opacity-90"
          />
        </motion.div>

        {/* Ziad Gharios Photo - Large, Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3),0_15px_40px_rgba(0,0,0,0.2),0_5px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.35),0_20px_50px_rgba(0,0,0,0.25),0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500">
            <img 
              src="/logos/Ziad_Gharios.jpeg" 
              alt="Ziad Gharios, Founder of Zarios Construction" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
        
        {/* Name & Title - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight mb-4">
            Ziad Gharios
          </h3>
          
          <p className="text-base md:text-lg text-[#B8935A] font-light tracking-wide mb-2 uppercase">
            Founder & Principal
          </p>
          
          <p className="text-sm md:text-base text-[#8A8A8A] font-light tracking-wide uppercase">
            Zarios Construction
          </p>
        </motion.div>

        {/* Credentials Grid - More Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 md:gap-12 mb-20"
        >
          <div className="text-center">
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#B8935A] mb-3">15+</h4>
            <p className="text-[#6A6A6A] font-light tracking-wide uppercase text-xs md:text-sm">Years Mastering the Craft</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#B8935A] mb-3">100%</h4>
            <p className="text-[#6A6A6A] font-light tracking-wide uppercase text-xs md:text-sm">Commercial Grade Quality</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#B8935A] mb-3">9,747</h4>
            <p className="text-[#6A6A6A] font-light tracking-wide uppercase text-xs md:text-sm">Square Feet of Excellence</p>
          </div>
        </motion.div>

        {/* Description - Two Column Layout for Better Readability */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16"
        >
          <div className="space-y-6">
            <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide text-base">
              Born from the vision of civil engineer Ziad Gharios, Zarios Construction is not merely a builder—it is 
              an architect of permanence. Founded in 2017, this boutique Las Vegas firm transforms modern luxury 
              into structural poetry, where every beam, panel, and finish is orchestrated with the precision of 
              commercial infrastructure and the refinement of haute design.
            </p>
            
            <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide text-base">
              Trained at UMass Dartmouth and forged in the exacting environments of New York City high-rises and 
              Massachusetts state infrastructure, Ziad carries a rare duality: the engineer's unrelenting discipline 
              and the artisan's devotion to craft.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide text-base">
              With over 15 years crafting luxury estates and precision-built residences, he brings institutional 
              rigor to homes destined to outlast generations.
            </p>
            
            <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide text-base">
              At 11 Stoneshead, this philosophy finds its fullest expression. Commercial curtainwall systems frame 
              the Strip. Multi-layered waterproofing protocols safeguard every envelope. Sub-Zero appliances integrate 
              seamlessly into sculptural millwork. Natural stone—selected through rigorous mock-ups—cloaks the exterior 
              in timeless elegance.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Philosophy Statement - Elegant Divider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent to-[#B8935A]/40" />
          <p className="text-[#B8935A] text-xs md:text-sm font-light tracking-[0.25em] uppercase italic">
            A Builder Defined by Craftsmanship
          </p>
          <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-[#B8935A]/40" />
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl text-[#4A4A4A] font-light tracking-wide leading-relaxed italic">
          "Build fewer homes. Build them exceptionally. Build them to endure."
        </p>
      </motion.div>

      {/* Contact Information - Elegant Format */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <a 
            href="https://www.zariosconstruction.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#B8935A] text-sm md:text-base font-light tracking-wide hover:text-[#D4B988] transition-colors duration-300"
          >
            zariosconstruction.com
          </a>
          <span className="hidden md:inline text-[#B8935A]/40">·</span>
          <a 
            href="tel:+17024181888"
            className="text-[#6A6A6A] text-sm md:text-base font-light tracking-wide hover:text-[#B8935A] transition-colors duration-300"
          >
            (702) 418-1888
          </a>
          <span className="hidden md:inline text-[#B8935A]/40">·</span>
          <a 
            href="mailto:info@zariosconstruction.com"
            className="text-[#6A6A6A] text-sm md:text-base font-light tracking-wide hover:text-[#B8935A] transition-colors duration-300"
          >
            info@zariosconstruction.com
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

