import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations';
import { profile } from '../data';

const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js',
  'Vite', 'Framer Motion', 'CSS', 'Git',
];

const About = () => {
  return (
    <section id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{ display: 'grid', gap: '3rem', gridTemplateColumns: '1fr' }}
      >
        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            textAlign: 'center',
            color: 'var(--text)',
          }}
        >
          About {profile.name}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}
        >
          {profile.bio}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '1rem',
          }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ y: -3 }}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '50px',
                background: 'var(--accent-soft)',
                border: '1px solid var(--accent-border)',
                color: 'var(--accent)',
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;