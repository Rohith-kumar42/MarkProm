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
  const [scrolled, setScrolled]     = useState(false);
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
          ? 'bg-mp-cream/90 backdrop-blur-xl shadow-mp-ambient-sm'
          : 'bg-mp-cream/70 backdrop-blur-md'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-display font-light text-mp-forest tracking-widest uppercase
                     hover:opacity-80 transition-opacity duration-300
                     focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream"
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
                `font-sans text-sm transition-all duration-300 pb-0.5
                 focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream ${
                  isActive
                    ? 'text-mp-forest font-semibold border-b-2 border-mp-gold'
                    : 'text-mp-stone-dark hover:text-mp-forest'
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
                     bg-mp-forest text-mp-cream
                     font-sans font-medium rounded-DEFAULT text-sm
                     hover:bg-mp-forest-light transition-colors duration-300
                     shadow-mp-ambient-sm
                     focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream"
        >
          Invest Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-mp-forest focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream"
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
            className="md:hidden overflow-hidden bg-mp-cream border-t border-mp-stone"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-sans text-base focus:outline-none focus:ring-2 focus:ring-mp-gold ${
                      isActive ? 'text-mp-forest font-semibold' : 'text-mp-stone-dark'
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
                           bg-mp-forest text-mp-cream
                           font-sans font-medium rounded-DEFAULT text-sm
                           focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream"
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
