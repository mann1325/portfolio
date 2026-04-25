import { motion } from 'framer-motion';
import { fadeUp, viewportOpts } from '../../utils/animations';

const SectionWrapper = ({ children, id, className = '' }) => (
  <section id={id} className={`section-pad relative ${className}`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      variants={fadeUp}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
