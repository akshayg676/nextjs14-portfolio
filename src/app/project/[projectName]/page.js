import projectData from "../../../constants/projects.json";
import styles from "../../../styles/ProjectDetails.module.css";
import { Bigilla } from "@/app/layout";
import { redirect } from "next/navigation";
const ProjectDetails = ({ params }) => {
  const data = projectData.find((val) => params.projectName === val.slug);
  if (data === undefined) {
    redirect("/");
  }
  return (
    <div className={styles.projectConatiner}>
      <div className={styles.headingContainter}>
        <h1 className={`${styles.projectHeading} ${Bigilla.className}`}>
          {data.title.toUpperCase()}
        </h1>
      </div>
      <video autoPlay loop muted playsInline className={styles.projectVideo}>
        <source
          src={`/images/projectDetails/${data.slug}.mp4`}
          type="video/mp4"
        />
      </video>
      <div className={styles.button}>
        <a
          className={styles.projectButton}
          href={data.viewUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
        <a
          className={styles.projectButton}
          href={data.codeUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
      </div>
      <h3 className={styles.projectDesc}>
        <span className={styles.projectSpan}>Description:</span>
        <br />
        <p className={styles.projectPad}>{data.description}</p>
      </h3>
      <h3 className={styles.projectTools}>
        <span className={styles.projectSpan}>Tools:</span>
        <br />
        <ul className={styles.projectPad}>
          {data.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default ProjectDetails;
