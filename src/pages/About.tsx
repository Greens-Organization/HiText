import { lazy, Suspense } from "react";

const Clock = lazy(() => import("../components/Clock"));

import styles from "../styles/pages/about.module.scss";

const renderLoader = () => <div className={styles.loader}></div>;

export default function About() {
  return (
    <>
      <main className={styles.app}>
        <div className={styles.content}>
          <h1>About HiText</h1>
          <p>
            At some point in your life, you had a quick need to change the
            formatting of a text to lowercase or uppercase, but there was no
            text editor nearby or one that does this function. Exactly this is
            the function of HiText, a simple text editor where you can change
            the formatting of letters, to lowercase, uppercase, only first
            letter uppercase and among other formats.
          </p>
        </div>
        <Suspense fallback={renderLoader()}>
          <Clock />
        </Suspense>
      </main>
    </>
  );
}
