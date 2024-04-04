import {
  About,
  Contact,
  HeroSection,
  ProjectList,
  Skills,
  Social,
} from "@/components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <HeroSection />
        <About />
        <ProjectList />
        <Skills />
        <Contact />
        <Social />
      </div>
    </div>
  );
}
