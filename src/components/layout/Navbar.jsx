import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useDispatch } from 'react-redux';
import { toggleMode, setAccent } from '../../store/themeSlice';
import { useTheme } from '../../hooks/useTheme';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Insights', to: 'faq' },
  { label: 'Contact', to: 'contact' },
];

const accents = ['blue', 'purple', 'cyan'];
const accentColors = { blue: '#3b82f6', purple: '#a855f7', cyan: '#06b6d4' };

const Navbar = () => {
  const dispatch = useDispatch();
  const { mode, accent } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="font-display font-bold text-xl"
            style={{ color: 'var(--accent)' }}
          >
            {'<MS />'}
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth duration={600}
                offset={-70}
                spy
                activeClass="active-nav"
                className="relative text-sm font-medium text-slate-400 hover:text-white cursor-pointer transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Accent picker */}
            <div className="hidden sm:flex items-center gap-1.5">
              {accents.map((a) => (
                <motion.button
                  key={a}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => dispatch(setAccent(a))}
                  className="w-3.5 h-3.5 rounded-full border-2 transition-all"
                  style={{
                    backgroundColor: accentColors[a],
                    borderColor: accent === a ? '#fff' : 'transparent',
                  }}
                  aria-label={`Set ${a} accent`}
                />
              ))}
            </div>

            {/* Dark/light toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(toggleMode())}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mode}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mode === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white transition-all"
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 glass border-t border-white/5 md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer transition-all font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-4 pt-3 border-t border-white/5 mt-2">
                <span className="text-slate-500 text-sm mr-1">Accent:</span>
                {accents.map((a) => (
                  <button
                    key={a}
                    onClick={() => dispatch(setAccent(a))}
                    className="w-4 h-4 rounded-full border-2 transition-all"
                    style={{ backgroundColor: accentColors[a], borderColor: accent === a ? '#fff' : 'transparent' }}
                  />
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
