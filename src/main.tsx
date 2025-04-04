// Importa a biblioteca principal do React
import React from "react";

// Importa o método para renderizar a aplicação na DOM
import ReactDOM from "react-dom/client";

// Importa o componente principal da aplicação
import App from "./App";

// Importa o componente de roteamento para habilitar as rotas no app
import { BrowserRouter } from "react-router-dom";

// Renderiza o componente App dentro do elemento com id="root" no HTML
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* BrowserRouter envolve toda a aplicação para habilitar o roteamento com React Router */}
    <BrowserRouter>
      {/* Componente principal da aplicação que contém as rotas */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
