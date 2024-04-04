import Link from "next/link";
import { Section } from "./index";
import styles from "../styles/ProjectList.module.css";
import { Bigilla } from "@/app/layout";
import projectData from "../constants/projects.json";

const ProjectList = () => {
  return (
    <div id="project">
      <Section tag="selected projects" />
      {projectData.map((val) => (
        <section key={val.id} className={styles.project} data-aos="zoom-in">
          <div className={styles.projectContainer}>
            <Link
              className={`${styles.project_link} ${Bigilla.className}`}
              href={`/project/${val.slug}`}
            >
              / {val.title}
            </Link>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.project_image}
            >
              <source
                src={`/images/projectList/${val.slug}.mp4`}
                type="video/mp4"
              />
            </video>
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
