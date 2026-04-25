import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import {
  SiReact, SiJavascript, SiTypescript, SiNodedotjs,
  SiNextdotjs, SiTailwindcss, SiPython, SiFigma,
} from 'react-icons/si';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Button from '../components/ui/Button';
import { personalInfo } from '../data';

/* ── Floating icon config ── */
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

/* ── Particle Grid ── */
const ParticleGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let anim;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59,130,246,0.5)';
        ctx.fill();
      });

      // draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      anim = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(anim);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ── Avatar ── */
const Avatar = () => (
  <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto">
    {/* Animated ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0 rounded-full border-2 border-dashed opacity-30"
      style={{ borderColor: 'var(--accent)' }}
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-2 rounded-full border border-dashed opacity-20"
      style={{ borderColor: 'var(--accent-purple)' }}
    />
    {/* Glow */}
    <div
      className="absolute inset-4 rounded-full"
      style={{ boxShadow: '0 0 40px var(--accent), 0 0 80px var(--accent)' }}
    />
    {/* Initials */}
    <div
      className="absolute inset-4 rounded-full glass flex items-center justify-center"
      style={{ border: '2px solid var(--accent)' }}
    >
      <span className="font-display text-5xl font-bold gradient-text select-none">MS</span>
    </div>
  </div>
);

/* ── Hero ── */
const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouse = (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX.set((e.clientX - cx) / cx * 15);
    mouseY.set((e.clientY - cy) / cy * 15);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center overflow-hidden grid-bg spotlight"
    >
      <ParticleGrid />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--accent-blue)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--accent-purple)' }} />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, size, x, y, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
          style={{ position: 'absolute', left: x, top: y, x: springX, y: springY }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
            className="glass p-2.5 rounded-xl"
            style={{ border: `1px solid ${color}33` }}
          >
            <Icon size={size} color={color} />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-24 pb-16">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-sm uppercase tracking-widest neon-text mb-4"
            >
              👋 Hello, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <span className="text-white">{personalInfo.name.split(' ')[0]}</span>{' '}
              <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl text-slate-400 mb-6 h-8"
            >
              <TypeAnimation
                sequence={personalInfo.roles.flatMap((r) => [r, 2000])}
                repeat={Infinity}
                speed={60}
                style={{ color: 'var(--accent)' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="projects" smooth duration={700} offset={-70}>
                <Button size="lg">View Projects</Button>
              </Link>
              <Link to="contact" smooth duration={700} offset={-70}>
                <Button variant="outline" size="lg">Contact Me</Button>
              </Link>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center gap-5"
            >
              {[
                { icon: FiGithub,  href: personalInfo.github },
                { icon: FiLinkedin, href: personalInfo.linkedin },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: 'var(--accent)' }}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
              <div className="h-px w-12 bg-slate-700" />
              <span className="text-slate-600 text-sm font-mono">@mannshah</span>
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: springX, y: springY }}
            className="flex justify-center lg:justify-end"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
