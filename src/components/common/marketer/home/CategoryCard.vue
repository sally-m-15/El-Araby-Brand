
<template>
  <div 
    @click="$emit('select', category)"
    class="flex flex-col items-center gap-2 cursor-pointer group select-none"
  >
    <div 
      class="w-20 h-20 rounded-full border-2 p-1 flex items-center justify-center bg-white transition-all duration-300"
      :class="isActive ? 'border-[#4A1D6D] shadow-md scale-105' : 'border-gray-200 group-hover:border-purple-300'"
    >
      <img 
        :src="category.image" 
        :alt="category.name"
        class="w-full h-full rounded-full object-cover"
      />
    </div>
    
    <span 
      class="text-xs font-medium transition-colors duration-200"
      :class="isActive ? 'text-[#4A1D6D] font-bold' : 'text-gray-700 group-hover:text-[#4A1D6D]'"
    >
      {{ category.name }}
    </span>
  </div>
</template>
<script setup>
// بنستقبل بيانات الفئة كـ props عشان المكوّن ده يكون غبي (Dumb Component) ومجرد بيعرض داتا
defineProps({
  category: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

// بنعرف الـ Emit عشان لما المسوق يضغط على الكارت يبلغ الأب فوراً
defineEmits(['select']);
</script>
<style>
</style>