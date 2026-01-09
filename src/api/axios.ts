import axios from 'axios'

export const api = axios.create({
  baseURL: "https://dev-api.pakargaming.id",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
