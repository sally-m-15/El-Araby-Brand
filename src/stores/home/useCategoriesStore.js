import { defineStore } from 'pinia';
import { ref, computed } from 'vue'; // 🎯 زودي الـ computed هنا
import { getAllCategories } from '@/services/home/categoriesService';
import { handleApiError } from '@/services/api/axiosClient';

export const useCategoriesStore = defineStore('categories', () => {
  const categoriesList = ref([]); 
  const selectedCategories = ref([]); // 🎯 غيرنا الاسم لـ selectedCategories لأنها هتشيل الأوبجكتس كاملة من الـ v-select
  const isLoading = ref(false);

  const fetchCategories = async () => {
if (categoriesList.value.length) return;
    try {
      isLoading.value = true;
      const response = await getAllCategories();
    console.log(response.data);
      categoriesList.value =
  response.data?.categories ||
  response.data?.data ||
  response.data ||
  [];
    } catch (error) {
      console.error(error);
      handleApiError(error);
    } finally {
      isLoading.value = false;
    }
  };

const formattedCategoryIds = computed(() => {
  return selectedCategories.value;
});

  const setCategories = (categories) => {
    selectedCategories.value = categories;
  };

  return { 
    categoriesList, 
    selectedCategories, 
    formattedCategoryIds,
    isLoading, 
    fetchCategories, 
    setCategories 
  };
});