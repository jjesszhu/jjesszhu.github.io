import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h2 className={styles.callout}>CONNECT WITH ME!</h2>
      <div className={styles.iconContainer}>
        
      </div>
      <p className={styles.creditSubheading}>
        designed + developed with inspiration from wes anderson's
        <span className={styles.movieTitle}> THE ROYAL TENENBAUMS</span>
        <br /> © jessica zhu, 2023
      </p>
    </footer>
  );
};

export default Footer;
