import React from 'react'
import '../styles/Contato.css'
import { Link } from 'react-router-dom';

export default function Contato() {
  return (
    <main className="container-Contato" id='idcontato'>
      <div className='div-contato'>
        <h1 className='h1-contato'>Contato</h1>
        <p className='legenda-ct'>como me encontrar</p>
      </div>
      <div className='divdesc-contato'>
        <p className='paragrafo-contato'>
          Estou disponível em <strong>diversas redes sociais</strong> para facilitar a comunicação. 
          Você pode me encontrar no LinkedIn para assuntos profissionais, no GitHub para 
          colaborações em projetos, ou no Instagram para contatos mais informais. 
          Caso deseje falar comigo diretamente, o e-mail é sempre uma opção prática e eficiente.
          Basta clicar no botão abaixo, onde você encontrará os links para todas as minhas 
          páginas oficiais. Também estou aberto a novas conexões e oportunidades na área 
          de tecnologia, especialmente relacionadas à programação e cibersegurança. 
          Estarei à disposição para responder o mais breve possível, geralmente em até 24 horas.
        </p>
        <Link to="/contato">
          <button className='botao-contato'>
            Entrar em Contato
          </button>
        </Link>
      </div>
    </main>
  )
}
