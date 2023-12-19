import "./style.css";
import "../global.css";
import LogoAZ from "../svg/logoAZ.js";

export function Header() {
  return (
    <header>
      <nav>
        <div className="header_left">
          <p>GitHub</p>
          <p>Linkedin</p>
          <p>Outros Links</p>
        </div>

        <div className="header_right">
          <ul className="menu">
            <li>
              <a href="#">Sobre Mim</a>
            </li>
            <li>
              <a href="#">Experiencia</a>
            </li>
            <li>
              <a href="#">Habilidade</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Curriculo</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
