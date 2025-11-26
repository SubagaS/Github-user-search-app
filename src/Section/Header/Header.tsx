import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import moon from './../../assets/icons/icon-moon.svg';
import sun from './../../assets/icons/icon-sun.svg';

function Header() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    if (mode) {
      document.body.classList.add('darkMode');
      document.body.classList.remove('brightMode');
    } else {
      document.body.classList.remove('darkMode');
      document.body.classList.add('brightMode');
    }
  }, [mode]);
  function toggle() {
    setMode((m) => !m);
  }
  return (
    <>
      <section className={styles.headerContainer}>
        <p>devfinder</p>
        {mode ? (
          <button onClick={toggle}>
            <img src={moon} alt="moon-icon" />
          </button>
        ) : (
          <button onClick={toggle}>
            <img src={sun} alt="sun-icon" />
          </button>
        )}
      </section>
    </>
  );
}

export default Header;
