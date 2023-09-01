import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h2 className={styles.callout}>CONNECT WITH ME!</h2>
      <div className={styles.iconContainer}>
        
      </div>
      <p className={`${styles.creditSubheading} text-center`}>
        designed + developed with inspiration from wes anderson's
        <span className={styles.movieTitle}>
          <br/>
          <strong>THE ROYAL TENENBAUMS</strong>
        </span>
        <br/>
        with splash from paul thomas anderson's
        <span className={styles.movieTitle}>
          <br/>
          Phantom Thread
        </span>
        <br /> © jessica zhu, 2023
      </p>
    </footer>
  );
};

export default Footer;
