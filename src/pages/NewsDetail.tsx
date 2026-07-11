import { useParams, Link, useNavigate } from 'react-router-dom'
import { useMemo, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { newsData, type NewsItem } from '../data/news'
import AcademyRibbon from '../components/ui/AcademyRibbon'

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const shouldReduceMotion = useReducedMotion()
  
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Find current news item
  const currentNews = useMemo(() => {
    return newsData.find((news) => news.id === id)
  }, [id])

  // Scroll to top on load/param change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  // Get recent news items for "Latest from the Campus" (3 items excluding current, prioritizing main featured campus news)
  const campusHighlights = useMemo(() => {
    return newsData
      .filter((item) => item.id !== id)
      .slice(0, 3)
  }, [id])

  // Newsletter Form handler
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  if (!currentNews) {
    return (
      <main className="w-full min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center py-20 px-6 font-jakarta text-center">
        <h1 className="font-fraunces text-3xl font-bold text-academy-navy mb-4">Article Not Found</h1>
        <p className="text-academy-navy/70 mb-8 max-w-md font-jakarta">
          The news story or event you are looking for does not exist or may have been archived.
        </p>
        <Link
          to="/news"
          className="bg-academy-navy text-white hover:bg-academy-navy/90 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
        >
          Back to News
        </Link>
      </main>
    )
  }

  // Tag color helper
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

  return (
    <main className="w-full flex flex-col min-h-screen bg-[#FAF7F2]">
      
      {/* ── SECTION 1: HEADER BLOCK ── */}
      <header className="w-full bg-[#FAF7F2] pt-12 pb-6 sm:pt-16 sm:pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col space-y-6">
          
          {/* Back Navigation */}
          <div>
            <button
              onClick={() => navigate('/news')}
              className="group inline-flex items-center gap-2 font-jakarta text-xs font-bold text-academy-navy/80 hover:text-academy-burnt-orange transition-colors duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back to News
            </button>
          </div>

          {/* Badge Tag */}
          <div className="flex">
            <span 
              className={`
                px-4 py-1.5 rounded-full font-jakarta text-[10px] font-bold uppercase tracking-widest shadow-sm
                ${currentNews.badgeText ? 'bg-academy-yellow text-academy-navy' : getCategoryStyles(currentNews.category)}
              `}
            >
              {currentNews.badgeText || currentNews.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-academy-navy leading-[1.1] tracking-tight">
            {currentNews.title}
          </h1>

          {/* Description / Subheading */}
          <p className="font-jakarta text-base sm:text-lg text-academy-navy/80 max-w-4xl leading-relaxed">
            {currentNews.description}
          </p>

        </div>
      </header>

      {/* ── SECTION 2: BREADTH IMAGE BANNER ── */}
      <section className="max-w-7xl w-full mx-auto px-6 md:px-8 pb-12">
        <motion.div 
          className="w-full aspect-[21/9] sm:aspect-[16/7] rounded-[2rem] overflow-hidden shadow-lg border border-academy-navy/15 bg-academy-cream"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src={currentNews.image} 
            alt={currentNews.title} 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </section>

      {/* ── SECTION 3: TWO-COLUMN MAIN ARTICLE & SIDEBAR ── */}
      <section className="w-full bg-[#FAF7F2] pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Article Body */}
            <article className="lg:col-span-8 space-y-8 font-jakarta text-sm sm:text-base text-academy-navy/90 leading-relaxed">
              <p className="font-medium text-academy-navy text-base sm:text-lg">
                {currentNews.content}
              </p>

              {/* Render custom subheadings if present */}
              {currentNews.subheadings?.map((sub, idx) => (
                <div key={idx} className="space-y-3 pt-4">
                  <h2 className="font-fraunces text-2xl font-bold text-academy-navy tracking-tight">
                    {sub.title}
                  </h2>
                  <p className="font-jakarta text-academy-navy/85 leading-relaxed">
                    {sub.text}
                  </p>
                </div>
              ))}

              {/* Render custom Quote block if present */}
              {currentNews.quote && (
                <div className="bg-[#FBF3E4] border-l-4 border-academy-burnt-orange p-6 sm:p-8 rounded-r-2xl my-8">
                  <p className="font-fraunces text-lg sm:text-xl font-bold italic text-academy-navy leading-relaxed text-center lg:text-left">
                    "{currentNews.quote}"
                  </p>
                </div>
              )}

              {/* Render Reminders Box if present */}
              {currentNews.reminders && currentNews.reminders.length > 0 && (
                <div className="bg-academy-teal/5 border border-academy-teal/15 rounded-2xl p-6 sm:p-8 space-y-4 my-8">
                  <h3 className="font-fraunces text-lg font-bold text-academy-teal">
                    Important Reminders for Parents
                  </h3>
                  <ul className="space-y-3 font-jakarta text-sm text-academy-navy/80">
                    {currentNews.reminders.map((reminder, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-academy-teal/10 flex items-center justify-center text-academy-teal shrink-0 mt-0.5" aria-hidden="true">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{reminder}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article tags */}
              {currentNews.tags && currentNews.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-academy-navy/10 font-jakarta text-xs font-semibold text-academy-navy">
                  <span className="uppercase tracking-widest text-[10px] text-academy-navy/55 mr-2">Tags:</span>
                  {currentNews.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="border border-academy-navy/15 rounded-full px-4 py-1.5 hover:bg-academy-navy/5 transition-colors duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>

            {/* Right Column: Sidebar */}
            <aside className="lg:col-span-4 space-y-8 w-full lg:sticky lg:top-[96px]">
              
              {/* Card 1: Upcoming Events */}
              <div className="bg-academy-navy text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
                <h3 className="font-fraunces text-2xl font-bold tracking-tight text-white">
                  Upcoming Events
                </h3>
                
                <div className="space-y-4 font-jakarta">
                  {[
                    { date: 'JULY 10', title: 'Summer Arts Festival' },
                    { date: 'AUGUST 15', title: 'New Student Orientation' },
                    { date: 'SEPT 1', title: 'Academic Year Registration' },
                  ].map((evt, idx) => (
                    <div key={idx} className="space-y-1">
                      <time className="text-[10px] font-bold text-academy-yellow uppercase tracking-wider block">
                        {evt.date}
                      </time>
                      <span className="text-sm font-bold text-[#FAF7F2] hover:text-academy-yellow transition-colors duration-200 block cursor-pointer">
                        {evt.title}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/news" // Links to events list / news
                  className="block w-full text-center bg-white text-academy-navy hover:bg-[#FAF7F2] font-bold font-jakarta text-xs uppercase tracking-wider py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  Full Calendar
                </Link>
              </div>

              {/* Card 2: Admissions Open */}
              <div className="bg-academy-burnt-orange text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md relative overflow-hidden">
                {/* Graduation cap background graphic */}
                <svg className="absolute -bottom-8 -right-8 w-32 h-32 text-white/8 fill-current rotate-12 pointer-events-none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM4.18 11.23C3.43 11.66 3 12.43 3 13.29V17c0 2.21 4.03 4 9 4s9-1.79 9-4v-3.71c0-.86-.43-1.63-1.18-2.06L12 14.5l-7.82-3.27z" />
                </svg>

                <div className="space-y-3 relative z-10">
                  <h3 className="font-fraunces text-2xl font-bold tracking-tight text-white">
                    Admissions Open
                  </h3>
                  <p className="font-jakarta text-sm leading-relaxed opacity-95">
                    Join the BrightPath family for the upcoming academic year. Applications are now being accepted.
                  </p>
                </div>

                <div className="relative z-10">
                  <Link
                    to="/admissions"
                    className="inline-block bg-academy-navy text-white hover:bg-academy-navy/95 font-bold font-jakarta text-xs uppercase tracking-wider py-3 px-6 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* Decorative Ribbon Separator */}
      <AcademyRibbon repeats={3} className="h-3 my-4" />

      {/* ── SECTION 4: LATEST FROM THE CAMPUS ── */}
      {campusHighlights.length > 0 && (
        <section 
          className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24"
          aria-label="Recent campus updates"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
            
            {/* Section Header */}
            <div className="flex justify-between items-end">
              <h2 className="font-fraunces text-3xl font-bold text-academy-navy tracking-tight">
                Latest from the Campus
              </h2>
              <Link 
                to="/news"
                className="inline-flex items-center gap-1.5 font-jakarta text-xs font-bold text-academy-navy hover:text-academy-burnt-orange transition-all duration-200 hover:translate-x-0.5"
              >
                View All News
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Grid of Related items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-jakarta">
              {campusHighlights.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="group flex flex-col bg-white border border-academy-navy/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-academy-cream relative">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                    />
                    <span 
                      className={`
                        absolute top-3 left-3 font-jakarta text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm z-10
                        ${getCategoryStyles(news.category)}
                      `}
                    >
                      {news.category}
                    </span>
                  </div>
                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-semibold text-academy-navy/50 block">
                        {news.date}
                      </span>
                      <h3 className="font-fraunces text-base sm:text-lg font-bold text-academy-navy leading-snug group-hover:text-academy-burnt-orange transition-colors duration-200 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-xs text-academy-navy/70 leading-relaxed line-clamp-2">
                        {news.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-academy-navy group-hover:translate-x-0.5 transition-transform duration-200">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ── SECTION 5: CENTERED NEWSLETTER BANNER (Yellow Background) ── */}
      <section 
        className="w-full bg-academy-yellow py-16 sm:py-20 text-center"
        aria-label="Campus weekly digest signup"
      >
        <div className="max-w-xl mx-auto px-6 md:px-8 space-y-6 flex flex-col items-center">
          <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-academy-navy tracking-tight">
            Stay Informed
          </h2>
          <p className="font-jakarta text-sm sm:text-base text-academy-navy/80 leading-relaxed">
            Subscribe to the BrightPath Weekly Digest for updates on events, stories, and school announcements.
          </p>

          <div className="w-full max-w-md pt-2">
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
                    className="bg-white border border-academy-navy/15 focus:border-academy-navy rounded-full px-6 py-3.5 text-academy-navy placeholder-academy-navy/40 w-full outline-none text-sm shadow-sm"
                    required
                    aria-label="Email address for weekly digest"
                  />
                  <button
                    type="submit"
                    className="bg-academy-navy text-white hover:bg-academy-navy/95 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer whitespace-nowrap"
                  >
                    Join Digest
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  className="flex items-center justify-center gap-2 bg-[#FAF7F2]/50 border border-academy-teal/20 p-4 rounded-full text-academy-navy"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-5 h-5 rounded-full bg-academy-teal flex items-center justify-center text-white shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-jakarta text-xs sm:text-sm font-bold text-academy-navy">
                    Successfully subscribed to BrightPath Weekly Digest!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </main>
  )
}