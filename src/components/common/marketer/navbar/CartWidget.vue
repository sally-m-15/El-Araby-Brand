<template>
    <!-- عربة التسوق ايقونة-->
  <div class="flex items-center gap-3">
    <div
      class="relative w-10 h-10 bg-white rounded-full flex items-center justify-center"
    >
      <v-icon
        name="fa-shopping-cart"
        scale="1.2"
        class="text-gray-700"
      />

      <span
        class="absolute bottom-7 left-6 w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center"
      >
        0
      </span>
    </div>
        <div class="flex flex-col items-end">
      <small class="text-xs text-gray-600">
        عربة التسوق
      </small>

      <small class="font-medium">
        0.0 ج.م
      </small>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>