<template>
  <!-- البحث -->
    <div class="relative hidden w-96 lg:block">
      <div class="absolute left-0 justify-center flex items-center pointer-events-none text-white bg-black w-16 rounded-l-md rounded-r-none h-10">
        <v-icon name="ri-search-line" scale="1" />
      </div>
      <input
      v-model="search"
      @input="getSuggestions"
        type="text"
        placeholder="بحث"
        class="block text-sm w-full pr-8 pl-16 py-2 border border-black focus:border-2 rounded-md h-10 bg-white focus:outline-none"
      />
<div
  v-if="search && suggestions.length"
  class="absolute top-full right-0  w-full bg-white rounded-md shadow-lg z-50"
>
  <ul
        v-for="item in suggestions"
      :key="item.id"
        @mouseenter="selectSuggestion(item)"
      class="px-8 py-3 cursor-pointer"
  >
    <li
    >
      {{ item.name }}
    </li>
    <hr class="text-border">
  </ul>
</div>
    </div>
</template>

<script setup>
import { useSearch } from "@/composables/marketer/useSearch";

const {
  search,
  suggestions,
  getSuggestions
} = useSearch();

const selectSuggestion = (item) => {
  search.value = item.name;
};
</script>

<style lang="scss" scoped>

</style>