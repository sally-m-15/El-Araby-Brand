<template>
  <div class="flex">
    <div class="w-full lg:w-1/3 flex flex-col items-center mt-14 xl:mt-6 pb-6 pt-6 md:pb-0">
      <div class="w-40">
        <AppLogo />
      </div>
      <AuthHeaderInfo />
      <LoginForm role="merchant" />
      <AuthFooterLink />
    </div>
    <div class="w-2/3 hidden lg:flex">
      <AuthIllustration />
    </div>
  </div>
</template>

<script setup>
import AppLogo from '@/components/common/AppLogo.vue'
import AuthFooterLink from '@/components/common/auth/AuthFooterLink.vue'
import AuthHeaderInfo from '@/components/common/auth/AuthHeaderInfo.vue'
import AuthIllustration from '@/components/common/auth/AuthIllustration.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
</script>

<style></style>
