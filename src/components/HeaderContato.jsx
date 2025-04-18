import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import '../styles/HeaderContato.css'


export default function Header({ children }) {
  return (
    <header className='navbar-completa-ctt'>
      <nav className='navbar-ctt'>
        <div className="navbar-container-ctt">
          <div className="navbar-left-ctt">
            <RouterLink to="/" id='logo-ctt'>Miguel Antonio Beber</RouterLink>
          </div>
          <ul className="navbar-right-ctt">
          <li><RouterLink to="/" className='navLink-ctt'>Voltar para a pagina principal?</RouterLink ></li>
          </ul>
        </div>
      </nav>
      {children}
    </header>
  )
}