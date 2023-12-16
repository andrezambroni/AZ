import "./style.css";
import "../global.css"

export function Sobre() {
  return (
    <div className="sobre">
      <h1>Hello World!</h1>

      <div className="descricao">
        <h1>Desenvolvedor de Software</h1>{" "}
        <h2>
          {" "}
          com mais de 2 anos de atuação no mercado, com sólida formação
          acadêmica e experiências práticas como Estagiário em Desenvolvimento
          Full-stack.
        </h2>{" "}
        <h2>
          Proficiente em HTML, CSS, JavaScript, React, Node, C++, Git, GitHub, e
          com familiaridade em Python, PHP, Java, SQL Server, MongoDB, IA e IoT,
          além de práticas ágeis como o Scrum e Kanban.
        </h2>{" "}
        <h2>
          Comprometido com o aprendizado contínuo, atualmente focado em
          aprimorar habilidades em Inglês, JavaScript (React e Node), HTML, CSS
          e aprofundando-se em Banco de Dados (MongoDB e SQL Server).
          Determinado a contribuir ativamente no cenário tecnológico, combinando
          conhecimento teórico e prática.
        </h2>
      </div>

      <div className="exp">
        <h1>Minhas Experiencias</h1>
        <div className="hagens">
          <h1>Estágiario Full Stack </h1>
          <h3>Hagens - 09/2022 - 12/2023</h3>
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
          <h3>PUC NTIC</h3>
          <li>Migração e modificação de dados em banco de dados</li>
          <li>Desenvolvimento full stack para projetos do núcleo</li>
          <li>Manutenção de projetos internos e de parceiros</li>
          <li>Competência em tecnologias como SQL, HTML, CSS, Java e JavaScript</li>
        </div>

        <div className="resumo">
          <h1>Minha trajetoria</h1>
          <h2>
            Desenvolvedor de Software com mais de 2 anos de atuação no
            mercado,com sólida formação acadêmica e experiências práticas como
          </h2>

          <h3>
            Estagiário em Desenvolvimento Full-stack. Proficiente em HTML, CSS,
            JavaScript, React, Node, C++, Git, GitHub, e com familiaridade em
            Python, PHP, Java, SQL Server, MongoDB, IA e IoT, além de práticas
            ágeis como o Scrum e Kanban.
          </h3>
          <h3>
            Comprometido com o aprendizado contínuo, atualmente focado em
            aprimorar habilidades em Inglês, JavaScript (React e Node), HTML,
            CSS e aprofundando-se em Banco de Dados (MongoDB e SQL Server).
          </h3>
          <h3>
            Determinado a contribuir ativamente no cenário tecnológico,
            combinando conhecimento teórico e prática.
          </h3>
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
    </div>
  );
}
