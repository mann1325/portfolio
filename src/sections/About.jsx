import { motion } from 'framer-motion';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import { personalInfo } from '../data';
import { fadeUp, slideLeft, slideRight, viewportOpts } from '../utils/animations';

/* ── Typed code block ── */
const CodeBlock = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOpts}
    className="rounded-2xl overflow-hidden"
    style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)' }}
  >
    {/* Window bar */}
    <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#161b22' }}>
      <span className="w-3 h-3 rounded-full bg-red-500" />
      <span className="w-3 h-3 rounded-full bg-yellow-400" />
      <span className="w-3 h-3 rounded-full bg-green-500" />
    </div>

    {/* Code */}
    <pre className="p-5 text-sm leading-7 font-mono overflow-x-auto">
      <span style={{ color: '#c792ea' }}>const </span>
      <span style={{ color: '#82aaff' }}>developer</span>
      <span style={{ color: '#89ddff' }}> = </span>
      <span style={{ color: '#89ddff' }}>{'{'}</span>
      {'\n'}
      {'  '}
      <span style={{ color: '#f07178' }}>firstName</span>
      <span style={{ color: '#89ddff' }}>: </span>
      <span style={{ color: '#c3e88d' }}>"Mann"</span>
      <span style={{ color: '#89ddff' }}>,</span>
      {'\n'}
      {'  '}
      <span style={{ color: '#f07178' }}>lastName</span>
      <span style={{ color: '#89ddff' }}>: </span>
      <span style={{ color: '#c3e88d' }}>"Shah"</span>
      <span style={{ color: '#89ddff' }}>,</span>
      {'\n'}
      {'  '}
      <span style={{ color: '#f07178' }}>passion</span>
      <span style={{ color: '#89ddff' }}>: </span>
      <span style={{ color: '#c3e88d' }}>"Coding & Problem Solving"</span>
      <span style={{ color: '#89ddff' }}>,</span>
      {'\n'}
      {'  '}
      <span style={{ color: '#f07178' }}>hobby</span>
      <span style={{ color: '#89ddff' }}>.</span>
      <span style={{ color: '#82aaff' }}>repeat</span>
      <span style={{ color: '#89ddff' }}> = () =&gt; {'{'}</span>
      {'\n'}
      {'    '}
      <span style={{ color: '#546e7a' }}>// eat();</span>
      {'\n'}
      {'    '}
      <span style={{ color: '#546e7a' }}>// sleep();</span>
      {'\n'}
      {'    '}
      <span style={{ color: '#546e7a' }}>// code();</span>
      {'\n'}
      {'    '}
      <span style={{ color: '#546e7a' }}>// repeat();</span>
      {'\n'}
      {'  '}
      <span style={{ color: '#89ddff' }}>{'}'}</span>
      {'\n'}
      <span style={{ color: '#89ddff' }}>{'}'}</span>
    </pre>
  </motion.div>
);

/* ── Profile card (left) ── */
const ProfileCard = () => (
  <motion.div
    variants={slideLeft}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOpts}
    className="rounded-2xl p-7 flex flex-col justify-between h-full"
    style={{
      background: 'rgba(15,23,42,0.7)',
      border: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(16px)',
    }}
  >
    {/* Avatar row */}
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', color: '#fff' }}
      >
        MS
      </div>
      <div>
        <div className="text-white font-semibold text-sm">Mann Shah</div>
        <div className="text-slate-400 text-xs">Full-Stack Developer</div>
      </div>
    </div>

    {/* Headline */}
    <div className="mb-6">
      <p className="font-bold text-2xl sm:text-3xl leading-tight mb-1" style={{ color: 'var(--accent)' }}>
        Passionate
      </p>
      <p className="font-bold text-2xl sm:text-3xl text-white leading-tight">
        Developer and<br />Lifelong Learner
      </p>
    </div>

    {/* Bio */}
    <p className="text-slate-400 text-sm leading-relaxed">
      I adapt to different time zones to make sure communication is smooth, no matter where you're located.
    </p>

    {/* Stats */}
    <div className="flex gap-6 mt-8">
      {[
        { value: '5+', label: 'Projects' },
        { value: '10+', label: 'Technologies' },
        { value: '∞', label: 'Curiosity' },
      ].map(({ value, label }) => (
        <div key={label}>
          <div className="font-display text-2xl font-bold" style={{ color: 'var(--accent)' }}>{value}</div>
          <div className="text-slate-500 text-xs mt-0.5">{label}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

/* ── What Drives Me (right) ── */
const DriveCard = () => (
  <motion.div
    variants={slideRight}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOpts}
    className="rounded-2xl p-7 flex flex-col justify-center h-full"
    style={{
      background: 'rgba(15,23,42,0.7)',
      border: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(16px)',
    }}
  >
    <h3 className="font-display text-3xl font-bold mb-5 leading-tight">
      <span className="text-white">What </span>
      <span style={{ color: 'var(--accent)' }}>Drives Me</span>
    </h3>
    <p className="text-slate-300 text-sm leading-relaxed mb-4">
      I am passionate about the intersection of design and development. I believe the best digital
      experiences are created through a deep understanding of users and a strong commitment to innovation.
    </p>
    <p className="text-slate-300 text-sm leading-relaxed">
      Whether I am working on a simple landing page or a complex web application, I bring
      precision, creativity, and a user-first mindset to every project.
    </p>

    {/* Accent line */}
    <div
      className="mt-8 h-0.5 w-16 rounded-full"
      style={{ background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))' }}
    />
  </motion.div>
);

const About = () => (
  <SectionWrapper id="about">
    <SectionTitle
      label="Get To Know Me"
      title="About Me"
      subtitle={null}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
      <ProfileCard />
      <CodeBlock />
      <DriveCard />
    </div>
  </SectionWrapper>
);

export default About;
