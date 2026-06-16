<template>
  <div class="flex flex-col gap-6 mt-10 px-20">
    <ProductsHeader 
  :title="pageTitle" 
  :totalProducts="allProducts.length" 
/>

    <div class="flex gap-6">
        <ProductsSidebar
      :filters="productsStore.filters"
      @update-filters="productsStore.updateFilters"
    />

<ProductsContent
  :products="allProducts"
  :loading="isAllProductsLoading"
/>
    </div>
    <Pagination />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import ProductsHeader from '@/components/marketer/dashboard/products/ProductsHeader.vue';
import ProductsSidebar from '@/components/marketer/dashboard/products/ProductsSidebar.vue';
import { useProductsStore } from '@/stores/home/useProductsStore';
import ProductsContent from '@/components/marketer/dashboard/products/ProductsContent.vue';
import Pagination from '@/components/marketer/dashboard/products/Pagination.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const productsStore = useProductsStore();
const route = useRoute();

const {
  allProducts,
  isAllProductsLoading
} = storeToRefs(productsStore);

const pageTitle = computed(() => {
  if (productsStore.filters.category) {
return `منتجات (${productsStore.filters.category})`;
  }

  switch (route.query.type) {
    case 'latest':
      return 'أحدث المنتجات';

    case 'new-arrivals':
      return 'وصلت حديثاً';

    case 'best-sellers':
      return 'الأفضل مبيعاً';

    default:
      return 'كل المنتجات';
  }
});


onMounted(async () => {
  if (route.query.type) {
    productsStore.filters.category = '';
  }

  await productsStore.fetchAllProducts();

  console.log('أول منتج', allProducts.value[0]);
});
</script>

<style lang="scss" scoped>

</style>