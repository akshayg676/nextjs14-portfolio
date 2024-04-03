import React from "react";
import styles from "../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <div>
      {/* -------------------------------------- header -------------------------------------- */}
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <h1>
            <span>A</span>
            <span>k</span>
            <span>s</span>
            <span>h</span>
            <span>a</span>
            <span>y</span>
            &emsp;
            <span>G</span>
            <br />
            <span>F</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            &emsp;
            <span>E</span>
            <span>n</span>
            <span>d</span>
            <br />
            {/* <span>&ensp;</span> */}
            <span style={{ marginLeft: "5%" }}>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            {/* Akshay G<br /> */}
            {/* Front End
            <br />
            &nbsp;Developer */}
          </h1>
        </div>
      </div>

      {/* -------------------------------------- hero-image -------------------------------------- */}
      <div className={styles.heroImage}>
        <div className={styles.heroImageContainer}>
          <img src="/images/stripy-relax.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
