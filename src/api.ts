import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: "http://localhost:3001",
});

export default api;