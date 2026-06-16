import { api } from "../api/axiosClient";         

// دالة لجلب أحدث المنتجات من السيرفر
export const getLatestProducts = () => {
  return api.get("/products");
};