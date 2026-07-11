import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
export interface FAQItem {
  question: string
  answer: string
}

export interface FAQProps {
  /** Main heading displayed above the accordion */
  title?: string
  /** Subtitle / descriptor text under the heading */
  subtitle?: string
  /** Array of question/answer pairs to render */
  items: FAQItem[]
  /** Background colour of the section wrapper.
   *  Defaults to the academy yellow colour token. */
  bgClassName?: string
  /** Allow multiple items open at once (default: false) */
  allowMultiple?: boolean
}

/* ─────────────────────────────────────────────
   Single accordion item
───────────────────────────────────────────── */
function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.07,
      }}
    >
      <div
        className={[
          'bg-academy-cream rounded-2xl overflow-hidden',
          'border border-transparent transition-all duration-300',
          isOpen ? 'border-academy-navy/10 shadow-md' : 'shadow-sm hover:shadow-md',
        ].join(' ')}
      >
        {/* Question row — trigger button */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-academy-navy focus-visible:outline-offset-2 rounded-2xl"
        >
          <span
            className={[
              'font-jakarta text-sm sm:text-base font-semibold transition-colors duration-200',
              isOpen
                ? 'text-academy-burnt-orange'
                : 'text-academy-navy group-hover:text-academy-burnt-orange',
            ].join(' ')}
          >
            {item.question}
          </span>

          {/* Animated chevron */}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 text-academy-navy/50"
            aria-hidden="true"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.span>
        </button>

        {/* Answer — animated height reveal */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
              aria-label={`Answer to: ${item.question}`}
            >
              <div className="px-6 pb-6 pt-1">
                <div className="h-px bg-academy-navy/8 mb-4" />
                <p className="font-jakarta text-sm sm:text-base text-academy-navy/75 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Main FAQ component (exported for reuse)
───────────────────────────────────────────── */
export default function FAQ({
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know — answered.',
  items,
  bgClassName = 'bg-academy-yellow',
  allowMultiple = false,
}: FAQProps) {
  // Set of open indices — supports single or multi-open mode
  const [openSet, setOpenSet] = useState<Set<number>>(new Set())

  const toggle = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        if (!allowMultiple) next.clear()
        next.add(index)
      }
      return next
    })
  }

  return (
    <section className={`w-full py-20 sm:py-24 ${bgClassName}`}>
      <div className="max-w-3xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <motion.h2
            className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-academy-navy leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="font-jakarta text-sm sm:text-base text-academy-navy/70 leading-relaxed max-w-xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3 sm:gap-4" role="list">
          {items.map((item, i) => (
            <div role="listitem" key={i}>
              <AccordionItem
                item={item}
                isOpen={openSet.has(i)}
                onToggle={() => toggle(i)}
                index={i}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
