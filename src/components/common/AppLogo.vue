
<template>
  <RouterLink :to="routerLink">
      <img
      src="../../assets/images/WhatsApp_Image_2026-06-10_at_1.28.52_PM-removebg-preview.png"
      alt="Logo"
      class="w-full"
    />
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'


const route = useRoute();
const AuthPages = [
  '/marketer/login',
  '/marketer/register',
  '/marketer/forgotpassword',
  '/marketer/verify-code',
  '/merchant/login',
  '/merchant/register',
  '/merchant/forgotpassword',
  '/merchant/verify-code',
  '/select-role',
  '/forgot-password',
  '/verify-code',
  '/reset-password',
];

const routerLink = computed(() => {
  if (AuthPages.includes(route.path)) {
    return '/select-role';
  }

  if (route.path.startsWith('/marketer')) {
    return '/marketer/home';
  }

 // if (route.path.startsWith('/merchant')) {
 //   return '/merchant/home';
 // }

  return '/select-role';
});

</script>