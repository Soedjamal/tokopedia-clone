import apiClient from "../lib/axios";

export const uploadProduct = async (product) => {
  try {
    const formData = new FormData();
    formData.append("image", product.image);
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("feature", product.feature);
    formData.append("address", product.address);

    const response = await apiClient.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
