import axios from 'axios'

export const servidor = axios.create({
    baseURL: 'http://localhost:3000/api'
})

