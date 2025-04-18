import '../App.css'
import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import Formacao from '../components/Formacao.jsx'
import Contato from '../components/Contato.jsx'
import Skills from '../components/Skills.jsx'
import Projetos from '../components/Projetos.jsx'
import Footer from '../components/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <Header/>
      <Main/>
      <Formacao/>
      <Skills/>
      <Contato/>
      <Projetos/>
      <Footer/>
    </>
  );
}
