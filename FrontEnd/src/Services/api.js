import axios from 'axios'

// En producción (Vercel) el frontend y el servidor comparten dominio: /api va al servicio "server".
// En local, vite.config.js redirige /api a http://localhost:3000.
export const servidor = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '/api'
})
