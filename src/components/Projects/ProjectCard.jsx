import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, technologyStack },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.descriptionList}>
        {description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
      {technologyStack && (
        <div className={styles.techStack}>
          <h4>Tech Stack:</h4>
          <ul>
            {Object.entries(technologyStack).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
