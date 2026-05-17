import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';


// ── Animation variants (Phase 3) ──────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const heroVariants = {
  hidden:  { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

// ── Resort data ───────────────────────────────────────────────────────────
const secondaryResorts = [
  {
    name: 'Anaikatti Heights',
    location: 'The hills above Coimbatore',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCABMpYOQaWgbw5jimuL28FV_3CXyHN4iwjWYb19f3T-iMwbKG_WRCYHO7nZQQ6eZfosDeurIP8n18JGjXYd7dgyZ59WK9yBzw1CyRz6WijIohS1JzcGU0g7NpkUST9zgokjFQYCxOycNYyWMcmET_XhrRIJcEIWCGI-tofoPa2SKaolhDqHSyBwajBDWBvJjQJ0gXYrQ4Iphv_wfqRr92HRb1KwA9fL6XceGQ48tH3tUcOfkGZWgSLxbEyRIYmlT8pzOlp5cs1XvWO',
  },
  {
    name: 'Kovai Serenity',
    location: 'Coimbatore outskirts',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6HsY0osbZA8dpYKfuPOsrMV_YpidVao4eGETSnOkYlZyG9o7rWbZLIL2fd6hr91fTVJ2kTkfm1UwVySLl98-mi3cy2Ol9554GVm1PwNtDEYNYGyK8wUuk_JzTkeXeZ0SLx8N9usFl4cJAkq9jc6THU_YTs7V2P7A_yqy8NmxwwtBkhP_aV3L7oxJgG3g5flgdvTJo9zBQKIhckXJnPneFFwMXEZM9Q-VJTsbTi3Wy2QMoG9lvcnpoekCLxJ_ypVdPi-dMdKNwACWl',
  },
  {
    name: 'Solaiyur Retreat',
    location: 'Solaiyur Valley',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFgm_3kzb0sAAmZR68AMyPa34x1z4qnbgisKnZumpp9a1YQ8IsCrnBXvbFIvYRyJp5LSz6AsiUR3QioClu7dkE9bNkWA6_NjY1xS7LzIxbXBMfD6W8gCBaDDY9pRQWpNoqH5FhV0vdWExU1oPRyn-lhTSrrXEqGrqLzC22mZGtm3tVTctngziyYrD_5l9hQ6RKWB0ION-xS8yGeL7HLdRPOnM0Ut4ltZzF3qca1eOqzJTuK9bCcrVWiXzrwMVXpHZAsGTjr2_hLYLx',
  },
  {
    name: 'Ooty Pine Grove',
    location: 'Nilgiri Mountains, Ooty',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQek3laIJaUZSv64_6_GGFRmE4V3VIXwNdyv0ZuuoK7pT8P3l92obj40VhlmUFcfttUDGw63uExF8ZHdqXk3PzeonlXtBVhXtUI9JlpdkBEdRsvkwEBTsFPcvjyN5ZTpDQzkdt5uWz2qOCjYZ1zer7ruiGx94_z0egE_YPvUstwbeyMTkoLWdjW-lOHhI62XUTu-W3a8-wHuIv5P82DIKJpGeezOTPCx884ZNvdnV-KIOWvowxKQsRifw2TqM6qbMc8XDcXlsZEAI',
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  // Hero parallax — Phase 3B
  // Using window scroll (no target) to avoid Framer Motion container-position warnings
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], ['0%', '-12%']);

  return (
    <main className="page-enter">

      {/* ── Phase 1A: Asymmetric Hero ──────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-mp-forest-deep"
      >
        {/* Parallax image layer */}
        <motion.div
          className="absolute inset-0 z-0 hero-parallax"
          style={{ y: shouldReduceMotion ? 0 : heroY }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ik-ip9unMBCM8xv6sl0MLIxcjxjKXeukkLkbZYklJbOp2pqJorfYpG0rXw3d4SUy7NddrB5kJWVlGzm9er8FuXqEzsFnMP9mMw9Z4HCriknL-A7SyVym9i7mi28jQyL4G4Na7a3GD3qtJ07GNNG9r8OKNB56w2lVCx2v3HwmuzCT1fyeq7JbkIbD1s1KRUzVfQ_c4QzLSNojxEY2n23EknLGlNeUOmtDdjvX23gEEV7wLn0ElK7S6oZOMehlKzRoCb2_g4pFRDNo"
            alt="Luxury resort architecture"
            className="w-full h-full object-cover scale-105"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Deep forest gradient — creates depth at bottom for text overlap */}
          <div className="absolute inset-0 bg-gradient-to-t from-mp-forest-deep via-mp-forest-deep/60 to-mp-forest/10" />
        </motion.div>

        {/* Hero text — overlapping the image from below */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-[1440px] pb-16 md:pb-24">
          <motion.p
            variants={heroVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            transition={{ delay: 0.05 }}
            className="font-sans text-mp-gold uppercase tracking-[0.25em] font-semibold text-xs mb-6"
          >
            {/* COPY: original — "The Architectural Narrative" — flagged for human review */}
            Anaikatti · Solaiyur · Ooty
          </motion.p>

          {/* Large overlapping headline — clamp creates the editorial scale */}
          <motion.h1
            variants={heroVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            transition={{ delay: 0.15 }}
            className="font-display font-light text-mp-cream leading-[0.95] mb-10"
            style={{ fontSize: 'clamp(4rem, 10vw, 13rem)' }}
          >
            {/* COPY: original — "Building Premium Resort Assets." — flagged for human review */}
            Find the view<br />
            <span className="text-mp-gold-muted italic">that stops you.</span>
          </motion.h1>

          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            className="flex flex-col sm:flex-row gap-5 items-start"
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/resorts"
                className="inline-flex items-center justify-center px-8 py-4
                           bg-mp-gold text-mp-forest-deep
                           font-sans font-semibold rounded-DEFAULT text-sm tracking-wide
                           hover:bg-mp-gold-muted transition-colors duration-300
                           focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream"
              >
                Explore Properties
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4
                           border border-mp-cream/40 text-mp-cream
                           font-sans font-medium rounded-DEFAULT text-sm
                           hover:bg-mp-cream/10 transition-colors duration-300
                           focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-forest-deep"
              >
                Speak with an Advisor
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-cue">
          <div className="w-px h-12 bg-mp-gold/60 mx-auto" />
        </div>
      </section>

      {/* ── Stats banner ── */}
      <section className="bg-mp-forest py-14 px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '15+', label: 'Years in the Field' },
            { value: '₹200Cr+', label: 'Assets Managed' },
            { value: '3', label: 'Prime Locations' },
            { value: '500+', label: 'Investors Served' },
          ].map(({ value, label }) => (
            <motion.div key={label} variants={itemVariants}>
              <p className="font-display text-3xl md:text-4xl font-light text-mp-gold mb-2">{value}</p>
              <p className="font-sans text-sm text-mp-stone uppercase tracking-wider">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Phase 1A: Featured Resort — 70vw editorial block ── */}
      <section id="featured" className="py-32 bg-mp-cream overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">

          {/* Section label */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-mp-forest font-semibold text-xs uppercase tracking-[0.15em] mb-12"
          >
            {/* COPY: original — "Curated Portfolio" — flagged for human review */}
            Flagship Property
          </motion.p>

          {/* 70vw featured resort with typography bleeding into negative space */}
          <div className="relative mb-24">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="resort-card group cursor-pointer"
              style={{ width: '70%' }}
            >
              <div className="relative h-[520px] rounded-DEFAULT overflow-hidden ambient-shadow">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFgm_3kzb0sAAmZR68AMyPa34x1z4qnbgisKnZumpp9a1YQ8IsCrnBXvbFIvYRyJp5LSz6AsiUR3QioClu7dkE9bNkWA6_NjY1xS7LzIxbXBMfD6W8gCBaDDY9pRQWpNoqH5FhV0vdWExU1oPRyn-lhTSrrXEqGrqLzC22mZGtm3tVTctngziyYrD_5l9hQ6RKWB0ION-xS8yGeL7HLdRPOnM0Ut4ltZzF3qca1eOqzJTuK9bCcrVWiXzrwMVXpHZAsGTjr2_hLYLx"
                  alt="The Solaiyur Retreat"
                  className="card-image w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-mp-forest/80 backdrop-blur-md px-4 py-2 rounded-DEFAULT">
                  <span className="font-sans text-xs font-bold text-mp-gold uppercase tracking-wider">Flagship</span>
                </div>
              </div>
            </motion.div>

            {/* Typography bleeds into right 30% negative space */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[36%] pl-8"
            >
              <h2
                className="font-display font-light text-mp-ink leading-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)' }}
              >
                The Solaiyur Retreat
              </h2>
              <p className="font-sans font-normal text-mp-stone-dark leading-relaxed mb-8" style={{ maxWidth: '38ch' }}>
                {/* COPY: original description flagged for human review */}
                A valley tucked below the Nilgiri foothills. The kind of quiet you don't find — you earn.
              </p>
              <p className="font-sans text-mp-forest text-sm mb-2 uppercase tracking-wider">Starting from</p>
              <p className="font-sans text-2xl font-bold text-mp-forest mb-8">₹4.5 Cr</p>
              <Link
                to="/resorts"
                className="inline-flex items-center gap-2 font-sans font-semibold text-mp-forest text-sm
                           border-b border-mp-forest/30 hover:border-mp-forest pb-1 transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream"
              >
                View Property
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>
          </div>

          {/* ── Phase 1A: Masonry grid ── */}
          <div className="mb-10 flex justify-between items-center">
            <h3 className="font-sans font-bold text-mp-ink uppercase tracking-wider text-xs">More Properties</h3>
            <Link
              to="/resorts"
              className="group inline-flex items-center text-mp-forest font-sans font-medium text-sm
                         border-b border-mp-forest/30 hover:border-mp-forest pb-1 transition-all
                         focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream"
            >
              View All
              <span className="material-symbols-outlined ml-1 text-sm transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* CSS Grid masonry: first card spans 2 rows */}
          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="masonry-grid"
          >
            {secondaryResorts.map((resort, i) => (
              <motion.div
                key={resort.name}
                variants={itemVariants}
                className={`resort-card group cursor-pointer ${i === 0 ? 'masonry-featured' : ''}`}
              >
                <Link to="/resorts" className="block h-full">
                  <div className={`overflow-hidden rounded-DEFAULT ambient-shadow ${i === 0 ? 'h-full min-h-[480px]' : 'h-56'}`}>
                    <img
                      src={resort.img}
                      alt={resort.name}
                      className="card-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-4 pb-2">
                    <h3 className="font-sans font-bold text-mp-ink group-hover:text-mp-gold transition-colors duration-300">
                      {resort.name}
                    </h3>
                    <p className="font-sans text-sm text-mp-stone-dark mt-1">{resort.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy strip ── */}
      <section className="bg-mp-forest py-24 px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {[
            { icon: 'architecture', title: 'Intentional Design', body: 'Every structure starts with a purpose — not a brief. Architecture that reflects vision, permanence, and place.' },
            { icon: 'eco', title: 'Built with the Land', body: 'We partner with nature, not against it. Our developments respect and enhance the landscapes they inhabit.' },
            { icon: 'trending_up', title: 'Generational Value', body: 'Prime land appreciates. Our portfolio is built for the long view, not the short return.' },
          ].map(({ icon, title, body }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group p-10 bg-mp-forest-light/30 rounded-xl
                         hover:bg-mp-forest-light/50 transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-mp-gold/15 flex items-center justify-center text-mp-gold mb-6">
                <span className="material-symbols-outlined text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
              </div>
              <h3 className="font-sans font-bold text-mp-gold text-lg mb-3">{title}</h3>
              <p className="font-sans text-mp-stone leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-mp-cream">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, oklch(72% 0.16 75) 0%, transparent 60%)' }} />
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <p className="font-sans text-mp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6">
            Ready to see it in person?
          </p>
          <h2 className="font-display font-light text-mp-ink text-4xl md:text-5xl leading-tight mb-8">
            {/* COPY: original — "Start Your Architectural Narrative" — flagged for human review */}
            This is what you've been saving for.
          </h2>
          <p className="font-sans text-mp-stone-dark text-lg mb-10 leading-relaxed">
            {/* COPY: original body — flagged for human review */}
            Schedule a private site visit and meet the team that builds the views you can't find anywhere else.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-mp-forest text-mp-cream
                       font-sans font-semibold rounded-DEFAULT text-sm tracking-wide
                       hover:bg-mp-forest-light transition-colors duration-300
                       shadow-mp-ambient focus:outline-none focus:ring-2 focus:ring-mp-gold
                       focus:ring-offset-2 focus:ring-offset-mp-cream"
          >
            Book a Site Visit
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
