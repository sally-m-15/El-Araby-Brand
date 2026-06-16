<template>
  <div class="flex items-center mb-6 gap-3">
    <h2 class="text-lg font-bold text-gray-800 whitespace-nowrap">
      {{ title  }}
    </h2>

    <div class="grow h-px bg-gray-200"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>