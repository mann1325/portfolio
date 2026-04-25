import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { personalInfo } from '../../data';

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const Footer = () => (
  <footer className="relative border-t border-white/5 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & rights */}
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-xl" style={{ color: 'var(--accent)' }}>{'<MS />'}</span>
          <p className="text-slate-500 text-sm mt-1">
            © {new Date().getFullYear()} Mann Shah. Built with React & ❤️
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: 'var(--accent)' }}
              transition={{ duration: 0.2 }}
              className="text-slate-500 hover:text-white transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <Link to="hero" smooth duration={800}>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px var(--accent)' }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full border border-[var(--accent)] text-[var(--accent)] transition-all"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
