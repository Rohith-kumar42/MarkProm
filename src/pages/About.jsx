import { motion, useReducedMotion } from 'framer-motion';
import InquiryForm from '../components/InquiryForm';

const partners = ['Apex Trust', 'Aura Dev', 'Meridian', 'Vault Cap'];

const formFields = [
  { id: 'name',     label: 'Full Name',       type: 'text',  placeholder: 'Full Name',          required: true,  half: true },
  { id: 'email',    label: 'Corporate Email', type: 'email', placeholder: 'corporate@email.com', required: true,  half: true },
  {
    id: 'interest', label: 'Area of Interest', type: 'select', required: false, half: false,
    options: [
      { value: 'investment',  label: 'Investment Opportunities' },
      { value: 'partnership', label: 'Strategic Partnership' },
      { value: 'media',       label: 'Media Inquiry' },
    ],
  },
  { id: 'message', label: 'Your Message', type: 'textarea', placeholder: 'How can we help you?', required: false, half: false },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="page-enter pt-32 pb-24">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[680px] flex items-center justify-center px-6 md:px-12 py-24 bg-mp-forest-deep overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANct3JzXenU92m9-Ag1fbsYqQM9wjKIzqdJDMXMOqL9fkWc5OuTVSrx5klJcabZKCHur_pxBVcuLBoS1cgCK-c63BCMNRdNqeANMzhmu8KAyDo1io9EK1OQf08C7wdt9j4DJX0Wsk-Gqa5HNAyxDfotsOGpPYcfsT1cEOyoktE133o9KhKBMkAvwQFs-_gxM4RRuf3a3ZWMWdLb59mB36tRUSB7Mx6wvXOl6TTHenEMG9kOGobN_bSk476CaaEwgZzZaaQicOPajg1"
            alt="Markprom Vision"
            className="w-full h-full object-cover opacity-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mp-forest-deep via-mp-forest-deep/50 to-transparent z-10" />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
          <p className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-mp-gold font-bold drop-shadow-md">
            {/* COPY: original — "The Architectural Narrative" — flagged for human review */}
            Anaikatti · Solaiyur · Ooty
          </p>
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display font-light text-mp-cream text-5xl md:text-7xl lg:text-8xl leading-tight drop-shadow-xl"
          >
            {/* COPY: original — "Transforming Land into Luxury Destinations" — flagged for human review */}
            We build the views<br />
            <span className="text-mp-gold-muted italic">you can't buy anywhere else.</span>
          </motion.h1>
          <p className="font-sans text-lg md:text-xl text-mp-stone max-w-2xl mx-auto font-light drop-shadow-md">
            {/* COPY: original — "Markprom curates exceptional real estate..." — flagged for human review */}
            Markprom develops resort properties in the hills above Coimbatore. Every site is chosen for the view first.
          </p>
        </div>
      </section>

      {/* ── Founder Bio ── */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-mp-cream">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden relative shadow-mp-ambient group z-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrT-3CE0T8JOfnwM9YkdZ35eUD4d2gW953c-aLRydECcYrhV4pGXQfhEjKQFQoLP-IIKF30rd1vGWgHAMfUJuQFHY9mmGs-3HhvXHsf04Qaq0qJGq_47ot9rl7JX5N5H1J4kp9FimPvjnH-OfeJ4Y_K7lJ3Sn5JLJbcseg0MpJeoVNm3OGz6QMbMgOipCnUhaUUv3fq4JV5QG66Bs-3qm8b4L2q2gxAfLexreb6yv_gmKZV5N9HeZda-Cb_yqAeihyAQwK9Q7EBCd9"
                alt="Balraj Chinnasamy – Founder & CEO"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative offset block */}
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-mp-stone rounded-lg z-0 hidden md:block" />
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <p className="font-sans text-xs uppercase tracking-widest text-mp-stone-dark font-semibold">Leadership</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-mp-forest">Balraj Chinnasamy</h2>
              <p className="font-display text-xl text-mp-gold-dark italic">Founder & CEO</p>
            </div>
            <div className="space-y-6 font-sans text-mp-stone-dark leading-relaxed text-lg font-light">
              <p>
                With over two decades of experience acquiring and developing high-end real estate, Balraj established Markprom with a clear purpose: to build properties that reward the people who choose them.
              </p>
              <p>
                {/* COPY: paragraph contains "The Architectural Narrative" and "curated portfolio" — rewritten below, flag original for review */}
                His approach starts with the site — the elevation, the tree line, the direction of the light. Under his leadership, Markprom has chosen depth over breadth, focusing on a small portfolio of properties where every decision is made on foot.
              </p>
              <p className="italic border-l-4 border-mp-gold pl-6 text-mp-ink">
                {/* COPY: original quote — "We are not merely developing land; we are curating legacies..." — flagged for human review */}
                "You don't fall in love with a brochure. You fall in love with a morning."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy cards ── */}
      <section className="py-24 px-6 md:px-12 bg-mp-stone">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display font-light text-4xl md:text-5xl text-mp-forest">Our Philosophy</h2>
            <p className="font-sans text-mp-stone-dark text-lg">How we choose what we build.</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
          >
            {[
              {
                icon: 'architecture',
                title: 'Company Mission',
                offset: false,
                body: 'To find land with a reason to exist, and build something that lasts on it. Every Markprom site is chosen for what it offers first — the view, the elevation, the quiet — not the spreadsheet.',
              },
              {
                icon: 'visibility',
                title: 'Our Vision',
                offset: true,
                // COPY: original — "To be the definitive benchmark for boutique luxury development worldwide..." — flagged for human review
                body: 'To be the developer that investors name when someone asks "who actually gets it right?" Not the biggest. The one you trust with the place you want to grow old in.',
              },
            ].map(({ icon, title, body, offset }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className={`relative p-12 bg-mp-white rounded-xl shadow-mp-ambient
                            hover:shadow-mp-ambient-lg transition-shadow duration-500
                            ${offset ? 'lg:translate-y-12' : ''}`}
              >
                <div className="w-16 h-16 rounded-full bg-mp-forest/10 flex items-center justify-center text-mp-forest mb-6">
                  <span className="material-symbols-outlined text-3xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <h3 className="font-sans font-bold text-xl text-mp-forest mb-4">{title}</h3>
                <p className="font-sans text-mp-stone-dark leading-relaxed text-lg">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-mp-cream">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-mp-stone pb-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <p className="font-sans text-xs uppercase tracking-widest text-mp-gold-dark font-semibold">The Network</p>
            <h2 className="font-display font-light text-4xl text-mp-forest">Shareholders & Partners</h2>
          </div>
          <p className="font-sans text-mp-stone-dark max-w-md md:text-right">
            A network of architects, financial institutions, and investors who care about what they put their name on.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((name) => (
            <div key={name}
                 className="aspect-[3/2] bg-mp-stone rounded-lg flex items-center justify-center p-8
                            hover:bg-mp-stone-dark/10 transition-colors">
              <span className="font-display text-xl text-mp-forest font-light opacity-60 tracking-widest uppercase">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact / Inquiry ── */}
      <section className="py-24 px-6 md:px-12 bg-mp-stone border-t border-mp-stone-dark/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            {/* COPY: original — "Initiate a Conversation" — flagged for human review */}
            <h2 className="font-display font-light text-4xl text-mp-forest">Start a conversation.</h2>
            <p className="font-sans text-mp-stone-dark text-lg">Ask about our current sites or tell us what you're looking for.</p>
          </div>
          <div className="bg-mp-cream p-8 md:p-12 rounded-xl shadow-mp-ambient border border-mp-stone">
            <InquiryForm fields={formFields} submitLabel="Submit Inquiry" />
          </div>
        </div>
      </section>
    </main>
  );
}
