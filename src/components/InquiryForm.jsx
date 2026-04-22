import { useState } from 'react';

/**
 * Reusable contact / inquiry form
 * Props:
 *   fields   – array of { id, label, type, placeholder, options[] }
 *   onSuccess – callback after successful submit
 */
export default function InquiryForm({ fields = [], submitLabel = 'Submit Inquiry', onSuccess }) {
  const [values, setValues]   = useState({});
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);

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

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h3 className="font-headline text-2xl text-primary font-bold">Inquiry Sent</h3>
        <p className="font-body text-on-surface-variant">
          Thank you. Our advisors will reach out to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className={`grid gap-8 ${fields.filter(f => f.half).length ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {fields.map((field) => {
          const { id, label, type, placeholder, options, required, half } = field;
          const errorMsg = errors[id];

          if (type === 'select') {
            return (
              <div key={id} className={`space-y-1 ${!half ? 'md:col-span-2' : ''}`}>
                <label htmlFor={id} className="font-label text-sm text-on-surface-variant font-medium">
                  {label}{required && <span className="text-error ml-1">*</span>}
                </label>
                <div className="relative">
                  <select
                    id={id}
                    value={values[id] || ''}
                    onChange={(e) => { setValues({ ...values, [id]: e.target.value }); setErrors({ ...errors, [id]: '' }); }}
                    className={`w-full bg-surface-container-low border-0 border-b-2 px-4 py-3 rounded-t-sm
                               focus:ring-0 focus:outline-none appearance-none font-body text-on-surface
                               transition-colors duration-300 ${errorMsg ? 'border-error' : 'border-surface-container-high focus:border-tertiary'}`}
                  >
                    <option value="" disabled>Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-3 text-secondary pointer-events-none">
                    expand_more
                  </span>
                </div>
                {errorMsg && <p className="font-label text-xs text-error">{errorMsg}</p>}
              </div>
            );
          }

          if (type === 'textarea') {
            return (
              <div key={id} className={`relative space-y-1 ${!half ? 'md:col-span-2' : ''}`}>
                <label htmlFor={id} className="font-label text-sm text-on-surface-variant font-medium">
                  {label}{required && <span className="text-error ml-1">*</span>}
                </label>
                <textarea
                  id={id}
                  rows={4}
                  placeholder={placeholder}
                  value={values[id] || ''}
                  onChange={(e) => { setValues({ ...values, [id]: e.target.value }); setErrors({ ...errors, [id]: '' }); }}
                  className={`w-full bg-surface-container-low border-0 border-b-2 px-4 py-3 rounded-t-sm
                             focus:ring-0 focus:outline-none font-body text-on-surface resize-none
                             transition-colors duration-300 ${errorMsg ? 'border-error' : 'border-surface-container-high focus:border-tertiary'}`}
                />
                {errorMsg && <p className="font-label text-xs text-error">{errorMsg}</p>}
              </div>
            );
          }

          return (
            <div key={id} className={`relative space-y-1 ${!half ? 'md:col-span-2' : ''}`}>
              <label htmlFor={id} className="font-label text-sm text-on-surface-variant font-medium">
                {label}{required && <span className="text-error ml-1">*</span>}
              </label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={values[id] || ''}
                onChange={(e) => { setValues({ ...values, [id]: e.target.value }); setErrors({ ...errors, [id]: '' }); }}
                className={`w-full bg-surface-container-low border-0 border-b-2 px-4 py-3 rounded-t-sm
                           focus:ring-0 focus:outline-none font-body text-on-surface
                           transition-colors duration-300 ${errorMsg ? 'border-error' : 'border-surface-container-high focus:border-tertiary'}`}
              />
              {errorMsg && <p className="font-label text-xs text-error">{errorMsg}</p>}
            </div>
          );
        })}
      </div>

      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-primary-container
                     text-white font-label font-medium rounded-DEFAULT text-sm tracking-wide
                     hover:opacity-90 hover:scale-[1.02] transition-all duration-300
                     shadow-[0_10px_20px_rgba(38,39,125,0.15)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
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
