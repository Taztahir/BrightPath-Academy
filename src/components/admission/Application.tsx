import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import AppImg1 from '../../assets/Application.png'
import AppImg2 from '../../assets/Application2.png'

interface Requirement {
  title: string
  description: string
}

const REQUIREMENTS: Requirement[] = [
  {
    title: 'Academic Records',
    description: 'Transcripts or report cards from the previous two academic years.'
  },
  {
    title: 'Confidential Recommendation',
    description: 'A letter from a current teacher or school counselor.'
  },
  {
    title: 'Identity Documents',
    description: 'Copy of birth certificate and current immunization records.'
  },
  {
    title: 'Student Interview',
    description: 'A casual 15-minute conversation with our admissions team.'
  }
]

export default function Application() {
  return (
    <section id="application-requirements" className="w-full bg-[#FAF7F2] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Requirements List */}
          <motion.div 
            className="lg:col-span-6 flex flex-col space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-academy-navy leading-tight tracking-tight">
                Application Requirements
              </h2>
              <p className="font-jakarta text-sm sm:text-base text-academy-navy/85 max-w-xl leading-relaxed">
                To ensure a smooth transition, we require the following documentation for all new applicants.
              </p>
            </div>
            
            <ul className="space-y-6" role="list">
              {REQUIREMENTS.map((req, idx) => (
                <motion.li 
                  key={req.title} 
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-transparent border border-academy-teal/40 flex items-center justify-center text-academy-teal shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-academy-navy text-sm sm:text-base leading-snug">
                      {req.title}
                    </h3>
                    <p className="font-jakarta text-xs sm:text-sm text-academy-navy/70 mt-1 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Right Column: Layered Staggered Images */}
          <motion.div 
            className="lg:col-span-6 flex items-center justify-center pr-4 sm:pr-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[480px] flex items-center">
              
              {/* Back Image (Notebook/Flatlay) */}
              <div className="w-[60%] aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-md border border-academy-navy/5 bg-academy-cream relative z-10">
                <img 
                  src={AppImg1} 
                  alt="Application materials and notebooks" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Front Overlapping Image (Classroom/Library) */}
              <div className="w-[60%] aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-lg border border-academy-navy/5 bg-academy-cream relative z-20 -ml-16 mt-16">
                <img 
                  src={AppImg2} 
                  alt="BrightPath Academy library bookshelf" 
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
