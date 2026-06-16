
<template>
  <section  class="latest-products-section w-full rounded-md max-w-7xl border-border mx-auto px-4 flex flex-col gap-6 shadow-2xl py-6 bg-[#F9F9FA]" dir="rtl">
    
<SectionHeader 
      title="الفئات" 
      @view-all="goToLatestProductsPage" 
    />

<BaseSpinner v-if="isLoading" message="جاري جلب الفئات..." />

    <div v-else class="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none">
      <CategoryCard 
        v-for="cat in categoriesStore.categoriesList" 
        :key="cat.id"
        :category="cat"
        :is-active="categoriesStore.selectedCategory?.id === cat.id"
        @select="categoriesStore.setCategory"
      />
    </div>

  </section>
</template>
<script setup>


import BaseSpinner from '@/components/common/marketer/home/BaseSpinner.vue';
import CategoryCard from '@/components/common/marketer/home/CategoryCard.vue';
import SectionHeader from '@/components/common/marketer/home/SectionHeader.vue';
import { useCategoriesStore } from '@/stores/home/useCategoriesStore';
import { onMounted } from 'vue';


// ربط الـ Store
const categoriesStore = useCategoriesStore();

// جلب البيانات أول ما الكومبوننت يفتح
onMounted(() => {
  categoriesStore.fetchCategories();
});
</script>

<style scoped>
/* إخفاء السكرول بار عشان الشكل يفضل كلين والمسوق يقدر يعمل سحب بصباعه في الموبايل */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>