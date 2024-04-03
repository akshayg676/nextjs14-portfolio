import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location,
    });
  };
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.siteLogo}>
            <Link href="/">
              <img className={styles.logo} src="/images/logo.png" alt="" />
            </Link>
          </div>
          {router.asPath === "/" ? (
            <nav>
              <li>
                <a
                  onClick={handleClick}
                  href="#project"
                  className={styles.siteProjects}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#contact"
                  className={styles.contact}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#skills"
                  className={styles.siteAbout}
                >
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
