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
            <Link href="/" aria-label="Home">
              <img className={styles.logo} src="/images/logo.webp" alt="logo" />
            </Link>
          </div>
          {pathname === "/" ? (
            <ul>
              <li>
                <a
                  href="#project"
                  className={styles.siteProjects}
                  target="_self"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={styles.contact}
                  target="_self"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={styles.siteAbout}
                  target="_self"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  Skills
                </a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link href="/" className={styles.siteAbout}>
                  Home
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {/*-------------------------------------- divider --------------------------------------*/}
      <div className="divider"></div>
    </div>
  );
};

export default Navbar;
