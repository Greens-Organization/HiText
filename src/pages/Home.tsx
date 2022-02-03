import { Menu } from "../components/Menu";
import { TextArea } from "../components/TextArea";
import { Clock } from "../components/Clock";

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <>
      <Menu />
      <div className={styles.content}>
        <TextArea />
      </div>
    </>
  );
}
