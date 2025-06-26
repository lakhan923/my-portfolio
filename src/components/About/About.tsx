import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="about me"
          className={styles.aboutImage}
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontendIcon.png")} alt="frontend icon" />

            <div className={styles.aboutText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />

            <div className={styles.aboutText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing fast and optimised back-end
                systems, APIs and working with databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />

            <div className={styles.aboutText}>
              <h3>UI Designer</h3>
              <p>
                I have experience designing intuitive user interfaces, and have
                a solid grasp of modern design principles and best practices.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
