"use client"

import { motion } from "framer-motion"

interface Feature {
  title: string
  description?: string
}

interface FeatureListProps {
  features: Feature[]
  columns?: 1 | 2 | 3
}

export default function FeatureList({ features, columns = 2 }: FeatureListProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-12 md:gap-16`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl md:text-2xl font-light text-[#1A1A1A] tracking-wide">
            {feature.title}
          </h3>
          {feature.description && (
            <p className="text-[#6A6A6A] leading-relaxed font-light tracking-wide">
              {feature.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  )
}

