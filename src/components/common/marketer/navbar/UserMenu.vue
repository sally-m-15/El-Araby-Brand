<template>
  <!-- البروفايل والاسم -->
    <div class="relative flex gap-2 group">
    <div class="w-10 h-10 rounded-full flex items-center justify-center bg-white overflow-hidden">
        <img src="../../../../assets/images/profile.png" alt="profile" class="w-full h-full">
    </div>
    <div class="flex flex-col">
    <small>{{ authStore.user?.name }}  مرحبا سالي</small>
    <small>لوحة التحكم 
        <v-icon name="fa-caret-down" scale=".8" />
    </small>
    </div>

        <div
      class="absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-lg
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50"
    >
      <ul
       v-for="item in  profileMenu "
      >
        <li
          class=" ps-6 py-2 hover:bg-gray-100 cursor-pointer transition"
          :class="item.label === 'تسجيل خروج'? 'border-t border-border' : ''"
        >
        {{ item.label }}
        </li>
      </ul>
    </div>
    </div>

</template>

<script setup>
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { profileMenu } from'@/data/marketer/profileMenu'
const authStore = useAuthStore();

</script>

<style lang="scss" scoped>

</style>