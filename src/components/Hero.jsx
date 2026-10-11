import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations';
import { profile } from '../data';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '6rem',
        background:
          'radial-gradient(ellipse at top, var(--accent-soft), transparent 60%)',
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInUp}
          style={{
            color: 'var(--accent)',
            fontSize: '1rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, var(--text), var(--text-muted))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
            color: 'var(--text-muted)',
            fontWeight: 400,
            marginBottom: '2rem',
          }}
        >
          {profile.role}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            fontSize: '1.05rem',
          }}
        >
          I build interactive, accessible, and performant web experiences with
          React and modern tooling.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;