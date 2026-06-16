<template>
  <!-- الجزء الخاص بالموافقه عل الشروط -->
  <div class="col-span-2 flex items-center gap-2">
    <Field
      :name="name"
      type="checkbox"
      :unchecked-value="false"
      :value="true"
      class="w-4 h-4 text-xs md:text-lg"
    />

    <label :for="id" class="text-sm text-text-light">
      {{ termsText }}
    </label>
  </div>

  <ErrorMessage
    :name="name"
    class="text-error text-sm"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
  name: String,
  id: String,
})

const route = useRoute()

const termsText = computed(() => {
  if (
    route.name === 'marketer-register' ||
    route.name === 'merchant-register'
  ) {
    return 'أوافق على الشروط والأحكام'
  }

  return 'تذكرني'
})
</script>