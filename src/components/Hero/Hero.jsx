import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Welcome to My Portfolio </h1>
        <p className={styles.description}>
          I'm a 26-year-old, passionate web developer with a knack for creating
          beautiful and functional websites. With experience in HTML, CSS, PHP,
          JavaScript, Database, wordpress, React, NodeJS and various frameworks.
          I bring creativity and technical expertise to every project. Feel free
          to explore my portfolio and reach out if you'd like to learn more!
        </p>
        <div className={styles.buttons}>
          <a
            href="https://github.com/lakhan923/Laiba_Cv"
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
