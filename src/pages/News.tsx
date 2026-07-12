import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Check } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion'
import { newsData, type NewsItem } from '../data/news'
import AcademyRibbon from '../components/ui/AcademyRibbon'
import JoinImg from '../assets/Join.png'

type FilterCategory = 'All' | 'Event' | 'Announcements' | 'Achievements'

export default function News() {
  const [currentFilter, setCurrentFilter] = useState<FilterCategory>('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const itemsPerPage = 6

  // Filter News Items
  const filteredNews = useMemo(() => {
    if (currentFilter === 'All') return newsData
    // Map Announcements / Achievements to the correct data category
    const categoryMap: Record<FilterCategory, string> = {
      All: 'All',
      Event: 'Event',
      Announcements: 'Announcement',
      Achievements: 'Achievement',
    }
    const targetCategory = categoryMap[currentFilter] || currentFilter
    return newsData.filter((item) => item.category === targetCategory)
  }, [currentFilter])

  // Total pages calculation
  const totalPages = useMemo(() => {
    return Math.ceil(filteredNews.length / itemsPerPage)
  }, [filteredNews])

  // Reset page when filter changes
  const handleFilterChange = (filter: FilterCategory) => {
    setCurrentFilter(filter)
    setCurrentPage(1)
  }

  // Get current page news
  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredNews.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredNews, currentPage])

  // Newsletter Form handler
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000) // Reset after 5s
    }
  }

  // Tag helper to render specific styles
  const getCategoryStyles = (category: NewsItem['category']) => {
    switch (category) {
      case 'Event':
        return 'bg-academy-teal text-white'
      case 'Achievement':
        return 'bg-academy-burnt-orange text-white'
      case 'Announcement':
        return 'bg-academy-navy text-white'
      default:
        return 'bg-academy-navy text-white'
    }
  }

  // Page entry and exit animations
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: shouldReduceMotion ? 'linear' : ([0.16, 1, 0.3, 1] as [number, number, number, number]),
        delay: shouldReduceMotion ? 0 : index * 0.08,
      },
    }),
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -16,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: 'easeIn',
      },
    },
  }

  return (
    <main className="w-full flex flex-col min-h-screen bg-[#FAF7F2]">
      
      {/* ── SECTION 1: HEADER ── */}
      <header className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col space-y-6">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-fraunces font-bold text-academy-navy leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Latest News & Events
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base text-academy-navy/80 max-w-2xl leading-relaxed font-jakarta"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Stay connected with the vibrant life at BrightPath Academy. From academic 
            breakthroughs to community celebrations, explore the moments that define our student journey.
          </motion.p>
        </div>
      </header>

      {/* Decorative Ribbon divider */}
      <AcademyRibbon repeats={3} className="h-3 relative z-10" />

      {/* ── SECTION 2: FILTERS & NEWS GRID (Yellow Background) ── */}
      <section 
        className="w-full bg-academy-yellow py-16 sm:py-20 lg:py-24 flex flex-col items-center"
        aria-label="News and events directory"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 flex flex-col space-y-12">
          
          {/* Filters Bar */}
          <nav 
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 font-jakarta"
            aria-label="Filter news categories"
          >
            <span className="font-bold text-xs uppercase tracking-widest text-academy-navy mt-1">
              Filter By
            </span>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {(['All', 'Event', 'Announcements', 'Achievements'] as FilterCategory[]).map((category) => {
                const isActive = currentFilter === category
                return (
                  <button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={`
                      px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm
                      ${isActive 
                        ? 'bg-academy-navy text-white hover:bg-academy-navy/95' 
                        : 'border border-academy-navy/20 text-academy-navy hover:bg-academy-navy/5 bg-transparent'
                      }
                      hover:scale-[1.03] active:scale-[0.97]
                    `}
                    aria-pressed={isActive}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Grid Container */}
          <div className="min-h-[600px] w-full">
            <AnimatePresence mode="wait">
              {paginatedNews.length > 0 ? (
                <motion.div 
                  key={`${currentFilter}-${currentPage}`}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {paginatedNews.map((news, index) => (
                    <motion.article 
                      key={news.id} 
                      custom={index}
                      variants={cardVariants}
                      className="group flex flex-col bg-[#FAF7F2] border border-academy-navy/5 rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl hover:border-academy-navy/10 transition-all duration-300"
                    >
                      {/* Image block with absolute category badge */}
                      <div className="overflow-hidden aspect-[4/3] relative w-full bg-academy-cream shrink-0">
                        <motion.img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                          whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                          transition={shouldReduceMotion ? undefined : { duration: 0.5, ease: 'easeOut' }}
                          loading="lazy"
                        />
                        <span 
                          className={`
                            absolute top-4 left-4 font-jakarta text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm z-10
                            ${getCategoryStyles(news.category)}
                          `}
                        >
                          {news.category}
                        </span>
                      </div>

                      {/* Info & Text block */}
                      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                        <div className="space-y-3">
                          <time 
                            dateTime={news.date}
                            className="font-jakarta text-xs font-semibold text-academy-navy/60 block"
                          >
                            {news.date}
                          </time>
                          <h2 className="font-fraunces text-xl sm:text-2xl font-bold text-academy-navy leading-snug group-hover:text-academy-burnt-orange transition-colors duration-200">
                            {news.title}
                          </h2>
                          <p className="font-jakarta text-sm text-academy-navy/80 leading-relaxed">
                            {news.description}
                          </p>
                        </div>

                        {/* Read More link */}
                        <Link
                          to={`/news/${news.id}`}
                          className="inline-flex items-center gap-2 font-jakarta text-xs font-bold text-academy-navy hover:text-academy-burnt-orange transition-all duration-200 group-hover:translate-x-1"
                        >
                          Read More
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty-state"
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="font-fraunces text-xl text-academy-navy font-semibold">No news items found</p>
                  <p className="font-jakarta text-sm text-academy-navy/60">Try choosing a different filter category.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <nav 
              className="flex justify-center items-center gap-3 mt-12 font-jakarta"
              aria-label="Pagination Navigation"
            >
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNumber = idx + 1
                const isPageActive = currentPage === pageNumber
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 cursor-pointer shadow-sm
                      ${isPageActive 
                        ? 'bg-academy-navy text-white' 
                        : 'border border-academy-navy/20 text-academy-navy hover:bg-academy-navy/5 bg-transparent'
                      }
                      hover:scale-[1.05] active:scale-[0.95]
                    `}
                    aria-current={isPageActive ? 'page' : undefined}
                    aria-label={`Go to page ${pageNumber}`}
                  >
                    {pageNumber}
                  </button>
                )
              })}

              {/* Next button */}
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="w-10 h-10 rounded-full border border-academy-navy/20 text-academy-navy hover:bg-academy-navy/5 bg-transparent flex items-center justify-center font-bold text-xs transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.05] active:scale-[0.95]"
                  aria-label="Go to next page"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </nav>
          )}

        </div>
      </section>

      {/* ── SECTION 3: NEWSLETTER & CAMPUS HIGHLIGHTS ── */}
      <section 
        className="w-full bg-[#FAF7F2] py-20 sm:py-24"
        aria-label="Newsletter subscription"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Newsletter Signup Card */}
            <motion.div 
              className="bg-academy-navy text-white rounded-[2.5rem] p-10 sm:p-12 lg:p-14 flex flex-col justify-between min-h-[420px] shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Decorative faint background pattern */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-academy-yellow/5 rounded-full blur-3xl" />
              </div>

              <div className="space-y-6 relative z-10">
                <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#FAF7F2]">
                  Stay informed about our latest happenings
                </h2>
                <p className="font-jakarta text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed max-w-xl">
                  Subscribe to our monthly newsletter and never miss an update on admissions, achievements, and events.
                </p>
              </div>

              {/* Form Input Section */}
              <div className="mt-8 relative z-10 w-full">
                <AnimatePresence mode="wait">
                  {!subscribed ? (
                    <motion.form 
                      onSubmit={handleSubscribe} 
                      className="flex flex-col sm:flex-row gap-3 w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="bg-white/5 border border-white/20 focus:border-academy-yellow rounded-lg px-5 py-3.5 text-white placeholder-white/50 w-full outline-none transition-all text-sm"
                        required
                        aria-label="Email address for newsletter"
                      />
                      <button
                        type="submit"
                        className="bg-academy-yellow text-academy-navy hover:bg-academy-yellow/90 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer whitespace-nowrap"
                      >
                        Join Us
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      className="flex items-center gap-2 bg-[#FAF7F2]/10 border border-academy-teal/30 p-4 rounded-xl text-academy-cream"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-academy-teal flex items-center justify-center text-white shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-jakarta text-xs sm:text-sm font-semibold text-academy-cream">
                        Thank you! You have successfully subscribed to our newsletter.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right: Featured Campus Image */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[11/12] p-3 border border-academy-navy/15 rounded-[2.5rem] bg-[#FAF7F2] shadow-sm">
                <div className="w-full h-full overflow-hidden rounded-[2rem] bg-academy-cream">
                  <img 
                    src={JoinImg} 
                    alt="Students walking together on BrightPath Academy campus" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  )
}