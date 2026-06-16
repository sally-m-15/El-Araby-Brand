<template>
  <div class="w-full flex flex-col items-center  h-screen bg-gray-200">
    <div class="mt-10 w-32">
      <AppLogo />
    </div>
    <div class="shadow-xl w-1/2  py-14 px-6 mt-10 bg-white">
      <AuthHeaderInfo />
      <ForgotPasswordForm />
    </div>
  </div>
</template>

<script setup>
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm.vue';
import AppLogo from '@/components/common/AppLogo.vue';
import AuthHeaderInfo from '@/components/common/auth/AuthHeaderInfo.vue';


</script>

<style lang="scss" scoped></style>
