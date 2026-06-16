<template>
<div 
    v-if="product" 
    class="group bg-white border border-border rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300 w-full max-w-60 mx-auto text-right cursor-pointer" 
    dir="rtl"
  >
    
    <div class="relative w-full aspect-square max-h-50 rounded-t-xl bg-border flex items-center justify-center mb-2 border border-border overflow-hidden">
      
      <button class="absolute bottom-2 left-2 bg-white/80 hover:bg-white text-text hover:text-red-500 rounded-full p-1.5 shadow-sm transition z-10 flex items-center justify-center">
          <v-icon name="fa-regular-heart" scale="0.8" />
      </button>

      <img 
        v-if="product?.image" 
        :src="product.image" 
        :alt="product.title" 
        class="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
      />
      
      <div v-else class="text-gray-300 flex flex-col items-center gap-2">
        <svg class="w-12 h-12 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.75 9C15.75 10.2426 14.7426 11.25 13.5 11.25C12.2574 11.25 11.25 10.2426 11.25 9C11.25 7.75736 12.2574 6.75 13.5 6.75C14.7426 6.75 15.75 7.75736 15.75 9Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.47559 15.6309L8.43166 10.6748C8.95886 10.1476 9.81313 10.1476 10.3403 10.6748L15 15.3345M13.4614 13.7959L15.9317 11.3257C16.4589 10.7985 17.3131 10.7985 17.8403 11.3257L20.814 14.2993" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

<div class="px-4 py-4">
      <div class="flex justify-between items-baseline mb-1">
      <h4 class="font-bold text-badge-bg-hover text-base">
        {{ product.price }} <span class="text-xs font-normal">جم</span>
      </h4>
      <span class="text-[11px] text-text font-mono">ID {{ product.id }}</span>
    </div>

    <h3 class="text-gray-700 text-xs font-medium mb-3 h-8 line-clamp-2 leading-relaxed">
      {{ product.title }}
    </h3>

    <div class="grid grid-cols-2 gap-2 text-center text-[11px] mb-3">
      <div class="bg-gray-50/70 p-2 rounded-xl border border-gray-50">
        <span class=" block text-md mb-0.5 font-font">المخزون</span>
        <span class="font-medium font-font">{{ product.stock }}</span>
      </div>
      <div class="bg-gray-50/70 p-2 rounded-xl border border-gray-50">
        <span class=" block mb-0.5">عمولة</span>
        <span class="font-bold text-badge-bg">{{ product.commission }}</span>
      </div>
    </div>

    <button class="w-full bg-badge-bg hover:bg-badge-bg-hover text-white py-1 rounded-md  flex items-center justify-center gap-1.5 transition-colors font-medium shadow-sm shadow-purple-100">
      <span class="text-sm">🛒</span>
      <span class="font-font text-lg font-bold">أضف للعربة</span>
    </button>
</div>

  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>