import { motion } from 'framer-motion'

interface TuitionRow {
  level: string
  tuition: string
  appFee: string
  techFee: string
}

const TUITION_DATA: TuitionRow[] = [
  {
    level: 'Early Years (PK-K)',
    tuition: '$18,500',
    appFee: '$150',
    techFee: '$250'
  },
  {
    level: 'Elementary (1-5)',
    tuition: '$22,000',
    appFee: '$150',
    techFee: '$400'
  },
  {
    level: 'Middle School (6-8)',
    tuition: '$24,500',
    appFee: '$150',
    techFee: '$550'
  }
]

export default function Investment() {
  return (
    <section className="relative w-full bg-[#1B2A4A] py-20 lg:py-28 overflow-hidden text-academy-cream">
      
      {/* Premium Ambient Glows */}
      <div 
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-academy-teal/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-academy-burnt-orange/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Investment in Excellence
          </motion.h2>
          
          <motion.p 
            className="font-jakarta text-sm sm:text-base text-academy-cream/70 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Transparent tuition fees for the 2024-2025 academic year. We offer various payment schedules and limited financial aid.
          </motion.p>
        </div>

        {/* Desktop Table View */}
        <motion.div 
          className="hidden md:block overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <table className="w-full text-left border-collapse mt-8">
            <thead>
              <tr className="border-b border-academy-cream/15">
                <th className="pb-6 font-fraunces text-lg lg:text-xl font-medium tracking-wide">Level</th>
                <th className="pb-6 font-fraunces text-lg lg:text-xl font-medium tracking-wide">Annual Tuition</th>
                <th className="pb-6 font-fraunces text-lg lg:text-xl font-medium tracking-wide">Application Fee</th>
                <th className="pb-6 font-fraunces text-lg lg:text-xl font-medium tracking-wide">Technology Fee</th>
              </tr>
            </thead>
            <tbody>
              {TUITION_DATA.map((row, index) => (
                <tr 
                  key={index}
                  className="border-b border-academy-cream/10 hover:bg-white/[0.02] transition-colors duration-200"
                >
                  <td className="py-6 font-jakarta font-bold text-base lg:text-lg">{row.level}</td>
                  <td className="py-6 font-jakarta font-semibold text-academy-yellow text-base lg:text-lg">{row.tuition}</td>
                  <td className="py-6 font-jakarta text-academy-cream/80 text-sm lg:text-base">{row.appFee}</td>
                  <td className="py-6 font-jakarta text-academy-cream/80 text-sm lg:text-base">{row.techFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards View */}
        <div className="block md:hidden space-y-6">
          {TUITION_DATA.map((row, index) => (
            <motion.div 
              key={index}
              className="bg-white/[0.02] border border-academy-cream/10 rounded-2xl p-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <h3 className="font-fraunces text-xl font-bold border-b border-academy-cream/10 pb-2">
                {row.level}
              </h3>
              
              <div className="flex justify-between items-center text-sm font-jakarta">
                <span className="text-academy-cream/60">Annual Tuition</span>
                <span className="font-bold text-academy-yellow text-base">{row.tuition}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm font-jakarta">
                <span className="text-academy-cream/60">Application Fee</span>
                <span className="text-academy-cream/90">{row.appFee}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm font-jakarta">
                <span className="text-academy-cream/60">Technology Fee</span>
                <span className="text-academy-cream/90">{row.techFee}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p 
          className="font-jakarta text-xs sm:text-sm text-academy-cream/50 text-center mt-12 lg:mt-16 block italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          * All fees are in USD. Sibling discounts of 5% apply to tuition.
        </motion.p>

      </div>
    </section>
  )
}
