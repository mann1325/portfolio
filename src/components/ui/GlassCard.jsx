import { motion } from 'framer-motion';
import { scaleIn, viewportOpts } from '../../utils/animations';

const GlassCard = ({ children, className = '', custom = 0, hover = true, ...rest }) => (
  <motion.div
    variants={scaleIn}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOpts}
    custom={custom}
    whileHover={hover ? { y: -6, boxShadow: '0 0 25px var(--accent)' } : {}}
    transition={{ duration: 0.3 }}
    className={`glass rounded-2xl p-6 gradient-border transition-all duration-300 ${className}`}
    {...rest}
  >
    {children}
  </motion.div>
);

export default GlassCard;
