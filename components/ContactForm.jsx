'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Field config ── */
const BUDGET_OPTIONS = [
  'Under ₹50k / month',
  '₹50k – ₹1L / month',
  '₹1L – ₹3L / month',
  '₹3L+ / month',
  'Not sure yet',
];

/* ── Tiny reusable field wrapper ── */
function Field({ label, error, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-display text-[12px] font-bold text-white/50 tracking-[0.08em] uppercase">
        {label}
        {required && <span className="text-forge-amber ml-1">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[11px] text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Shared input class ── */
const inputCls =
  'w-full bg-white/[0.04] border border-forge-border rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-forge-amber/50 focus:bg-white/[0.06] transition-all duration-200';

/* ── Success screen shown after submit ── */
function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center text-center py-16 px-8"
    >
      {/* Check icon */}
      <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h3 className="font-display text-[22px] font-extrabold text-white mb-3">
        We've got it.
      </h3>
      <p className="text-[14px] text-white/40 max-w-sm leading-relaxed">
        Your brief is saved. We'll review it and send you a one-page plan within
        one business day — no calls required to get that far.
      </p>
      <div className="mt-8 inline-flex items-center gap-2 text-[12px] text-forge-amber/70 font-display font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-forge-amber animate-pulse" />
        Expect a reply within 24 hours
      </div>
    </motion.div>
  );
}

/* ── Main form ── */
export default function ContactForm() {
  const [values, setValues] = useState({
    name: '', email: '', company: '', role: '', message: '', budget: '',
  });
  const [errors,      setErrors]      = useState({});
  const [loading,     setLoading]     = useState(false);
  const [submitted,   setSubmitted]   = useState(false);
  const [serverError, setServerError] = useState('');

  /* Update a single field */
  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    // Clear inline error as user types
    if (errors[key]) setErrors((err) => ({ ...err, [key]: '' }));
  };

  /* Client-side validate before hitting the API */
  function validate() {
    const e = {};
    if (!values.name.trim())    e.name    = 'Name is required';
    if (!values.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
                                e.email   = 'Enter a valid email';
    if (!values.message.trim()) e.message = 'Tell us what you want to automate';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError('');

    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res  = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(values),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else if (data.errors) {
        setErrors(data.errors);
      } else {
        setServerError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return <SuccessScreen />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

      {/* Row 1 — Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full name" required error={errors.name}>
          <input
            type="text"
            className={inputCls}
            placeholder="Arjun Mehta"
            value={values.name}
            onChange={set('name')}
          />
        </Field>
        <Field label="Work email" required error={errors.email}>
          <input
            type="email"
            className={inputCls}
            placeholder="arjun@company.com"
            value={values.email}
            onChange={set('email')}
          />
        </Field>
      </div>

      {/* Row 2 — Company + Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company" error={errors.company}>
          <input
            type="text"
            className={inputCls}
            placeholder="Acme Corp"
            value={values.company}
            onChange={set('company')}
          />
        </Field>
        <Field label="Your role" error={errors.role}>
          <input
            type="text"
            className={inputCls}
            placeholder="CEO / Head of Ops / Founder"
            value={values.role}
            onChange={set('role')}
          />
        </Field>
      </div>

      {/* Row 3 — What to automate */}
      <Field label="What do you want to automate?" required error={errors.message}>
        <textarea
          rows={4}
          className={`${inputCls} resize-none leading-relaxed`}
          placeholder="e.g. We get 200+ leads a week in our inbox and the team spends 3 hours a day triaging them manually. We want an agent that qualifies, scores, and routes them automatically."
          value={values.message}
          onChange={set('message')}
        />
      </Field>

      {/* Row 4 — Budget */}
      <Field label="Monthly budget" error={errors.budget}>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setValues((v) => ({ ...v, budget: v.budget === opt ? '' : opt }))}
              className={`px-4 py-2 rounded-lg text-[12px] font-display font-bold tracking-wide border transition-all duration-150 ${
                values.budget === opt
                  ? 'bg-forge-amber/15 border-forge-amber/40 text-forge-amber'
                  : 'bg-white/[0.03] border-forge-border text-white/35 hover:text-white/60 hover:border-white/15'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </Field>

      {/* Server-level error */}
      <AnimatePresence>
        {serverError && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[13px] text-red-400 bg-red-400/8 border border-red-400/20 rounded-lg px-4 py-3"
          >
            {serverError}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full sm:w-auto sm:self-start inline-flex items-center justify-center gap-2.5 bg-forge-amber text-forge-dark px-8 py-3.5 rounded-xl text-[14px] font-extrabold font-display tracking-wide hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(245,166,35,0.25)] transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>Send Brief <span className="text-base">→</span></>
        )}
      </button>

      <p className="text-[11px] text-white/20 mt-1">
        No sales calls. No newsletter. Just a reply with a plan — usually within 24 hours.
      </p>
    </form>
  );
}
