import { motion } from 'framer-motion'
import JoinImg from '../../assets/Join.png'

export default function Join() {
  return (
    <section className="w-full bg-[#FAF7F2] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-3">
              <span className="font-jakarta text-xs sm:text-sm font-bold text-academy-navy/60 uppercase tracking-widest block">
                Joining Our Community
              </span>
              <h2 className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-academy-navy tracking-tight leading-[1.05]">
                Admissions
              </h2>
            </div>
            
            <p className="font-jakarta text-sm sm:text-base text-academy-navy/80 leading-relaxed max-w-xl">
              At BrightPath Academy, we look for curious minds and compassionate hearts. 
              Our admissions process is designed to help us get to know your child and 
              your family, ensuring a supportive and aligned educational partnership.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                className="bg-academy-navy text-white hover:bg-academy-navy/90 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                Start Application
              </button>
              
              <button
                type="button"
                className="border border-academy-navy text-academy-navy hover:bg-academy-navy/5 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                Download Prospectus
              </button>
            </div>
          </motion.div>
          
          {/* Right Column: Framed Image */}
          <motion.div 
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[11/12] p-3 border border-academy-navy/15 rounded-[2.5rem] bg-[#FAF7F2] shadow-sm">
              <div className="w-full h-full overflow-hidden rounded-[2rem] bg-academy-cream">
                <img 
                  src={JoinImg} 
                  alt="Students collaborating at BrightPath Academy" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
