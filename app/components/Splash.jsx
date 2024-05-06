import React from "react";
import styles from "../styles/Splash.module.scss";

const Splash = ({font}) => {
  return (
    <header className={styles.splashBackground}>
      <h2 className={styles.splashSmText}>a website about</h2>
      <h1 className={styles.splashBigText}>JESSICA ZHU</h1>
    </header>
  );
};

export default Splash;
