import React from "react";
import styles from "../styles/About.module.scss";

const About = ({font}) => {
  return (
    <section id="about" className={`${styles.aboutSection}`}>
      <h3 className={`${styles.aboutHeader}`}>ABOUT ME</h3>
      <div className="d-flex justify-content-center col-10">
        <p className={`${styles.aboutContent} ${font.className} col-lg-10 col-md-9 col-sm-12 col-9 text-start mt-4`}>
          Hello! I’m Jessica (she/her), and I’m a third year SYDE student @{" "}
          <a
            className={styles.aboutLink}
            href="https://uwaterloo.ca/systems-design-engineering/"
            rel="noreferrer"
            target="_blank"
          >
            uWaterloo
          </a>{" "}
          on my way through 3A <strong>(and seeking fall 2024 opportunities!)</strong>.
          <br />
          <br />
          I’ve previously worked at{" "}
          <a
            className={styles.aboutLink}
            href="https://fordpro.com/en-us/"
            rel="noreferrer"
            target="_blank"
          >
            Ford
          </a>{" "}
          as a front-end engineering intern, {" "}
          <a
            className={styles.aboutLink}
            href="https://uwaterloo.ca/systems-design-engineering/"
            rel="noreferrer"
            target="_blank"
          >
            OpenText
          </a>{" "}
          as a mobile developer intern, and {" "}
          <a
            className={styles.aboutLink}
            href="https://junip.co"
            rel="noreferrer"
            target="_blank"
          >
            Junip
          </a>{", "}
          where I dabbled in full-stack dev. My most recent internship was at {" "}
          <a
            className={styles.aboutLink}
            href="https://www.thescore.com/"
            rel="noreferrer"
            target="_blank"
          >
            theScore
          </a>{", "}
          where I helped build a real-time sports data ingestion platform.
          <br />
          <br />
          When I’m not (reluctantly) embracing the UW grind, I’m probably watching
          basketball, knitting, baking or going to the movies. If any of that sounds cool to you, let’s chat 🗣️🗣️🗣️
        </p>
      </div>
      <h3 className={`${styles.recentHeader}`}>RECENTLY...</h3>
      <div className="row d-flex justify-content-center col-10 gx-5 gy-4 py-5">
        <img
          src="/galette.jpeg"
          alt="pear galette <3"
          className={`col-lg-2 col-md-5 ${styles.recentImage}`}
          loading="lazy"
        />
        <img
          src="/knit.jpeg"
          alt="scenes from my most recent knitting project"
          className={`col-lg-2 col-md-5 ${styles.recentImage}`}
          loading="lazy"
        />
        <img
          src="/snoop.jpeg"
          alt="puffer snoopy tapestry!"
          className={`col-lg-2 col-md-5 ${styles.recentImage}`}
          loading="lazy"
        />
        <img
          src="/tiff.jpeg"
          alt="views from tiff 2023"
          className={`col-lg-2 col-md-5 ${styles.recentImage}`}
          loading="lazy"
        />
      </div>
      <p className={`${font.className} ${styles.smText}`}>
        <a
          className={styles.extLink}
          href="https://alexandracooks.com/2020/08/08/peach-frangipane-galette/"
          rel="noreferrer"
          target="_blank"
        >pear frangipane galette</a> {" "} // {" "}
        <a
          className={styles.extLink}
          href="https://www.ravelry.com/patterns/library/storm-sweater-3"
          rel="noreferrer"
          target="_blank"
        >storm sweater</a> {" "} // {" "}
        <a
          className={styles.extLink}
          href="https://www.destinymakes.com/patterns/puffer-snoopy"
          rel="noreferrer"
          target="_blank"
        >puffer snoopy tapestry</a> {" "} // {" "}
        <a
          className={styles.extLink}
          href="https://letterboxd.com/jesszhu/tag/tiff23/films/"
          rel="noreferrer"
          target="_blank"
        >tiff 2023</a>
      </p>
    </section>
  );
};

export default About;
