import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../App.css'
import '../styles/Header.css'
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className='navbar-completa'>
      <nav className='navbar'>
        <div className="navbar-container">
          <div className="navbar-left">
            <a href="#" id='logo'>Miguel Antonio Beber</a>
          </div>

          <ul className="navbar-right desktop-menu">
            <li><RouterLink to="/" className='navLink'>Home</RouterLink></li>
            <li><ScrollLink to="idsobre" smooth={true} duration={1000} offset={-80} className='navLink'>Sobre</ScrollLink></li>
            <li><ScrollLink to="idform" smooth={true} duration={1000} offset={-80} className='navLink'>Formação</ScrollLink></li>
            <li><ScrollLink to="idhab" smooth={true} duration={1000} offset={-80} className='navLink'>Habilidades</ScrollLink></li>
            <li><ScrollLink to="idcontato" smooth={true} duration={1000} offset={-80} className='navLink'>Contato</ScrollLink></li>
            <li><ScrollLink to="idprojetos" smooth={true} duration={1000} offset={-80} className='navLink'>Projetos</ScrollLink></li>
          </ul>

          <button className="hamburger-btn" onClick={toggleMenu}>
            <FaBars className="menu-icon" />
          </button>
        </div>
      </nav>

      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <div className={`half-screen-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <button className="close-menu-btn" onClick={closeMenu}>
            <FaTimes className="close-icon" />
          </button>
        </div>
        
        <ul className="mobile-menu-links">
          <li><RouterLink to="/" className='mobile-link' onClick={closeMenu}>Home</RouterLink></li>
          <li><ScrollLink to="idsobre" smooth={true} duration={1000} offset={-80} className='mobile-link' onClick={closeMenu}>Sobre</ScrollLink></li>
          <li><ScrollLink to="idform" smooth={true} duration={1000} offset={-80} className='mobile-link' onClick={closeMenu}>Formação</ScrollLink></li>
          <li><ScrollLink to="idhab" smooth={true} duration={1000} offset={-80} className='mobile-link' onClick={closeMenu}>Habilidades</ScrollLink></li>
          <li><ScrollLink to="idcontato" smooth={true} duration={1000} offset={-80} className='mobile-link' onClick={closeMenu}>Contato</ScrollLink></li>
          <li><ScrollLink to="idprojetos" smooth={true} duration={1000} offset={-80} className='mobile-link' onClick={closeMenu}>Projetos</ScrollLink></li>
        </ul>
      </div>

      {children}
    </header>
  )
}