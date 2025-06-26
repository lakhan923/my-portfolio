import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <div className={styles.App}>
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
        <source src="/assets/App/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
