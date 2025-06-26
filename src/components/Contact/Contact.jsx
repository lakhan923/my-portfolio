import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>
          I'd love to hear from you! Whether you have a question or just want to
          say hi — feel free to reach out.
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message..."
              required
            />
          </label>
          <button type="submit" className={styles.contactBtn}>Send Message</button>
        </form>
      </div>
    </section>
  );
};
