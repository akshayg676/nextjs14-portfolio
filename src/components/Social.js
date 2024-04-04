import { Section } from "./index";
import styles from "../styles/Social.module.css";
import { Bigilla } from "@/app/layout";

const Social = () => {
  return (
    <div>
      <Section tag="socials" />
      <section className={styles.social}>
        <div className={styles.socialContainer}>
          <div className={styles.socialId}>
            <a
              className={Bigilla.className}
              href="https://www.linkedin.com/in/akshay-g-700183181/"
              target="_blank"
              referrerpolicy="no-referrer"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className={styles.socialId}>
            <a
              className={Bigilla.className}
              href="https://github.com/akshayg676"
              target="_blank"
              referrerpolicy="no-referrer"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className={styles.socialId}>
            <a
              className={Bigilla.className}
              href="https://codepen.io/akshay-g"
              target="_blank"
              referrerpolicy="no-referrer"
              rel="noopener noreferrer"
            >
              Codepen
            </a>
          </div>
          <div className={styles.socialId}>
            <a
              className={Bigilla.className}
              href="https://t.me/ChingChong5"
              target="_blank"
              referrerpolicy="no-referrer"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
