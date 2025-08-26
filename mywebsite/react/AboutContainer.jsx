import React from 'react';
import styles from './AboutContainer.module.css';

const AboutContainer = () => (
  <main className={styles.aboutContainer}>
    <section className={styles.intro + ' animate-fadeInUp'}>
      <h1>About Me</h1>
      <p>
        Hi! I’m <strong>Mark Jomar Sj. Calmateo</strong>, a freelance <span className={styles.highlight}>Layout Artist / Programmer</span> based in the Philippines. I specialize in crafting engaging visuals and building functional digital experiences that combine creativity and innovation.
      </p>
      <p>
        In the design world, I’ve worked on various client projects including simple logo designs, custom t-shirt prints, sublimation artworks, and school uniform layouts. As a programmer, I’ve developed VB.NET mini-games, WordPress websites (like e-commerce stores), and other practical software solutions tailored to client needs.
      </p>
    </section>
    <section className={styles.goal + ' animate-fadeInUp'}>
      <h2>My Goal</h2>
      <p>
        My goal is to grow as a multidisciplinary creative professional—skilled in both layout design and software development. I aim to take on meaningful projects that solve real problems, improve user experience, and inspire others through innovation in digital design and tech.
      </p>
    </section>
    <section className={styles.skills + ' animate-fadeInUp'}>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        <div><i className="fas fa-code"></i> HTML, CSS, JavaScript, PHP, VB.NET</div>
        <div><i className="fas fa-paint-brush"></i> Photoshop, Illustrator, Canva, Figma</div>
        <div><i className="fas fa-database"></i> MySQL, XAMPP</div>
        <div><i className="fas fa-laptop-code"></i> Responsive Web Design</div>
      </div>
    </section>
    <section className={styles.education + ' animate-fadeInUp'}>
      <h2>Education</h2>
      <ul>
        <li><strong>BS in Information Technology</strong> – Our Lady Of Lourdes College Foundation (2025 - Present)</li>
        <li><strong>Senior High School (ABM Strand)</strong> – Labo National High School (2021 - 2022)</li>
        <li><strong>Junior High School (ICT Strand)</strong> – Labo National High School (2016 - 2020)</li>
        <li><strong>Computer Literacy Program</strong> – C.A.B Industrial Technological Institute (2018)</li>
        <li><strong>Elementary School</strong> – Regino A. Yet Elementary School (2009 - 2015)</li>
      </ul>
    </section>
  </main>
);

export default AboutContainer;
