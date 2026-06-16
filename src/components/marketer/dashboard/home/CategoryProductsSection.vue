<template>
  <section class="category-products-section w-full max-w-7xl mx-auto px-4 py-6 bg-[#F9F9FA]" dir="rtl">
    <SectionHeader 
      :title="selectedCategory ? `منتجات ${selectedCategory.name}` : 'منتجات الفئة'" 
      :show-button="!!selectedCategory && categoryProducts.length > 0"
      @view-all="selectedCategory ? goToCategoryPage(selectedCategory.id) : null" 
    />

    <BaseSpinner  v-if="isProductsLoading" message="جاري جلب المنتجات..." />

    <div v-elif="selectedCategory && categoryProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-4">
      <ProductCard 
        v-for="product in categoryProducts" 
        :key="product.id" 
        :product="product" 
      />
    </div>

    <div v-elif="!selectedCategory" class="text-center py-10 text-gray-400 text-sm border border-dashed border-gray-200 rounded-2xl mt-4 bg-white">
      برجاء اختيار فئة من الأعلى لعرض منتجاتها.
    </div>

    <div v-elif="selectedCategory && categoryProducts.length === 0" class="text-center py-10 text-gray-500 text-sm mt-4 bg-white rounded-2xl border border-gray-100">
      لا توجد منتجات متوفرة في هذه الفئة حالياً.
    </div>

  </section>
</template>

<script setup>
import { computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '@/stores/home/useCategoriesStore';
import SectionHeader from '@/components/common/marketer/home/SectionHeader.vue';
import BaseSpinner from '@/components/common/marketer/home/BaseSpinner.vue';
import ProductCard from '@/components/common/marketer/product/ProductCard.vue';



const categoriesStore = useCategoriesStore();
const { selectedCategory } = storeToRefs(categoriesStore);

// افترضي إنك هتضيفي المتغيرات دي جوه الـ categoriesStore أو ستور المنتجات
// هنا هربطهم للتوضيح، تقدري تطوعيها حسب الستور عندك
const categoryProducts = computed(() => categoriesStore.categoryProducts || []);
const isProductsLoading = computed(() => categoriesStore.isCategoryProductsLoading || false);

// مراقبة الفئة المختارة: أول ما تتغير، بنادي الـ API يجيب منتجاتها فوراً
watch(selectedCategory, (newCategory) => {
  if (newCategory) {
    // دالة جوه الـ ستور بتجيب الداتا بناء على الـ id
    categoriesStore.fetchProductsByCategory(newCategory.id);
  }
}, { immediate: true }); // immediate عشان لو فيه فئة مختارة أول ما الصفحة تفتح يلقطها

const goToCategoryPage = (id) => {
  // روت الصفحة الكاملة للفئة
};
</script>