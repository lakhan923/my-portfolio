import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  const aboutItems = [
    {
      title: "Frontend Developer",
      text: "Experienced in building responsive, user-friendly, and optimized websites using modern frontend technologies including React, HTML, CSS, SCSS, and jQuery.",
      icon: "frontendIcon.png",
      alt: "Frontend icon",
    },
    {
      title: "Backend Developer",
      text: "Skilled in developing fast, scalable backend systems, REST APIs, and managing databases (MySQL, SQLite). Experienced with Java, Node.js, and Docker.",
      icon: "serverIcon.png",
      alt: "Backend icon",
    },
    {
      title: "UI Designer",
      text: "Experienced in designing intuitive user interfaces with a solid understanding of modern design principles and best practices.",
      icon: "uiIcon.png",
      alt: "UI icon",
    },
  ];

  return (
    <section className={styles.container} id="about">
      {/* Heading with Logo */}
      <div className={styles.headingContainer}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About me logo"
          className={styles.headingLogo}
        />
        <h2 className={styles.title}>About Me</h2>
      </div>

      <p className={styles.description}>
        I am a 27-year-old ICT graduate and full-stack developer passionate
        about building clean, functional, and visually appealing web
        applications. I have practical experience from internships and academic
        projects and enjoy solving technical challenges. I combine creativity
        and technical expertise to deliver impactful solutions.
      </p>

      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {aboutItems.map((item) => (
            <li className={styles.aboutItem} key={item.title}>
              <img
                src={getImageUrl(`about/${item.icon}`)}
                alt={item.alt}
                className={styles.icon}
              />
              <div className={styles.aboutText}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
