import "./style.css";

export function Habilidades() {
  return (
    <div className="habilidades">
      <div className="tec">Tecnologias</div>
      <div className="front">
        {/* <div className="tituloF">FrontEnd</div> */}
        <div className="tecFront">
          <div className="line1">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
            </ul>
          </div>

          <div className="line2">
            <ul>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="back">
        {/* <div className="tituloB">BackEnd</div> */}
        <div className="tecBack">
          <div className="line1">
            <ul>
              <li>NodeJS</li>
              <li>CSS</li>
              <li>Tailwind</li>
            </ul>
          </div>

          <div className="line2">
            <ul>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="outros">
        <div className="line1">
          <ul>
            <li>Git/GitHub</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="line2">
          <ul>
            <li>Postman</li>
            <li>Figma</li>
            <li>Microsoft Office</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
