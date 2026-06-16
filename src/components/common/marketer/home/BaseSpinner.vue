<template>
  
  <div class="flex flex-col items-center justify-center py-20 text-text-light gap-3 w-full animate-fade-in">
    <div class="w-8 h-8 border-4 border-badge-bg border-t-transparent rounded-full animate-spin"></div>
    
    <p v-if="message" class="text-sm font-medium text-gray-500">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'جاري التحميل...' // رسالة افتراضية لو مبعتيش نص
  }
});
</script>

<style scoped>
/* إضافة أنيميشن ناعم لظهور الـ Loading */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>