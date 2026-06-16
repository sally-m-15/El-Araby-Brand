<template>
  <div class="w-full flex flex-col items-center h-screen bg-gray-200">
    <div class="mt-10 w-64">
      <AppLogo />
    </div>
    <div class="shadow-xl w-1/2 py-10 mt-10 bg-white px-10">
      <AuthHeaderInfo />
      <ResetPasswordForm />
    </div>
  </div>
</template>

<script setup>
import ResetPasswordForm from '@/components/auth/ResetPasswordForm.vue';
import AppLogo from '@/components/common/AppLogo.vue';
import AuthHeaderInfo from '@/components/common/auth/AuthHeaderInfo.vue';


</script>

<style lang="scss" scoped></style>
