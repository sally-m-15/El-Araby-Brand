import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getLatestProducts } from '@/services/home/productsService';
import {
  handleApiError,
  responseSuccess,
} from '@/services/api/axiosClient';
import { reactive } from 'vue';

export const useProductsStore = defineStore('products', () => {
  // Home Sections
  const latestProducts = ref([]);
  const bestSellers = ref([]);
  const newArrivals = ref([]);

  // Products Page
  const allProducts = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const totalProducts = ref(0);

  // Loading States
  const isLatestLoading = ref(false);
  const isBestSellingLoading = ref(false);
  const isNewArrivalsLoading = ref(false);
  const isAllProductsLoading = ref(false);

  const filters = reactive({
  category: '',
  minPrice: null,
  maxPrice: null,
  brand: '',
  sortBy: 'latest'
  });

  // Latest Products
  const fetchLatestProducts = async () => {
    if (latestProducts.value.length > 0) return;

    try {
      isLatestLoading.value = true;

      const response = await getLatestProducts();

      latestProducts.value = response.data.products.slice(0, 5);

      responseSuccess(response);
    } catch (error) {
      console.error(error);
      handleApiError(error);
    } finally {
      isLatestLoading.value = false;
    }
  };

  // Best Sellers
  const fetchBestSellers = async () => {
    if (bestSellers.value.length > 0) return;

    try {
      isBestSellingLoading.value = true;

      const response = await getLatestProducts();

bestSellers.value = response.data.products.slice(5, 10);
      responseSuccess(response);
    } catch (error) {
      handleApiError(error);
    } finally {
      isBestSellingLoading.value = false;
    }
  };

  // New Arrivals
  const fetchNewArrivals = async () => {
    if (newArrivals.value.length > 0) return;

    try {
      isNewArrivalsLoading.value = true;

      const response = await getLatestProducts();

newArrivals.value = response.data.products.slice(10, 15);
      responseSuccess(response);
    } catch (error) {
      handleApiError(error);
    } finally {
      isNewArrivalsLoading.value = false;
    }
  };

  // Products Page
  const fetchAllProducts = async (params = {}) => {
    try {
      isAllProductsLoading.value = true;


      const response = await getLatestProducts();

      //const response = await getProducts({page: currentPage.value,...filters});

      allProducts.value = response.data.data;

      currentPage.value = response.data.current_page;

      lastPage.value = response.data.last_page;

      totalProducts.value = response.data.total;

      allProducts.value = response.data.products;
      responseSuccess(response);
      return response;
    } catch (error) {
      handleApiError(error);
    } finally {
      isAllProductsLoading.value = false;
    }
  };

 const updateFilters = (newFilters) => {
  Object.assign(filters, newFilters);
};
  
  return {
    // Data
    latestProducts,
    bestSellers,
    newArrivals,
    allProducts,
    filters,

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
    updateFilters
  };
});