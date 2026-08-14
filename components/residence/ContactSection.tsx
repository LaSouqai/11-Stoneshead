"use client"

import ContactForm from "@/components/ContactForm"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <SectionContainer id="contact" background="light">
      <SectionHeader
        tagline="Get in Touch"
        title="Request a Private Tour"
        subtitle="Experience 11 Stoneshead in person."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <ContactForm page="residence" variant="light" />
      </motion.div>
    </SectionContainer>
  )
}
