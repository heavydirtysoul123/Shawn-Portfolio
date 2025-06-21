import React from 'react';
import './pages.css';
import { motion } from 'framer-motion';
import profilePic from '../profile/profilepic2.png';
import heroBg from '../assets/bg.png';

const CardComponent = ({ image }) => (
  <div className="card artistic-card">
    <img src={image} alt="Shawn's profile" className="card-image" />
  </div>
);

export default function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-artistic-container">
          {/* LEFT - Greeting */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Hi there,</h2>
            <h1>I'm <span className="highlight">Shawn</span></h1>
            <p>Crafting modern web experiences with creativity and code.</p>
          </motion.div>

          {/* RIGHT - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CardComponent image={profilePic} />
          </motion.div>
        </div>
      </section>

      <main className="page-container">
        <div className="info-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        ></div>
<div className="button-row">
  <a href="/portfolio" className="button interactive-button">
    🚀 Explore My Work
  </a>
  <a href="/resume.pdf" className="button interactive-button" download>
    📄 Download Resume
  </a>
</div>

       
        <h2 className="page-title" style={{ marginTop: '2rem' }}>What I Do</h2>
        <p className="page-text">
          I specialize in front-end development, responsive UI/UX, and full-stack web applications.
          Using modern tools like React, Laravel, and Tailwind CSS, I turn ideas into clean, efficient, and user-friendly experiences.
        </p>
      </main>
    </>
  );
}
