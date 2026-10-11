import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations';
import { profile } from '../data';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    background: 'var(--bg-soft)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit',
  };

  return (
    <section id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'var(--text)',
          }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
          }}
        >
          Have a project in mind or just want to say hi? Drop me a message.
        </motion.p>

        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
              color: '#fff',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {sent ? 'Message Sent ✓' : 'Send Message'}
          </motion.button>
        </motion.form>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={`mailto:${profile.email}`}
            style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;