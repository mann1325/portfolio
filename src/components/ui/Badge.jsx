const Badge = ({ children, color }) => (
  <span
    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border"
    style={{
      color: color || 'var(--accent)',
      borderColor: `${color || 'var(--accent)'}44`,
      backgroundColor: `${color || 'var(--accent)'}11`,
    }}
  >
    {children}
  </span>
);

export default Badge;
