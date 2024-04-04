"use client";

import styles from "../styles/ErrorPage.module.css";
import localFont from "next/font/local";

const Modernist = localFont({
  src: "../../public/font/Sk-Modernist-Mono.otf",
});
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div
          className={`${styles.container} ${Modernist.className}`}
          style={{ cursor: "default" }}
        >
          <p className={styles.title}>
            Uh oh.. <span>Error</span>
          </p>
          <center></center>
        </div>
      </body>
    </html>
  );
}
