import React from 'react'
import '../styles/Footer.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  return (
    <main className="container-Footer" id='idhab'>
      <div className='div-Footer'>
        <a href="https://github.com/MiguelAntonioBeber" target="_blank" className="social-icon"><FaGithub/></a>
        <a href="https://linkedin.com/in/miguel-beber" target="_blank" className="social-icon"><FaLinkedin/></a>
        <a href="https://instagram.com/miiguelxz" target="_blank" className="social-icon"><FaInstagram/></a>
      </div>
      <div className='linksft'>
        <ul className="navbar-footer">
            <li onClick={() => scroll.scrollToTop()}>Home</li>
            <li><Link to="idsobre" smooth={true} duration={1000} offset={-80}>Sobre</Link></li>
            <li><Link to="idform" smooth={true} duration={1000} offset={-80}>Formação</Link></li>
            <li><Link to="idhab" smooth={true} duration={1000} offset={-80}>Habilidades</Link></li>
            <li><Link to="idcontato" smooth={true} duration={1000} offset={-80}>Contato</Link></li>
            <li><Link to="idprojetos" smooth={true} duration={1000} offset={-80}>Projetos</Link></li>
        </ul>
      </div>
      <div className='copy'>
        <p>&#174; {new Date().getFullYear()} Miguel Antonio Beber. Todos os direitos reservados.</p>
      </div>
    </main>
  )
}

