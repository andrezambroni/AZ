import "./style.css";
import "../global.css";
import LogoAZ from "../svg/logoAZ.js";


export function Header() {
 return (
    <header>
      <div className="header_left">
        {/* <LogoAZ /> */}
        <div className="nome">André Zambroni</div>
      </div>

      <div className="header_right">
        <button href="#" className="">Sobre</button>
        <button>Experiencia</button>
        <button>Habilidade</button>
        <button>Projetos</button>
        <button>Sobre</button>
        <button>Curriculo</button>
        <button>Contato</button>
      </div>

      <div class="linha-horizontal"></div>
    </header>
 );
}