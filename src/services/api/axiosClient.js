import axios from "axios";
import { toast } from "vue3-toastify";

//'http://127.0.0.1:8000'  
export const api = axios.create({
baseURL: 'https://fakestoreapi.com'
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

if (token) {
  config.headers = config.headers || {};
  config.headers.Authorization = `Bearer ${token}`;
}

  return config;
});


export function responseSuccess(response) {
  const message =
    response.data?.message ??
    "تمت العمليه بنجاح";
  toast.success(message);
}

export function handleApiError(err) {
  const errorMessage = err.response?.data?.message ?? "حدث خطأ ما يرجي المحاوله مره اخري"
  toast.error(errorMessage);
};