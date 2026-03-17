import React, { useState } from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projectsGrid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.projectCard}>
            {/* Project Image */}
            {project.imageSrc ? (
              <img
                src={getImageUrl(project.imageSrc)}
                alt={project.title}
                className={styles.projectImage}
                onClick={() => setSelectedImage(getImageUrl(project.imageSrc))}
              />
            ) : (
              <div className={styles.projectPlaceholder}>
                No Image Available
              </div>
            )}

            {/* Project Details */}
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>

              {/* Description */}
              <ul className={styles.descriptionList}>
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Technology Stack */}
              {project.technologyStack && (
                <div className={styles.techStack}>
                  {Object.entries(project.technologyStack).map(
                    ([key, value]) => (
                      <p key={key}>
                        <strong>{key}:</strong> {value}
                      </p>
                    ),
                  )}
                </div>
              )}

              {/* Skills */}
              {project.skills && (
                <div className={styles.skillsTags}>
                  {project.skills.map((skill, i) => (
                    <span key={i} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Live Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className={styles.imageModal}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className={styles.modalImage}
          />
        </div>
      )}
    </section>
  );
};
