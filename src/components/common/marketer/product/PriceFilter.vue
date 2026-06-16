<template>
  <div class="bg-white rounded-lg p-4 border border-border">
<SectionHeader title="السعر" />

    <div class="space-y-4">
      <input
        type="number"
        placeholder="ج.م"
        class="w-full h-10 px-3 border border-border rounded-md focus:shadow shadow-primary focus:outline-none"
      />

      <div class="text-center">
        إلى
      </div>

      <input
        type="number"
        placeholder="ج.م"
        class="w-full h-10 px-3 border border-border rounded-md focus:shadow shadow-primary focus:outline-none"
      />

      <button
        class="w-full h-10 rounded-md bg-gray-600 text-white"
      >
        بحث
      </button>
    </div>
  </div>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue';

</script>