import styles from '../styles/components/menu.module.scss';

export function Menu(){
  return(<>
    <div className={styles.app}>
      <div>
        <img src="" alt="HiText!" />
      </div>
      <div>
        <button>
          <img src="" alt="Claro" />
        </button>
      </div>
      <div>
        <button>Home</button>
        <button>About</button>
        <button>Github</button>
      </div>
    </div>
  </>)
}