<template>
  <div class="relative h-screen w-full overflow-hidden">
    
    <div
      class="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bgImage})` }"
    />

    <div
      class="relative z-10 h-full flex flex-col items-center justify-between py-10 lg:py-20"
    >
      <div class="w-50">
        <AppLogo />
      </div>

      <div class="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <RouterLink
          v-for="btn in authButtons"
          :key="btn.id"
          :to="{ name: btn.routeName }"
          class="bg-button hover:bg-button-hover w-full lg:w-auto text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md"
        >
          {{ btn.label }}
        </RouterLink>
      </div>

      <span class="text-xl pt-20 font-bold text-primary">
        Elaraby@gmail.com
      </span>
    </div>

  </div>
</template>

<script setup>
import AppLogo from '@/components/common/AppLogo.vue';
import bgImage from '../../assets/images/Gemini_Generated_Image_fk5vyhfk5vyhfk5v.png'
import { ref } from 'vue'

const authButtons = ref([
  { id: 1, label: 'Login As Affiliate', routeName: 'marketer-login' },
  { id: 2, label: 'Login As Seller', routeName: 'merchant-login' },
])
</script>

<style scoped></style>
