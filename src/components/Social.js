import React from "react";
import { Section } from "./index";
import styles from "../styles/Social.module.css";

const Social = () => {
  return (
    <div>
      <Section tag="socials" />
      <section className={styles.social}>
        <div className={styles.socialContainer}>
          <div className={styles.socialId}>
            <a
              href="https://www.linkedin.com/in/akshay-g-700183181/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className={styles.socialId}>
            <a
              href="https://github.com/akshayg676"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className={styles.socialId}>
            <a
              href="https://codepen.io/akshay-g"
              target="_blank"
              rel="noreferrer"
            >
              Codepen
            </a>
          </div>
          <div className={styles.socialId}>
            <a href="https://t.me/ChingChong5" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
