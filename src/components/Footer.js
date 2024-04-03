import React from "react";
import styles from "../styles/Navbar.module.css";

const Footer = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className={styles.footer}>
        <div className={styles.navbar}>
          <div className={styles.navbarContainer}>
            <div className={styles.siteCopyright}>
              © 2022 | All rights reserved
            </div>
            <div className={styles.siteCoordinate}>9.049659,76.852799</div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default Footer;
