import React, { useState } from 'react';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import Footer from './components/Footer';
import './styles/reset.css';
import './styles/vars.css';
import './styles/sidebar-footer.css';
import './styles/main-content.css';
import './styles/media-queries.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="main-container">
      <Sidebar />
      <main>
        <Header onSearch={handleSearch} />
        <Search searchTerm={searchTerm} />
        <Playlist/>
      </main>
      <Footer />
    </div>
  );
}

export default App;