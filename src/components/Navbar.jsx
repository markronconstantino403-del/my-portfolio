import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        zIndex: 1000,
      }}
    >
      <a
        href="#hero"
        style={{
          fontWeight: 700,
          fontSize: '1.2rem',
          textDecoration: 'none',
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        &lt;Dev /&gt;
      </a>

      <div className="desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              textDecoration: 'none',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {link.name}
          </a>
        ))}
        <ThemeToggle theme={theme} toggle={toggleTheme} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="mobile-theme">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          <span style={{ width: '24px', height: '2px', background: 'var(--text)', transition: '0.3s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ width: '24px', height: '2px', background: 'var(--text)', opacity: open ? 0 : 1, transition: '0.3s' }} />
          <span style={{ width: '24px', height: '2px', background: 'var(--text)', transition: '0.3s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(12px)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 2rem',
              gap: '1rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '1rem' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .mobile-theme { display: none; }
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-theme { display: block; }
        }
      `}</style>
    </motion.nav>
  );
};

const ThemeToggle = ({ theme, toggle }) => (
  <motion.button
    onClick={toggle}
    whileTap={{ scale: 0.9 }}
    aria-label="Toggle theme"
    style={{
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      color: 'var(--text)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.1rem',
    }}
  >
    <motion.span
      key={theme}
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </motion.span>
  </motion.button>
);

export default Navbar;