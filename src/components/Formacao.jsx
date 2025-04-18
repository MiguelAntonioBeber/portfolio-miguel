import React from 'react'
import '../styles/Formacao.css'

export default function Formacao() {
  return (
    <main className="container-Formacao" id='idform'>
      <div className='div-title'>
        <h1 className='h1form'>Formação</h1>
        <p className='legenda-fm'>o que estudei</p>
      </div>
      <div className='divdesc'>
        <p className='paragrafo'>
        Comecei meus estudos na <strong>E.E.B. Arthur Bruno Jandt</strong>, uma escola municipal
        em Trombudo Central, onde fiquei até a 5ª série. Depois, fui pra <strong>E.E.B.
        Dr. Hermann Blumenau</strong>, onde terminei o Fundamental. No final do 9º ano,
        vi um anúncio sobre o <strong>Instituto Federal Catarinense</strong>, comentei com meu
        pai e ele me apoiou a tentar.

        Desde antes disso, já curtia muito tecnologia. Fiz alguns cursos como
         Administração pela Gamma Contabilidade e Informática do básico ao intermediário
          (Word, Excel e PowerPoint). Hoje, estou cursando o Ensino Médio no IFC, onde
           também estudo programação – já passei por C/C++ e Python, do básico ao avançado.
            <strong> Pretendo seguir na área de Ciência da Computação ou Cibersegurança.</strong>


        </p>
      </div>
    </main>
  )
}
