import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

/* ICON IMPORTS */
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGit,
  FaLinux,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJquery,
  SiPhp,
  SiMysql,
  SiDocker,
  SiJenkins,
  SiDotnet,
  SiWordpress,
} from "react-icons/si";

export const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Tools"];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  /* ICON MAPPING */
  const iconMap = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    SCSS: <FaCss3Alt />, 
    JavaScript: <SiJavascript />,
    React: <FaReact />,
    jQuery: <SiJquery />,
    "C#": <SiDotnet />, 
    Java: <FaJava />,
    Python: <FaPython />,
    PHP: <SiPhp />,
    SQL: <SiMysql />, 
    "REST APIs": <SiPhp />, 
    "Windows Forms": <SiDotnet />, 
    MySQL: <SiMysql />,
    SQLite: <SiMysql />, 
    MariaDB: <SiMysql />,
    "Visual Studio": <SiDotnet />,
    "VS Code": <FaReact />, 
    Git: <FaGit />,
    GitHub: <FaGit />, 
    Bitbucket: <FaGit />, 
    Docker: <SiDocker />,
    "Docker Compose": <SiDocker />,
    Jenkins: <SiJenkins />,
    WordPress: <SiWordpress />,
    Linux: <FaLinux />,
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>

      {/* Skill Filters */}
      <div className={styles.skillFilters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterButton} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Section */}
      <div className={styles.skills}>
        {filteredSkills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              {iconMap[skill.title]}
            </div>

            <p className={styles.skillTitle}>{skill.title}</p>

            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <ul className={styles.history}>
        {history.map((item, id) => (
          <li key={id} className={styles.historyItem}>
            <div className={styles.timelineDot}></div>

            <img
              src={getImageUrl(item.imageSrc)}
              alt={`${item.organisation} Logo`}
              className={styles.historyLogo}
            />

            <div className={styles.historyItemDetails}>
              <h3>{`${item.role}, ${item.organisation}`}</h3>

              <p className={styles.dates}>
                {`${item.startDate} - ${item.endDate}`}
              </p>

              <ul className={styles.experienceList}>
                {item.experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
