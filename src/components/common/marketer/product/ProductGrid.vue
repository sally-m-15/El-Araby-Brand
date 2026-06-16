<template>
  <BaseSpinner v-if="loading" />

  <div
    v-else-if="!products.length"
    class="py-20 text-center text-gray-500"
  >
    لا توجد منتجات
  </div>

  <div
    v-else
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import BaseSpinner from '../home/BaseSpinner.vue';
import ProductCard from './ProductCard.vue';



defineProps({
  products: {
    type: Array,
    default: () => []
  },

  loading: {
    type: Boolean,
    default: false
  }
});
</script>