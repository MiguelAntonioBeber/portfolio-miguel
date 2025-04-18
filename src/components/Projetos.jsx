import React from 'react'
import '../styles/Projetos.css'

export default function Projetos() {
  return (
    <main className="container-Projetos" id='idprojetos'>
    <div className='principal'>
        <div className='div-Projetos'>
            <h1 className='h1-Projetos'>Projetos</h1>
            <p className='legenda-pj'>meus projetos</p>
        </div>
        <div className='divdesc-Projetos'>
            <p className='paragrafo-Projetos'>
            Nesta seção, apresento alguns dos principais projetos que desenvolvi,
            focando em responsividade, integração com APIs e boas práticas de desenvolvimento.
            Cada projeto demonstra minha habilidade em transformar ideias em 
            soluções funcionais com <strong>código limpo e organizado.</strong>
            </p>
        </div>
    </div>
    <div className='divprojetos'>
        <section className="projetos">
            <div className='cardprojeto'>
                <div className='margem'>
                    <h2>Projeto de Software Educacional</h2>
                    <div className="projetos-grid">
                        <div className="projeto-card">
                            <img src="src\assets\projeto1.png" alt="Projeto 1" className='foto-projeto'/>
                            <p>
                                O sistema em questão, é um software que calcula médias dos alunos
                                além de agrupar varias informações uteis para os alunos, tanto para
                                os administradores ou professores, marcando datas de tarefas
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    </div>   
    </main>
  )
}
