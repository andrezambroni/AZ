import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";


import { Header } from "./Header/index.js";
import { Sobre } from "./Sobre/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Sobre />

    
  </React.StrictMode>
);
