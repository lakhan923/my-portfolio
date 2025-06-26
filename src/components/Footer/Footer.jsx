import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <img
          src={getImageUrl("nav/logo.png")}
          alt="Logo"
          className={styles.logo}
        />
        <p className={styles.copy}>
          © {new Date().getFullYear()} LK | Small Code, Big Impact. All rights reserved
        </p>
      </div>

      <nav className={styles.navLinks}>
        <a href="/">
          <img
            src={getImageUrl("footer/home.png")}
            alt="Home icon"
            className={styles.navIcon}
          />
        </a>
        <a href="#about">
          <img
            src={getImageUrl("footer/about.png")}
            alt="About icon"
            className={styles.navIcon}
          />{" "}
        </a>
        <a href="#projects">
          <img
            src={getImageUrl("footer/projects.png")}
            alt="Projects icon"
            className={styles.navIcon}
          />
        </a>
        <a href="#contact">
          <img
            src={getImageUrl("footer/contact.png")}
            alt="Contact icon"
            className={styles.navIcon}
          />
        </a>
      </nav>

      <div className={styles.socialLinks}>
        <a
          href="mailto:laaaibah@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/laiba-khan-a0484a27b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/lakhan923"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
        </a>
        <a
          href="https://laiba-khan.itch.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={getImageUrl("contact/itchio.png")} alt="Itch.io" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={getImageUrl("contact/youtube.png")} alt="Itch.io" />
        </a>
      </div>
    </footer>
  );
};
