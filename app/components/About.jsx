import React from "react";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h3 className={styles.aboutHeader}>about me</h3>
      <div className={styles.aboutContentContainer}>
        <p className={styles.aboutContent}>
          Hello! I'm Jessica (she/her), and I'm a second year SYDE student @{" "}
          <a
            className={styles.aboutLink}
            href="https://uwaterloo.ca/systems-design-engineering/"
            rel="noreferrer"
            target="_blank"
          >
            uWaterloo
          </a>{" "}
          on my way through 2B <strong>(and seeking winter 2023 jobs!)</strong>.
          <br />
          <br />
          I've previously worked at{" "}
          <a
            className={styles.aboutLink}
            href="https://fordpro.com/en-us/"
            rel="noreferrer"
            target="_blank"
          >
            Ford
          </a>{" "}
          as a front-end engineering intern, and{" "}
          <a
            className={styles.aboutLink}
            href="https://uwaterloo.ca/systems-design-engineering/"
            rel="noreferrer"
            target="_blank"
          >
            OpenText
          </a>{" "}
          as a mobile developer intern. My most recent internship (and current part-time gig)
          is at{" "}
          <a
            className={styles.aboutLink}
            href="https://junip.co"
            rel="noreferrer"
            target="_blank"
          >
            Junip
          </a>{", "}
          where I dabbled in full-stack dev, building a reviews platform. 
          <br />
          <br />
          When I'm not (reluctantly) embracing the UW grind, I'm watching
          basketball, knitting, baking or going to the movies.
        </p>
      </div>
    </section>
  );
};

export default About;
