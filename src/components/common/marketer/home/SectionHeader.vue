
<template>
  <div class="flex justify-between items-center">
    <h2 class="text-2xl font-bold text-badge-bg">{{ title }}</h2>
<router-link 
      v-if="showButton"
      :to="getSeeAllRoute(title)" 
      class="bg-badge-bg hover:bg-badge-bg-hover text-white px-4 py-2 rounded-xl text-md flex items-center justify-between transition-colors cursor-pointer"
    >
      <span class="ml-2">مشاهدة الكل</span>
      <v-icon name="fa-arrow-circle-left" scale="1.2" />
    </router-link>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  showButton: {
    type: Boolean,
    default: true // لو فيه قسم مش عايزة فيه زرار "مشاهدة الكل" تقدري تخفيه بـ false
  }
});

defineEmits(['view-all']);

const getSeeAllRoute = (title) => {
  switch (title) {
    case 'أحدث المنتجات':
    case 'وصلت حديثاً':      
      return { name: 'products' }

    case 'الأفضل مبيعاً':
      return { name: 'best-sellers' }

    case 'منتجات الفئة':
      return { name: 'category-products' }

    default:
      return { name: 'marketer-home' }
  }
}
</script>