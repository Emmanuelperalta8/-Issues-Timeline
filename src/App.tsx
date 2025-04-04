// Importa as ferramentas de roteamento do React Router
import { Routes, Route } from "react-router-dom";

// Importa os dois componentes principais da aplicação
import { Home } from "./pages/Home";
import { IssueDetails } from "./pages/IssueDetails";

// Componente principal da aplicação
function App() {
  return (
    <Routes>
      {/* Rota principal que mostra a listagem de issues */}
      <Route path="/" element={<Home />} />

      {/* Rota dinâmica que mostra detalhes de uma issue específica */}
      <Route path="/issue/:id" element={<IssueDetails />} />
    </Routes>
  );
}

export default App;
