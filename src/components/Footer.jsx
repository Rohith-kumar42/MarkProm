import { Link } from 'react-router-dom';

const investmentLinks = [
  { label: 'Resort Assets', to: '/resorts' },
  { label: 'Land Plots',    to: '/land' },
  { label: 'New Projects',  to: '/contact' },
];

const corporateLinks = [
  { label: 'Sustainability',      to: '#' },
  { label: 'Governance',          to: '#' },
  { label: 'Investor Relations',  to: '#' },
  { label: 'Privacy',             to: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-slate-100 w-full py-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link
            to="/"
            className="text-xl font-headline font-semibold text-primary mb-5 block uppercase tracking-widest"
          >
            Markprom
          </Link>
          <p className="font-body text-sm text-slate-500 mb-6 leading-relaxed">
            Curating high-yield, architecturally significant investments in prime locations.
          </p>
          <div className="flex gap-4">
            <a href="https://markprom.com" target="_blank" rel="noreferrer"
               className="text-slate-400 hover:text-primary transition-colors duration-300">
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-body text-xs font-bold text-primary uppercase tracking-wider mb-6">
              Investments
            </h4>
            <ul className="space-y-4">
              {investmentLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-body text-sm text-slate-500 uppercase tracking-tighter
                               hover:text-tertiary-fixed-dim transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs font-bold text-primary uppercase tracking-wider mb-6">
              Corporate
            </h4>
            <ul className="space-y-4">
              {corporateLinks.map(({ label, to }) => (
                <li key={label}>
                  <a
                    href={to}
                    className="font-body text-sm text-slate-500 uppercase tracking-tighter
                               hover:text-tertiary-fixed-dim transition-colors duration-300"
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
          <h4 className="font-body text-xs font-bold text-primary uppercase tracking-wider mb-6">
            Contact
          </h4>
          <p className="font-body text-sm text-slate-500 mb-1">admin@markprom.com</p>
          <p className="font-body text-sm text-slate-500 mb-1">73393 36300</p>
          <p className="font-body text-sm text-slate-500 leading-relaxed mt-4">
            1933, 2nd Floor, Karthikeya Stores Upstairs,<br />
            Trichy Road, CBE - 641 045
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-sm tracking-wide text-slate-500">
          © 2024 Markprom. Architectural Integrity in Real Estate.
        </p>
      </div>
    </footer>
  );
}
