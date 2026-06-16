<template>
  <div class="w-full px-10">
    <Form
      @submit="submitLogin"
      v-slot="{ values, meta }"
        :initial-values="initialValues"
      :validation-schema="loginSchema"
      class="flex flex-col gap-2"
    >
      <div
        v-for="field in getLoginFields"
        :key="field.id"
        :class="['flex flex-col py-2 lg:py-0 relative', field.id === 'email' ? 'col-span-2' : '']"
      >
        <!-- Field Label -->
        <label :for="field.id" class="text-md pt-8 font-bold font-sans">{{ field.name }}</label>
        <Field
          v-if="
            field.type !== 'select' && field.type !== 'category-select' && field.type !== 'password'
          "
          :placeholder="field.placeholder"
          :name="field.id"
          :type="field.type"
          :autocomplete="field.autocomplete"
          class="rounded-md border mt-1 text-xs md:text-lg focus:outline-none border-border focus:border-primary-light px-4 h-10"
        />

        <BasePasswordField
          v-else-if="field.type === 'password'"
          :name="field.id"
          :autocomplete="field.autocomplete"
          :icon="field.icon"
        />

        <v-icon
          v-if="field.icon && field.type !== 'password'"
          :name="field.icon"
          class="absolute top-20 left-3 -translate-y-1/2 cursor-pointer text-text"
        />
        <!-- Category Select -->
        <ErrorMessage :name="field.id" class="text-error text-sm mt-1" />
      </div>
      <!-- Accept Terms -->
      <div class="flex justify-between">
        <TermsCheckbox name="acceptTerms" id="terms" />
        <router-link :to="{ name: 'forgot-password' }">نسيت كلمه المرور</router-link>
      </div>
      <BaseButton type="submit" :disabled="!meta.valid" />
    </Form>
  </div>
</template>

<script setup>
import { registrationFields } from '@/data/auth/authData.js'
import { loginSchema } from '@/data/auth/schema/loginSchema'
import { ErrorMessage, Field, Form } from 'vee-validate'
import { useAuthStore } from '@/stores/auth/useAuthStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BasePasswordField from '../common/auth/BasePasswordField.vue'
import TermsCheckbox from '../common/auth/TermsCheckbox.vue'
import BaseButton from '../common/auth/BaseButton.vue'

const authStore = useAuthStore()
const route = useRoute()

const initialValues = {
  email: route.query.email || '',
  password: '',
};
const props = defineProps({
  role: {
    required: true,
  },
});

const getLoginFields = computed(() =>
  registrationFields.filter((field) => field.id === 'email' || field.id === 'password'),
)

async function submitLogin(values) {
  await authStore.handleLogin(values, props.role)
}
</script>

<style scoped>
:deep(input::placeholder) {
  font-size: 10px !important;
}
</style>
