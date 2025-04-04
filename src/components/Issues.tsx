// Define a tipagem das props esperadas pelo componente Issues
interface IssueProps {
    title: string;         // Título da issue
    body: string | null;   // Corpo (conteúdo) da issue (pode ser nulo)
    created_at: string;    // Data de criação da issue (formato ISO)
    id: number;            // Identificador único da issue
}
  
// Componente funcional que exibe uma issue individual
export function Issues({ title, body, created_at }: IssueProps) {
    return (
      <div style={{ borderBottom: "1px solid #ccc", marginBottom: 16 }}>
        {/* Exibe o título da issue */}
        <h2>{title}</h2>
  
        {/* Exibe um resumo do corpo da issue, ou uma mensagem caso esteja vazio */}
        <p>{body ? body.substring(0, 100) + "..." : "Sem descrição disponível."}</p>
  
        {/* Exibe a data de criação formatada no padrão local */}
        <small>Criado em: {new Date(created_at).toLocaleDateString()}</small>
      </div>
    );
}
