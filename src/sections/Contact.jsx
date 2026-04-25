import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheck, FiX } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { personalInfo } from '../data';
import { fadeUp, viewportOpts } from '../utils/animations';

const FloatingInput = ({ label, icon: Icon, type = 'text', name, textarea, value, onChange }) => (
  <motion.div
    variants={fadeUp}
    className="relative group"
  >
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[var(--accent)] transition-colors pointer-events-none"
      style={textarea ? { top: '1.2rem', transform: 'none' } : {}}
    >
      <Icon size={16} />
    </div>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={5}
        placeholder={label}
        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 text-sm
          focus:outline-none focus:border-[var(--accent)] focus:bg-white/8 transition-all resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={label}
        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 text-sm
          focus:outline-none focus:border-[var(--accent)] focus:bg-white/8 transition-all"
      />
    )}
    {/* animated focus line */}
    <motion.div
      className="absolute bottom-0 left-0 h-px rounded-full pointer-events-none"
      initial={{ width: 0 }}
      whileFocus={{ width: '100%' }}
      style={{ background: 'var(--accent)' }}
    />
  </motion.div>
);

const StatusBadge = ({ status }) => {
  if (status === 'idle') return null;
  const isOk = status === 'success';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${
        isOk ? 'bg-green-500/10 border border-green-500/30 text-green-400'
             : 'bg-red-500/10 border border-red-500/30 text-red-400'
      }`}
    >
      {isOk ? <FiCheck size={18} /> : <FiX size={18} />}
      {isOk
        ? "Message sent! I'll get back to you within 24 hours."
        : 'Something went wrong. Please try again or email me directly.'}
    </motion.div>
  );
};

const socials = [
  { icon: FiGithub,   href: personalInfo.github,   label: 'GitHub'   },
  { icon: FiLinkedin, href: personalInfo.linkedin,  label: 'LinkedIn' },
  { icon: FiTwitter,  href: personalInfo.twitter,   label: 'Twitter'  },
  { icon: FiMail,     href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [fields, setFields] = useState({ from_name: '', reply_to: '', message: '' });

  const onChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID   || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID  || 'YOUR_TEMPLATE_ID',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY   || 'YOUR_PUBLIC_KEY',
      );
      setStatus('success');
      setFields({ from_name: '', reply_to: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        label="Get In Touch"
        title="Let's Work Together"
        subtitle="Have a project in mind or just want to chat? My inbox is always open."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Left — info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="space-y-8"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold text-white mb-3">Ready to start?</h3>
            <p className="text-slate-400 leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities.
              Whether you need a landing page, full web app, or a technical consultation — let's talk.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-4">
            {[
              { icon: FiMail, label: 'Email', value: personalInfo.email },
              { icon: FiUser, label: 'Location', value: personalInfo.location },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="p-2 rounded-lg" style={{ background: 'var(--accent)15', color: 'var(--accent)' }}>
                  <Icon size={16} />
                </span>
                <div>
                  <div className="text-slate-500 text-xs">{label}</div>
                  <div className="text-white text-sm font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-slate-500 text-sm mb-3">Find me on</p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-3 glass rounded-xl text-slate-400 hover:text-white border border-white/5 hover:border-[var(--accent)] transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          custom={1}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5 gradient-border">
            <FloatingInput label="Your Name" icon={FiUser} name="from_name" value={fields.from_name} onChange={onChange} />
            <FloatingInput label="Email Address" icon={FiMail} type="email" name="reply_to" value={fields.reply_to} onChange={onChange} />
            <FloatingInput label="Your Message" icon={FiMessageSquare} name="message" textarea value={fields.message} onChange={onChange} />

            <AnimatePresence mode="wait">
              <StatusBadge status={status} />
            </AnimatePresence>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                  boxShadow: '0 0 20px var(--accent)',
                }}
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} /> Send Message
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
