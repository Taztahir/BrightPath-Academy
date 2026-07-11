import { motion } from 'framer-motion'

interface AcademyRibbonProps {
  /** Height of the ribbon in pixels or Tailwind classes. Defaults to 'h-4' (16px) */
  className?: string
  /** Number of times the color sequence repeats. Defaults to 2 (giving 8 bands total like the design) */
  repeats?: number
  /** Enable interactive spring animations on hover. Defaults to true */
  interactive?: boolean
}

const BRAND_COLORS = [
  { name: 'teal', value: 'bg-academy-teal' },
  { name: 'burnt-orange', value: 'bg-academy-burnt-orange' },
  { name: 'yellow', value: 'bg-academy-yellow' },
  { name: 'navy', value: 'bg-academy-navy' }
]

export default function AcademyRibbon({
  className = 'h-4',
  repeats = 2,
  interactive = true
}: AcademyRibbonProps) {
  // Generate the repeating sequence of colors
  const items = Array.from({ length: repeats }).flatMap(() => BRAND_COLORS)

  return (
    <div
      className={`w-full flex h-8 overflow-hidden ${className}`}
      role="presentation"
    >
      {items.map((color, index) => (
        <motion.div
          key={`${color.name}-${index}`}
          className={`flex-1 h-full ${color.value}`}
          whileHover={
            interactive
              ? {
                scaleY: 1.25,
                transition: { type: 'spring', stiffness: 300, damping: 15 }
              }
              : undefined
          }
          style={{ originY: 0.5 }}
        />
      ))}
    </div>
  )
}
