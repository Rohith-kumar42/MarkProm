import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import InquiryForm from '../components/InquiryForm';

const ASSETS = [
  {
    id: 'a12',
    location: 'Anaikatti',
    name: 'Plot A-12, The Hillcrest',
    desc: 'Premium elevated corner plot with unobstructed valley views.',
    price: '₹25,00,000',
    area: '2400 sq. ft.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6g4iZzGv16mLvk2punvtQOFxmZfHV5ywqppvz2C4kkriwKgVRpsOEnw2plBJBRVNKLfw5ewyzvi3C_4K914qsXsyxshc-X515So1KSlS9CCAXZBXtD2ubIH8Yv5PfSHutnYsawQJbDY-se0uQOC4h9VhiLz5UqXNokIissWe0zX3oUVZqLB-og2AEzUqrVPx4oA7x96AzUu44YENT2oLSHuvpv-V8jwyjuP8mpNtdXhSQsJDBa68kW0tu2QF1Stf8K-G4VsH1F9HU',
  },
  {
    id: 's05',
    location: 'Solaiyur',
    name: 'Plot S-05, River Bend',
    desc: 'Riverside property with mature native trees and direct water access.',
    price: '₹32,50,000',
    area: '3200 sq. ft.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC43hSII_HnKzycdqhYViwlNUaxmvXVBcRrFReUoqe1Ly6aagyWDo3f71Y09j3TwkNKj60w6fWuvcAgP8K6YmCbis6tg3TnFPJiH9sF7hsPBUEPWzRjAKWKcCqYqCg1YkBFCF7SFSdVE6uvnhonuWt7LRkLDHzm6YAE_c4Tlq8iJqcSbHl6cWhQiIUOwFUvVxGGytqSGG1KK1cEBvQTOf8imq3TjKVIpxqUMsS2t4PzsiYGNG04T8Y_ZDSR5ibZ78XpadY4Eji5_KSw',
  },
  {
    id: 'o22',
    location: 'Ooty',
    name: 'Plot O-22, Pine Grove',
    desc: 'Secluded mountain sanctuary ideal for a private eco-villa.',
    price: '₹45,00,000',
    area: '4500 sq. ft.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQek3laIJaUZSv64_6_GGFRmE4V3VIXwNdyv0ZuuoK7pT8P3l92obj40VhlmUFcfttUDGw63uExF8ZHdqXk3PzeonlXtBVhXtUI9JlpdkBEdRsvkwEBTsFPcvjyN5ZTpDQzkdt5uWz2qOCjYZ1zer7ruiGx94_z0egE_YPvUstwbeyMTkoLWdjW-lOHhI62XUTu-W3a8-wHuIv5P82DIKJpGeezOTPCx884ZNvdnV-KIOWvowxKQsRifw2TqM6qbMc8XDcXlsZEAI',
  },
];

const FILTERS = ['All Locations', 'Anaikatti', 'Solaiyur', 'Ooty'];

const formFields = [
  { id: 'name',     label: 'Full Name',       type: 'text',  placeholder: 'John Doe',         required: true,  half: true },
  { id: 'email',    label: 'Email Address',   type: 'email', placeholder: 'john@example.com', required: true,  half: true },
  {
    id: 'interest', label: 'Plot of Interest', type: 'select', required: true, half: false,
    options: [
      { value: 'a12',     label: 'Plot A-12, Anaikatti' },
      { value: 's05',     label: 'Plot S-05, Solaiyur' },
      { value: 'o22',     label: 'Plot O-22, Ooty' },
      { value: 'general', label: 'General Inquiry' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Resorts() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState('All Locations');

  const filtered = active === 'All Locations'
    ? ASSETS
    : ASSETS.filter((a) => a.location === active);

  return (
    <main className="page-enter pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-mp-cream">
      {/* Header */}
      <header className="mb-20 mt-8 max-w-3xl mx-auto text-center">
        <p className="font-sans text-mp-forest font-semibold text-xs uppercase tracking-[0.15em] mb-4">
          {/* COPY: original — "Investment Portfolio" — flagged for human review */}
          Anaikatti · Solaiyur · Ooty
        </p>
        <h1 className="font-display font-light text-5xl md:text-6xl text-mp-forest leading-tight mb-6">
          {/* COPY: original — "Curated Resort Assets" — flagged for human review */}
          The properties.
        </h1>
        <p className="font-sans text-mp-stone-dark text-lg leading-relaxed">
          {/* COPY: original body — flagged for human review */}
          Three locations. Each chosen for what you see when you look up from your tea.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-6 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream ${
              active === f
                ? 'bg-mp-forest text-mp-cream shadow-mp-ambient'
                : 'bg-mp-stone text-mp-forest hover:bg-mp-stone-dark/20'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.section
        variants={containerVariants}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32"
      >
        {filtered.map((asset) => (
          <motion.article
            key={asset.id}
            variants={itemVariants}
            className="resort-card group bg-mp-white rounded-lg overflow-hidden
                       shadow-mp-ambient hover:shadow-mp-ambient-lg
                       transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={asset.img}
                alt={asset.name}
                className="card-image w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-mp-forest/80 backdrop-blur-md px-3 py-1 rounded-md
                              text-mp-gold font-sans text-xs tracking-widest uppercase">
                {asset.location}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-sans font-bold text-mp-ink mb-2 group-hover:text-mp-gold transition-colors duration-300">
                {asset.name}
              </h3>
              <p className="text-mp-stone-dark font-sans mb-8">{asset.desc}</p>
              <div className="flex justify-between items-end border-t border-mp-stone pt-6">
                <div>
                  <div className="text-sm font-sans text-mp-stone-dark mb-1">Investment</div>
                  <div className="text-xl font-bold font-sans text-mp-forest">{asset.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-sans text-mp-stone-dark mb-1">Area</div>
                  <div className="text-lg font-sans text-mp-ink">{asset.area}</div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto bg-mp-stone rounded-xl p-10 md:p-16 relative overflow-hidden shadow-mp-ambient">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
             style={{ background: 'radial-gradient(circle at right center, oklch(28% 0.07 145) 0%, transparent 50%)' }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="font-display font-light text-3xl md:text-4xl text-mp-forest mb-6">
              Inquire about a plot.
            </h2>
            <p className="font-sans text-mp-stone-dark text-lg mb-8 leading-relaxed">
              {/* COPY: original — "Connect with our investment advisors... architectural narrative" — flagged for human review */}
              Tell us which site caught your eye. We'll arrange a visit.
            </p>
            <div className="space-y-4 font-sans text-mp-ink">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-mp-gold">call</span>
                <span>73393 36300</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-mp-gold">mail</span>
                <span>invest@markprom.com</span>
              </div>
            </div>
          </div>
          <div className="bg-mp-cream p-8 rounded-lg shadow-mp-ambient">
            <InquiryForm fields={formFields} submitLabel="Submit Inquiry" />
          </div>
        </div>
      </section>
    </main>
  );
}
