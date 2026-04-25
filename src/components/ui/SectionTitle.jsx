import { motion } from 'framer-motion';

const SectionTitle = ({ label, title, subtitle, className = '' }) => (
  <div className={`text-center mb-16 ${className}`}>
    {label && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-mono text-sm tracking-widest uppercase neon-text mb-3 block"
      >
        {label}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-400 max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-4 h-0.5 w-24 mx-auto rounded-full"
      style={{ background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }}
    />
  </div>
);

export default SectionTitle;
