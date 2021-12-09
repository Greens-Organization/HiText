//Components
import { Menu } from "../components/Menu";
import { TextArea } from "../components/TextArea";
import { Clock } from "../components/Clock";

//Style
import styles from "../styles/pages/home.module.scss";

//Home page
export default function Home() {
  return (
    <>
      <Menu />
      <div className={styles.content}>
        <TextArea />
        <Clock />
      </div>
    </>
  );
}
