import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations';

const experience = [
  { year: '2024 — Present', role: 'Senior Frontend Engineer', company: 'Company A', description: 'Leading UI architecture and design systems.' },
  { year: '2022 — 2024', role: 'Frontend Developer', company: 'Company B', description: 'Built scalable React apps and improved performance by 40%.' },
  { year: '2020 — 2022', role: 'Junior Developer', company: 'Company C', description: 'Worked on full-stack features with React and Node.' },
];

const Experience = () => (
  <section id="experience">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      style={{ maxWidth: '800px', margin: '0 auto' }}
    >
      <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', textAlign: 'center', marginBottom: '3rem' }}>
        Experience
      </motion.h2>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: '2px', background: 'linear-gradient(180deg, var(--accent), transparent)' }} />

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            style={{ position: 'relative', marginBottom: '2.5rem' }}
          >
            <span
              style={{
                position: 'absolute',
                left: '-2rem',
                top: 8,
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 0 4px var(--bg), 0 0 20px var(--accent)',
                transform: 'translateX(-6px)',
              }}
            />
            <p style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>
              {exp.year}
            </p>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text)', marginBottom: '0.25rem' }}>
              {exp.role} <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>· {exp.company}</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Experience;