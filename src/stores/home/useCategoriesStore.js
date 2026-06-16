import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getAllCategories } from '@/services/home/categoriesService';
import { handleApiError } from '@/services/api/axiosClient';

export const useCategoriesStore = defineStore('categories', () => {
  const categoriesList = ref([]); 
  const selectedCategories = ref([]); 
  const isLoading = ref(false);
  const selectedCategory = ref(null);

  const fetchCategories = async () => {
if (categoriesList.value.length) return;
    try {
      isLoading.value = true;
      const response = await getAllCategories();
categoriesList.value = response.data || [];
    } catch (error) {
      console.error(error);
      handleApiError(error);
    } finally {
      isLoading.value = false;
    }
  };

const formattedCategoryIds = computed(() => {
 return selectedCategories.value.map(cat => cat.slug || cat);
});

const setSelectedCategory = (category) => {
  selectedCategory.value = category;
};

  const setCategories = (categories) => {
    selectedCategories.value = categories;
  };

  return { 
    //data
    categoriesList, 
    selectedCategories, 
    formattedCategoryIds,
    
    //looding
    isLoading, 

    //action
    fetchCategories, 
    setCategories,
    setSelectedCategory
  };
});