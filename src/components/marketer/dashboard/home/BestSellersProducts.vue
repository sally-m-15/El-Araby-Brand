<template>
    <!-- قسم الافضل مبيعا  -->
  <div class="latest-products-section w-full rounded-md max-w-7xl border-border mx-auto px-4 flex flex-col gap-6 shadow-2xl py-6 bg-[#F9F9FA]" dir="rtl">
    
<SectionHeader
      title="الأفضل مبيعا" 
      @view-all="goToBestSellersPage" 
    />

<BaseSpinner v-if="isBestSellingLoading" message="جاري جلب أحدث المنتجات..." />

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      
     <ProductCard 
  v-for="item in bestSellers" 
  :key="item?.id" 
  :product="item" 
/>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import SectionHeader from '@/components/common/marketer/home/SectionHeader.vue';
import BaseSpinner from '@/components/common/marketer/home/BaseSpinner.vue';
import { useProductsStore } from '@/stores/home/useProductsStore';
import ProductCard from '@/components/common/marketer/product/ProductCard.vue';


// ربط الستور وفك المتغيرات بحذر عشان نحافظ على الـ Reactivity
const router = useRouter();
const productsStore = useProductsStore();

// 3️⃣ فككنا المتغيرات الجديدة الخاصة بالأفضل مبيعاً من الستور المطور
const { bestSellers, isBestSellingLoading } = storeToRefs(productsStore);

// 4️⃣ استدعاء دالة الأفضل مبيعاً أول ما القسم يفتح
onMounted(() => {
  productsStore.fetchBestSellers();
});

// دالة التوجيه لصفحة كل المنتجات الأكثر مبيعاً
const goToBestSellersPage = () => {
  router.push({ name: 'all-products' }); // أو اسم راوت صفحة الأفضل مبيعاً لو منفصلة
};
</script>