import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/" className="site-url">hippie.ct.ws</a>
        <nav className="nav-links">
          <a href="/sobre-nos/" className="nav-link active">sobre nós</a>
          <a href="#" className="nav-link">Buscar</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
