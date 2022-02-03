import styles from "../styles/components/menu.module.scss";

export const Menu = () => {
  return (
    <div className={styles.app}>
      <header className={styles.content}>
        <div className={styles.logo}>
          <img src="/images/dark-logo.svg" alt="HiText Logo" />
        </div>
        <nav>
          <ul>
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
