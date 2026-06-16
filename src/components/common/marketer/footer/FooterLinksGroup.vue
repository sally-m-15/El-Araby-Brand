<template>
  <div class="flex flex-col gap-4">
    <h3 class="text-xl font-bold transition-colors duration-200">
      {{ title }}
    </h3>

    <ul class="flex flex-col gap-2.5">
      <li v-for="(link, index) in links" :key="index">
        <router-link 
          :to="link.url" 
          class=" hover:text-[#E9CBF2] text-sm transition-colors duration-200 block py-0.5"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    required: true,
    default: () => [] 
  }
});
</script>