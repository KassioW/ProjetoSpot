import React, { useState } from 'react';
import '../styles/main-content.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Passa o valor da pesquisa para o componente pai
  };

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Left Arrow" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Right Arrow" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="Search" />
        <input
          id="search-input"
          value={searchTerm}
          onChange={handleInputChange}
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;