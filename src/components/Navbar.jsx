import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/resorts', label: 'Resorts' },
  { to: '/land',    label: 'Land Plots' },
  { to: '/about',   label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_20px_50px_rgba(38,39,125,0.07)]'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-headline font-bold text-primary tracking-widest uppercase
                     hover:opacity-80 transition-opacity duration-300"
        >
          Markprom
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-body text-sm transition-all duration-300 pb-0.5 ${
                  isActive
                    ? 'text-primary font-semibold border-b-2 border-tertiary-fixed-dim'
                    : 'text-slate-500 hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-3
                     bg-gradient-to-r from-primary to-primary-container text-white
                     font-body font-medium rounded-DEFAULT text-sm
                     hover:opacity-90 transition-opacity duration-300
                     shadow-[0_10px_30px_rgba(38,39,125,0.2)]"
        >
          Invest Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-surface-container-high"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-body text-base ${
                      isActive ? 'text-primary font-semibold' : 'text-slate-500'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3
                           bg-gradient-to-r from-primary to-primary-container text-white
                           font-body font-medium rounded-DEFAULT text-sm"
              >
                Invest Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
