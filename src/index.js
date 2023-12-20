import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";


import { Header } from "./Header/index.js";
import { Sobre } from "./Sobre/index.js";
import { Habilidades } from "./Habilidades/index.js";
import { Descricao } from "./Descrição/index.js";
import { Experiencias } from "./Experiencia/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Sobre />
    <Habilidades/>
    <Descricao/>
    <Experiencias/>

    
  </React.StrictMode>
);
