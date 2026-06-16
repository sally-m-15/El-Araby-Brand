<template>
  <div class="flex">
    <div class="w-full lg:w-1/3 mt-14 xl:mt-6 pb-6 md:pb-0 flex flex-col items-center">
      <AuthHeaderInfo />
      <RegisterForm role="marketer" />
      <AuthFooterLink />
    </div>
    <div class="w-2/3 hidden lg:flex">
      <AuthIllustration />
    </div>
  </div>
</template>

<script setup>
import AuthFooterLink from '@/components/common/auth/AuthFooterLink.vue'
import AuthHeaderInfo from '@/components/common/auth/AuthHeaderInfo.vue'
import AuthIllustration from '@/components/common/auth/AuthIllustration.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
</script>

<style scoped></style>
