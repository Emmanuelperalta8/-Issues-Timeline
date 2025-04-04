// Importa hooks e componentes necessários
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Issues } from "../components/Issues";
import { IssuesAside } from "../components/IssuesAside";

// Define a estrutura dos dados de uma issue
interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

// Define a estrutura dos dados do perfil do GitHub
interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  html_url: string;
}

// Componente principal da página inicial
export function Home() {
  // Estado que armazena as issues
  const [issues, setIssues] = useState<Issue[]>([]);
  
  // Estado que armazena os dados do usuário
  const [user, setUser] = useState<GitHubUser | null>(null);
  
  // Estado para controle de carregamento
  const [loading, setLoading] = useState(true);
  
  // Estado para armazenar mensagens de erro
  const [error, setError] = useState<string | null>(null);

  // 🔍 Buscar informações do usuário no GitHub
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/users/lucaspedronet");
        console.log("✅ Usuário carregado:", response.data);
        setUser(response.data); // Salva os dados no estado
      } catch (err) {
        console.error("❌ Erro ao buscar usuário:", err);
        setError("Erro ao carregar usuário.");
      }
    }

    fetchUser();
  }, []);

  // 🔍 Buscar as issues do repositório
  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await api.get("/search/issues", {
          params: { q: "repo:lucaspedronet/BlogProfileGitHub" },
        });

        console.log("✅ Issues carregadas:", response.data.items);
        setIssues(response.data.items); // Salva as issues no estado
      } catch (err) {
        console.error("❌ Erro ao buscar issues:", err);
        setError("Erro ao carregar issues.");
      } finally {
        setLoading(false); // Finaliza o loading, mesmo com erro
      }
    }

    fetchIssues();
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>📘 Issues Timeline</h1>

      {/* ⚠️ Exibe mensagem de erro, se houver */}
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

      {/* ⏳ Mostra enquanto os dados estão sendo carregados */}
      {loading && <p>⏳ Carregando...</p>}

      {/* 👤 Exibe as informações do usuário, se disponíveis */}
      {user && (
        <div style={{ marginBottom: 32, background: "#f4f4f4", padding: 24, borderRadius: 8 }}>
          <img
            src={user.avatar_url}
            alt={user.name}
            width={100}
            style={{ borderRadius: "50%", marginBottom: 16 }}
          />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <p>👥 {user.followers} seguidores</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Ver no GitHub
          </a>
        </div>
      )}

      {/* 🧾 Lista de issues */}
      <IssuesAside>
        {issues.length > 0 ? (
          issues.map((issue) => (
            <Issues
              key={issue.id}
              id={issue.id}
              title={issue.title}
              body={issue.body}
              created_at={issue.created_at}
            />
          ))
        ) : (
          !loading && <p>🔎 Nenhuma issue encontrada!</p>
        )}
      </IssuesAside>
    </div>
  );
}
