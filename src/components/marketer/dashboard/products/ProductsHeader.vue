<template>
  <div class="flex items-center justify-between mb-6">

    <h2 class="text-2xl font-bold text-gray-800">
      {{ title}} 
      <span class="text-sm font-normal text-gray-500">
        ({{ totalProducts }} قطعة)
      </span>
    </h2>

    <div class="flex items-center gap-2">
      <span class="font-medium text-gray-700 text-xl">
        صنف حسب
      </span>

      <select
        class="w-48 h-12 px-3 border border-border rounded-md focus:shadow shadow-primary focus:outline-none"
      >
        <option value="latest">أحدث</option>
        <option value="price-asc">منخفض - مرتفع السعر</option>
        <option value="price-desc">مرتفع - منخفض السعر</option>
        <option value="name-asc">A - Z</option>
        <option value="name-desc">Z - A</option>
      </select>
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  totalProducts: Number
});
</script>