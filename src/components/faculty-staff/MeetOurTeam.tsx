import { motion } from 'framer-motion'
import facultyHero from '../../assets/faculty_hero.png'

export default function MeetOurTeam() {
  const handleScrollToTeam = () => {
    const target = document.getElementById('team-directory')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
              <span className="font-jakarta text-xs sm:text-sm font-bold text-academy-burnt-orange uppercase tracking-widest block">
                Meet Our Team
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-academy-navy tracking-tight leading-[1.1]">
                Our Dedicated Educators
              </h2>
            </div>
            
            <p className="font-jakarta text-sm sm:text-base text-academy-navy/80 leading-relaxed max-w-xl">
              At BrightPath, we believe that education is as much about character as it is about curriculum. 
              Our faculty is composed of world-class mentors committed to nurturing the next generation of thinkers.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={handleScrollToTeam}
                className="bg-academy-navy text-white hover:bg-academy-navy/90 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                Meet the Faculty
              </button>
              
              <a
                href="#join-our-team"
                className="border border-academy-navy text-academy-navy hover:bg-academy-navy/5 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg text-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
          
          {/* Right Column: Framed Image */}
          <motion.div 
            className="lg:col-span-6 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Soft decorative backdrop shape */}
            <motion.div 
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-full max-w-[480px] h-[95%] bg-academy-yellow/20 rounded-[2.5rem] -z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[11/12] p-3 border border-academy-navy/15 rounded-[2.5rem] bg-[#FAF7F2] shadow-sm group">
              <div className="w-full h-full overflow-hidden rounded-[2rem] bg-academy-cream">
                <img 
                  src={facultyHero} 
                  alt="BrightPath Academy Faculty Members" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Premium Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-4 bg-academy-teal text-white rounded-2xl p-4 shadow-lg max-w-[200px]"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="text-center">
                  <p className="font-fraunces text-2xl font-bold text-academy-yellow">100%</p>
                  <p className="font-jakarta text-[10px] uppercase tracking-wider font-semibold opacity-90 mt-0.5">
                    Certified & Dedicated Mentors
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
