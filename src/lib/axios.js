import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Ganti dengan base URL API Anda
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
