import { Link } from 'react-router-dom';

const investmentLinks = [
  { label: 'Resort Assets', to: '/resorts' },
  { label: 'Land Plots',    to: '/land' },
  { label: 'New Projects',  to: '/contact' },
];

const corporateLinks = [
  { label: 'Sustainability',     to: '#' },
  { label: 'Governance',         to: '#' },
  { label: 'Investor Relations', to: '#' },
  { label: 'Privacy',            to: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-mp-ink w-full py-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link
            to="/"
            className="text-xl font-display font-light text-mp-gold mb-5 block uppercase tracking-widest
                       focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-ink"
          >
            Markprom
          </Link>
          {/* COPY: original — "Curating high-yield, architecturally significant investments..." — flagged for human review */}
          <p className="font-sans text-sm text-mp-stone-dark mb-6 leading-relaxed">
            Resort properties in the hills above Coimbatore. Built to last.
          </p>
          <div className="flex gap-4">
            <a href="https://markprom.com" target="_blank" rel="noreferrer"
               className="text-mp-stone-dark hover:text-mp-gold transition-colors duration-300
                          focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-ink">
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-sans text-xs font-bold text-mp-gold uppercase tracking-wider mb-6">
              Investments
            </h4>
            <ul className="space-y-4">
              {investmentLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-sans text-sm text-mp-stone-dark uppercase tracking-tighter
                               hover:text-mp-gold transition-colors duration-300
                               focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-bold text-mp-gold uppercase tracking-wider mb-6">
              Corporate
            </h4>
            <ul className="space-y-4">
              {corporateLinks.map(({ label, to }) => (
                <li key={label}>
                  <a
                    href={to}
                    className="font-sans text-sm text-mp-stone-dark uppercase tracking-tighter
                               hover:text-mp-gold transition-colors duration-300
                               focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-1">
          <h4 className="font-sans text-xs font-bold text-mp-gold uppercase tracking-wider mb-6">
            Contact
          </h4>
          <p className="font-sans text-sm text-mp-stone-dark mb-1">admin@markprom.com</p>
          <p className="font-sans text-sm text-mp-stone-dark mb-1">73393 36300</p>
          <p className="font-sans text-sm text-mp-stone-dark leading-relaxed mt-4">
            1933, 2nd Floor, Karthikeya Stores Upstairs,<br />
            Trichy Road, CBE - 641 045
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-mp-forest/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm tracking-wide text-mp-stone-dark">
          {/* COPY: original — "Architectural Integrity in Real Estate" — flagged for human review */}
          © 2024 Markprom. The hills above Coimbatore.
        </p>
      </div>
    </footer>
  );
}
