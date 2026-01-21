import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// export const api = axios.create({
//   baseURL: 'http://localhost:4001',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// })
