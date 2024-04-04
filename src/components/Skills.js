import skillsList from "../constants/skills.json";
import styles from "../styles/Skills.module.css";
import { Bigilla } from "@/app/layout";
import Section from "./Section";

const Skills = () => {
  const feskills = skillsList.find((label) => label.name === "frontend");
  const beskills = skillsList.find((label) => label.name === "backend");
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
                <label className={Bigilla.className}>{val.label}</label>
                <img src={val.imgPath} className={styles.skillIcon} />
              </div>
            ))}
          </div>
          <div className={styles.set}>
            <header className={Bigilla.className}>Back-End</header>
            {beskills.fields.map((val) => (
              <div key={val.id} className={styles.list}>
                <label className={Bigilla.className}>{val.label}</label>
                <img src={val.imgPath} className={styles.skillIcon} />
              </div>
            ))}
          </div>
          <div className={styles.set}>
            <header className={Bigilla.className}>Dev Tools</header>
            {devskills.fields.map((val) => (
              <div key={val.id} className={styles.list}>
                <label className={Bigilla.className}>{val.label}</label>
                <img src={val.imgPath} className={styles.skillIcon} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
