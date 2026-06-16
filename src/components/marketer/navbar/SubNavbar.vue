<template>
  <div class="bg-white shadow-2xl flex px-20 justify-center items-center">
    <div class="container mx-auto flex items-center gap-4 py-2">
      <MenuButton />
      <NavLinks />
    </div>
    <LanguageSelector />
  </div>
</template>

<script setup>
import MenuButton from '@/components/common/marketer/subNavbar/MenuButton.vue';
import NavLinks from '@/components/common/marketer/subNavbar/NavLinks.vue';
import LanguageSelector from '../dashboard/home/LanguageSelector.vue';




</script>