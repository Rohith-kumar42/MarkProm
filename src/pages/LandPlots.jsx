import { motion } from 'framer-motion';
import InquiryForm from '../components/InquiryForm';

const PLOTS = [
  {
    id: 'azure',
    title: 'Azure Cliffside Reserve',
    location: 'Amalfi Coastline Extension, Region V',
    area: '450,000 sq.ft',
    perSqFt: '$120',
    total: '$54,000,000',
    tags: ['Coastal', 'Sloped'],
    tagIcons: ['water', 'landscape'],
    badge: 'Featured',
    badgeBg: 'bg-tertiary/90 text-white',
    labelBg: 'Luxury Destination',
    cols: 2,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdE-dVKxzWe94KJEQ-w90lt9CAGZr4jn6UfT9t6F4WtqMCa8eLWLrtUtjCHZTum18flN1PhPRaUgJzYHnGlbDSXajBevIpp2D7ktmzEp2Pxu2Vj_1qD0bwkSGP7GOtArxm14DF7PvjfCnj0jixxrt8X8xf6guJDQh-7SYGPEIcNVUB5GZJnQV0V145URmp7ON3Gqun9J2kKdV3kawwz0jejFDz64RwTxGieFUYwTVgTnbYsuj65QMsTTCN2yx--aUMA8jIpBAUWHQu',
    large: true,
  },
  {
    id: 'verdant',
    title: 'Verdant Valley Tract',
    location: 'Northern Highlands, Sector 4',
    area: '1,200,000 sq.ft',
    perSqFt: '$45',
    total: '$54,000,000',
    labelBg: 'Eco-Resort Zoning',
    cols: 1,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhFc9si7O4QBZ9O5hVETLMLYlqRprg4Vic5er9pamuxNlyr21iQFiJ2xgb3H_NP3BOm-llMEkR6fb4GrceeJfknQAD3vqlVknd8DSRBKYcADxCui07UyolObXXRsb8q0WPPvr1utJQgTSNmWSgdZamnNbVct0rzUIN05wqjQwkFIYn0NYpdPNau8KhbsxAhiCTdEq1TbBReNB0vOVVHpDC9qRRjCzjbeZTmbO3PsMYnu1wBu-gJ2Q7YKT7LSNlmQnYA33YJtWkRBjl',
    large: false,
  },
  {
    id: 'coral',
    title: 'Coral Sands Parcel',
    location: 'Southern Peninsula, Bay Area',
    area: '250,000 sq.ft',
    perSqFt: '$210',
    total: '$52,500,000',
    cols: 1,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9OBoV5J3GHv8JbctNod0tXy1aTHWZ61k-Yt0mSvRXroPo-AKv7vJGtv79nvhoho70_9rqWoDasdV2gbO4GcZVvu6AYC_jm9JA2bnugewVL7M31wIy5KfVk38A3lS_rl1ZkZVg84V3kcFABCZBW3wjqPFI3M7zdGBZC_ID8JjA8OJDQ3JSs7xqTBwuHYPzIvYspjpf7kNnoP6hpDu92nCEb87IbBK0cEkRhi9buH9xQsJ-5gKELDkY8V96VVb7jTT7ALTJlChH-jSr',
    large: false,
  },
  {
    id: 'pines',
    title: 'Whispering Pines Clearing',
    location: 'Western Ridge, Elevation 400m',
    area: '800,000 sq.ft',
    perSqFt: '$65',
    total: '$52,000,000',
    labelBg: 'Private Estate Potential',
    cols: 2,
    horizontal: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc4IcZWTzZWLvrJytYNTKhiBhTpgxKY20fPW3hylnslhoa-niSrr1ykCSmTwZm2_Y2nRBU9JQlNmPoww8pANkCBMJ__4-ywLqscNbtY0mWHQ6jyWTHCm9SQnoW9EO4wo1Uf2KCsB-uriKR-OV6lawEZ7RgBQAIZ7JfEj2MIlZWGw23CPDuVUAB4tUZoVT0wzaw19DYSuAikdpA4PBZwWrX4Cwhz0_CxFRMZnn_GF4_UkumEz-svghmFawb8Cs-HGUaBLO3xJI2be2',
    large: false,
  },
];

const formFields = [
  { id: 'name',  label: 'Full Name',      type: 'text',  placeholder: 'Full Name',       required: true,  half: true },
  { id: 'email', label: 'Corporate Email',type: 'email', placeholder: 'Corporate Email', required: true,  half: true },
  {
    id: 'interest', label: 'Primary Area of Interest', type: 'select', required: true, half: false,
    options: [
      { value: 'coastal',  label: 'Coastal & Beachfront' },
      { value: 'mountain', label: 'Mountain & Highlands' },
      { value: 'mixed',    label: 'Mixed-Use Development' },
    ],
  },
];

export default function LandPlots() {
  return (
    <main className="page-enter pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto min-h-screen">
      {/* Header */}
      <header className="mb-24 mt-12 max-w-4xl">
        <h2 className="text-tertiary font-label uppercase tracking-[0.1em] text-sm font-bold mb-6">Investment Portfolio</h2>
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-tight mb-8">
          Curated Landscapes for Visionary Development
        </h1>
        <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
          Explore our exclusive collection of pristine land plots, primed for luxury destination transformations. Uncover unparalleled opportunities in high-growth coastal and mountain regions.
        </p>
      </header>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-32">
        {PLOTS.map((plot, i) => (
          <motion.article
            key={plot.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-surface-container-lowest rounded-lg overflow-hidden group cursor-pointer
                        shadow-[0_10px_40px_rgba(38,39,125,0.05)]
                        hover:shadow-[0_20px_60px_rgba(38,39,125,0.08)] transition-all duration-500
                        ${plot.large ? 'col-span-1 md:col-span-2' : ''}
                        ${plot.horizontal ? 'flex flex-col md:flex-row' : ''}`}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${plot.large ? 'h-96' : 'h-64'} ${plot.horizontal ? 'md:h-auto md:w-2/5' : 'w-full'}`}>
              <img
                src={plot.img}
                alt={plot.title}
                className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              <div className="absolute top-6 left-6 flex gap-3">
                {plot.labelBg && (
                  <span className="bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label text-xs font-bold px-3 py-1.5 rounded-DEFAULT tracking-wider uppercase">
                    {plot.labelBg}
                  </span>
                )}
                {plot.badge && (
                  <span className={`${plot.badgeBg} font-label text-xs font-bold px-3 py-1.5 rounded-DEFAULT tracking-wider uppercase`}>
                    {plot.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className={`p-8 ${plot.large ? 'md:p-12' : ''} ${plot.horizontal ? 'md:w-3/5 flex flex-col justify-center' : ''}`}>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-3">{plot.title}</h3>
              <p className="font-label text-on-surface-variant flex items-center gap-2 mb-8">
                <span className="material-symbols-outlined text-tertiary text-lg">location_on</span>
                {plot.location}
              </p>

              {plot.large ? (
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { label: 'Total Area', value: plot.area },
                    { label: 'Price / Sq.Ft', value: plot.perSqFt },
                    { label: 'Total Price', value: plot.total, bold: true },
                  ].map(({ label, value, bold }) => (
                    <div key={label}>
                      <p className="font-label text-xs uppercase tracking-wider text-outline mb-1">{label}</p>
                      <p className={`font-body text-xl ${bold ? 'font-bold text-primary' : 'font-semibold text-on-surface'}`}>{value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Area', value: plot.area },
                    { label: 'Per Sq.Ft', value: plot.perSqFt },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-end border-b border-surface-container-high pb-2">
                      <span className="font-label text-xs uppercase tracking-wider text-outline">{label}</span>
                      <span className="font-body font-semibold text-on-surface">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-end pb-2">
                    <span className="font-label text-xs uppercase tracking-wider text-outline">Total</span>
                    <span className="font-body font-bold text-lg text-primary">{plot.total}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                {plot.tags && (
                  <div className="flex gap-3">
                    {plot.tags.map((tag, idx) => (
                      <span key={tag} className="flex items-center gap-1 text-sm font-label text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-DEFAULT">
                        <span className="material-symbols-outlined text-sm">{plot.tagIcons[idx]}</span> {tag}
                      </span>
                    ))}
                  </div>
                )}
                <button className="text-primary font-label font-bold text-sm tracking-wide
                                   group-hover:text-tertiary transition-colors flex items-center gap-2 ml-auto">
                  View Prospectus
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Request Portfolio Access */}
      <section className="max-w-4xl mx-auto bg-surface-container-low rounded-xl p-10 md:p-16 relative overflow-hidden
                          shadow-[0_20px_60px_rgba(38,39,125,0.05)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Request Portfolio Access</h2>
          <p className="font-body text-on-surface-variant max-w-xl mx-auto">
            Connect with our acquisition specialists for detailed land surveys, zoning documents, and private viewings.
          </p>
        </div>
        <InquiryForm fields={formFields} submitLabel="Initiate Discussion" />
      </section>
    </main>
  );
}
