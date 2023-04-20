// Importação de biblioteca
import axios from 'axios';

// Criação da variável de URL do backend
const api = axios.create({
   baseURL: 'http://20.226.102.6:443/',
});

export default api;