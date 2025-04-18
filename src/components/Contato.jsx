import React from 'react'
import '../styles/Contato.css'

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
            Caso deseje falar comigo, basta clicar no botão abaixo, onde você encontrará
            os links para todas as minhas páginas oficiais. Estarei à disposição para
            responder o mais breve possível.
        </p>
        <a href="/contato">
          <button className='botao-contato'>
            Entrar em Contato
          </button>
        </a>
      </div>
    </main>
  )
}
