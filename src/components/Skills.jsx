import React from 'react'
import '../styles/Skills.css'
import FotoC from '../assets/icons/c.png';
import FotoCPP from '../assets/icons/cpp.png';
import FotoCSS from '../assets/icons/css.png';
import FotoHTML from '../assets/icons/html.png';
import FotoJavaScript from '../assets/icons/javascript.png';
import FotoPython from '../assets/icons/python.png';
import FotoReact from '../assets/icons/react.png';
import FotoTailwind from '../assets/icons/tailwind.png';

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
          <div className='icone' id='icone-c'>
            <img src={FotoC} alt="Logo do C"/>
            <span className='nome-linguagem'>Icone do C</span>
          </div>
          <div className='icone' id='icone-cpp'>
            <img src={FotoCPP} alt="Logo do C++"/>
            <span className='nome-linguagem'>Icone do C++</span>
          </div>
          <div className='icone' id='icone-python'>
            <img src={FotoPython} alt="Logo do Python"/>
            <span className='nome-linguagem'>Icone do Python</span>
          </div>
          <div className='icone' id='icone-html'>
            <img src={FotoHTML} alt="Logo do HTML"/>
            <span className='nome-linguagem'>Icone do HTML</span>
          </div>
          <div className='icone' id='icone-css'>
            <img src={FotoCSS} alt="Logo do CSS"/>
            <span className='nome-linguagem'>Icone do CSS</span>
          </div>
          <div className='icone' id='icone-js'>
            <img src={FotoJavaScript} alt="Logo do JavaScript"/>
            <span className='nome-linguagem'>Icone do Javascript</span>
          </div>
          <div className='icone' id='icone-react'>
            <img src={FotoReact} alt="Logo do React"/>
            <span className='nome-linguagem'>Icone do React</span>
          </div>
          <div className='icone' id='icone-tailwind'>
            <img src={FotoTailwind} alt="Logo do Tailwind"/>
            <span className='nome-linguagem'>Icone do Tailwind</span>
          </div>
          
        </div>   
      </div>
    </main>
  )
}
