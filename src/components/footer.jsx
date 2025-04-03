import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bohemian-footer">
      <div className="footer-content">
        
        <nav className="footer-links">
          <a href="/sobre-nos" className="footer-link">Sobre nós</a>
          <a href="/artesanatos" className="footer-link">Artesanatos</a>
          <a href="/ferias-hippies" className="footer-link">Feiras hippies da baixada</a>
        </nav>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LitoralArte - Feito com amor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;