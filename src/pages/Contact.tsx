import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Map, ArrowRight, CheckCircle2 } from 'lucide-react'
import AcademyRibbon from '../components/ui/AcademyRibbon'
import FAQ from '../components/ui/FAQ'

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API request
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormState({ name: '', email: '', subject: '', message: '' })
        }, 1200)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <main className="w-full flex flex-col bg-[#FAF7F2] min-h-screen">

            {/* ─── HEADER SECTION ─── */}
            <section className="pt-12 pb-10 px-6 md:px-8 max-w-7xl mx-auto w-full">
                <span className="font-jakarta text-xs sm:text-sm font-bold text-academy-burnt-orange uppercase tracking-wider block">
                    CONNECT WITH US
                </span>
                <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-academy-navy leading-tight mt-2">
                    Get in Touch
                </h1>
                <div className="w-16 h-1 bg-academy-burnt-orange mt-4 rounded-full" />
            </section>

            {/* ─── FULL WIDTH BRAND COLOR STRIP ─── */}
            <div className="w-full">
                <AcademyRibbon className="h-3 rounded-none relative z-10" />
            </div>

            {/* ─── MAIN CONTACT GRID SECTION ─── */}
            <section className="max-w-7xl mx-auto w-full px-6 md:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Interactive Form */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block font-jakarta text-xs font-bold text-academy-navy uppercase tracking-wider">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="Your name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full bg-[#FAF7F2] border border-academy-navy/20 focus:border-academy-burnt-orange focus:ring-1 focus:ring-academy-burnt-orange rounded-xl px-5 py-4 text-sm text-academy-navy placeholder-academy-navy/40 outline-none transition-all duration-200"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block font-jakarta text-xs font-bold text-academy-navy uppercase tracking-wider">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="email@example.com"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-[#FAF7F2] border border-academy-navy/20 focus:border-academy-burnt-orange focus:ring-1 focus:ring-academy-burnt-orange rounded-xl px-5 py-4 text-sm text-academy-navy placeholder-academy-navy/40 outline-none transition-all duration-200"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="block font-jakarta text-xs font-bold text-academy-navy uppercase tracking-wider">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            placeholder="How can we help?"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className="w-full bg-[#FAF7F2] border border-academy-navy/20 focus:border-academy-burnt-orange focus:ring-1 focus:ring-academy-burnt-orange rounded-xl px-5 py-4 text-sm text-academy-navy placeholder-academy-navy/40 outline-none transition-all duration-200"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block font-jakarta text-xs font-bold text-academy-navy uppercase tracking-wider">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            placeholder="Tell us more about your inquiry..."
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full bg-[#FAF7F2] border border-academy-navy/20 focus:border-academy-burnt-orange focus:ring-1 focus:ring-academy-burnt-orange rounded-2xl px-5 py-4 text-sm text-academy-navy placeholder-academy-navy/40 outline-none resize-none transition-all duration-200"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-2 bg-academy-navy hover:bg-academy-navy/90 text-white font-jakarta text-xs font-bold tracking-wider uppercase py-4 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academy-navy"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-academy-navy/5 border border-academy-navy/10 rounded-[2rem] p-10 text-center space-y-6"
                                >
                                    <div className="w-16 h-16 bg-academy-teal/10 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-8 h-8 text-academy-teal" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-fraunces text-2xl font-bold text-academy-navy">
                                            Message Sent!
                                        </h3>
                                        <p className="font-jakarta text-sm sm:text-base text-academy-navy/80 max-w-sm mx-auto leading-relaxed">
                                            Thank you for contacting BrightPath Academy. We will review your message and reply as soon as possible.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="inline-block bg-academy-navy hover:bg-academy-navy/90 text-white font-jakarta text-xs font-bold tracking-wider uppercase py-3.5 px-8 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Academy Details & Map Card */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Academy Details Card */}
                        <div className="bg-academy-yellow rounded-[2rem] p-8 sm:p-10 shadow-sm border border-academy-navy/5 flex flex-col space-y-6">
                            <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-academy-navy">
                                Academy Details
                            </h2>

                            <div className="space-y-5">
                                {/* Campus Address */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-academy-navy/5 flex items-center justify-center shrink-0 text-academy-navy">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block font-jakarta text-xs font-bold text-academy-navy/60 uppercase tracking-wider">
                                            Campus Address
                                        </span>
                                        <p className="font-jakarta text-sm sm:text-base text-academy-navy font-semibold leading-relaxed">
                                            12 BrightPath Close, Victoria Island,<br />Lagos, Nigeria
                                        </p>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-academy-navy/5 flex items-center justify-center shrink-0 text-academy-navy">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block font-jakarta text-xs font-bold text-academy-navy/60 uppercase tracking-wider">
                                            Office Hours
                                        </span>
                                        <p className="font-jakarta text-sm sm:text-base text-academy-navy font-semibold leading-relaxed">
                                            Monday – Friday: 8:00 AM – 4:00 PM<br />
                                            Saturday: By Appointment
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-academy-navy/5 flex items-center justify-center shrink-0 text-academy-navy">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block font-jakarta text-xs font-bold text-academy-navy/60 uppercase tracking-wider">
                                            Phone
                                        </span>
                                        <a href="tel:+234800274448" className="block font-jakarta text-sm sm:text-base text-academy-navy hover:text-academy-burnt-orange font-semibold transition-colors">
                                            +234 800 BRIGHT (274 448)
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-academy-navy/5 flex items-center justify-center shrink-0 text-academy-navy">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block font-jakarta text-xs font-bold text-academy-navy/60 uppercase tracking-wider">
                                            Email
                                        </span>
                                        <a href="mailto:admissions@brightpath.edu.ng" className="block font-jakarta text-sm sm:text-base text-academy-navy hover:text-academy-burnt-orange font-semibold transition-colors break-all">
                                            admissions@brightpath.edu.ng
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Card */}
                        <div className="relative group rounded-[2rem] overflow-hidden shadow-md border border-academy-navy/10 aspect-[1.8/1] sm:aspect-[2.1/1]">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                                alt="Academy location map placeholder"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-academy-navy/20 flex items-center justify-center">
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-academy-cream text-academy-navy font-jakarta text-xs font-bold tracking-wider uppercase py-3.5 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                                >
                                    <Map className="w-4 h-4" />
                                    View on Google Maps
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* ─── FAQ ACCORDION SECTION ─── */}
            <FAQ
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about our admissions process and daily academy life."
                items={[
                    {
                        question: 'When does the next academic session begin?',
                        answer:
                            'Our next academic session begins in September. Applications open in January and early decision notifications are sent by April. We recommend applying early to secure your place.',
                    },
                    {
                        question: 'Are school tours available for prospective parents?',
                        answer:
                            'Yes! We host open-day tours every second Saturday of the month. You can also book a private guided tour by contacting our admissions office. Tours last approximately 90 minutes and include a Q&A with our principal.',
                    },
                    {
                        question: "What is the academy's policy on extracurricular activities?",
                        answer:
                            'We strongly encourage all students to participate in at least one extracurricular activity. We offer over 45 clubs and activities spanning sports, arts, science, and community service. Participation is voluntary but celebrated.',
                    },
                    {
                        question: 'How do you handle student transportation?',
                        answer:
                            'BrightPath operates a safe, GPS-tracked bus service covering major residential zones. Route maps and schedules are available on the parent portal. Private transport arrangements and carpool coordination support are also available through the school office.',
                    },
                ]}
                bgClassName="bg-academy-yellow"
            />

        </main>
    )
}