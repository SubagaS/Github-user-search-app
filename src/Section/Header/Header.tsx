import styles from './styles.module.css';
import { useState } from 'react';
import moon from './../../assets/icons/icon-moon.svg';
import sun from './../../assets/icons/icon-sun.svg';

function Header() {
  const [mode, setMode] = useState(false);
  function toggle() {
    setMode((m) => !m);
  }
  return (
    <>
      <section className={styles.headerContainer}>
        <p>devfinder</p>
        <button onClick={toggle}>
          {mode ? (
            <>
              <img src={moon} alt="moon-icon" className={styles.darkMode} />
            </>
          ) : (
            <>
              <img src={sun} alt="sun-icon" className={styles.brightMode}/>
            </>
          )}
        </button>
      </section>
    </>
  );
}

export default Header;
