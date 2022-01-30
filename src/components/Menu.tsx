import { useTheme } from "../hooks/useChooseTheme";
import { Link } from "react-router-dom";

import styles from "../styles/components/menu.module.scss";

export const Menu = () => {
  const { darkOn, enableDarkMode, enableLightMode } = useTheme();

  return (
    <>
      <div className={styles.app}>
        <header className={styles.content}>
          <div className={styles.logo}>
            {darkOn ? (
              <img src="/images/dark-logo.svg" alt="HiText!" />
            ) : (
              <img src="/images/light-logo.svg" alt="HiText!" />
            )}
          </div>
          <div className={styles.chooseTheme}>
            {darkOn ? (
              <button onClick={enableLightMode}>
                <img
                  src="/images/sun.svg"
                  alt="Enable light mode"
                  title="Enable light mode"
                />
              </button>
            ) : (
              <button onClick={enableDarkMode}>
                <img
                  src="/images/moon.svg"
                  alt="Enable dark mode"
                  title="Enable dark mode"
                />
              </button>
            )}
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="https://github.com/Greens-Organization/HiText/tree/main">
              GitHub
            </a>
          </nav>
        </header>
      </div>
    </>
  );
};
