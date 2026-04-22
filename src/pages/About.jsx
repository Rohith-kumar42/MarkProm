import { motion } from 'framer-motion';
import InquiryForm from '../components/InquiryForm';

const partners = ['Apex Trust', 'Aura Dev', 'Meridian', 'Vault Cap'];

const formFields = [
  { id: 'name',     label: 'Full Name',       type: 'text',  placeholder: 'Full Name',          required: true,  half: true },
  { id: 'email',    label: 'Corporate Email', type: 'email', placeholder: 'corporate@email.com', required: true,  half: true },
  {
    id: 'interest', label: 'Area of Interest', type: 'select', required: false, half: false,
    options: [
      { value: 'investment', label: 'Investment Opportunities' },
      { value: 'partnership', label: 'Strategic Partnership' },
      { value: 'media',       label: 'Media Inquiry' },
    ],
  },
  { id: 'message', label: 'Your Message', type: 'textarea', placeholder: 'How can we help you?', required: false, half: false },
];

export default function About() {
  return (
    <main className="page-enter pt-32 pb-24">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[680px] flex items-center justify-center px-6 md:px-12 py-24 bg-surface-bright overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANct3JzXenU92m9-Ag1fbsYqQM9wjKIzqdJDMXMOqL9fkWc5OuTVSrx5klJcabZKCHur_pxBVcuLBoS1cgCK-c63BCMNRdNqeANMzhmu8KAyDo1io9EK1OQf08C7wdt9j4DJX0Wsk-Gqa5HNAyxDfotsOGpPYcfsT1cEOyoktE133o9KhKBMkAvwQFs-_gxM4RRuf3a3ZWMWdLb59mB36tRUSB7Mx6wvXOl6TTHenEMG9kOGobN_bSk476CaaEwgZzZaaQicOPajg1"
            alt="Markprom Vision"
            className="w-full h-full object-cover opacity-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-bright via-surface-bright/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
          <p className="font-label text-sm md:text-base uppercase tracking-[0.2em] text-tertiary-fixed-dim font-bold drop-shadow-md">
            The Architectural Narrative
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl text-surface-container-lowest font-bold leading-tight drop-shadow-xl"
          >
            Transforming Land into{' '}
            <br />
            <span className="text-tertiary-fixed-dim italic font-light">Luxury Destinations</span>
          </motion.h1>
          <p className="font-body text-lg md:text-xl text-surface-container-low max-w-2xl mx-auto font-light drop-shadow-md">
            Markprom curates exceptional real estate opportunities, focusing on intentional design and enduring value in the luxury sector.
          </p>
        </div>
      </section>

      {/* ── Founder Bio ── */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden relative shadow-[0_40px_80px_rgba(38,39,125,0.08)] group z-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrT-3CE0T8JOfnwM9YkdZ35eUD4d2gW953c-aLRydECcYrhV4pGXQfhEjKQFQoLP-IIKF30rd1vGWgHAMfUJuQFHY9mmGs-3HhvXHsf04Qaq0qJGq_47ot9rl7JX5N5H1J4kp9FimPvjnH-OfeJ4Y_K7lJ3Sn5JLJbcseg0MpJeoVNm3OGz6QMbMgOipCnUhaUUv3fq4JV5QG66Bs-3qm8b4L2q2gxAfLexreb6yv_gmKZV5N9HeZda-Cb_yqAeihyAQwK9Q7EBCd9"
                alt="Balraj Chinnasamy – Founder & CEO"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative offset block */}
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-surface-container-low rounded-lg z-0 hidden md:block" />
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <p className="font-label text-xs uppercase tracking-widest text-secondary font-semibold">Leadership</p>
              <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">Balraj Chinnasamy</h2>
              <p className="font-headline text-xl text-tertiary italic">Founder & CEO</p>
            </div>
            <div className="space-y-6 font-body text-on-surface-variant leading-relaxed text-lg font-light">
              <p>
                With over two decades of expertise in high-end real estate acquisition and development, Balraj established Markprom with a singular vision: to bridge the gap between raw potential and architectural masterpiece.
              </p>
              <p>
                His approach is deeply rooted in "The Architectural Narrative"—the belief that every plot of land possesses an inherent story waiting to be articulated through precise, intentional design. Under his leadership, Markprom has eschewed the mass-market model in favor of a boutique, curated portfolio that prioritizes spatial integrity and generational value.
              </p>
              <p className="italic border-l-4 border-tertiary-fixed-dim pl-6 text-on-surface">
                "We are not merely developing land; we are curating legacies. True luxury is found in permanence, intention, and an uncompromising respect for the environment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy cards ── */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">Our Philosophy</h2>
            <p className="font-body text-secondary text-lg">The foundational pillars that guide our curation process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {[
              {
                icon: 'architecture',
                title: 'Company Mission',
                offset: false,
                body: 'To identify, acquire, and transform prime real estate into exclusive luxury destinations. We commit to a meticulous curation process, ensuring every development adheres to the highest standards of architectural integrity, sustainability, and aesthetic refinement, delivering unparalleled value to our investors.',
              },
              {
                icon: 'visibility',
                title: 'Our Vision',
                offset: true,
                body: 'To be the definitive benchmark for boutique luxury development worldwide. We envision a future where real estate investment transcends pure financial metrics to become a pursuit of artistry, where every Markprom property stands as a testament to visionary design and enduring quality.',
              },
            ].map(({ icon, title, body, offset }) => (
              <div
                key={title}
                className={`relative p-12 bg-surface-container-lowest rounded-xl
                            shadow-[0_20px_60px_rgba(38,39,125,0.04)]
                            hover:shadow-[0_30px_70px_rgba(38,39,125,0.06)] transition-shadow duration-500
                            ${offset ? 'lg:translate-y-12' : ''}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <h3 className="font-headline text-3xl text-primary font-bold mb-4">{title}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-lg">{body}</p>
                <div className="absolute inset-0 border border-outline-variant/15 rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-surface-container-highest pb-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <p className="font-label text-xs uppercase tracking-widest text-tertiary font-semibold">The Network</p>
            <h2 className="font-headline text-4xl text-primary font-bold">Shareholders & Partners</h2>
          </div>
          <p className="font-body text-secondary max-w-md md:text-right">
            Our success is built upon a foundation of trusted alliances with industry-leading architects, financial institutions, and global investors.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((name) => (
            <div key={name}
                 className="aspect-[3/2] bg-surface-container-low rounded-lg flex items-center justify-center p-8
                            hover:bg-surface-container-highest transition-colors">
              <span className="font-headline text-xl text-primary font-bold opacity-50 tracking-widest uppercase">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact / Inquiry ── */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest border-t border-surface-container-highest">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-headline text-4xl text-primary font-bold">Initiate a Conversation</h2>
            <p className="font-body text-secondary text-lg">Inquire about our current portfolio or discuss investment opportunities.</p>
          </div>
          <div className="bg-surface p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(38,39,125,0.03)] border border-outline-variant/10">
            <InquiryForm fields={formFields} submitLabel="Submit Inquiry" />
          </div>
        </div>
      </section>
    </main>
  );
}
