import apiClient from "../lib/axios";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data.data; // Sesuaikan dengan struktur data yang diterima
  } catch (error) {
    throw error;
  }
};
