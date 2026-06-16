<template>
  <aside class="w-72 space-y-6">

<div class="bg-white rounded-lg p-4 border border-border text-right" dir="rtl">
  
<SectionHeader title="فلترة" />

  <select
    class="w-full border border-border rounded-md p-2 focus:shadow shadow-primary focus:outline-none"
  >
    <option value="latest">الأحدث</option>
    <option value="best-selling">الأكثر مبيعاً</option>
    <option value="top-rated">الأعلى تقييماً</option>
  </select>
</div>

    <PriceFilter />

    <BrandFilter />

    <CategoryFilter />

  </aside>
</template>

<script setup>
import BrandFilter from '@/components/common/marketer/product/BrandFilter.vue';
import CategoryFilter from '@/components/common/marketer/product/CategoryFilter.vue';
import PriceFilter from '@/components/common/marketer/product/PriceFilter.vue';
import SectionHeader from '@/components/common/marketer/product/SectionHeader.vue';


</script>