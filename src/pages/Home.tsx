import { lazy, Suspense } from "react";

const TextArea = lazy(() => import("../components/TextArea"));
const Clock = lazy(() => import("../components/Clock"));

import styles from "../styles/pages/home.module.scss";

const renderLoader = () => <div className={styles.loader}></div>;

export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <Suspense fallback={renderLoader()}>
          <TextArea />
        </Suspense>
        <Suspense fallback={renderLoader()}>
          <Clock />
        </Suspense>
      </div>
    </>
  );
}
