import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import {
  SiReact, SiJavascript, SiTypescript, SiNodedotjs,
  SiNextdotjs, SiTailwindcss, SiPython, SiFigma,
} from 'react-icons/si';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from '../components/ui/Button';
import { personalInfo } from '../data';
import avatarImg from '../assets/avatar.png';

const floatingIcons = [
  { Icon: SiReact,       color: '#61DAFB', size: 32, x: '75%', y: '20%', delay: 0    },
  { Icon: SiJavascript,  color: '#F7DF1E', size: 28, x: '85%', y: '45%', delay: 0.5  },
  { Icon: SiTypescript,  color: '#3178C6', size: 26, x: '70%', y: '70%', delay: 1    },
  { Icon: SiNodedotjs,   color: '#339933', size: 30, x: '88%', y: '70%', delay: 1.5  },
  { Icon: SiNextdotjs,   color: '#ffffff', size: 26, x: '60%', y: '85%', delay: 2    },
  { Icon: SiTailwindcss, color: '#06B6D4', size: 28, x: '90%', y: '25%', delay: 0.8  },
  { Icon: SiPython,      color: '#3776AB', size: 24, x: '65%', y: '15%', delay: 1.2  },
  { Icon: SiFigma,       color: '#F24E1E', size: 24, x: '92%', y: '50%', delay: 1.8  },
];

const isMobile = () => window.innerWidth < 768;

/* ── Particle Grid ── */
const ParticleGrid = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let anim;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const count = isMobile() ? 40 : 120;
    const dots = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59,130,246,0.5)'; ctx.fill();
      });
      if (!isMobile()) {
        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y);
              ctx.strokeStyle = `rgba(59,130,246,${0.12 * (1 - dist / 100)})`; ctx.lineWidth = 0.5; ctx.stroke();
            }
          }
        }
      }
      anim = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(anim); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ── Avatar ── */
const Avatar = () => (
  <div style={{ width: '500px', height: '700px', position: 'relative', overflow: 'visible', pointerEvents: 'none' }}>

    {/* Ring — behind figure, NO background fill */}
    <div style={{
      position: 'absolute',
      width: '420px', height: '420px',
      top: '140px',
      left: '50%', transform: 'translateX(-50%)',
      zIndex: 1,
    }}>
      {/* Dashed outer orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', inset: '-36px', borderRadius: '50%',
          border: '1px dashed rgba(139,92,246,0.25)',
        }}
      />
      {/* Glow bloom only — no background */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'transparent',
        boxShadow: '0 0 50px 20px rgba(139,92,246,0.7), 0 0 100px 40px rgba(139,92,246,0.25)',
      }} />
      {/* Neon ring line — strictly transparent center */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'transparent',
        border: '4px solid rgba(200,150,255,1)',
        boxShadow: '0 0 14px 6px rgba(200,150,255,1), 0 0 35px 12px rgba(139,92,246,0.9), 0 0 70px 25px rgba(139,92,246,0.45), inset 0 0 14px 6px rgba(200,150,255,0.2)',
      }} />
    </div>

    {/* Figure — large, anchored from top, overflows ring on all sides */}
    <img
  src={avatarImg}
  alt="Profile"
  style={{
    position: 'absolute',
    width: '700px',
    height: 'auto',
    top: '210px',
    left: '50%',
    transform: 'translate(-50%, -18%) scale(1.25)',
    zIndex: 10,
    pointerEvents: 'none',
    filter: `
      drop-shadow(0 0 28px rgba(139,92,246,0.6))
      drop-shadow(0 15px 50px rgba(139,92,246,0.4))
    `,
  }}
/>
  </div>
);

/* ── Hero ── */
const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const sectionRef = useRef(null);

  useEffect(() => {}, []);

  const handleMouse = (e) => {
    if (isMobile()) return;
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    mouseX.set((e.clientX - cx) / cx * 15);
    mouseY.set((e.clientY - cy) / cy * 15);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="hero"
        onMouseMove={handleMouse}
        className="relative min-h-screen flex items-center overflow-x-hidden grid-bg spotlight"
      >
        <ParticleGrid />

        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'var(--accent-blue)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'var(--accent-purple)' }} />

        {/* Floating icons — desktop only */}
        {floatingIcons.map(({ Icon, color, size, x, y, delay }, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.7, scale: 1 }}
            transition={{ delay: delay + 1, duration: 0.5 }}
            style={{ position: 'absolute', left: x, top: y, x: springX, y: springY }}
            className="hidden lg:block"
          >
            <motion.div animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
              className="glass p-2.5 rounded-xl" style={{ border: `1px solid ${color}33` }}
            >
              <Icon size={size} color={color} />
            </motion.div>
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ pointerEvents: 'none' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-24 pb-16" style={{ overflow: 'visible', pointerEvents: 'none' }}>

            {/* Avatar — mobile only, shown above text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:hidden"
              style={{ pointerEvents: 'auto' }}
            >
              <Avatar />
            </motion.div>

            {/* Left — Text */}
            <div style={{ pointerEvents: 'auto' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-mono text-xs sm:text-sm uppercase tracking-widest neon-text mb-3 sm:mb-4"
              >
                👋 Hello, I'm
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4"
              >
                <span className="text-white">{personalInfo.name.split(' ')[0]}</span>{' '}
                <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl text-slate-400 mb-4 sm:mb-6 h-7 sm:h-8"
              >
                <TypeAnimation
                  sequence={personalInfo.roles.flatMap((r) => [r, 2000])}
                  repeat={Infinity} speed={60}
                  style={{ color: 'var(--accent)' }}
                />
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl"
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <Link to="projects" smooth duration={700} offset={-70}>
                  <Button size="md">View Projects</Button>
                </Link>
                <Link to="contact" smooth duration={700} offset={-70}>
                  <Button variant="outline" size="md">Contact Me</Button>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex items-center gap-4 sm:gap-5"
              >
                {[
                  { icon: FiGithub, href: personalInfo.github },
                  { icon: FiLinkedin, href: personalInfo.linkedin },
                ].map(({ icon: Icon, href }) => (
                  <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ y: -3 }} className="text-slate-500 hover:text-white transition-colors"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
                <div className="h-px w-10 sm:w-12 bg-slate-700" />
                <span className="text-slate-600 text-xs sm:text-sm font-mono">@mannshah</span>
              </motion.div>
            </div>

            {/* Right — Avatar desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ x: springX, y: springY, overflow: 'visible', position: 'relative', zIndex: 20, pointerEvents: 'none' }}
              className="hidden lg:flex justify-center items-center"
            >
              <Avatar />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
