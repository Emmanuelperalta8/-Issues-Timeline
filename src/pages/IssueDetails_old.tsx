import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function IssueDetails() {
  const { id } = useParams();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    async function fetchIssue() {
      const response = await api.get(`/repos/lucaspedronet/BlogProfileGitHub/issues/${id}`);
      setIssue(response.data);
    }

    fetchIssue();
  }, [id]);

  if (!issue) return <p>Carregando...</p>;

  return (
    <div style={{ padding: 32 }}>
      <h1>{issue.title}</h1>
      <p>{issue.body}</p>
      <p>🗓️ Criado em: {new Date(issue.created_at).toLocaleDateString()}</p>
    </div>
  );
}
