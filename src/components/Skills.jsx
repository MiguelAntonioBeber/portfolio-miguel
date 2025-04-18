import React from 'react'
import '../styles/Skills.css'

export default function Skills() {
  return (
    <main className="container-Skills" id='idhab'>
      <div className='div-Skills'>
        <h1 className='h1-Skills'>Habilidades</h1>
        <p className='legenda-sk'>minhas habilidades</p>
      </div>
      <div className='divdesc-Skills'>
        <p className='paragrafo-Skills'>
          Desde que comecei a programar, venho explorando diferentes linguagens
          e tecnologias que me desafiam e me motivam a aprender cada vez mais.
          Atualmente, tenho domínio em linguagens como <strong>C, C++ e Python</strong>, estou me 
          aprofundando no desenvolvimento web com <strong>HTML, CSS e JavaScript</strong> além de 
          algumas outras tecnologias como <strong>React e Tailwind</strong>.
          Estou sempre buscando melhorar minhas habilidades e aprender novas ferramentas
          que possam me preparar para o mercado de tecnologia, principalmente nas áreas 
          de ciência da computação e cibersegurança — que são meus maiores focos no momento.
        </p>
        <div className='icones'>
          <div className='icone'>
            <img src="src\assets\icons\c.png" alt="Logo do C"/>
            <span className='nome-linguagem'>Icone do C</span>
          </div>
          <div className='icone'>
            <img src="src\assets\icons\cpp.png" alt="Logo do C++"/>
            <span className='nome-linguagem'>Icone do C++</span>
          </div>
          <div className='icone'>
            <img src="src\assets\icons\python.png" alt="Logo do Python"/>
            <span className='nome-linguagem'>Icone do Python</span>
          </div>
          <div className='icone'>
            <img src="src\assets\icons\html.png" alt="Logo do HTML"/>
            <span className='nome-linguagem'>Icone do HTML</span>
          </div>
          <div className='icone'>
            <img src="src\assets\icons\css.png" alt="Logo do CSS"/>
            <span className='nome-linguagem'>Icone do CSS</span>
          </div>
          <div className='icone'>
            <img src="src\assets\icons\javascript.png" alt="Logo do JavaScript"/>
            <span className='nome-linguagem'>Icone do Javascript</span>
          </div>
          <div className='icone'>
            <img src="src\assets\icons\react.png" alt="Logo do React"/>
            <span className='nome-linguagem'>Icone do React</span>
          </div>
          <div className='icone'>
            <img src="src\assets\icons\tailwind.png" alt="Logo do Tailwind"/>
            <span className='nome-linguagem'>Icone do Tailwind</span>
          </div>
          
        </div>   
      </div>
    </main>
  )
}
