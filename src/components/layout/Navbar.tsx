import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AcademyLogo from '../../assets/brightpath_academy.png'
// import AcademyRibbon from '../ui/AcademyRibbon'

/* ─── nav data ─────────────────────────────────────── */
const mainLinks = [
    { label: 'Home', href: '/' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'News', href: '/news' },
    { label: 'Testimonials', href: '/testimonials' },
]

const aboutDropdown = [
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Academics', href: '/academics' },
]

const mobileLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'News', href: '/news' },
    { label: 'Testimonials', href: '/testimonials' },
]

/* ─── component ─────────────────────────────────────── */
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const { pathname } = useLocation()

    /* lock body scroll when mobile menu is open */
    if (typeof document !== 'undefined') {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
    }

    const openDropdown = () => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
        setDropdownOpen(true)
    }
    const closeDropdown = () => {
        dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 130)
    }

    const isAboutActive = pathname === '/about' || aboutDropdown.some(d => d.href === pathname)

    const desktopLinkClass = (href: string, idx: number) => [
        'relative h-9 border px-3.5 font-jakarta text-[11px] font-semibold flex items-center justify-center tracking-wide rounded-md whitespace-nowrap',
        'transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97]',
        'focus-visible:outline-2 focus-visible:outline-academy-navy focus-visible:outline-offset-2',
        pathname === href
            ? 'bg-academy-navy/10 border-academy-burnt-orange/60 text-academy-burnt-orange shadow-[0_0_16px_rgba(228,119,44,0.14)]'
            : hoveredIndex === idx
                ? 'bg-academy-navy/5 border-academy-navy/20 text-academy-burnt-orange'
                : 'bg-academy-navy/[0.02] border-academy-navy/10 text-academy-navy',
    ].join(' ')

    return (
        <>
            {/* ══════════════════════════════════════════════
          HEADER — fixed pill, content capped at max-w-7xl
      ══════════════════════════════════════════════ */}
            <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3">
                <div className="max-w-7xl mx-auto bg-academy-cream/90 backdrop-blur-md border border-academy-navy/10 rounded-xl px-5 sm:px-6 lg:px-8 shadow-sm">

                    {/* ── DESKTOP (lg+) ── */}
                    <div className="hidden lg:flex items-center justify-between gap-4 h-16">

                        {/* Zone 1 — Logo */}
                        <Link to="/" aria-label="BrightPath Academy Home" className="shrink-0 pt-1">
                            <img src={AcademyLogo} alt="BrightPath Academy" className="h-10 w-auto scale-150 object-contain" />
                        </Link>

                        {/* Zone 2 — Centred nav */}
                        <nav aria-label="Main Navigation" className="flex-1 flex justify-center">
                            <ul className="flex items-center gap-1.5">

                                {/* Home */}
                                <li>
                                    <Link
                                        to="/"
                                        onMouseEnter={() => setHoveredIndex(0)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={desktopLinkClass('/', 0)}
                                        aria-current={pathname === '/' ? 'page' : undefined}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* About + dropdown */}
                                <li
                                    className="relative"
                                    onMouseEnter={openDropdown}
                                    onMouseLeave={closeDropdown}
                                >
                                    <Link
                                        to="/about"
                                        className={[
                                            'relative h-9 border px-3.5 font-jakarta text-[11px] font-semibold flex items-center gap-1 tracking-wide rounded-md whitespace-nowrap',
                                            'transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97]',
                                            'focus-visible:outline-2 focus-visible:outline-academy-navy focus-visible:outline-offset-2',
                                            isAboutActive
                                                ? 'bg-academy-navy/10 border-academy-burnt-orange/60 text-academy-burnt-orange'
                                                : dropdownOpen
                                                    ? 'bg-academy-navy/5 border-academy-navy/20 text-academy-burnt-orange'
                                                    : 'bg-academy-navy/[0.02] border-academy-navy/10 text-academy-navy',
                                        ].join(' ')}
                                        aria-haspopup="true"
                                        aria-expanded={dropdownOpen}
                                        aria-current={pathname === '/about' ? 'page' : undefined}
                                    >
                                        About
                                        <motion.span
                                            animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                            transition={{ duration: 0.22 }}
                                            aria-hidden="true"
                                        >
                                            <ChevronDown className="w-3.5 h-3.5" />
                                        </motion.span>
                                    </Link>

                                    {/* Dropdown panel */}
                                    <AnimatePresence>
                                        {dropdownOpen && (
                                            <motion.div
                                                key="dropdown"
                                                role="menu"
                                                aria-label="About sub-navigation"
                                                initial={{ opacity: 0, scaleY: 0.92, y: -4 }}
                                                animate={{ opacity: 1, scaleY: 1, y: 0 }}
                                                exit={{ opacity: 0, scaleY: 0.92, y: -4 }}
                                                transition={{ duration: 0.22 }}
                                                className="absolute top-full left-0 mt-2 w-44 bg-academy-cream border border-academy-navy/10 rounded-xl shadow-lg overflow-hidden origin-top"
                                            >
                                                {aboutDropdown.map((item, i) => (
                                                    <Link
                                                        key={item.href}
                                                        to={item.href}
                                                        role="menuitem"
                                                        onClick={closeDropdown}
                                                        className={[
                                                            'flex items-center px-4 py-3 font-jakarta text-xs font-semibold tracking-wide transition-colors duration-150',
                                                            i < aboutDropdown.length - 1 ? 'border-b border-academy-navy/8' : '',
                                                            pathname === item.href
                                                                ? 'text-academy-burnt-orange bg-academy-navy/5'
                                                                : 'text-academy-navy hover:text-academy-burnt-orange hover:bg-academy-navy/5',
                                                        ].join(' ')}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>

                                {/* Remaining flat links */}
                                {mainLinks.slice(1).map((item, i) => (
                                    <li key={item.href}>
                                        <Link
                                            to={item.href}
                                            onMouseEnter={() => setHoveredIndex(i + 2)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            className={desktopLinkClass(item.href, i + 2)}
                                            aria-current={pathname === item.href ? 'page' : undefined}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Zone 3 — CTA */}
                        <Link
                            to="/contact"
                            className="shrink-0 bg-academy-burnt-orange hover:bg-academy-burnt-orange/90 text-white font-jakarta text-[11px] font-bold tracking-wider uppercase py-2.5 px-5 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-academy-burnt-orange focus-visible:outline-offset-2"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* ── MOBILE / TABLET bar (< lg) ── */}
                    <div className="flex lg:hidden items-center justify-between h-14">
                        <Link
                            to="/"
                            aria-label="BrightPath Academy Home"
                            className="flex items-center hover:opacity-80 pt-1 transition-opacity"
                        >
                            <img src={AcademyLogo} alt="BrightPath Academy" className="h-8 sm:h-9 w-auto scale-125 object-contain" />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(true)}
                            aria-expanded={mobileOpen}
                            aria-label="Open navigation menu"
                            className="w-10 h-10 flex items-center justify-center text-academy-navy hover:text-academy-burnt-orange rounded-xl border border-academy-navy/10 hover:border-academy-navy/25 bg-academy-navy/[0.02] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-academy-navy focus-visible:outline-offset-2"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </header>

            {/* ══════════════════════════════════════════════
          MOBILE SLIDE-IN DRAWER
      ══════════════════════════════════════════════ */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-academy-navy/20 backdrop-blur-sm z-[90]"
                            onClick={() => setMobileOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Slide-in panel */}
                        <motion.div
                            key="panel"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.38, ease: 'easeInOut' }}
                            className="fixed inset-y-0 right-0 z-[100] w-full max-w-xs sm:max-w-sm bg-academy-cream flex flex-col shadow-2xl"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Navigation menu"
                        >
                            {/* Panel header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-academy-navy/10 shrink-0">
                                <Link
                                    to="/"
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="BrightPath Academy Home"
                                >
                                    <img src={AcademyLogo} alt="BrightPath Academy" className="h-8 w-auto scale-130 object-contain" />
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="Close menu"
                                    className="w-10 h-10 flex items-center justify-center text-academy-navy hover:text-academy-burnt-orange rounded-xl border border-academy-navy/10 hover:border-academy-navy/25 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-academy-navy focus-visible:outline-offset-2"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Nav links — staggered */}
                            <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile Navigation">
                                <ul className="flex flex-col gap-1">
                                    {mobileLinks.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.32, delay: 0.12 + index * 0.05, ease: 'easeOut' }}
                                        >
                                            <Link
                                                to={item.href}
                                                onClick={() => setMobileOpen(false)}
                                                className={[
                                                    'flex items-center px-4 py-3.5 rounded-xl font-jakarta text-base font-semibold tracking-wide transition-all duration-200',
                                                    pathname === item.href
                                                        ? 'text-academy-burnt-orange bg-academy-burnt-orange/8'
                                                        : 'text-academy-navy hover:text-academy-burnt-orange hover:bg-academy-navy/5',
                                                ].join(' ')}
                                                aria-current={pathname === item.href ? 'page' : undefined}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Contact CTA pinned to bottom */}
                            <div className="px-4 pb-8 pt-4 border-t border-academy-navy/10 shrink-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.38, duration: 0.3 }}
                                >
                                    <Link
                                        to="/contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="block w-full text-center bg-academy-burnt-orange hover:bg-academy-burnt-orange/90 text-white font-jakarta font-bold text-sm tracking-wider uppercase py-4 rounded-xl shadow-md transition-all duration-200 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-academy-burnt-orange focus-visible:outline-offset-2"
                                    >
                                        Contact Us
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
