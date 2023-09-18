import React from "react";
import styles from "../styles/Splash.module.scss";

const Splash = ({font}) => {
  return (
    <header className={styles.splashBackground}>
      <h2 className={styles.splashSmText}>a website about</h2>
      <h1 className={styles.splashBigText}>JESSICA ZHU</h1>
      <a
        className={styles.splashLink}
        href="https://drive.google.com/file/d/12voMgBCQU1D6Ql8ZAzkKjw-Q6wvBjwJm/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        résumé
      </a>
    </header>
  );
};

export default Splash;
