"use client";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.siteLogo}>
            <Link href="/">
              <img className={styles.logo} src="/images/logo.png" alt="" />
            </Link>
          </div>
          {pathname === "/" ? (
            <nav>
              <li>
                <a href="#project" className={styles.siteProjects}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.contact}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#skills" className={styles.siteAbout}>
                  Skills
                </a>
              </li>
            </nav>
          ) : (
            <nav>
              <li>
                <Link href="/" className={styles.siteAbout}>
                  Home
                </Link>
              </li>
            </nav>
          )}
        </div>
      </div>
      {/*-------------------------------------- divider --------------------------------------*/}
      <div className="divider"></div>
    </div>
  );
};

export default Navbar;
