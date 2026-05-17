import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Reusable contact / inquiry form
 * Props:
 *   fields      – array of { id, label, type, placeholder, options[] }
 *   submitLabel – button label string
 *   onSuccess   – callback after successful submit
 */

// Micro-copy map — keyed by field id (Phase 4A)
const MICRO_COPY = {
  name:    "We'll address you personally throughout your stay.",
  email:   'Your confirmation and itinerary will be sent here.',
  phone:   'For your personal advisor to reach you — never shared.',
  message: 'Tell us what matters most: a view, a date, a feeling.',
};

// Focus ring applied to all interactive elements (Phase 4B)
const focusRing = 'focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-cream';

export default function InquiryForm({ fields = [], submitLabel = 'Submit Inquiry', onSuccess }) {
  const [values, setValues]   = useState({});
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);

  // ── Validation (unchanged) ────────────────────────────────────────────
  const validate = () => {
    const errs = {};
    fields.forEach(({ id, label, type, required }) => {
      if (required && !values[id]?.trim()) {
        errs[id] = `${label} is required`;
      }
      if (type === 'email' && values[id] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[id])) {
        errs[id] = 'Please enter a valid email address';
      }
    });
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate async submit (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      onSuccess?.();
    }, 1200);
  };

  // ── Rich success overlay (Phase 4A) ──────────────────────────────────
  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center py-16 px-8 text-center gap-6
                   bg-mp-forest/95 backdrop-blur-sm rounded-xl min-h-[320px]"
      >
        {/* CheckCircle icon — from lucide-react if available, else Material Symbols */}
        <span
          className="material-symbols-outlined text-mp-gold"
          style={{ fontSize: '3rem', fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h3 className="font-display font-light text-mp-cream text-3xl">
          We'll be in touch.
        </h3>
        <p className="font-sans text-mp-stone text-base max-w-sm leading-relaxed">
          Your personal advisor will contact you within 24 hours. In the meantime, explore the property.
        </p>
        <Link
          to="/resorts"
          className="inline-flex items-center gap-2 font-sans font-semibold text-mp-gold text-sm
                     border-b border-mp-gold/40 hover:border-mp-gold pb-1 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-mp-gold focus:ring-offset-2 focus:ring-offset-mp-forest"
        >
          Explore Properties
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </motion.div>
    );
  }

  // ── Form fields ───────────────────────────────────────────────────────
  const baseInputClass = (errorMsg) =>
    `w-full bg-mp-stone border-0 border-b-2 px-4 py-3 rounded-t-sm
     font-sans text-mp-ink transition-colors duration-300
     ${focusRing}
     ${errorMsg ? 'border-red-500' : 'border-mp-stone-dark focus:border-mp-gold'}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className={`grid gap-8 ${fields.filter((f) => f.half).length ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {fields.map((field) => {
          const { id, label, type, placeholder, options, required, half } = field;
          const errorMsg  = errors[id];
          const microText = MICRO_COPY[id];

          if (type === 'select') {
            return (
              <div key={id} className={`space-y-1 ${!half ? 'md:col-span-2' : ''}`}>
                <label htmlFor={id} className="font-sans text-sm text-mp-stone-dark font-medium">
                  {label}{required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <div className="relative">
                  <select
                    id={id}
                    name={id}
                    value={values[id] || ''}
                    onChange={(e) => { setValues({ ...values, [id]: e.target.value }); setErrors({ ...errors, [id]: '' }); }}
                    className={baseInputClass(errorMsg) + ' appearance-none'}
                  >
                    <option value="" disabled>Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-3 text-mp-stone-dark pointer-events-none">
                    expand_more
                  </span>
                </div>
                {microText && <p className="mt-1 text-xs text-mp-stone-dark">{microText}</p>}
                {errorMsg  && <p className="font-sans text-xs text-red-500">{errorMsg}</p>}
              </div>
            );
          }

          if (type === 'textarea') {
            return (
              <div key={id} className={`relative space-y-1 ${!half ? 'md:col-span-2' : ''}`}>
                <label htmlFor={id} className="font-sans text-sm text-mp-stone-dark font-medium">
                  {label}{required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <textarea
                  id={id}
                  name={id}
                  rows={4}
                  placeholder={placeholder}
                  value={values[id] || ''}
                  onChange={(e) => { setValues({ ...values, [id]: e.target.value }); setErrors({ ...errors, [id]: '' }); }}
                  className={baseInputClass(errorMsg) + ' resize-none'}
                />
                {microText && <p className="mt-1 text-xs text-mp-stone-dark">{microText}</p>}
                {errorMsg  && <p className="font-sans text-xs text-red-500">{errorMsg}</p>}
              </div>
            );
          }

          return (
            <div key={id} className={`relative space-y-1 ${!half ? 'md:col-span-2' : ''}`}>
              <label htmlFor={id} className="font-sans text-sm text-mp-stone-dark font-medium">
                {label}{required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={values[id] || ''}
                onChange={(e) => { setValues({ ...values, [id]: e.target.value }); setErrors({ ...errors, [id]: '' }); }}
                className={baseInputClass(errorMsg)}
              />
              {microText && <p className="mt-1 text-xs text-mp-stone-dark">{microText}</p>}
              {errorMsg  && <p className="font-sans text-xs text-red-500">{errorMsg}</p>}
            </div>
          );
        })}
      </div>

      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center gap-2 px-10 py-4 bg-mp-forest text-mp-cream
                     font-sans font-semibold rounded-DEFAULT text-sm tracking-wide
                     hover:bg-mp-forest-light transition-colors duration-300
                     shadow-mp-ambient disabled:opacity-60 disabled:cursor-not-allowed
                     ${focusRing}`}
        >
          {loading ? (
            /* Phase 4A: branded loading state — pulsing text instead of spinner */
            <AnimatePresence mode="wait">
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="animate-pulse text-mp-gold font-sans font-semibold tracking-widest text-sm uppercase"
              >
                Finding your advisor...
              </motion.span>
            </AnimatePresence>
          ) : (
            <>
              {submitLabel}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
