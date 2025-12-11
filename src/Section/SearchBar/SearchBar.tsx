import styles from './styles.module.css';
import searchIcon from './../../assets/icons/icon-search.svg';
import { useGitHubUser } from '../../Context/useGitHubUser';
import { useState } from 'react';

function SearchBar() {
  const [username, setUsername] = useState('');
  const { fetchUser, errorSearchBar } = useGitHubUser();
  const handleSearch = () => {
    if (username.trim()) {
      fetchUser(username);
    }
  };
  return (
    <>
      <section className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Github username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className={styles.searchIconBtn}>
          <img
            src={searchIcon}

            alt="search-icon"
            className={styles.searchIcon}
          />
          <button
            className={styles.searchBtn}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {errorSearchBar && <p>{errorSearchBar}</p>}
      </section>
    </>
  );
}

export default SearchBar;
