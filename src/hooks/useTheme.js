import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useTheme = () => {
  const { mode, accent } = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    root.setAttribute('data-accent', accent);
  }, [mode, accent]);

  return { mode, accent };
};
