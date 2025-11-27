"use client"

import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"

interface Download {
  title: string
  description: string
  fileSize: string
  fileType: string
  href: string
}

export default function DownloadsSection() {
  const downloads: Download[] = [
    {
      title: "Floor Plans",
      description: "Dimensioned plans for Level 1 and Level 2",
      fileSize: "2.4 MB",
      fileType: "PDF",
      href: "/pdf/1and2floor plan.pdf"
    },
    {
      title: "Material Board",
      description: "Comprehensive material selections and finishes",
      fileSize: "5.1 MB",
      fileType: "PDF",
      href: "/downloads/materials.pdf"
    },
    {
      title: "Specifications Sheet",
      description: "Detailed technical specifications and systems",
      fileSize: "1.8 MB",
      fileType: "PDF",
      href: "/downloads/specifications.pdf"
    },
    {
      title: "Construction Set",
      description: "Sanitized construction drawings (select sheets)",
      fileSize: "12.3 MB",
      fileType: "PDF",
      href: "/downloads/construction-set.pdf"
    }
  ]

  return (
    <SectionContainer id="downloads">
      <SectionHeader
        tagline="Documentation"
        title="Downloads"
        subtitle="Access detailed documentation and specifications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {downloads.map((download, index) => (
          <motion.a
            key={index}
            href={download.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-10 bg-white border border-gray-200 rounded-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:border-[#1A1A1A] hover:scale-[1.02] transition-all duration-500"
            download
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-light text-[#1A1A1A] mb-2 group-hover:text-[#2A2A2A] transition-colors">
                  {download.title}
                </h3>
                <p className="text-[#6A6A6A] text-sm font-light">
                  {download.description}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#6A6A6A] group-hover:text-[#1A1A1A] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#8A8A8A] uppercase tracking-wider">
              <span>{download.fileType}</span>
              <span>•</span>
              <span>{download.fileSize}</span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-[#8A8A8A] text-sm font-light"
      >
        All documents are provided for informational purposes. For full construction documentation, please contact us directly.
      </motion.p>
    </SectionContainer>
  )
}

