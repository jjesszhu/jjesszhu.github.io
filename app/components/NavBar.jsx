import React, { useState } from "react";
import styles from "../styles/NavBar.module.scss";

const NavBar = ({font}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.navBar} ${font.className}`}>
      <div className={styles.navLinkContainer}>
        <div
          className={styles.burger}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          🍔
        </div>
        <a href="#about" className={`${styles.navLink} ${!isOpen ? styles.hidden : ""}`}>
          about
        </a>
        <a href="#recent" className={`${styles.navLink} ${!isOpen ? styles.hidden : ""}`}>
          recently
        </a>
        <a href="https://drive.google.com/file/d/1x2qeyHDqiv5jb-FCwQbzmhLhNz5uBniM/view?usp=sharing" rel="noreferrer" target="_blank" className={`${styles.navLink} ${!isOpen ? styles.hidden : ""}`}>résumé</a>
      </div>
    </nav>
  );
};

export default NavBar;
