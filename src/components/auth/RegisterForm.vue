<template>
  <div class="px-2 md:px-6 lg:px-10 flex flex-col">
    <!-- Registration Form -->
    <Form
      @submit="submitRegister"
      v-slot="{ values, meta }"
      :validation-schema="validationSchema"
      :class="formClasses"
      class="md:grid grid-cols-2 gap-y-2 gap-x-6"
    >
      <div
        v-for="field in fields"
        :key="field.id"
        :class="['flex flex-col relative py-2 lg:py-0', field.id === 'email' ? 'col-span-2' : '']"
      >
        <!-- Field Label -->
        <label :for="field.id" class="text-md font-bold font-sans">{{ field.name }}</label>
        <Field
          v-if="
            field.type !== 'select' && field.type !== 'category-select' && field.type !== 'password'
          "
          :placeholder="field.placeholder"
          :name="field.id"
          :type="field.type"
          :autocomplete="field.autocomplete"
          class="rounded-md border mt-1 focus:outline-none text-xs md:text-lg border-border focus:border-primary-light px-4 h-10"
        />
        <BasePasswordField
          v-else-if="field.type === 'password'"
          :name="field.id"
          :autocomplete="field.autocomplete"
          :icon="field.icon"
        />

        <!-- Select Field -->
        <Field
          v-else-if="field.type === 'select'"
          :name="field.id"
          as="select"
          class="rounded-md border focus:outline-none border-border focus:border-primary-light h-10 px-4"
        >
          <option value="">-- اختر --</option>
          <option
            v-for="option in getLocationOptions(field.id, values)"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </Field>
        <!-- Category Select -->
        <Field
          v-else-if="field.type === 'category-select'"
          :name="field.id"
          v-slot="{ field: veeField, handleChange }"
        >
          <v-select
            v-model="categoriesStore.selectedCategories"
            @update:modelValue="(val) => handleCategoryChange(val, handleChange)"
            :options="categoryOptions"
            label="name"
            multiple
            taggable
            push-tags
          />
        </Field>

        <v-icon
          v-if="field.icon && field.type !== 'password'"
          :name="field.icon"
          class="absolute top-14 lg:top-12 left-3  -translate-y-1/2 cursor-pointer text-text"
        />
        <ErrorMessage :name="field.id" class="text-error text-sm mt-1" />
      </div>
      <!-- Accept Terms -->
      <TermsCheckbox name="acceptTerms" id="terms" />
      <!-- button -->
      <BaseButton type="submit" :disabled="!meta.valid || authStore.isLoading" />
    </Form>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { registrationFields } from '@/data/auth/authData.js'
import { registerSchema } from '@/data/auth/schema/registerSchema.js'
import { useLocations } from '@/composables/auth/useLocations.js'
import { useAuthStore } from '@/stores/auth/useAuthStore'
import { computed } from 'vue'
import BasePasswordField from '../common/auth/BasePasswordField.vue'
import TermsCheckbox from '../common/auth/TermsCheckbox.vue'
import BaseButton from '../common/auth/BaseButton.vue'
import { useCategoriesStore } from '@/stores/home/useCategoriesStore.js'
import { onMounted } from 'vue'

const { getLocationOptions } = useLocations()
const authStore = useAuthStore()
const validationSchema = computed(() => registerSchema(props.role))
const categoriesStore = useCategoriesStore()

const handleCategoryChange = (value, handleChange) => {
  const categories = value || []

  handleChange(categories)

  categoriesStore.setCategories(categories)
}

const formClasses = computed(() => (props.role === 'merchant' ? 'pt-4 gap-y-3' : 'mt-4'))

const props = defineProps({
  role: {
    required: true,
  },
})

onMounted(() => {
  categoriesStore.fetchCategories()
})
const fields = computed(() => {
  return registrationFields.filter((field) => field.role === 'all' || field.role === props.role)
})

const categoryOptions = computed(
  () =>
    categoriesStore.categoriesList?.map((cat) => ({
      id: cat.id,
      name: cat.name,
    })) || [],
)

async function submitRegister(values) {
  await authStore.handleRegister(values, props.role)
}
</script>

<style>
.v-select .vs__dropdown-toggle {
  height: auto !important;
  min-height: 2.5rem;
  padding-bottom: 5px;
}

.v-select .vs__selected {
  background-color: #3b82f6 !important;
  color: white !important;
  border-radius: 0.25rem;
  width: 100%;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
}

.v-select .vs__deselect {
  fill: white !important;
}

.vs__open-indicator {
  display: none !important;
}

.v-select .vs__dropdown-toggle:focus-within {
  border-color: #93c5fd;
  outline: none;
}
</style>
