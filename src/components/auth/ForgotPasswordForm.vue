<template>
  <!-- صفحه كتابه email لتغير الباسورد  -->
  <Form
    @submit="submitForgotPassword"
    :validation-schema="forgotPasswordSchema"
    v-slot="{ meta }"
    class="flex flex-col gap-4 mx-10"
  >
    <div v-for="field in forgotPasswordFields" :key="field.id" class="flex flex-col relative">
      <Field
        :name="field.id"
        :type="field.type"
        :placeholder="field.placeholder"
        :autocomplete="field.autocomplete"
        class="rounded-md border mt-1 text-xs md:text-lg focus:outline-none border-border focus:border-primary-light px-4 h-10"
      />

      <v-icon
        :name="field.icon"
        class="absolute top-6 left-3 -translate-y-1/2 cursor-pointer text-text"
      />

      <ErrorMessage :name="field.id" class="text-error text-sm mt-1" />
    </div>

    <BaseButton type="submit"   :disabled="!meta.valid || authStore.isLoading" />
  </Form>
</template>

<script setup>
import { registrationFields } from '@/data/auth/authData'
import { forgotPasswordSchema } from '@/data/auth/schema/forgotPasswordSchema'
import { ErrorMessage, Field, Form } from 'vee-validate'
import { computed } from 'vue'
import BaseButton from '../common/auth/BaseButton.vue'
import { useAuthStore } from '@/stores/auth/useAuthStore.js'

const authStore = useAuthStore()


const forgotPasswordFields = computed(() =>
  registrationFields.filter((field) => field.id === 'email'),
)

const submitForgotPassword = async (values) => {
  await authStore.handleForgotPassword(values.email)
};
</script>

<style scoped></style>
