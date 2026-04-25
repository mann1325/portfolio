import { motion } from 'framer-motion';

const variants = {
  primary:  'bg-[var(--accent)] hover:brightness-110 text-white shadow-[0_0_20px_var(--accent)] hover:shadow-[0_0_35px_var(--accent)]',
  outline:  'border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white',
  ghost:    'text-slate-300 hover:text-white hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, href, ...rest }) => {
  const cls = `inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer
    ${variants[variant]} ${sizes[size]} ${className}`;

  const el = (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
      onClick={onClick}
      {...rest}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {el}
      </a>
    );
  }
  return el;
};

export default Button;
