"use client";
import { Link } from 'react-router-dom'
import { LucideBookOpenCheck, Laptop, Users, Microscope, FlaskConical, TreeDeciduous, Rocket, ShieldCheck } from 'lucide-react';
import { motion, type Variants } from "framer-motion";
import AcademyRibbon from '../components/ui/AcademyRibbon'
import facility from "../assets/entry_facility.jpg"
import court from "../assets/court.jpg"
import pool from "../assets/pool.jpg"
import lab from "../assets/lab.jpg"
import reading from "../assets/reading.jpg"
import hall from "../assets/hall.jpg"
import play from "../assets/playground.jpg"

/* ------------------------------------------------------------------ */
/*  Motion variants                                                    */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-[0.14em] text-academy-burnt-orange font-jakarta">
      <span className="h-px w-[18px] bg-academy-burnt-orange" />
      {children}
    </span>
  );
}

function ArtPanel({
  children,
  tone = "navy",
}: {
  children: React.ReactNode;
  tone?: "navy" | "teal" | "cream";
}) {
  const bg =
    tone === "navy"
      ? "bg-academy-navy/[0.08]"
      : tone === "teal"
        ? "bg-academy-teal/10"
        : "bg-white/10";
  return (
    <div
      className={`relative aspect-[4/3.3] rounded-3xl flex items-center justify-center overflow-hidden ${bg}`}
    >
      <div className="w-[58%] h-[58%]">{children}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-academy-navy/15 bg-academy-navy/[0.06] px-4 py-2.5 text-[13.5px] font-semibold font-jakarta text-academy-navy">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Facilities() {
  return (
    <main className="bg-[#FAF7F2] text-academy-navy font-jakarta">
      {/* ---------------- HERO ---------------- */}
      <section className="bg-academy-cream  pt-25 md:pt-16 overflow-hidden">
        <div className=" max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center pb-16">
          <motion.div
            className="flex flex-col space-y-6 sm:space-y-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <div className="bg-academy-teal w-fit py-0.5 px-2 font-bold rounded-2xl text-white text-sm  ">
                Our Campus
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-6xl font-fraunces font-bold text-academy-navy leading-[1.3] "
            >
              World-Class Spaces for Inspired Learning.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-academy-navy/80 leading-relaxed max-w-xl"
            >
              We believe the environment is the third teacher. Every wing of
              our campus is deliberately designed to foster curiosity,
              creativity, and a lifelong love of discovery.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <Link
                to="#"
                className="bg-academy-navy text-white hover:bg-academy-navy/90 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                Schedule a Tour
              </Link>
              <Link
                to="#"
                className="border border-academy-navy text-academy-navy hover:bg-academy-navy/5 font-jakarta font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                Download Brochure
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative max-w-[480px] rounded-[26px] ">
              <img
                className="relative rounded-[22px] h-[400px] lg:h-[550px] overflow-hiddew-full object-cover  rounded-[2rem] object-top lg:h-[500px]"
                src={facility}
                alt="BrightPath Academy Student"
              />

              {/* floating stat chip - framer motion float */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden md:block absolute -left-6 -bottom-6 rounded-[18px] bg-academy-yellow px-5.5 py-4.5 shadow-[0_16px_32px_rgba(228,119,44,0.28)] max-w-[250px]"
              >
                <div className="font-fraunces text-[26px] font-semibold leading-none text-academy-navy">
                  50,000+
                </div>
                <div className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-academy-navy/75 font-jakarta">
                  square feet of collaborative learning space across four
                  specialized wings
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* stripe divider */}
        <AcademyRibbon />
      </section>

      {/* ---------------- KNOWLEDGE HUB ---------------- */}
      <section className="bg-academy-yellow py-30 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto px-8 grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp} className="">
            <h2 className="font-fraunces text-academy-burnt-orange text-[40px] mb-4">
              The Knowledge Hub
            </h2>

            <p className="text-[16px] leading-[1.7] text-academy-burnt-orange max-w-[480px] mb-7">
              More than just books, our library is a multi-media research center. Quiet study zones, digital archives, and collaborative lounge areas are designed to inspire deep focus and intellectual exchange.
            </p>

            <motion.ul variants={stagger} className="grid gap-3.5">
              {[
                [LucideBookOpenCheck, "20,000+ curated titles and journals"],
                [Laptop, "High-speed digital research terminals"],
                [Users, "Private discussion pods"],
              ].map(([Icon, label], index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-[15px] font-medium text-academy-burnt-orange font-jakarta"
                >
                  <span>
                    <Icon className="h-4 w-4 text-black" />
                  </span>
                  {label}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div variants={fadeUp} className="">
            <img
              className="relative border-10 border-white w-full object-cover rounded-[2rem] object-top h-[400px] lg:h-[500px]"
              src={facility}
              alt="BrightPath Academy Student"
            />
          </motion.div>
        </motion.div>
      </section>


      {/* ---------------- STEM LABS ---------------- */}
      <section className="bg-academy-cream py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto px-8 grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp} className="order-2 md:order-1">
            <h2 className="font-fraunces text-[clamp(48px,3.2vw,48px)] mb-4">
              Advanced STEM Laboratories
            </h2>
            <p className="text-[16px] leading-[1.7] text-academy-navy/80 max-w-[480px] mb-7">
              Our state-of-the-art labs are equipped with university-grade
              technology, allowing students to conduct sophisticated
              experiments in biology, chemistry, and physics within a safe,
              professional-grade environment.
            </p>
            <div className="grid grid-cols-2 w-full flex-wrap gap-3">
              < motion.div variants={scaleIn} className='bg-academy-yellow items-center p-5 rounded-lg text-sm font-semibold' >
                <Microscope className='w-5' />
                Robotics Bay
              </motion.div>
              <motion.div variants={scaleIn} className='bg-academy-teal items-center p-5 rounded-lg text-sm font-semibold' >
                <FlaskConical className='w-5' />
                Chemical Safety
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="">
            <img
              className="relative rounded-[22px] overflow-hiddew-full object-cover  rounded-[2rem] object-top h-[300px] lg:h-[500px]"
              src={lab}
              alt="BrightPath Academy Student"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- ATHLETIC WING ---------------- */}
      <section className="bg-academy-yellow py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className=" mx-auto px-8 grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp} className="grid py-20 grid-cols-2 gap-4">
            <img
              className="relative rounded-[22px] h-[250px] -mt-10 overflow-hiddew-full object-cover  rounded-[2rem] object-top w-full"
              src={pool}
              alt="BrightPath Academy Student"
            />
            <img
              className="relative rounded-[22px] h-[250px] -mb-10 overflow-hiddew-full object-cover  rounded-[2rem] object-top "
              src={court}
              alt="BrightPath Academy Student"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="md:order-1">
            <Eyebrow>Wing Three</Eyebrow>
            <h2 className="font-fraunces text-[clamp(28px,3.2vw,38px)] mb-4">
              The Athletic Wing
            </h2>
            <p className="text-[16px] leading-[1.7] text-academy-navy/80 max-w-[480px] mb-7">
              Developing physical excellence through professional-grade
              amenities. Our complex includes an indoor heated pool, a
              full-sized gymnasium, and specialized training rooms for a
              variety of sports.
            </p>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center rounded-full bg-academy-navy px-6 py-3.5 text-[14.5px] font-semibold font-jakarta text-academy-cream shadow-lg shadow-academy-navy/20"
            >
              View Team Schedules
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- BISTRO + HALL ---------------- */}
      <section className="bg-academy-cream py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto px-8 grid sm:grid-cols-2 gap-7"
        >
          {[
            {
              tone: "bg-academy-navy",
              title: "The Garden Bistro",
              copy: "A nutrition-first dining experience where farm-to-table meals are served in a bright, social setting.",
              // Replace with your actual image paths
              image: reading,
            },
            {
              tone: "bg-academy-teal",
              title: "Grand Performance Hall",
              copy: "A 600-seat, state-of-the-art theater designed for musical performances, drama, and campus-wide assemblies.",
              // Replace with your actual image paths
              image: hall,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`flex flex-col relative overflow-hidden text-black font-jakarta `}
            >
              {/* Image Container: Full width, set height, cropped perfectly */}
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>

              {/* Text Container: Moved the padding (p-9) here instead */}
              <div className="p-9 flex flex-col justify-center flex-grow">
                <h3 className="font-fraunces text-[32px] mb-2.5">{card.title}</h3>
                <p className="text-[14.5px] leading-relaxed opacity-80">{card.copy}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* ---------------- CREATIVE PLAY ZONES ---------------- */}
      <section className="bg-academy-yellow py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className=" mx-auto px-8 grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="w-full h-100 overflow-hidden order-2">
            <img
              src={play}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

          <motion.div variants={fadeUp} className="md:order-1">
            <h2 className="font-fraunces text-[40px] mb-4">
              Creative Play Zones
            </h2>
            <p className="text-[16px] leading-[1.7] text-academy-navy/80 max-w-[480px] mb-7">
              Designed by landscape architects, our outdoor areas promote
              risk-taking and imaginative play. From the discovery garden to
              the sensory play modules, we ensure that breaks are as
              enriching as lessons.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className='flex text-sm font-semibold items-center gap-1'> <TreeDeciduous className='w-5' /> Nature Trails</div>
              <div className='flex text-sm font-semibold items-center gap-1'> <Rocket className='w-5' /> Modern Play</div>
              <div className='flex text-sm font-semibold items-center gap-1'> <ShieldCheck className='w-5' /> Safety First</div>

            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}