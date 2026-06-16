<template>
  <div class="latest-products-section w-full rounded-md max-w-7xl border-border mx-auto px-4 flex flex-col gap-6 shadow-2xl py-6 bg-[#F9F9FA]" dir="rtl">
    
    <SectionHeader
      title="أحدث المنتجات" 
      @view-all="goToLatestProductsPage" 
    />

    <BaseSpinner v-if="isLoading" message="جاري جلب أحدث المنتجات..." />

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      <ProductCard 
        v-for="item in latestProducts" 
        :key="item?.id" 
        :product="item" 
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductsStore } from '@/stores/home/useProductsStore';
import BaseSpinner from '@/components/common/marketer/home/BaseSpinner.vue';
import SectionHeader from '@/components/common/marketer/home/SectionHeader.vue';
import ProductCard from '@/components/common/marketer/product/ProductCard.vue';



const productsStore = useProductsStore();

// 🎯 التعديل هنا: سحبنا isLatestLoading من الستور وسميناه isLoading بالـ (:) عشان م نضطرش نغير الاسم فوق في الـ template
const { latestProducts, isLatestLoading: isLoading } = storeToRefs(productsStore);

onMounted(() => {
  productsStore.fetchLatestProducts();
});
</script>