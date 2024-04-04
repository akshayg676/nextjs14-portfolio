import Link from "next/link";
import styles from "../styles/ErrorPage.module.css";
import { Modernist } from "./layout";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Oops ! <span>404</span>
      </p>
      <code className={styles.code}>
        <span>this_page</span>.<em>not_found</em> = true;
      </code>
      <code className={styles.code}>
        <span>if</span> (<b>you_spelt_it_wrong</b>) {"{"}
        <span>try_again()</span>;{"}"}
      </code>
      <code className={styles.code}>
        <span>
          else if (<b>we_screwed_up</b>)
        </span>
        &nbsp;
        {"{"}
        <em>alert</em>(<i>{`"We're really sorry about that."`}</i>);&nbsp;
        <span>window</span>.<em>location</em> = home;{"}"}
      </code>
      <center>
        <Link href="/" className={styles.redirect}>
          <button className={`${styles.returnBtn} ${Modernist.className}`}>
            Go Home
          </button>
        </Link>
      </center>
    </div>
  );
};

export default NotFound;
