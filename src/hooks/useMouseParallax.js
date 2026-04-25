import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const useMouseParallax = (strength = 20) => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 60, damping: 20 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      rawX.set(((e.clientX - cx) / cx) * strength);
      rawY.set(((e.clientY - cy) / cy) * strength);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [rawX, rawY, strength]);

  return { x, y };
};
