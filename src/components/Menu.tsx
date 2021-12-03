import React, { useState } from "react";
import styles from "../styles/components/menu.module.scss";

export function Menu() {
  const [darkMode, setDarkMode] = useState(false);

  function changeTheme(state: boolean) {
    setDarkMode(state);
  }

  return (
    <>
      <div className={styles.app}>
        <header className={styles.content}>
          <div className={styles.logo}>
            <img src="" alt="HiText!" />
          </div>
          <div className={styles.chooseTheme}>
            {darkMode ? (
              <button onClick={() => changeTheme(false)}>
                <img
                  src="sun.svg"
                  alt="Enable light mode"
                  title="Enable light mode"
                />
              </button>
            ) : (
              <button onClick={() => changeTheme(true)}>
                <img
                  src="moon.svg"
                  alt="Enable dark mode"
                  title="Enable dark mode"
                />
              </button>
            )}
          </div>
          <nav>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Github</a>
          </nav>
        </header>
        <main></main>
      </div>
    </>
  );
}
