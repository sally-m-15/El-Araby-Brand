<template>
  <!-- كتابه الباسورد الجديد -->
  <Form v-slot="{ meta }" :validation-schema="resetPasswordSchema">
    <div class="my-6" v-for="field in resetPasswordFields" :key="field.id">
      <label>{{ field.name }}</label>

      <BasePasswordField :name="field.id" :autocomplete="field.autocomplete" :icon="field.icon" />

      <ErrorMessage :name="field.id" class="text-error text-sm mt-1" />
    </div>
    <BaseButton type="submit" :disabled="!meta.valid" />
  </Form>
</template>

<script setup>
import { registrationFields } from '@/data/auth/authData'
import { ErrorMessage, Form } from 'vee-validate'
import { computed } from 'vue'
import BasePasswordField from '../common/auth/BasePasswordField.vue'
import { resetPasswordSchema } from '../../data/auth/schema/resetPasswordSchema.js'
import BaseButton from '../common/auth/BaseButton.vue'

const resetPasswordFields = computed(() =>
  registrationFields.filter((field) => field.id === 'password' || field.id === 'confirmPassword'),
)

// ناقص داله الsubmit
</script>

<style lang="scss" scoped></style>
