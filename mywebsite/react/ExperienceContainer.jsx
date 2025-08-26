import React from 'react';
import styles from './AboutContainer.module.css';

const ExperienceContainer = () => (
  <main className={styles.aboutContainer}>
    <div className="floating-shape shape1"></div>
    <div className="floating-shape shape2"></div>
    <section className={styles.intro + ' animate-fadeInUp'}>
      <h1>Experience</h1>
      <p>
        Over the years, I have worked on a variety of creative and technical projects, collaborating with clients and teams to deliver impactful results. My experience spans both design and programming, allowing me to bridge the gap between visual aesthetics and functional solutions.
      </p>
    </section>
    <section className={styles.goal + ' animate-fadeInUp'}>
      <h2>Work Experience</h2>
      <ul>
        <li><strong>Freelance Layout Artist & Programmer</strong> – Designed logos, t-shirt prints, and digital artworks for various clients. Developed custom software solutions and WordPress websites tailored to client needs. <span className={styles.highlight}>(2021 - Present)</span></li>
        <li><strong>Student Developer</strong> – Created VB.NET mini-games and academic projects, focusing on user experience and innovative features. <span className={styles.highlight}>(2023 - Present)</span></li>
      </ul>
    </section>
    <section className={styles.skills + ' animate-fadeInUp'}>
      <h2>Notable Projects</h2>
      <div className={styles.skillsGrid}>
        <div><i className="fas fa-store"></i> Custom E-commerce Website (WordPress)</div>
        <div><i className="fas fa-tshirt"></i> T-shirt & Sublimation Artworks</div>
        <div><i className="fas fa-gamepad"></i> Mini-Games in VB.NET</div>
        <div><i className="fas fa-laptop-code"></i> Practical Software Solutions</div>
      </div>
    </section>
    <section className={styles.education + ' animate-fadeInUp'}>
      <h2>Professional Growth</h2>
      <ul>
        <li>Continuously learning new design and programming tools to stay ahead in the industry.</li>
        <li>Collaborating with clients and teams to deliver creative solutions.</li>
        <li>Adapting to new challenges and technologies in both design and development.</li>
      </ul>
    </section>
  </main>
);

export default ExperienceContainer;
