import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getLatestProducts } from '@/services/home/productsService';
import {
  handleApiError,
  responseSuccess,
} from '@/services/api/axiosClient';

export const useProductsStore = defineStore('products', () => {
  // ==========================================
  // Home Sections
  // ==========================================
  const latestProducts = ref([]);
  const bestSellers = ref([]);
  const newArrivals = ref([]);

  // ==========================================
  // Products Page
  // ==========================================
  const allProducts = ref([]);

  // ==========================================
  // Loading States
  // ==========================================
  const isLatestLoading = ref(false);
  const isBestSellingLoading = ref(false);
  const isNewArrivalsLoading = ref(false);
  const isAllProductsLoading = ref(false);

  // ==========================================
  // Latest Products
  // ==========================================
  const fetchLatestProducts = async () => {
    if (latestProducts.value.length > 0) return;

    try {
      isLatestLoading.value = true;

      const response = await getLatestProducts();

      latestProducts.value = response.data.slice(0, 5);

      responseSuccess(response);
    } catch (error) {
      console.error(error);
      handleApiError(error);
    } finally {
      isLatestLoading.value = false;
    }
  };

  // ==========================================
  // Best Sellers
  // ==========================================
  const fetchBestSellers = async () => {
    if (bestSellers.value.length > 0) return;

    try {
      isBestSellingLoading.value = true;

      const response = await getLatestProducts();

      bestSellers.value = response.data.slice(5, 10);

      responseSuccess(response);
    } catch (error) {
      console.error(error);
      handleApiError(error);
    } finally {
      isBestSellingLoading.value = false;
    }
  };

  // ==========================================
  // New Arrivals
  // ==========================================
  const fetchNewArrivals = async () => {
    if (newArrivals.value.length > 0) return;

    try {
      isNewArrivalsLoading.value = true;

      const response = await getLatestProducts();

      newArrivals.value = response.data.slice(10, 15);

      responseSuccess(response);
    } catch (error) {
      console.error(error);
      handleApiError(error);
    } finally {
      isNewArrivalsLoading.value = false;
    }
  };

  // ==========================================
  // Products Page
  // ==========================================
  const fetchAllProducts = async (params = {}) => {
    try {
      isAllProductsLoading.value = true;

      // مستقبلاً:
      // const response = await getProducts(params);

      const response = await getLatestProducts();

      allProducts.value = response.data;

      responseSuccess(response);

      return response;
    } catch (error) {
      console.error(error);
      handleApiError(error);
      throw error;
    } finally {
      isAllProductsLoading.value = false;
    }
  };

  return {
    // Data
    latestProducts,
    bestSellers,
    newArrivals,
    allProducts,

    // Loading
    isLatestLoading,
    isBestSellingLoading,
    isNewArrivalsLoading,
    isAllProductsLoading,

    // Actions
    fetchLatestProducts,
    fetchBestSellers,
    fetchNewArrivals,
    fetchAllProducts,
  };
});