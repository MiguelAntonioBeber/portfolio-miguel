import React from 'react'
import '../styles/Main.css'
import FotoPrincipal from '../assets/foto.png';

export default function Main() {
  return (
    <main className="main-container" id='idsobre'>
      <div className="profile-section">
        <div className="profile-card">
          <div className="profile-image-wrapper">
            <img src={FotoPrincipal} alt="Miguel" className="profile-image" />
          </div>
          
          <div className="profile-header">
            <h1>Oi, meu nome é Miguel</h1>
            <h1>estudo programação no Instituto Federal.</h1>
          </div>
        </div>
        
        <div className="profile-description">
          <p>
            Eu comecei a estudar programação e desenvolvimento Web
            pelo YouTube com os vídeos do professor Gustavo Guanabara
            criei gosto por isso e decidi entrar no <strong>Instituto Federal para
            poder fazer o ensino técnico de Informática para a Internet</strong>.
          </p>
          
          <p>
            Conheci a IPM pelo professor Fabio Alexandrini da materia de
            Gestão de TI e pretendo trabalhar lá no meu Futuro.
          </p>
        </div>
      </div>
    </main>
  )
}
