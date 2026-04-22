import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  { id: 'name',     label: 'Full Name',          type: 'text',  placeholder: 'John Doe',            required: true,  half: true },
  { id: 'email',    label: 'Email Address',       type: 'email', placeholder: 'john@example.com',    required: true,  half: true },
  {
    id: 'interest', label: 'Plot of Interest', type: 'select', required: true, half: false,
    options: [
      { value: 'a12', label: 'Plot A-12, Anaikatti' },
      { value: 's05', label: 'Plot S-05, Solaiyur' },
      { value: 'o22', label: 'Plot O-22, Ooty' },
      { value: 'general', label: 'General Inquiry' },
    ],
  },
];

export default function Resorts() {
  const [active, setActive] = useState('All Locations');

  const filtered = active === 'All Locations'
    ? ASSETS
    : ASSETS.filter((a) => a.location === active);

  return (
    <main className="page-enter pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      {/* Header */}
      <header className="mb-20 mt-8 max-w-3xl mx-auto text-center">
        <p className="font-body text-primary font-semibold text-sm uppercase tracking-[0.1em] mb-4">Investment Portfolio</p>
        <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold leading-tight mb-6">
          Curated Resort Assets
        </h1>
        <p className="font-body text-on-surface-variant text-lg leading-relaxed">
          Discover exclusive investment opportunities within our premium resort developments. Each plot offers a unique blend of natural beauty and architectural integrity.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-6 py-2 rounded-full font-label text-sm tracking-wide transition-all duration-300 ${
              active === f
                ? 'bg-primary text-white shadow-[0_6px_20px_rgba(38,39,125,0.25)]'
                : 'bg-surface-container-highest text-primary hover:bg-surface-dim'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
        {filtered.map((asset, i) => (
          <motion.article
            key={asset.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-surface-container-lowest rounded-lg overflow-hidden
                       shadow-[0_10px_30px_rgba(38,39,125,0.05)]
                       hover:shadow-[0_20px_60px_rgba(38,39,125,0.10)]
                       transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={asset.img}
                alt={asset.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-md
                              text-primary font-label text-xs tracking-widest uppercase">
                {asset.location}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline text-primary mb-2">{asset.name}</h3>
              <p className="text-on-surface-variant font-body mb-8">{asset.desc}</p>
              <div className="flex justify-between items-end border-t border-surface-container-high pt-6">
                <div>
                  <div className="text-sm font-label text-secondary mb-1">Investment</div>
                  <div className="text-xl font-bold font-body text-primary">{asset.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-label text-secondary mb-1">Area</div>
                  <div className="text-lg font-body text-on-surface">{asset.area}</div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto bg-surface-container-low rounded-xl p-10 md:p-16 relative overflow-hidden
                          shadow-[0_20px_60px_rgba(38,39,125,0.05)]">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
             style={{ background: 'radial-gradient(circle at right center, #26277d 0%, transparent 50%)' }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-6">
              Inquire About an Asset
            </h2>
            <p className="font-body text-on-surface-variant text-lg mb-8 leading-relaxed">
              Connect with our investment advisors to discuss your architectural narrative and secure a premium resort plot.
            </p>
            <div className="space-y-4 font-body text-on-surface">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary">call</span>
                <span>73393 36300</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary">mail</span>
                <span>invest@markprom.com</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-lg ambient-shadow">
            <InquiryForm fields={formFields} submitLabel="Submit Inquiry" />
          </div>
        </div>
      </section>
    </main>
  );
}
