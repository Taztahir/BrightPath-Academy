import { motion } from 'framer-motion'

export default function Join() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section 
      id="join-our-team" 
      className="w-full bg-academy-navy py-20 lg:py-28 text-white relative overflow-hidden z-0"
    >
      {/* Decorative backdrop glow elements */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-academy-teal/15 blur-[80px] -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-academy-yellow/10 blur-[90px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          {/* Section Heading */}
          <motion.h2 
            variants={itemVariants}
            className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto tracking-tight"
          >
            Want to join our mission?
          </motion.h2>

          {/* Description Text */}
          <motion.p 
            variants={itemVariants}
            className="font-jakarta text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto"
          >
            We are always looking for passionate educators and staff members who want to redefine what's possible in primary education.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="/contact?subject=recruiting"
              className="bg-academy-cream text-academy-navy hover:bg-[#FAF7F2] font-jakarta font-bold text-xs sm:text-sm tracking-wider uppercase py-4 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              View Open Positions
            </a>
            
            <a
              href="/contact?subject=recruiting"
              className="border border-white/25 text-white hover:bg-white/5 hover:border-white/60 font-jakarta font-bold text-xs sm:text-sm tracking-wider uppercase py-4 px-8 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              Contact Recruiting
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
