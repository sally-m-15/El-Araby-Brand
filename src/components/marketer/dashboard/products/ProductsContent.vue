<template>
  <div class="flex-1">
    <ProductGrid
      :products="products"
      :loading="loading"
    />
  </div>
</template>

<script setup>
import ProductGrid from '@/components/common/marketer/product/ProductGrid.vue';



defineProps({
  title: {
    type: String,
    default: 'المنتجات'
  },

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