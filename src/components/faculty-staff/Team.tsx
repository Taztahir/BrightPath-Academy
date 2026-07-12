import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { facultyMembers } from '../../data/faculty'
import TeamMemberCard from './TeamMemberCard'
import AcademyRibbon from '../ui/AcademyRibbon'

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Staff')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = [
    'All Staff',
    'Administration',
    'STEM',
    'Humanities',
    'Arts & Music',
  ]

  // Search and filter logic
  const filteredMembers = facultyMembers.filter((member) => {
    const matchesCategory =
      selectedCategory === 'All Staff' || member.category === selectedCategory

    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.tag.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <>
      <AcademyRibbon />
      <section
        id="team-directory"
        className="w-full bg-[#FAF7F2] pb-24 pt-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Filter and Search Bar Container */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-academy-navy/10">
            {/* Categories Filter (Horizontally scrollable on mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
              {categories.map((category) => {
                const isActive = selectedCategory === category
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={[
                      'px-5 py-2.5 text-xs font-jakarta font-bold uppercase tracking-wider rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
                      isActive
                        ? 'bg-academy-navy text-white shadow-md border border-academy-navy'
                        : 'border border-academy-navy/15 text-academy-navy/70 hover:text-academy-navy hover:bg-academy-navy/5 hover:border-academy-navy/35',
                    ].join(' ')}
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            {/* Search Input Field */}
            <div className="relative w-full md:max-w-xs self-end md:self-auto">
              <input
                type="text"
                placeholder="Search faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-[#FBF3E4] border border-academy-navy/15 rounded-full font-jakarta text-xs sm:text-sm text-academy-navy placeholder-academy-navy/40 focus:outline-none focus:border-academy-navy/40 focus:bg-white shadow-xs transition-all duration-300"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-academy-navy/40" />
            </div>
          </div>

          {/* Responsive Grid with Framer Motion layout animations */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mt-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-center justify-center text-center py-20 px-4 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-academy-yellow/15 flex items-center justify-center text-academy-burnt-orange">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-academy-navy mt-2">
                No educators found
              </h3>
              <p className="font-jakarta text-sm text-academy-navy/60 max-w-sm">
                We couldn't find any staff matching "{searchQuery}" in{' '}
                {selectedCategory}. Try typing something else or selecting a
                different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Staff')
                }}
                className="mt-2 bg-academy-navy text-white hover:bg-academy-navy/90 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
