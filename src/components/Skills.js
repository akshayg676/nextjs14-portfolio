import skillsList from "../constants/skills.json";
import styles from "../styles/Skills.module.css";
import { Bigilla } from "@/app/layout";
import Section from "./Section";

const Skills = () => {
  const feskills = skillsList.find((label) => label.name === "frontend");
  const websecskills = skillsList.find((label) => label.name === "websecurity");
  const devskills = skillsList.find((label) => label.name === "devtools");
  return (
    <div id="skills">
      <Section tag="skills" />
      <section className={styles.skill} data-aos="zoom-in">
        <div className={styles.skillContainer}>
          <div className={styles.set}>
            <header className={Bigilla.className}>Front-End</header>
            {feskills.fields.map((val) => (
              <div key={val.id} className={styles.list}>
                <label>{val.label}</label>
                <img
                  src={val.imgPath}
                  className={styles.skillIcon}
                  alt="fe-icon"
                />
              </div>
            ))}
          </div>
          <div className={styles.set}>
            <header className={Bigilla.className}>Web-Sec</header>
            {websecskills.fields.map((val) => (
              <div key={val.id} className={styles.list}>
                <label>{val.label}</label>
                <img
                  src={val.imgPath}
                  className={styles.skillIcon}
                  alt="ws-icon"
                />
              </div>
            ))}
          </div>
          <div className={styles.set}>
            <header className={Bigilla.className}>Dev Tools</header>
            {devskills.fields.map((val) => (
              <div key={val.id} className={styles.list}>
                <label>{val.label}</label>
                <img
                  src={val.imgPath}
                  className={styles.skillIcon}
                  alt="dv-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
