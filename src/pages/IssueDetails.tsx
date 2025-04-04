// Importa hooks do React e React Router
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

// Define a tipagem para uma issue individual
interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

// Componente que exibe os detalhes de uma issue específica
export function IssueDetails() {
  // Pega o ID da issue a partir da URL (ex: /issue/123)
  const { id } = useParams<{ id: string }>();

  // Estado que armazena a issue carregada
  const [issue, setIssue] = useState<Issue | null>(null);

  // Busca a issue ao carregar o componente
  useEffect(() => {
    async function fetchIssue() {
      const response = await api.get("/search/issues", {
        params: {
          q: `repo:lucaspedronet/BlogProfileGitHub`,
        },
      });

      // Encontra a issue que bate com o ID da URL
      const foundIssue = response.data.items.find(
        (item: Issue) => item.id === Number(id)
      );

      setIssue(foundIssue);
    }

    fetchIssue();
  }, [id]);

  // Exibe mensagem de carregamento enquanto os dados não chegam
  if (!issue) {
    return <p>⏳ Carregando issue...</p>;
  }

  // Exibe os dados da issue
  return (
    <div style={{ padding: 32 }}>
      <h1>{issue.title}</h1>
      <small>Criado em: {new Date(issue.created_at).toLocaleDateString()}</small>
      <hr />
      <p>{issue.body}</p>
    </div>
  );
}
