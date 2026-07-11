import { motion } from 'framer-motion'
import type { FacultyMember } from '../../data/faculty'

interface TeamMemberCardProps {
  member: FacultyMember
}

/**
 * Reusable card component for displaying a faculty or staff member.
 * Features hover animations, responsive layouts, and smooth transition animations.
 */
export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  // Helper to color-code tags based on department/tag name
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'STEM':
        return 'bg-academy-burnt-orange/95 text-white'
      case 'MATH':
        return 'bg-academy-teal/95 text-white'
      case 'FINE ARTS':
        return 'bg-academy-navy/85 text-white border border-white/10'
      case 'HUMANITIES':
        return 'bg-academy-navy/85 text-white border border-white/10'
      case 'ADMISSIONS':
        return 'bg-academy-burnt-orange/95 text-white'
      default:
        return 'bg-academy-navy/90 text-white'
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1],
        layout: { duration: 0.5, type: 'spring', stiffness: 150, damping: 25 }
      }}
      className="flex flex-col h-full rounded-[2rem] bg-[#FAF7F2] p-2 hover:shadow-xl transition-shadow duration-300 group"
    >
      {/* Visual Frame for Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.8rem] bg-academy-cream border border-academy-navy/5 shadow-inner">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 object-center"
          loading="lazy"
        />
        
        {/* Dynamic Tag Overlay */}
        <span className={`absolute bottom-4 left-4 font-jakarta text-[10px] font-bold tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-xs ${getTagColor(member.tag)}`}>
          {member.tag}
        </span>
      </div>

      {/* Text Details Section */}
      <div className="px-3 pt-4 pb-3 flex flex-col flex-grow">
        <h3 className="font-fraunces text-xl sm:text-2xl font-bold text-academy-navy leading-tight group-hover:text-academy-burnt-orange transition-colors duration-300">
          {member.name}
        </h3>
        
        <p className="font-jakarta text-xs sm:text-sm font-bold text-academy-burnt-orange uppercase tracking-wider mt-1">
          {member.role}
        </p>
        
        <p className="font-jakarta text-xs sm:text-sm text-academy-navy/70 leading-relaxed mt-2.5 flex-grow">
          {member.bio}
        </p>
      </div>
    </motion.div>
  )
}
