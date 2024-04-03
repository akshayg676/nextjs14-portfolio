import React, { useEffect } from "react";
import { Section } from "./index";
import skillsList from "../public/data/skills.json";
import styles from "../styles/Skills.module.css";

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
            <header>Front-End</header>
            {feskills.fields.map((val) => (
              <div key={val.id} className={styles.list}>
                <label>{val.label}</label>
                <img src={val.imgPath} className={styles.skillIcon} />
              </div>
            ))}
          </div>
          <div className={styles.set}>
            <header>Back-End</header>
            {beskills.fields.map((val) => (
              <div key={val.id} className={styles.list}>
                <label>{val.label}</label>
                <img src={val.imgPath} className={styles.skillIcon} />
              </div>
            ))}
          </div>
          <div className={styles.set}>
            <header>Dev Tools</header>
            {devskills.fields.map((val) => (
              <div key={val.id} className={styles.list}>
                <label>{val.label}</label>
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
