<!-- ul -->
<template>
  <ul class="flex gap-6 items-center justify-center">
    <li v-for="item in subMenuItems" :key="item.id" class="menu-item">
      <router-link :to="item.path" class="menu-link">
    <span class=" text-xl">{{ item.name }}</span>
      </router-link>
    </li>
    <li>
      <router-link>
<img  src="../../../../assets/images/easy-icon.png" alt="Logo" class="w-6" />
      </router-link>
    </li>
  </ul>
</template>
 
 <script setup>
import { subMenuItems } from '@/data/marketer/subMenuData';

 
 </script>
 
 <style lang="scss" scoped>
 
 
 </style>