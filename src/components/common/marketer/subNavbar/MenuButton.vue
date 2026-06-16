<template>
  <div class="relative group"
  >
    <v-icon
   name="fa-bars"
   scale="1.5"
   class="text-text"
   />

      <div
      class="absolute top-full right-0  w-60 px-6 bg-white rounded-md shadow-lg
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50"
    >
      <h3 class="text-gray-500 text-2xl">الفئات</h3>
      <div class="border-b border-border ">
               <ul
       v-for="item in  categories "
       :key="item.id"
      >
        <li
          class=" ps-6 py-2 hover:bg-gray-100 cursor-pointer transition "
        >
        {{ item.name }}
        </li>
      </ul>
      </div>

      <router-link>
         <button class="py-2">شاهد الكل </button>
      </router-link> 
    </div>
   </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth/useAuthStore'

const authStore = useAuthStore()

const categories = computed(() => {
  return authStore.user?.categories || []
})
</script>