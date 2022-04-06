import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useChooseTheme";
import styles from "../styles/components/menu.module.scss";

const Menu = () => {
  const { switchTheme, darkOn } = useTheme();

  const location = useLocation().pathname;
  return (
    <div className={styles.app}>
      <header className={styles.content}>
        <div className={styles.logo}>
          {darkOn ? (
            <img src="/images/dark-logo.svg" alt="HiText Logo for Dark Mode" />
          ) : (
            <img
              src="/images/light-logo.svg"
              alt="HiText Logo for Light Mode"
            />
          )}
        </div>
        <div className={styles.chooseTheme}>
          <button onClick={switchTheme}>
            {darkOn ? (
              <img src="/images/sun.svg" alt="Enable light mode" />
            ) : (
              <img src="/images/moon.svg" alt="Enable dark mode" />
            )}
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={styles.active}
                data-selected={location === "/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={styles.active}
                data-selected={location === "/about"}
              >
                About
              </Link>
            </li>
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

export default Menu;
