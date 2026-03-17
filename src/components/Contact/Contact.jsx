import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else setStatus(`Error: ${data.error}`);
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.subtitle}>
        I'd love to hear from you! Reach out below.
      </p>
      {status && <p style={{ color: "#ffb300" }}>{status}</p>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className={styles.contactBtn}>
          Send Message
        </button>
      </form>
    </section>
  );
};
