import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
      setCount(current);
    }, 90);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0a',
        zIndex: 20000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2.5rem',
        color: '#fff',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: '0.85rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6366f1' }}
      >
        Portfolio
      </motion.p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 1 }}
        >
          {count}%
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ fontSize: '0.85rem', letterSpacing: '0.2em', color: '#64748b' }}
        >
          LOADING
        </motion.p>
      </div>

      {/* Progress bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.1)' }}>
        <motion.div
          animate={{ width: `${count}%` }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;