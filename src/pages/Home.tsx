import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Compass, Users, ArrowRight } from "lucide-react";
import FAQ from "../components/ui/FAQ";
import AcademyRibbon from "../components/ui/AcademyRibbon";
import StudentImage from "../assets/StudentCollaboration.jpg";
import StudentImage2 from "../assets/StudentCollaboration2.jpg";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";

/* ────────────────────────────────────────────────
   CountUp — animates a number from 0 → target
   when it scrolls into view, using framer-motion
──────────────────────────────────────────────── */
interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  const rounded = useTransform(motionValue, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString(),
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, target, {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      return controls.stop;
    }
  }, [inView, target, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ────────────────────────────────────────────────
   Shared animation variants for scroll-triggered
   section reveals using framer-motion
──────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay,
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

function ScrollReveal({
  children,
  variants = fadeUp,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative w-full py-16 sm:py-20 lg:py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Heading & CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-fraunces font-bold text-academy-navy leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Empowering Minds. Inspiring Futures
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base text-academy-navy/80 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
            >
              Welcome to BrightPath Academy, where academic excellence meets
              character development. Discover our vibrant learning community.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
            >
              <Link
                to="/admissions"
                className="bg-academy-navy text-white hover:bg-academy-navy/90 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="border border-academy-navy text-academy-navy hover:bg-academy-navy/5 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <motion.div
              className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-full max-w-[480px] h-[90%] bg-academy-yellow/20 rounded-[2rem] -z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative w-full max-w-[480px] group">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                alt="BrightPath Academy Student"
                className="w-full object-cover aspect-[4/5] rounded-[2rem] object-top lg:h-[500px] shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
              />

              <motion.div
                className="absolute -bottom-8 -left-4 sm:left-6 bg-[#FBF3E4] border border-academy-navy/10 rounded-2xl p-5 shadow-lg max-w-[260px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="font-fraunces text-xs sm:text-sm text-academy-navy font-semibold leading-relaxed">
                    A tradition of academic excellence and character
                    development.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <AcademyRibbon />

      {/* ── SECTION 2: STATS BANNER ── */}
      <section className="w-full bg-academy-navy py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 100, suffix: "%", label: "University Placement" },
            {
              target: 12,
              suffix: ":1",
              label: "Student-Teacher Ratio",
              decimals: 0,
            },
            { target: 45, suffix: "+", label: "Extracurriculars" },
            { target: 98, suffix: "%", label: "Parent Satisfaction" },
          ].map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 0.1}
              className="flex flex-col items-center group cursor-default"
            >
              <motion.span
                className="font-fraunces text-4xl sm:text-5xl font-bold text-academy-yellow"
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2.2}
                  decimals={stat.decimals ?? 0}
                />
              </motion.span>
              <span className="font-jakarta text-xs sm:text-sm text-academy-cream/80 font-semibold uppercase tracking-wider mt-2 group-hover:text-academy-cream transition-colors duration-300">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: WHY CHOOSE BRIGHTPATH ── */}
      <section className="w-full bg-academy-yellow py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-jakarta text-xs font-bold text-academy-navy/60 uppercase tracking-widest block">
              OUR VALUES
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-academy-navy leading-tight mt-2">
              Why Families Choose BrightPath
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 sm:mt-16">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                iconBg: "bg-teal-50 text-teal-600",
                title: "Academic Rigor",
                desc: "We provide a challenging and supportive environment that prepares students for success.",
                delay: 0.1,
              },
              {
                icon: <Compass className="w-6 h-6" />,
                iconBg: "bg-orange-50 text-orange-600",
                title: "Character",
                desc: "We emphasize honesty, empathy, and responsibility, fostering global citizens.",
                delay: 0.2,
              },
              {
                icon: <Users className="w-6 h-6" />,
                iconBg: "bg-indigo-50 text-indigo-600",
                title: "Active Community",
                desc: "A vibrant school community where parents, teachers, and students collaborate.",
                delay: 0.3,
              },
            ].map((card) => (
              <ScrollReveal key={card.title} delay={card.delay}>
                <motion.div
                  className="group bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-academy-navy/5 flex flex-col justify-between min-h-[250px] cursor-default"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 16px 40px -8px rgba(27,42,74,0.14)",
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                >
                  <div>
                    <motion.div
                      className={`w-12 h-12 ${card.iconBg} rounded-full flex items-center justify-center mb-6`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="font-fraunces text-xl font-bold text-academy-navy mb-4 group-hover:text-academy-burnt-orange transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="font-jakarta text-sm text-academy-navy/70 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ADMISSIONS ── */}
      <section className="w-full py-20 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-6">
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fraunces font-bold text-academy-navy leading-tight">
                Join Our Welcoming Community through BrightPath Admissions
              </h2>
              <p className="font-jakarta text-sm sm:text-base text-academy-navy/80 leading-relaxed max-w-xl">
                Learn more about our application process, key deadlines, and how
                to schedule a campus tour. We look forward to welcoming your
                family.
              </p>
              <div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-2 bg-academy-navy text-white font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md hover:shadow-xl hover:bg-academy-navy/90 transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                className="overflow-hidden rounded-2xl shadow-md"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px -8px rgba(27,42,74,0.18)",
                }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={StudentImage}
                  alt="Students walking on campus walkway"
                  className="w-full h-[300px] md:h-96 object-cover object-center"
                />
              </motion.div>
              <motion.div
                className="overflow-hidden rounded-2xl shadow-md"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px -8px rgba(27,42,74,0.18)",
                }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={StudentImage2}
                  alt="Students collaborating in science laboratory"
                  className="w-full h-[300px] md:h-96 object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIAL QUOTE ── */}
      <section className="w-full bg-academy-navy py-20 sm:py-24 px-6 md:px-8 text-center text-academy-cream relative overflow-hidden">
        {/* Decorative blurred blob */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-academy-yellow/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8 relative z-10">
          <ScrollReveal variants={fadeIn}>
            <motion.span
              className="font-fraunces text-6xl text-academy-yellow leading-none select-none block"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              "
            </motion.span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <blockquote className="font-fraunces text-xl sm:text-2xl lg:text-3xl font-medium italic leading-relaxed text-[#FAF7F2] tracking-wide">
              BrightPath has not just educated our daughter; it has matured her
              confidence and given her a sense of purpose. The teachers here are
              more than instructors; they are mentors.
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-1">
              <cite className="font-jakarta text-xs sm:text-sm font-bold text-academy-yellow uppercase tracking-widest not-italic">
                SARAH & ROBERT M.
              </cite>
              <p className="font-jakarta text-[10px] sm:text-xs text-academy-cream/60 font-semibold uppercase tracking-wider">
                Parents of Class of 2024
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 6: CAMPUS NEWS ── */}
      <section className="w-full py-20 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="space-y-2">
              <span className="font-jakarta text-xs font-bold text-academy-navy/60 uppercase tracking-widest block">
                CAMPUS NEWS
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-academy-navy">
                Stay Informed and Engaged
              </h2>
            </div>
            <Link
              to="/news"
              className="border border-academy-navy text-academy-navy hover:bg-academy-navy/5 font-jakarta text-xs font-bold tracking-wider uppercase py-2.5 px-6 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shrink-0 self-start sm:self-auto"
            >
              View All News
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 sm:mt-16">
            {[
              {
                tag: "SPORTS",
                date: "JUL 2026",
                title: "Varsity Team Triumphs in Regionals",
                desc: "Our varsity basketball team secured the regional championship after an intense final.",
                img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop",
                alt: "Varsity Basketball Team Game",
                delay: 0.1,
              },
              {
                tag: "ACADEMICS",
                date: "JUN 2026",
                title: "Annual Science Fair Showcases Innovation",
                desc: "Students presented research projects addressing climate change and tech innovations.",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
                alt: "Students at Outdoor Study Session",
                delay: 0.2,
              },
              {
                tag: "CAMPUS LIFE",
                date: "JUN 2026",
                title: "New Library Wing Opens to Students",
                desc: "A state-of-the-art facility featuring collaborative study rooms and digital resources.",
                img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
                alt: "Student reading in library",
                delay: 0.3,
              },
            ].map((card) => (
              <ScrollReveal key={card.title} delay={card.delay}>
                <motion.article
                  className="group flex flex-col bg-white border border-academy-navy/5 rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 40px -8px rgba(27,42,74,0.12)",
                    borderColor: "rgba(27,42,74,0.14)",
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                >
                  <div className="overflow-hidden aspect-video relative">
                    <motion.img
                      src={card.img}
                      alt={card.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="font-jakarta text-[10px] font-bold text-academy-burnt-orange uppercase tracking-wider bg-academy-burnt-orange/10 px-2 py-0.5 rounded">
                          {card.tag}
                        </span>
                        <span className="font-jakarta text-[10px] font-semibold text-academy-navy/40">
                          {card.date}
                        </span>
                      </div>
                      <h3 className="font-fraunces text-lg font-bold text-academy-navy group-hover:text-academy-burnt-orange transition-colors duration-200">
                        {card.title}
                      </h3>
                      <p className="font-jakarta text-xs sm:text-sm text-academy-navy/70 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <Link
                      to="/news"
                      className="inline-flex items-center gap-1.5 font-jakarta text-xs font-bold text-academy-navy hover:text-academy-burnt-orange transition-all duration-200 mt-6 group-hover:translate-x-1"
                    >
                      Read More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ── */}
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our admissions process and daily academy life."
        items={[
          {
            question: "When does the next academic session begin?",
            answer:
              "Our next academic session begins in September. Applications open in January and early decision notifications are sent by April. We recommend applying early to secure your place.",
          },
          {
            question: "Are school tours available for prospective parents?",
            answer:
              "Yes! We host open-day tours every second Saturday of the month. You can also book a private guided tour by contacting our admissions office. Tours last approximately 90 minutes and include a Q&A with our principal.",
          },
          {
            question:
              "What is the academy's policy on extracurricular activities?",
            answer:
              "We strongly encourage all students to participate in at least one extracurricular activity. We offer over 45 clubs and activities spanning sports, arts, science, and community service. Participation is voluntary but celebrated.",
          },
          {
            question: "How do you handle student transportation?",
            answer:
              "BrightPath operates a safe, GPS-tracked bus service covering major residential zones. Route maps and schedules are available on the parent portal. Private transport arrangements and carpool coordination support are also available through the school office.",
          },
        ]}
      />
    </div>
  );
}
