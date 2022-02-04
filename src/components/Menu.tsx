import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useChooseTheme";
import styles from "../styles/components/menu.module.scss";

interface Props {
  home?: boolean;
}

export const Menu = ({ home }: Props) => {
  const { theme, switchTheme } = useTheme();
  return (
    <div className={styles.app}>
      <header className={styles.content}>
        <div className={styles.logo}>
          {theme ? (
            <img
              src="/images/light-logo.svg"
              alt="HiText Logo for Light Mode"
            />
          ) : (
            <img src="/images/dark-logo.svg" alt="HiText Logo for Dark Mode" />
          )}
        </div>
        <div className={styles.chooseTheme}>
          {theme ? (
            <button onClick={switchTheme}>
              <img src="/images/moon.svg" alt="" />
            </button>
          ) : (
            <button onClick={switchTheme}>
              <img src="/images/sun.svg" alt="" />
            </button>
          )}
        </div>
        <nav>
          <ul>
            {home ? (
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
