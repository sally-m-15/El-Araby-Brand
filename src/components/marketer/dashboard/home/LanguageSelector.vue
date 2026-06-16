<!-- الجزء الخاص باللغه -->
<template>
  <div class=" flex  "
          v-for="lang in languagesList" 
        :key="lang.code" 
  >
        <v-icon
        :name="lang.icon"
        scale="1.2"
        class="text-gray-700"
      />
    <select v-model="currentLang" class="lang-select w-20">
      <option 
        :value="lang.code"
        class="w-40"
      >
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { languagesList } from '@/data/global/languagesData';
import { ref } from 'vue';

// اللغة الافتراضية المختارة حالياً
const currentLang = ref('ar');
</script>

<style lang="scss" scoped>

</style>