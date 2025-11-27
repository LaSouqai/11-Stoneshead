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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-[90%] mx-auto mt-20">
        {/* Logo & Branding with Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start"
        >
          {/* Ziad Gharios Photo - Square, Floating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3),0_15px_40px_rgba(0,0,0,0.2),0_5px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.35),0_20px_50px_rgba(0,0,0,0.25),0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500">
              <img 
                src="/logos/Ziad_Gharios.jpeg" 
                alt="Ziad Gharios, Founder of Zarios Construction" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          
          <div className="mb-10">
            <img 
              src="/logos/Zarios_logo.png" 
              alt="Zarios Construction" 
              className="h-14 md:h-16 object-contain opacity-90"
            />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-light text-[#1A1A1A] tracking-tight mb-4">
            Ziad Gharios
          </h3>
          
          <p className="text-base text-[#B8935A] font-light tracking-wide mb-2 uppercase">
            Founder & Principal
          </p>
          
          <p className="text-base text-[#8A8A8A] font-light tracking-wide uppercase">
            Zarios Construction
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide text-base md:text-lg">
            Born from the vision of civil engineer Ziad Gharios, Zarios Construction is not merely a builder—it is 
            an architect of permanence. Founded in 2017, this boutique Las Vegas firm transforms modern luxury 
            into structural poetry, where every beam, panel, and finish is orchestrated with the precision of 
            commercial infrastructure and the refinement of haute design.
          </p>
          
          <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide text-base md:text-lg">
            Trained at UMass Dartmouth and forged in the exacting environments of New York City high-rises and 
            Massachusetts state infrastructure, Ziad carries a rare duality: the engineer's unrelenting discipline 
            and the artisan's devotion to craft. With over 15 years crafting luxury estates and precision-built 
            residences, he brings institutional rigor to homes destined to outlast generations.
          </p>
          
          <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide text-base md:text-lg">
            At 11 Stoneshead, this philosophy finds its fullest expression. Commercial curtainwall systems frame 
            the Strip. Multi-layered waterproofing protocols safeguard every envelope. Sub-Zero appliances integrate 
            seamlessly into sculptural millwork. Natural stone—selected through rigorous mock-ups—cloaks the exterior 
            in timeless elegance. Here, Zarios Construction has not built a home. They have authored a monument to 
            modern living, engineered to endure, designed to inspire.
          </p>
        </motion.div>
      </div>

       {/* Contact Information */}
       <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.3 }}
         viewport={{ once: true }}
         className="mt-20 text-center max-w-2xl mx-auto"
       >
         <div className="space-y-4">
           <a 
             href="https://www.zariosconstruction.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="block text-[#B8935A] text-base md:text-lg font-light tracking-wide hover:text-[#D4AF37] transition-colors duration-300"
           >
             www.zariosconstruction.com
           </a>
           <a 
             href="tel:+17024181888"
             className="block text-[#6A6A6A] text-sm md:text-base font-light tracking-wider hover:text-[#B8935A] transition-colors duration-300"
           >
             +1 (702) 418-1888
           </a>
           <a 
             href="mailto:info@zariosconstruction.com"
             className="block text-[#6A6A6A] text-sm md:text-base font-light tracking-wider hover:text-[#B8935A] transition-colors duration-300"
           >
             info@zariosconstruction.com
           </a>
         </div>
       </motion.div>

       {/* Philosophy Statement */}
       <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.4 }}
         viewport={{ once: true }}
         className="mt-20 text-center max-w-3xl mx-auto"
       >
         <div className="flex items-center justify-center gap-6 mb-8">
           <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#B8935A]/40" />
           <p className="text-[#B8935A] text-sm md:text-base font-light tracking-[0.25em] uppercase italic">
             A Builder Defined by Craftsmanship
           </p>
           <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#B8935A]/40" />
         </div>
         <p className="text-lg md:text-xl text-[#4A4A4A] font-light tracking-wide leading-relaxed italic">
           "Build fewer homes. Build them exceptionally. Build them to endure."
         </p>
       </motion.div>
       
       {/* Credentials Grid */}
       <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.5 }}
         viewport={{ once: true }}
         className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
       >
         <div>
           <h4 className="text-4xl md:text-5xl font-light text-[#B8935A] mb-4">15+</h4>
           <p className="text-[#6A6A6A] font-light tracking-wide uppercase text-sm">Years Mastering the Craft</p>
         </div>
         <div>
           <h4 className="text-4xl md:text-5xl font-light text-[#B8935A] mb-4">100%</h4>
           <p className="text-[#6A6A6A] font-light tracking-wide uppercase text-sm">Commercial Grade Quality</p>
         </div>
         <div>
           <h4 className="text-4xl md:text-5xl font-light text-[#B8935A] mb-4">9,747</h4>
           <p className="text-[#6A6A6A] font-light tracking-wide uppercase text-sm">Square Feet of Excellence</p>
         </div>
       </motion.div>
    </SectionContainer>
  )
}

