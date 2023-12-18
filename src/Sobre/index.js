import "./style.css";
import "../global.css";

export function Sobre() {
  return (
    <div className="sobre">
      <h1>Hello World!</h1>

      <div className="descricao">
        <h1>
          Desenvolvedor de Software, com mais de 2 anos de atuação no mercado.
        </h1>

        <h2>
          Proficiente em HTML, CSS, JavaScript, React, Node, C++, Git, GitHub, e
          com familiaridade em Python, PHP, Java, SQL Server, MongoDB, IA e IoT,
          além de práticas ágeis como o Scrum e Kanban.
        </h2>

        <br></br>

        <h2>
          Formado em Engenharia de Software pela Universidade PUC Campinas e
          atualmente aprofundando minhas habilidades em Inglês e em Banco de
          Dados (MongoDB e SQL Server).
        </h2>
        <br></br>
        <h2>
          Além disso, possuo experiências práticas como Estagiário em
          Desenvolvimento Full-stack.
        </h2>
      </div>

      <div className="exp">
        <h1>Minhas Experiencias</h1>
        <div className="hagens">
          <h1>Estágiario Full Stack </h1>
          <h3>Hagens</h3>
          <h3>Setembro de 2022 - Dezembro de 2023</h3>
          <h3>
            Empresa de marketing que une comunicação, tecnologia e performance
          </h3>
          <li>Manutenção de projetos, sites e campanhas</li>
          <li>
            Acompanhamento completo do ciclo de vida do software, da negociação
            à entrega final
          </li>
          <li>Aprimoramentos funcionais e estéticos em websites</li>
          <li>Participação ativa nos ritos e cerimônias de SCRUM</li>
          <li>
            Experiência em tecnologias como HTML, CSS, C, C++, JavaScript,
            React, Node, PHP, WordPress
          </li>
        </div>

        <div className="ntic">
          <h1>Estágiario Full Stack</h1>
          <h3>
            Núcleo de Tecnologia da Informação e Comunicação da PUC Campinas
          </h3>
          <h3>Fevereiro de 2020 - Outubro de 2020</h3>
          <li>Migração e modificação de dados em banco de dados</li>
          <li>Desenvolvimento full stack para projetos do núcleo</li>
          <li>Manutenção de projetos internos e de parceiros</li>
          <li>
            Competência em tecnologias como SQL, HTML, CSS, Java e JavaScript
          </li>
        </div>
{/* 
        <div className="resumo">
          <h1>Minha trajetoria</h1>
          <h2>
           
          </h2>

          <h3>
            
          </h3>
          <h3>
            
          </h3>
          <h3>
            
          </h3>
        </div> */}
      </div>

      <div className="links">
        <h1>Meus links</h1>
        <h2>
          <a href="http://linkedin.com/in/andrezambroni" target="_blank">
            Linkedin
          </a>
        </h2>
        <h2>GitHub</h2>
        <h2>Outros</h2>
      </div>
    </div>
  );
}
