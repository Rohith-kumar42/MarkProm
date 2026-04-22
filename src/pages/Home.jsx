import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <main className="page-enter">
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-24 overflow-hidden bg-surface-dim">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ik-ip9unMBCM8xv6sl0MLIxcjxjKXeukkLkbZYklJbOp2pqJorfYpG0rXw3d4SUy7NddrB5kJWVlGzm9er8FuXqEzsFnMP9mMw9Z4HCriknL-A7SyVym9i7mi28jQyL4G4Na7a3GD3qtJ07GNNG9r8OKNB56w2lVCx2v3HwmuzCT1fyeq7JbkIbD1s1KRUzVfQ_c4QzLSNojxEY2n23EknLGlNeUOmtDdjvX23gEEV7wLn0ElK7S6oZOMehlKzRoCb2_g4pFRDNo"
            alt="Luxury resort architecture"
            className="w-full h-full object-cover scale-105"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-[1440px] flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}
              className="font-body text-tertiary-fixed-dim uppercase tracking-[0.2em] font-semibold text-sm mb-6 drop-shadow-md"
            >
              The Architectural Narrative
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }}
              className="font-headline text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-8 drop-shadow-lg"
            >
              Building Premium<br />
              <span className="text-surface-bright/90">Resort Assets.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.3 }}
              className="font-body text-lg md:text-xl text-surface-container-low max-w-xl leading-relaxed mb-12 drop-shadow"
            >
              Curating high-yield, architecturally significant investments in prime locations. We don't just build properties; we engineer legacy assets.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            >
              <Link
                to="/resorts"
                className="inline-flex items-center justify-center px-8 py-4
                           bg-gradient-to-r from-primary to-primary-container text-white
                           font-body font-medium rounded-DEFAULT
                           hover:opacity-90 hover:scale-[1.02] transition-all duration-300
                           shadow-[0_10px_30px_rgba(38,39,125,0.25)]"
              >
                Explore Portfolio
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4
                           bg-surface-container-highest text-primary
                           font-body font-medium rounded-DEFAULT
                           hover:bg-surface-container transition-all duration-300"
              >
                Speak with an Advisor
              </Link>
            </motion.div>
          </div>

          {/* Glass card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden lg:block w-[340px] ml-auto"
          >
            <div className="glass-panel p-8 rounded-xl ambient-shadow border border-white/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-40 text-primary">
                <span className="material-symbols-outlined text-4xl">trending_up</span>
              </div>
              <p className="font-body text-sm text-on-surface-variant uppercase tracking-wider mb-2">Current Offering</p>
              <h3 className="font-headline text-2xl text-primary font-bold mb-4">Anaikatti Enclave</h3>
              <div className="space-y-3 mb-6">
                {['Pre-launch Valuation', 'Exclusive Resort Access', 'Gated Community'].map((item) => (
                  <div key={item} className="flex items-center text-on-surface">
                    <span className="material-symbols-outlined text-tertiary mr-3 text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}>done</span>
                    <span className="font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-primary/10">
                <Link
                  to="/land"
                  className="text-primary font-body font-semibold text-sm
                             group-hover:text-primary-container flex items-center transition-colors"
                >
                  View Prospectus
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats banner ── */}
      <section className="bg-primary py-14 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '15+', label: 'Years of Experience' },
            { value: '₹200Cr+', label: 'Assets Managed' },
            { value: '3', label: 'Prime Locations' },
            { value: '500+', label: 'Satisfied Investors' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-headline text-3xl md:text-4xl font-bold text-tertiary-fixed-dim mb-2">{value}</p>
              <p className="font-body text-sm text-on-primary-container uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Resort Assets ── */}
      <section id="featured" className="py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="font-body text-primary font-semibold text-sm uppercase tracking-[0.1em] mb-4">Curated Portfolio</p>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-bold leading-tight">
                Featured Resort Assets
              </h2>
            </div>
            <Link
              to="/resorts"
              className="group inline-flex items-center text-primary font-body font-medium
                         border-b border-primary/30 hover:border-primary pb-1 transition-all"
            >
              View All Properties
              <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Main feature */}
            <div className="md:col-span-8 group cursor-pointer">
              <div className="relative h-[500px] w-full rounded-DEFAULT overflow-hidden mb-8 ambient-shadow">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFgm_3kzb0sAAmZR68AMyPa34x1z4qnbgisKnZumpp9a1YQ8IsCrnBXvbFIvYRyJp5LSz6AsiUR3QioClu7dkE9bNkWA6_NjY1xS7LzIxbXBMfD6W8gCBaDDY9pRQWpNoqH5FhV0vdWExU1oPRyn-lhTSrrXEqGrqLzC22mZGtm3tVTctngziyYrD_5l9hQ6RKWB0ION-xS8yGeL7HLdRPOnM0Ut4ltZzF3qca1eOqzJTuK9bCcrVWiXzrwMVXpHZAsGTjr2_hLYLx"
                  alt="The Solaiyur Retreat"
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-6 left-6 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-DEFAULT">
                  <span className="font-body text-xs font-bold text-primary uppercase tracking-wider">Flagship Asset</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-3xl text-on-surface font-bold mb-3">The Solaiyur Retreat</h3>
                  <p className="font-body text-on-surface-variant flex items-center">
                    <span className="material-symbols-outlined mr-2 text-primary">location_on</span>
                    Solaiyur Valley
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-body text-sm text-on-surface-variant mb-1 uppercase tracking-wider">Starting from</p>
                  <p className="font-body text-2xl font-bold text-primary">₹4.5 Cr</p>
                </div>
              </div>
            </div>

            {/* Secondary stack */}
            <div className="md:col-span-4 flex flex-col gap-12">
              {[
                {
                  name: 'Anaikatti Heights',
                  location: 'Anaikatti Forest Reserve',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCABMpYOQaWgbw5jimuL28FV_3CXyHN4iwjWYb19f3T-iMwbKG_WRCYHO7nZQQ6eZfosDeurIP8n18JGjXYd7dgyZ59WK9yBzw1CyRz6WijIohS1JzcGU0g7NpkUST9zgokjFQYCxOycNYyWMcmET_XhrRIJcEIWCGI-tofoPa2SKaolhDqHSyBwajBDWBvJjQJ0gXYrQ4Iphv_wfqRr92HRb1KwA9fL6XceGQ48tH3tUcOfkGZWgSLxbEyRIYmlT8pzOlp5cs1XvWO',
                },
                {
                  name: 'Kovai Serenity',
                  location: 'Coimbatore Outskirts',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6HsY0osbZA8dpYKfuPOsrMV_YpidVao4eGETSnOkYlZyG9o7rWbZLIL2fd6hr91fTVJ2kTkfm1UwVySLl98-mi3cy2Ol9554GVm1PwNtDEYNYGyK8wUuk_JzTkeXeZ0SLx8N9usFl4cJAkq9jc6THU_YTs7V2P7A_yqy8NmxwwtBkhP_aV3L7oxJgG3g5flgdvTJo9zBQKIhckXJnPneFFwMXEZM9Q-VJTsbTi3Wy2QMoG9lvcnpoekCLxJ_ypVdPi-dMdKNwACWl',
                },
              ].map(({ name, location, img }) => (
                <div key={name} className="group cursor-pointer">
                  <div className="relative h-[260px] w-full rounded-DEFAULT overflow-hidden mb-6 ambient-shadow">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-on-surface font-bold mb-2">{name}</h3>
                    <p className="font-body text-sm text-on-surface-variant mb-4">{location}</p>
                    <Link to="/resorts" className="text-tertiary font-body text-sm font-semibold hover:underline">
                      Explore Asset
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy strip ── */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: 'architecture', title: 'Intentional Design', body: 'Every structure we build starts with a purpose. Architecture that reflects vision, permanence, and artistry.' },
            { icon: 'eco', title: 'Sustainable Curation', body: 'We partner with nature, not against it. Our developments respect and enhance the landscapes they inhabit.' },
            { icon: 'trending_up', title: 'Legacy Returns', body: 'Prime land appreciates. Our portfolio is engineered for generational value, not short-term speculation.' },
          ].map(({ icon, title, body }) => (
            <div key={title} className="group p-10 bg-surface-container-lowest rounded-xl
                                        shadow-[0_10px_40px_rgba(38,39,125,0.04)]
                                        hover:shadow-[0_20px_60px_rgba(38,39,125,0.08)] transition-shadow duration-500">
              <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
              </div>
              <h3 className="font-headline text-xl text-primary font-bold mb-3">{title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #26277d 0%, #3e4095 100%)' }}>
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #e9c176 0%, transparent 60%)' }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="font-body text-tertiary-fixed-dim uppercase tracking-[0.2em] text-sm font-semibold mb-6">
            Ready to Invest?
          </p>
          <h2 className="font-headline text-4xl md:text-5xl text-white font-bold leading-tight mb-8">
            Start Your Architectural Narrative
          </h2>
          <p className="font-body text-on-primary-container text-lg mb-10">
            Schedule a private consultation with our investment advisors and explore how Markprom can anchor your portfolio.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-tertiary-fixed-dim text-tertiary
                       font-body font-bold rounded-DEFAULT hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            Book a Consultation
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
