import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = ({font}) => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <p className={`${styles.creditSubheading} text-sm-start text-center ${font.className}`}>
          theme inspired by
          <br/>
          wes anderson’s{" "}
          <span className={styles.tenenbaums}>
            <strong>THE ROYAL TENENBAUMS</strong>
          </span>
          {" "}(Buena Vista Pictures, 2001)
          <br />
        </p>
      </div>
      <div className={`d-flex flex-column align-items-sm-end align-items-center ${font.className}`}>
        <a
          className={styles.link}
          href="mailto:jessica.zhu@uwaterloo.ca"
          rel="noreferrer"
          target="_blank"
        >email</a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/jessicajlzhu/"
          rel="noreferrer"
          target="_blank"
        >linkedin</a>
        <a
          className={styles.link}
          href="https://github.com/jjesszhu"
          rel="noreferrer"
          target="_blank"
        >github</a>
        <a
          className={styles.link}
          href="https://letterboxd.com/jesszhu"
          rel="noreferrer"
          target="_blank"
        >letterboxd</a>
        <p className={styles.copyright}>© jessica zhu, 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
