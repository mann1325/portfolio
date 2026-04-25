import { motion } from 'framer-motion';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import { skills } from '../data';
import { fadeUp, staggerContainer, viewportOpts } from '../utils/animations';

const SkillBar = ({ level, color }) => (
  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={viewportOpts}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="h-full rounded-full"
      style={{ background: `linear-gradient(90deg, var(--accent), ${color})` }}
    />
  </div>
);

const SkillItem = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ scale: 1.02, x: 4 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 group cursor-default"
    >
      <motion.div
        whileHover={{ rotate: 15, scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="p-2 rounded-lg flex-shrink-0 transition-all"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}33` }}
      >
        <Icon size={20} color={item.color} />
      </motion.div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            {item.name}
          </span>
          <span className="text-xs font-mono" style={{ color: 'var(--accent)' }}>{item.level}%</span>
        </div>
        <SkillBar level={item.level} color={item.color} />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }) => {
  const CatIcon = category.icon;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      custom={index}
      className="glass rounded-2xl p-6 gradient-border transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_25px_var(--accent40)]"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-2.5 rounded-xl"
          style={{ background: `${category.color}15`, border: `1px solid ${category.color}33` }}
        >
          <CatIcon size={22} color={category.color} />
        </div>
        <h3 className="font-display text-lg font-semibold text-white">{category.category}</h3>
      </div>

      {/* Skills list */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        className="flex flex-col gap-4"
      >
        {category.items.map((item, i) => (
          <SkillItem key={item.name} item={item} index={i} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => (
  <SectionWrapper id="skills" className="relative">
    {/* bg decoration */}
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

    <SectionTitle
      label="Explore My Stack"
      title="Skills & Technologies"
      subtitle="Technologies I work with daily to build fast, scalable, and beautiful applications."
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((cat, i) => (
        <SkillCategory key={cat.category} category={cat} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
