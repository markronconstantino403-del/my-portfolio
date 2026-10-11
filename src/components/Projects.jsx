import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations';

const projects = [
  { id: 1, title: 'Project One', description: 'A modern web app with real-time features.', tags: ['React', 'Node.js'], link: '#' },
  { id: 2, title: 'Project Two', description: 'An interactive dashboard for data viz.', tags: ['React', 'D3.js'], link: '#' },
  { id: 3, title: 'Project Three', description: 'Mobile-first e-commerce experience.', tags: ['React', 'Stripe'], link: '#' },
];

const TiltCard = ({ project }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={project.link}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      variants={fadeInUp}
      style={{
        display: 'block',
        padding: '2rem',
        borderRadius: '16px',
        background: 'var(--bg-soft)',
        border: '1px solid var(--border)',
        textDecoration: 'none',
        color: 'inherit',
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        perspective: 1000,
      }}
    >
      <div style={{ transform: 'translateZ(40px)' }}>
        <div style={{ width: '40px', height: '4px', background: 'linear-gradient(90deg, var(--accent), var(--accent-2))', marginBottom: '1.25rem', borderRadius: '2px' }} />
        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text)' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.75rem',
                padding: '0.3rem 0.7rem',
                borderRadius: '50px',
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
                border: '1px solid var(--accent-border)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const Projects = () => (
  <section id="projects">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', textAlign: 'center', marginBottom: '3rem' }}>
        Selected Projects
      </motion.h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p) => (
          <TiltCard key={p.id} project={p} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;