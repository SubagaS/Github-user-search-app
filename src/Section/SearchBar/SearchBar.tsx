import styles from './styles.module.css';
import searchIcon from './../../assets/icons/icon-search.svg';


function SearchBar() {
  return (
    <>
      <section className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Github username..."
        />
        <div className={styles.searchIconBtn}>
          <img
            src={searchIcon}
            alt="search-icon"
            className={styles.searchIcon}
          />
          <button className={styles.searchBtn}>Search</button>
        </div>
      </section>
    </>
  );
}

export default SearchBar;
