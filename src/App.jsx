import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#empresas">Nossas Empresas</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

     <section id="inicio" className="section">
      <div className="split-container">

      <div className="static-image">
        <img src="/imagens/empresa.jpg" alt="Imagem institucional" />
        <div className="mensagemImagem">
          <p>
            TRANSFORME O SEU NEGÓCIO<br />
            A MELHOR INTELIGÊNCIA CONTÁBIL PARA O SEU NEGÓCIO
          </p>
        </div>
      </div>
        
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src="/videos/carros.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

      <section id="sobre" className="section">
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa comprometida com inovação e qualidade.</p>
      </section>

      <section id="empresas" className="section">
        <h2>Nossas Empresas</h2>
        <p>Veja as empresas que fazem parte do nosso grupo.</p>
      </section>

      <section id="contato" className="section">
        <h2>Contato</h2>
        <p>Fale conosco por e-mail ou redes sociais.</p>
      </section>

      <footer>
        <p>© 2025 Grupo XYZ. Todos os direitos reservados.</p>
        <p>Desenvolvido por Vanderson</p>
      </footer>

    </>
  )
}

export default App
