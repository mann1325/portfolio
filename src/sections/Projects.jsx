import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import { projects } from '../data';
import { fadeUp, slideLeft, slideRight, viewportOpts } from '../utils/animations';

/* ── Placeholder thumbnail ── */
const ProjectThumb = ({ project }) => (
  <div
    className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden flex items-center justify-center relative"
    style={{
      background: `linear-gradient(135deg, ${project.color}22, ${project.color}55)`,
      border: `1px solid ${project.color}44`,
    }}
  >
    <span
      className="font-display text-7xl font-black opacity-10 select-none"
      style={{ color: project.color }}
    >
      {String(project.id).padStart(2, '0')}
    </span>
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6">
      <span
        className="font-display text-2xl font-bold text-center leading-tight"
        style={{ color: project.color }}
      >
        {project.title}
      </span>
      <span className="text-slate-400 text-sm text-center">{project.subtitle}</span>
    </div>
  </div>
);

/* ── Single timeline row ── */
const ProjectRow = ({ project, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className="relative flex items-center gap-0">

      {/* Left column */}
      <motion.div
        variants={isEven ? slideLeft : slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        custom={0}
        className="w-[calc(50%-2rem)] flex justify-end pr-8"
      >
        {isEven ? (
          <ProjectThumb project={project} />
        ) : (
          <ProjectText project={project} align="right" />
        )}
      </motion.div>

      {/* Center dot */}
      <div className="flex flex-col items-center flex-shrink-0 w-16" style={{ zIndex: 2, position: 'relative' }}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={viewportOpts}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-4 h-4 rounded-full border-4"
          style={{
            borderColor: project.color,
            backgroundColor: '#020817',
            boxShadow: `0 0 12px ${project.color}`,
          }}
        />
      </div>

      {/* Right column */}
      <motion.div
        variants={isEven ? slideRight : slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        custom={0}
        className="w-[calc(50%-2rem)] pl-8"
      >
        {isEven ? (
          <ProjectText project={project} align="left" />
        ) : (
          <ProjectThumb project={project} />
        )}
      </motion.div>
    </div>
  );
};

/* ── Text block ── */
const ProjectText = ({ project, align }) => (
  <div className={align === 'right' ? 'text-right' : 'text-left'}>
    <h3
      className="font-display text-2xl sm:text-3xl font-bold mb-1 leading-tight"
      style={{ color: project.color }}
    >
      {project.title}
    </h3>
    <p className="text-sm mb-3" style={{ color: project.color, opacity: 0.8 }}>
      {project.subtitle}
    </p>
    <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-sm">
      {project.description}
    </p>
    <div className={`flex flex-wrap gap-2 mb-5 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2.5 py-1 rounded-md border font-mono"
          style={{
            color: 'var(--accent)',
            borderColor: 'var(--accent)44',
            background: 'var(--accent)11',
          }}
        >
          #{tag}
        </span>
      ))}
    </div>
    <div className={`flex gap-3 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
      <motion.a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="flex items-center gap-1.5 text-sm font-medium transition-colors"
        style={{ color: project.color }}
      >
        <FiExternalLink size={14} /> Live Demo
      </motion.a>
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
      >
        <FiGithub size={14} /> GitHub
      </motion.a>
    </div>
  </div>
);

const Projects = () => (
  <SectionWrapper id="projects">
    <SectionTitle
      label="Latest Work"
      title="Latest Works"
      subtitle={null}
    />

    {/* Timeline container */}
    <div className="max-w-5xl mx-auto">
      {projects.map((project, i) => (
        <div key={project.id}>
          <ProjectRow project={project} index={i} />
          {/* Connector line between rows */}
          {i < projects.length - 1 && (
            <div className="flex justify-center" style={{ height: '80px' }}>
              <div style={{ width: '2px', background: 'var(--accent)', opacity: 0.4 }} />
            </div>
          )}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
