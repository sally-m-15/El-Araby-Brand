<template>
  <div class="bg-white rounded-lg p-4 border border-border">
<SectionHeader title="ماركات" />

    <div class="relative">
      <input
        type="text"
        placeholder="Search Brand"
        class="w-full h-10 pr-10 pl-3 border border-border rounded-md focus:shadow shadow-primary focus:outline-none"
      />
<v-icon
  name="ri-search-line"
  scale="1"
  class="absolute right-3 top-1/2 -translate-y-1/2 text-text-light"
/>
    </div>
  </div>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue';

</script>