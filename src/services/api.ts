// Importa a biblioteca Axios para fazer requisições HTTP
import axios from "axios";

// Cria uma instância do Axios com uma base URL definida
export const api = axios.create({
  baseURL: "https://api.github.com", // Base da API do GitHub
});
