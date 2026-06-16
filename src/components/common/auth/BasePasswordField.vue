<template>
  <!-- الجزء الخاص input password -->
  <div class="relative">
    <Field
      :name="name"
      :type="show ? 'text' : 'password'"
      :autocomplete="autocomplete"
      class="rounded-md border mt-1 focus:outline-none border-border focus:border-primary-light px-4 h-10 w-full"
    />

    <v-icon
      :name="icon"
      @click="show = !show"
      class="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer text-xs md:text-lg text-text"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Field } from 'vee-validate'

defineProps({
  name: {
    required: true,
  },
  autocomplete: {
    default: 'current-password',
  },
  icon: 'icon'
})

const show = ref(false)
</script>