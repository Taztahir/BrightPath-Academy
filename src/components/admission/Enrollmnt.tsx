import { motion } from 'framer-motion'
import { MessageSquare, Compass, FileText, ClipboardCheck, Award } from 'lucide-react'

interface Step {
  icon: React.ReactNode
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Inquire',
    description: 'Submit an online inquiry form to receive our digital brochure.'
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: 'Tour',
    description: 'Book a personal campus tour to experience our learning environment.'
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Apply',
    description: 'Complete the online application and upload required records.'
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: 'Assess',
    description: 'Student shadow day and age-appropriate assessment.'
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Enroll',
    description: 'Welcome to the Academy! Finalize deposit and registration.'
  }
]

export default function Enrollmnt() {
  return (
    <section className="w-full bg-academy-yellow py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-academy-navy leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            The Enrollment Journey
          </motion.h2>
          
          <motion.p 
            className="font-jakarta text-sm sm:text-base text-academy-navy/80 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Five simple steps to becoming a member of the BrightPath family.
          </motion.p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex-1 flex flex-col items-center text-center bg-[#FAF7F2] p-8 rounded-3xl border border-academy-navy/5 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-academy-navy flex items-center justify-center text-white mb-6 shadow-sm">
                {step.icon}
              </div>
              
              {/* Step Title */}
              <h3 className="font-fraunces text-2xl font-bold text-academy-navy mb-4">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="font-jakarta text-xs sm:text-sm text-academy-navy/70 leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
