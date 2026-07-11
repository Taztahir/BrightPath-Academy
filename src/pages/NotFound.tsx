import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import NotFoundImage from '../assets/404.png'

export default function NotFound() {
  return (
    <main 
      className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-16 relative overflow-hidden bg-[#FAF7F2]"
      aria-label="404 Page Not Found"
    >
      {/* ── Glowing Radial Gradients (matching the mockup design) ── */}
      <div 
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-academy-yellow/10 blur-[80px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-academy-teal/10 blur-[80px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        
        {/* ── Floating Illustration ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center"
        >
          <motion.img
            src={NotFoundImage}
            alt="Page not found illustration"
            className="w-full h-auto object-contain"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* ── Text Content ── */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-academy-navy mt-8 tracking-tight"
        >
          Oops! Page Not Found.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-jakarta text-sm sm:text-base text-academy-navy/70 mt-4 max-w-md leading-relaxed"
        >
          It seems the path you're looking for doesn't exist. Let's get
          you back on track to the BrightPath Academy community.
        </motion.p>

        {/* ── CTA Button ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-block bg-academy-navy hover:bg-academy-navy/90 text-white font-jakarta text-xs font-bold tracking-wider uppercase py-3.5 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academy-navy"
          >
            Back to Home
          </Link>
        </motion.div>

      </div>
    </main>
  )
}