'use client';

import { motion } from 'framer-motion';

/**
 * Wraps any children in a scroll-triggered fade+slide-up reveal.
 * Usage: <Reveal delay={0.2}><YourComponent /></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  y = 32,
  className = '',
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
