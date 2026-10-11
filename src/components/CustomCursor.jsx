import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    window.addEventListener('mousemove', move);

    const attach = () => {
      document
        .querySelectorAll('a, button, [data-cursor-hover]')
        .forEach((el) => {
          el.addEventListener('mouseenter', enter);
          el.addEventListener('mouseleave', leave);
        });
    };

    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, [x, y]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid var(--accent)',
          pointerEvents: 'none',
          zIndex: 10000,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: hovered ? 1.8 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
      {/* Inner dot */}
      <motion.div
        style={{
          x,
          y,
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 10001,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: hovered ? 0 : 1 }}
      />
    </>
  );
};

export default CustomCursor;