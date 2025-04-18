import { useState } from 'react';
import '../styles/ContatoPage.css';

export default function ContatoPage() {
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/devsixxly@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (res.ok) {
        setMensagem("Mensagem enviada com sucesso!");
        setStatus("ok");
        form.reset();
      } else {
        setMensagem("Erro ao enviar. Tente novamente.");
        setStatus("erro");
      }
    } catch (err) {
      setMensagem("Erro ao enviar. Tente novamente.");
      setStatus("erro");
    }
  };

  return (
    <>
      <main className="contato-container">
        <div className='card-ctt'>
          <div className='conteudo-card'>
            <div>
              <h1 className="contato-titulo">Tem algum projeto em mente? <br /> Fale comigo.</h1>
              <p className='contato-texto'>Estou sempre em busca de novas oportunidades <br /> e colaborações criativas. Use o formulário abaixo <br /> ou me mande uma mensagem pelas redes sociais.</p>
            </div>
            <div className="contato-div">
              <h2>Meus canais</h2>

              <div className="flex-container">
                <div className="top-buttons">

                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devsixxly@gmail.com&su=Olá%20Miguel,%20vim%20pelo%20seu%20portfólio&body=Poderia%20falar%20mais%20sobre%20você?" target='_blank' className="botao-ctt" rel="noopener noreferrer">
                    <div className="icone">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="info-texto">
                      <span className="titulo">E-mail</span>
                      <span className="descricao">devsixxly@gmail.com</span>
                    </div>
                  </a>

                  <a href="https://wa.me/5547988524659?text=Olá,%20eu%20vim%20pelo%20seu%20portfólio,%20poderia%20me%20falar%20mais%20sobre%20você?" target='_blank' className="botao-ctt" rel="noopener noreferrer">
                    <div className="icone">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className="info-texto">
                      <span className="titulo">Whatsapp</span>
                      <span className="descricao">Enviar mensagem</span>
                    </div>
                  </a>

                </div>

                <div className="bottom-buttons">
                    <a href="https://www.linkedin.com/in/miguel-beber/" className="botao-ctt" target="_blank" rel="noopener noreferrer">
                        <div className="icone">
                        <i className="fa-brands fa-linkedin"></i>
                        </div>
                        <div className="info-texto">
                        <span className="titulo">LinkedIn</span>
                        <span className="descricao">Meu perfil do LinkedIn</span>
                        </div>
                    </a>

                    <a href="https://www.github.com/MiguelAntonioBeber" className="botao-ctt" target="_blank" rel="noopener noreferrer">
                        <div className="icone">
                        <i className="fa-brands fa-github"></i>
                        </div>
                        <div className="info-texto">
                        <span className="titulo">GitHub</span>
                        <span className="descricao">Meu perfil do GitHub</span>
                        </div>
                    </a>
                </div>
              </div>
            </div>

            <div className='formdiv'>
              <h2 className='titulo-form-ctt'>Formulário de Contato</h2>

              <form onSubmit={handleSubmit} className="form-contato" id='contato'>
                <input type="text" id="nome" name="nome" required placeholder='Nome' />
                <input type="email" id="email" name="email" required placeholder='E-mail' />
                <textarea id="mensagem" name="mensagem" rows="5" required placeholder='Assunto'></textarea>

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_redirect" value="" />

                <button type="submit">Enviar</button>

                {mensagem && (
                  <p style={{ color: status === "ok" ? "green" : "red", marginBottom: "10px" }}>
                    {mensagem}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
