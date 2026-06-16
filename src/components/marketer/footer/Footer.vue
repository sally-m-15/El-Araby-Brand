<template>
  <div class="w-full bg-gray-800 text-white  flex flex-col items-center pt-8 mt-10 gap-8">
    
    <div class="w-full max-w-7xl flex items-center justify-around">
      <div class="w-40">
        <AppLogo />
      </div>
      <FooterLinksGroup title="معلومات الحساب والشحن" :links="accountLinks" />
      <FooterLinksGroup title="مخصص" :links="customLinks" />
      <FooterLinksGroup title="عنا" :links="aboutLinks" />
    </div>

    <hr class="w-full border-gray-600" />

    <span class="text-center text-sm text-gray-400 block w-full pb-8">
      جميع الحقوق محفوظه @ العربي براند 2026
    </span>
  </div>
</template>

<script setup>
import AppLogo from '@/components/common/AppLogo.vue';
import FooterLinksGroup from '@/components/common/marketer/footer/FooterLinksGroup.vue';
import { accountLinks, customLinks, aboutLinks } from '@/data/global/footerLinks';
</script>

<style lang="scss" scoped>
</style>