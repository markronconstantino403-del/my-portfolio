import { motion } from 'framer-motion';
import { profile } from '../data';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        padding: '2.5rem 2rem',
        textAlign: 'center',
        color: 'var(--text-dim)',
        fontSize: '0.9rem',
        borderTop: '1px solid var(--border)',
      }}
    >
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with React, Vite &
        Framer Motion
      </p>
    </motion.footer>
  );
};

export default Footer;