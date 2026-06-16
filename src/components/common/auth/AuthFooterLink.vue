<template>
  <!-- الجزء الخاص بالتنقل بين login - register -->
  <div class="flex justify-center py-4">
    <RouterLink
      :to="routeLink"
      class="hover:text-primary text-text text-lg font-medium"
    >
      {{ footerText }}
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const routeLink = computed(() => {
  switch (route.name) {
    case 'marketer-login':
      return { name: 'marketer-register' }

    case 'merchant-login':
      return { name: 'merchant-register' }

    case 'marketer-register':
      return { name: 'marketer-login' }

    case 'merchant-register':
      return { name: 'merchant-login' }

      case 'reset-password' :
        return { name: ''}
    default:
      return '/'
  }
})

const footerText = computed(() => {
  if (
    route.name === 'marketer-register' ||
    route.name === 'merchant-register'
  ) {
    return 'هل لديك حساب؟ تسجيل الدخول!'
  }
  if (
    route.name === 'marketer-login' ||
    route.name === 'merchant-login'
  ) {
  return 'ليس لديك حساب؟ افتح حساب الآن' 
 }
})
</script>