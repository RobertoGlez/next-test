import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL del servidor JSON
  timeout: 10000,                  // Tiempo límite para las solicitudes
});

export default api;
