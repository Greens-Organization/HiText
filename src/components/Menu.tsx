import { Link } from "react-router-dom";
import styles from "../styles/components/menu.module.scss";

interface Props {
  home?: boolean;
}

export const Menu = (props: Props) => {
  return (
    <div className={styles.app}>
      <header className={styles.content}>
        <div className={styles.logo}>
          <img src="/images/dark-logo.svg" alt="HiText Logo" />
        </div>
        <nav>
          <ul>
            {props.home ? (
              <>
                <li className={styles.active}>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className={styles.active}>
                  <Link to="/about">About</Link>
                </li>
              </>
            )}
            <li>
              <a
                href="https://github.com/Greens-Organization/HiText"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
