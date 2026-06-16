<template>
  <div class="flex flex-col gap-6 mt-10 px-20">
    <ProductsHeader />

    <div class="flex gap-6">
        <ProductsSidebar
      :filters="filters"
      @update-filters="updateFilters"
    />

<ProductsContent
  :products="allProducts"
  :loading="isAllProductsLoading"
/>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import ProductsHeader from '@/components/marketer/dashboard/products/ProductsHeader.vue';
import ProductsSidebar from '@/components/marketer/dashboard/products/ProductsSidebar.vue';
import { useProductsStore } from '@/stores/home/useProductsStore';
import ProductsContent from '@/components/marketer/dashboard/products/ProductsContent.vue';

const productsStore = useProductsStore();

const {
  allProducts,
  isAllProductsLoading
} = storeToRefs(productsStore);

const filters = reactive({
  category: '',
  minPrice: null,
  maxPrice: null,
  brand: '',
  sortBy: 'latest'
});

const updateFilters = (newFilters) => {
  Object.assign(filters, newFilters);

  console.log(filters);
};

onMounted(() => {
  productsStore.fetchAllProducts();
});
</script>

<style lang="scss" scoped>

</style>