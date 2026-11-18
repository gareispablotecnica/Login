import axios from 'axios'

// En local usa el backend en localhost; en Vercel define VITE_API_URL
// (ej: https://tu-backend.onrender.com/api) en Settings > Environment Variables.
export const servidor = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
})
