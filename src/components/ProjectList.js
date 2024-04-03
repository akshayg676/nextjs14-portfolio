import Link from "next/link";
import { Section } from "./index";
import styles from "../styles/ProjectList.module.css";
import { Bigilla } from "@/app/layout";

const ProjectList = ({ data }) => {
  return (
    <div id="project">
      <Section tag="selected projects" />
      {data.map((val) => (
        <section key={val.id} className={styles.project} data-aos="zoom-in">
          <div className={styles.projectContainer}>
            <Link
              className={`${styles.project_link} ${Bigilla.className}`}
              href={`/project/${val.slug}`}
            >
              / {val.title}
            </Link>
            <img
              src={`/images/${val.slug}.gif`}
              alt="img"
              className={styles.project_image}
            />
            <div className={styles.marquee}>
              <div className={styles.marquee__inner}>
                <span className={Bigilla.className}>{val.title}</span>
                <span className={Bigilla.className}>{val.title}</span>
                <span className={Bigilla.className}>{val.title}</span>
                <span className={Bigilla.className}>{val.title}</span>
                <span className={Bigilla.className}>{val.title}</span>
                <span className={Bigilla.className}>{val.title}</span>
                <span className={Bigilla.className}>{val.title}</span>
                <span className={Bigilla.className}>{val.title}</span>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="whitespace" />
    </div>
  );
};

export default ProjectList;
