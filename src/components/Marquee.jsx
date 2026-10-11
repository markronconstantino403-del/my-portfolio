import { motion } from 'framer-motion';

const items = [
  'React', 'Vite', 'TypeScript', 'Framer Motion', 'Node.js',
  'Tailwind', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS',
];

const Marquee = () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '2rem 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        maxWidth: '100%',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '3rem', width: 'max-content' }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-dim)',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '3rem',
            }}
          >
            {item}
            <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;