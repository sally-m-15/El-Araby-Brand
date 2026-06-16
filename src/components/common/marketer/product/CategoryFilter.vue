<template>
  <div class="bg-white rounded-lg p-4 border border-border">
<section-header title="الفئات" />

    <div v-if="isLoading">
      جاري تحميل الفئات...
    </div>

    <ul
      v-else
      class="space-y-3"
    >
      <li
        v-for="category in categoriesList"
        :key="category"
        class="flex items-center justify-between cursor-pointer hover:text-primary transition-colors"
      >

        <span>
          <v-icon name="bi-tag" scale="0.8" />
          {{ category }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '@/stores/home/useCategoriesStore';
import SectionHeader from './SectionHeader.vue';

const categoriesStore = useCategoriesStore();

const {
  categoriesList,
  isLoading
} = storeToRefs(categoriesStore);

onMounted(() => {
  categoriesStore.fetchCategories();
});
</script>