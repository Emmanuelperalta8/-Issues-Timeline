// Importa o tipo ReactNode do React, que representa qualquer elemento ou grupo de elementos JSX
import { ReactNode } from "react";

// Define a tipagem das props esperadas pelo componente IssuesAside
interface IssuesAsideProps {
  children: ReactNode; // `children` representa os elementos filhos que serão passados dentro do <IssuesAside>...</IssuesAside>
}

// Componente funcional que serve como container para as issues
export function IssuesAside({ children }: IssuesAsideProps) {
  return (
    // Define um <aside> estilizado para agrupar e dar layout aos filhos (issues)
    <aside style={{ padding: 24, background: "#f9f9f9" }}>
      {children} {/* Renderiza todos os filhos passados dentro do componente */}
    </aside>
  );
}
// teste
