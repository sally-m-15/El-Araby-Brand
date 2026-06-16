import { api } from "../api/axiosClient";

export const getAllCategories = () => {
  return api.get("/products/categories");
};