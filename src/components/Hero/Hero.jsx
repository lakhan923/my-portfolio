import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Welcome to My Portfolio </h1>
        <p className={styles.description}>
          I’m a 27-year-old web developer passionate about building clean,
          functional, and visually appealing websites. I have hands-on
          experience with{" "}
          <strong>
            HTML, CSS, PHP, JavaScript, React, Node.js, WordPress, databases,
          </strong>{" "}
          and modern frameworks. I combine creativity with technical expertise
          to deliver impactful solutions. Explore my portfolio and feel free to
          get in touch!
        </p>
        <div className={styles.buttons}>
          <a
            href="https://github.com/lakhan923/eng_version_CV"
            className={styles.resumeBtn}
          >
            Resume
          </a>
          <a href="mailto:laaaibah@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
