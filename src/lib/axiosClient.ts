import axios from 'axios';
const baseUrl = process.env.BACKEND_URL || 'https://67798b43482f42b62e9190b4.mockapi.io/api/';
const api = axios.create({
  baseURL:baseUrl, // URL del servidor JSON
  timeout: 10000,                  // Tiempo límite para las solicitudes
});
console.log('conecting to ',  baseUrl)

// Interceptor para registrar las solicitudes
api.interceptors.request.use((config) => {
  console.log('Request:', config.method?.toUpperCase(), config.url);
  console.log('Data:', config.data);
  return config;
});

// Interceptor para registrar las respuestas
api.interceptors.response.use(
  (response) => {
    console.log('Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('Error response:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default api;
