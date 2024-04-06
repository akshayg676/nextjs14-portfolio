import { Section } from "./index";
import styles from "../styles/About.module.css";
import { Modernist } from "@/app/layout";

const About = () => {
  return (
    <div>
      <Section tag="about" />
      {/*------------------------------------ about ------------------------------------*/}
      <section className={styles.about} data-aos="fade-up">
        <div className={styles.aboutContainer}>
          <p>
            Greetings, Earthlings! 👽 It’s me your friendly neighborhood web
            developer slash cyber guardian. I’m all about blending creativity
            with digital protection.
          </p>
          <p>
            From implementing elegant designs to robust security measures, I’m
            committed to ensuring that every aspect of our web projects is
            optimized for both beauty and protection. Let’s team up to build
            amazing web experiences that users can trust and enjoy!
          </p>
          <a
            href="https://drive.google.com/file/d/1QhINfPBq4tkx1BwBI-IJm9KQARF_wkWb/view?usp=sharing"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
          >
            <button className={`${styles.resumeBtn} ${Modernist.className}`}>
              View Resume
            </button>
          </a>
        </div>
      </section>
      <div className="whitespace" />
    </div>
  );
};

export default About;
