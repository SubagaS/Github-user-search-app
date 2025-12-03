import Header from './Section/Header/Header';
import SearchBar from './Section/SearchBar/SearchBar';
import ProfileCard from './Section/ProfileCard/profileCard';
import './App.css';

function App() {
  return (
    <main className="contentWrapper">
      <Header />
      <SearchBar />
      <ProfileCard />
    </main>
  );
}

export default App;
