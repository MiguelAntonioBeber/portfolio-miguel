import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import '../App.css'


export default function Header({ children }) {
  return (
    <header className='navbar-completa'>
      <nav className='navbar'>
        <div className="navbar-container">
          <div className="navbar-left">
            <a href="#"  id='logo'>Miguel Antonio Beber</a>
          </div>
          <ul className="navbar-right">
          <li><RouterLink to="/" className='navLink'>Home</RouterLink ></li>
            <li><ScrollLink to="idsobre" smooth={true} duration={1000} offset={-80} className='navLink'>Sobre</ScrollLink></li>
            <li><ScrollLink to="idform" smooth={true} duration={1000} offset={-80} className='navLink'>Formação</ScrollLink></li>
            <li><ScrollLink to="idhab" smooth={true} duration={1000} offset={-80} className='navLink'>Habilidades</ScrollLink></li>
            <li><ScrollLink to="idcontato" smooth={true} duration={1000} offset={-80} className='navLink'>Contato</ScrollLink></li>
            <li><ScrollLink to="idprojetos" smooth={true} duration={1000} offset={-80} className='navLink'>Projetos</ScrollLink></li>
          </ul>
        </div>
      </nav>
      {children}
    </header>
  )
}